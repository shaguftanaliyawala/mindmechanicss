"use server"

import { kv } from "@vercel/kv"

export async function submitContact(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Validate the data
    if (!name || !email || !subject || !message) {
      return { success: false }
    }

    // Create a submission object
    const submission = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    }

    // Store in Vercel KV
    // Using timestamp as part of the key to ensure uniqueness
    await kv.set(`contact:${Date.now()}`, submission)

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false }
  }
}

