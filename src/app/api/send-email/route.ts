// // import { Resend } from "resend"

// // const resend = new Resend(process.env.RESEND_API_KEY)

// // export async function POST(request: Request) {
// //   try {
// //     const body = await request.json()

// //     const {
// //       name,
// //       email,
// //       phone,
// //       heading,
// //       message,
// //     } = body

// //     if (!name || !email || !heading || !message) {
// //       return Response.json(
// //         { error: "Missing required fields" },
// //         { status: 400 }
// //       )
// //     }

// //     const whatsappNumber = "923002265416"

// //     const whatsappMessage = encodeURIComponent(
// //       `Hello Mind Mechanics, I just submitted a message through your website and would like to speak with you directly.`
// //     )

// //     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

// //     const result = await resend.emails.send({
// //       from: "Mind Mechanics <noreply@mindmechanicss.com>",
// //       to: email,
// //       cc: "mindmechanics09@gmail.com",
// //       subject: "Thank You for Contacting Mind Mechanics",

// //       html: `
// //         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">

// //           <h2 style="color: #1f2937;">
// //             Thank You for Contacting Mind Mechanics
// //           </h2>

// //           <p>Dear ${name},</p>

// //           <p>
// //             Thank you for contacting <strong>Mind Mechanics</strong>.
// //           </p>

// //           <p>
// //             We have received your message and will get back to you shortly.
// //           </p>

// //           <p>
// //             If you would like to contact us directly, you can also message us
// //             on WhatsApp.
// //           </p>

// //           <p style="margin: 30px 0;">
// //             <a
// //               href="${whatsappLink}"
// //               style="
// //                 display: inline-block;
// //                 background-color: #25D366;
// //                 color: white;
// //                 text-decoration: none;
// //                 padding: 12px 22px;
// //                 border-radius: 6px;
// //                 font-weight: bold;
// //               "
// //             >
// //               Message Us on WhatsApp
// //             </a>
// //           </p>

// //           <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

// //           <p style="font-size: 13px; color: #666;">
// //             Regards,<br />
// //             <strong>Mind Mechanics</strong><br />
// //             Psychotherapy & Counselling
// //           </p>

// //         </div>
// //       `,
// //     })

// //     if (result.error) {
// //       console.error("Resend error:", result.error)

// //       return Response.json(
// //         { error: "Email could not be sent" },
// //         { status: 500 }
// //       )
// //     }

// //     return Response.json({
// //       success: true,
// //       message: "Email sent successfully",
// //     })
// //   } catch (error) {
// //     console.error("Send email error:", error)

// //     return Response.json(
// //       { error: "Something went wrong while sending the email" },
// //       { status: 500 }
// //     )
// //   }
// // }

// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// function escapeHtml(value: string = "") {
//   return value
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;")
// }

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, heading, message } = await request.json()

//     if (!name || !email || !heading || !message) {
//       return Response.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       )
//     }

//     const safeName = escapeHtml(name)
//     const safeEmail = escapeHtml(email)
//     const safePhone = escapeHtml(phone || "Not provided")
//     const safeHeading = escapeHtml(heading)
//     const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

//     const whatsappLink = "https://wa.me/923002265416"

//     const { data, error } = await resend.emails.send({
//       from: "Mind Mechanics <noreply@mindmechanicss.com>",
//       to: email,
//       cc: "mindmechanics09@gmail.com",
//       replyTo: email,
//       subject: "Thank You for Contacting Mind Mechanics",

//       html: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Mind Mechanics</title>
// </head>

// <body style="
//   margin:0;
//   padding:0;
//   background:#f4f5f7;
//   font-family:Arial, Helvetica, sans-serif;
//   color:#333333;
// ">

//   <table width="100%" cellpadding="0" cellspacing="0" border="0">
//     <tr>
//       <td align="center" style="padding:35px 15px;">

//         <!-- Main Container -->
//         <table
//           width="600"
//           cellpadding="0"
//           cellspacing="0"
//           border="0"
//           style="
//             max-width:600px;
//             width:100%;
//             background:#ffffff;
//             border-radius:12px;
//             overflow:hidden;
//             box-shadow:0 3px 15px rgba(0,0,0,0.08);
//           "
//         >

//           <!-- Header -->
//           <tr>
//             <td
//               align="center"
//               style="
//                 background:#14213d;
//                 padding:32px 25px;
//               "
//             >

//               <div style="
//                 font-size:25px;
//                 font-weight:bold;
//                 letter-spacing:2px;
//                 color:#ffffff;
//               ">
//                 MIND MECHANICS
//               </div>

//               <div style="
//                 margin-top:8px;
//                 font-size:12px;
//                 letter-spacing:2px;
//                 color:#d4af63;
//                 text-transform:uppercase;
//               ">
//                 Awareness • Healing • Balance
//               </div>

//             </td>
//           </tr>

//           <!-- Gold Accent -->
//           <tr>
//             <td style="
//               height:4px;
//               background:#d4af63;
//               font-size:0;
//               line-height:0;
//             ">
//               &nbsp;
//             </td>
//           </tr>

//           <!-- Content -->
//           <tr>
//             <td style="padding:38px 42px 30px 42px;">

//               <div style="
//                 font-size:25px;
//                 font-weight:bold;
//                 color:#14213d;
//                 margin-bottom:20px;
//               ">
//                 Thank You for Reaching Out
//               </div>

//               <p style="
//                 margin:0 0 18px 0;
//                 font-size:16px;
//                 line-height:1.7;
//               ">
//                 Dear <strong>${safeName}</strong>,
//               </p>

//               <p style="
//                 margin:0 0 18px 0;
//                 font-size:15px;
//                 line-height:1.8;
//                 color:#555555;
//               ">
//                 Thank you for contacting <strong style="color:#14213d;">
//                 Mind Mechanics</strong>.
//                 We have received your message and will get back to you
//                 shortly.
//               </p>

//               <!-- Message Summary -->
//               <table
//                 width="100%"
//                 cellpadding="0"
//                 cellspacing="0"
//                 border="0"
//                 style="
//                   margin:25px 0;
//                   background:#f8f8f8;
//                   border-left:4px solid #d4af63;
//                   border-radius:5px;
//                 "
//               >
//                 <tr>
//                   <td style="padding:18px 20px;">

//                     <div style="
//                       font-size:12px;
//                       color:#777777;
//                       text-transform:uppercase;
//                       letter-spacing:1px;
//                       margin-bottom:7px;
//                     ">
//                       Your enquiry
//                     </div>

//                     <div style="
//                       font-size:16px;
//                       font-weight:bold;
//                       color:#14213d;
//                       margin-bottom:12px;
//                     ">
//                       ${safeHeading}
//                     </div>

//                     <div style="
//                       font-size:14px;
//                       line-height:1.7;
//                       color:#555555;
//                     ">
//                       ${safeMessage}
//                     </div>

//                   </td>
//                 </tr>
//               </table>

//               <!-- WhatsApp Section -->
//               <table
//                 width="100%"
//                 cellpadding="0"
//                 cellspacing="0"
//                 border="0"
//                 style="
//                   margin:28px 0;
//                   background:#f2f7f5;
//                   border-radius:8px;
//                 "
//               >
//                 <tr>
//                   <td align="center" style="padding:25px 20px;">

//                     <div style="
//                       font-size:16px;
//                       font-weight:bold;
//                       color:#14213d;
//                       margin-bottom:8px;
//                     ">
//                       Need to speak with us directly?
//                     </div>

//                     <div style="
//                       font-size:14px;
//                       color:#666666;
//                       line-height:1.6;
//                       margin-bottom:18px;
//                     ">
//                       You can also reach Mind Mechanics directly
//                       through WhatsApp.
//                     </div>

//                     <a
//                       href="${whatsappLink}"
//                       style="
//                         display:inline-block;
//                         background:#25D366;
//                         color:#ffffff;
//                         text-decoration:none;
//                         padding:13px 24px;
//                         border-radius:6px;
//                         font-size:14px;
//                         font-weight:bold;
//                       "
//                     >
//                       Message Us on WhatsApp
//                     </a>

//                   </td>
//                 </tr>
//               </table>

//               <p style="
//                 margin:25px 0 0 0;
//                 font-size:15px;
//                 line-height:1.7;
//                 color:#555555;
//               ">
//                 We appreciate you reaching out and look forward to
//                 connecting with you.
//               </p>

//               <p style="
//                 margin:25px 0 0 0;
//                 font-size:15px;
//                 line-height:1.7;
//               ">
//                 Warm regards,<br />

//                 <strong style="color:#14213d;">
//                   Mind Mechanics
//                 </strong><br />

//                 <span style="color:#777777;">
//                   Psychotherapy &amp; Counselling
//                 </span>
//               </p>

//             </td>
//           </tr>

//           <!-- Contact Footer -->
//           <tr>
//             <td
//               align="center"
//               style="
//                 background:#14213d;
//                 padding:24px 20px;
//               "
//             >

//               <div style="
//                 font-size:13px;
//                 color:#ffffff;
//                 line-height:1.8;
//               ">
//                 <strong>Mind Mechanics</strong>
//               </div>

//               <div style="
//                 font-size:12px;
//                 color:#c9c9c9;
//                 line-height:1.8;
//               ">
//                 Shop No. 5, Plot No. 5-C, Seher Comm Lane 3,
//                 Phase 7, DHA, Karachi
//               </div>

//               <div style="
//                 font-size:12px;
//                 color:#d4af63;
//                 margin-top:7px;
//               ">
//                 +92 300 2265416
//               </div>

//               <div style="
//                 font-size:11px;
//                 color:#999999;
//                 margin-top:15px;
//               ">
//                 This is an automated confirmation email.
//               </div>

//             </td>
//           </tr>

//         </table>

//       </td>
//     </tr>
//   </table>

// </body>
// </html>
//       `,
//     })

//     if (error) {
//       console.error("Resend error:", error)

//       return Response.json(
//         { error: "Email could not be sent" },
//         { status: 500 }
//       )
//     }

//     return Response.json({
//       success: true,
//       id: data?.id,
//     })
//   } catch (error) {
//     console.error("Send email error:", error)

//     return Response.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     )
//   }
// }

import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    // Get the API key only when the API is actually called.
    // This prevents Resend from being initialized during the Vercel build.
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing")

      return Response.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await request.json()

    const {
      name,
      email,
      phone,
      heading,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !heading || !message) {
      return Response.json(
        {
          success: false,
          error: "Name, email, subject and message are required.",
        },
        { status: 400 }
      )
    }

    const whatsappNumber = "923002265416"

    const whatsappMessage = encodeURIComponent(
      `Hello Mind Mechanics, I have just submitted a contact form. My name is ${name}.`
    )

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    const result = await resend.emails.send({
      from: "Mind Mechanics <noreply@mindmechanicss.com>",

      // Email goes to the person who contacted you
      to: [email],

      // You also receive a copy
      cc: ["mindmechanics09@gmail.com"],

      subject: "Thank You for Contacting Mind Mechanics",

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Thank You for Contacting Mind Mechanics</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f4f6f8;
              font-family: Arial, Helvetica, sans-serif;
              color: #333333;
            "
          >

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="background-color: #f4f6f8; padding: 35px 15px;"
            >
              <tr>
                <td align="center">

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                      max-width: 620px;
                      background-color: #ffffff;
                      border-radius: 12px;
                      overflow: hidden;
                      box-shadow: 0 3px 15px rgba(0,0,0,0.08);
                    "
                  >

                    <!-- Header -->
                    <tr>
                      <td
                        style="
                          background-color: #172554;
                          padding: 30px 35px;
                          text-align: center;
                        "
                      >
                        <h1
                          style="
                            margin: 0;
                            color: #ffffff;
                            font-size: 26px;
                            font-weight: 600;
                            letter-spacing: 0.3px;
                          "
                        >
                          Mind Mechanics
                        </h1>

                        <p
                          style="
                            margin: 8px 0 0;
                            color: #dbeafe;
                            font-size: 14px;
                          "
                        >
                          Awareness • Healing • Balance
                        </p>
                      </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                      <td style="padding: 40px 40px 30px;">

                        <h2
                          style="
                            margin: 0 0 25px;
                            color: #172554;
                            font-size: 24px;
                            font-weight: 600;
                          "
                        >
                          Thank You for Reaching Out
                        </h2>

                        <p
                          style="
                            margin: 0 0 18px;
                            font-size: 16px;
                            line-height: 1.7;
                          "
                        >
                          Dear ${escapeHtml(name)},
                        </p>

                        <p
                          style="
                            margin: 0 0 18px;
                            font-size: 16px;
                            line-height: 1.7;
                            color: #4b5563;
                          "
                        >
                          Thank you for contacting
                          <strong style="color: #172554;">
                            Mind Mechanics
                          </strong>.
                        </p>

                        <p
                          style="
                            margin: 0 0 25px;
                            font-size: 16px;
                            line-height: 1.7;
                            color: #4b5563;
                          "
                        >
                          We have received your message and will get back to
                          you shortly.
                        </p>

                        <!-- WhatsApp Box -->
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="
                            background-color: #f0fdf4;
                            border-radius: 10px;
                            margin: 25px 0;
                          "
                        >
                          <tr>
                            <td
                              style="
                                padding: 22px;
                                text-align: center;
                              "
                            >

                              <p
                                style="
                                  margin: 0 0 15px;
                                  color: #374151;
                                  font-size: 15px;
                                  line-height: 1.6;
                                "
                              >
                                If you would prefer to speak with us
                                directly, you can message us on WhatsApp.
                              </p>

                              <a
                                href="${whatsappLink}"
                                target="_blank"
                                style="
                                  display: inline-block;
                                  background-color: #16a34a;
                                  color: #ffffff;
                                  text-decoration: none;
                                  padding: 13px 24px;
                                  border-radius: 7px;
                                  font-size: 15px;
                                  font-weight: 600;
                                "
                              >
                                Message Us on WhatsApp
                              </a>

                            </td>
                          </tr>
                        </table>

                        <p
                          style="
                            margin: 25px 0 0;
                            font-size: 15px;
                            line-height: 1.7;
                            color: #6b7280;
                          "
                        >
                          We appreciate you reaching out and look forward
                          to connecting with you.
                        </p>

                      </td>
                    </tr>

                    <!-- Divider -->
                    <tr>
                      <td style="padding: 0 40px;">
                        <div
                          style="
                            height: 1px;
                            background-color: #e5e7eb;
                          "
                        ></div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td
                        style="
                          padding: 25px 40px 30px;
                          text-align: center;
                        "
                      >

                        <p
                          style="
                            margin: 0 0 6px;
                            font-size: 15px;
                            color: #374151;
                          "
                        >
                          Warm regards,
                        </p>

                        <p
                          style="
                            margin: 0;
                            font-size: 16px;
                            font-weight: 700;
                            color: #172554;
                          "
                        >
                          Mind Mechanics
                        </p>

                        <p
                          style="
                            margin: 5px 0 0;
                            font-size: 14px;
                            color: #6b7280;
                          "
                        >
                          Psychotherapy & Counselling
                        </p>

                        <p
                          style="
                            margin: 15px 0 0;
                            font-size: 13px;
                            color: #9ca3af;
                          "
                        >
                          +92 300 2265416
                        </p>

                      </td>
                    </tr>

                  </table>

                  <!-- Bottom note -->
                  <p
                    style="
                      margin: 20px 0 0;
                      font-size: 12px;
                      color: #9ca3af;
                      text-align: center;
                    "
                  >
                    This is an automated confirmation email from Mind Mechanics.
                  </p>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    })

    console.log("Resend email result:", result)

    if (result.error) {
      console.error("Resend error:", result.error)

      return Response.json(
        {
          success: false,
          error: result.error.message,
        },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: "Confirmation email sent successfully.",
    })
  } catch (error) {
    console.error("Send email error:", error)

    return Response.json(
      {
        success: false,
        error: "Failed to send confirmation email.",
      },
      { status: 500 }
    )
  }
}

/**
 * Small helper to safely display user-submitted
 * information inside the HTML email.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}