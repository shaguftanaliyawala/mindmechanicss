from flask import Flask, request, jsonify
import csv
from datetime import datetime
import os
from flask_cors import CORS
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("api.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
# Allow requests from your Next.js app domain
CORS(app, resources={r"/api/*": {"origins": [os.getenv("FRONTEND_URL", "http://localhost:3000")]}})

# Define the path for the CSV file
CSV_FILE = 'contact_submissions.csv'

# Create the CSV file with headers if it doesn't exist
def initialize_csv():
    if not os.path.exists(CSV_FILE):
        logger.info(f"Creating new CSV file: {CSV_FILE}")
        with open(CSV_FILE, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['Timestamp', 'Name', 'Email', 'Subject', 'Message'])
    else:
        logger.info(f"CSV file already exists: {CSV_FILE}")

# Initialize the CSV file when the app starts
initialize_csv()

@app.route('/api/contact', methods=['POST'])
def store_contact():
    logger.info("Received contact form submission")
    try:
        # Get data from request
        data = request.json
        logger.info(f"Received data: {data}")
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if field not in data or not data[field]:
                logger.warning(f"Missing required field: {field}")
                return jsonify({
                    'success': False,
                    'message': f'Missing required field: {field}'
                }), 400
        
        # Get current timestamp
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Append data to CSV file
        with open(CSV_FILE, 'a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow([
                timestamp,
                data['name'],
                data['email'],
                data['subject'],
                data['message']
            ])
        
        logger.info("Successfully saved contact submission")
        # Return success response
        return jsonify({
            'success': True,
            'message': 'Response recorded successfully'
        }), 201
    
    except Exception as e:
        logger.error(f"Error processing contact submission: {str(e)}", exc_info=True)
        
        # Return error response
        return jsonify({
            'success': False,
            'message': 'An error occurred while processing your request'
        }), 500

# Simple health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'ok',
        'message': 'API is running'
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    logger.info(f"Starting API server on port {port}")
    app.run(host='0.0.0.0', port=port, debug=False)