import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { ResultSetHeader } from 'mysql2';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("\n📩 New Contact Submission Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );

    console.log("✅ Contact Saved Successfully! Insert ID:", result.insertId);

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    // ✅ Properly handle 'unknown' error type
    if (error instanceof Error) {
      console.error("❌ Database Error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      console.error("❌ Unknown Error:", error);
      return NextResponse.json({ success: false, error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
