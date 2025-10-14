import { initializeApp, FirebaseApp } from "firebase/app"
import { getDatabase, Database } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyCLD1ffXDkcYCZhBfurxNs1dQVUJNc3T9g",
  authDomain: "mindmechanicss.firebaseapp.com",
  databaseURL: "https://mindmechanicss-default-rtdb.firebaseio.com",
  projectId: "mindmechanicss",
  storageBucket: "mindmechanicss.firebasestorage.app",
  messagingSenderId: "963734802025",
  appId: "1:963734802025:web:938105e89edcf2faad5cf8"
};

const app: FirebaseApp = initializeApp(firebaseConfig)
export const db: Database = getDatabase(app)