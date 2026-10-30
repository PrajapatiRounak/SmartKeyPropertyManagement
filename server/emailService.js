import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

<<<<<<< HEAD
// eslint-disable-next-line no-undef
const resendApiKey = process.env.RESEND_API_KEY ;
const resend = new Resend(resendApiKey);

// eslint-disable-next-line no-undef
const fromEmail = process.env.RESEND_FROM_EMAIL ;
// eslint-disable-next-line no-undef
const toEmail = process.env.RESEND_TO_EMAIL ;
=======
const resendApiKey = process.env.RESEND_API_KEY || "re_NjuYP6JQ_35t4aDV8BPpDihMyJzDAbN5t";
const resend = new Resend(resendApiKey);

const fromEmail = process.env.RESEND_FROM_EMAIL || "SmartKey <onboarding@resend.dev>";
const toEmail = process.env.RESEND_TO_EMAIL || "theotask@gmail.com";
>>>>>>> 9043e25 (Pricing & contact page fixing (theo))

export async function sendNotificationEmail(data) {
  const { name, email, phone, message, plan, services, type } = data;

  const isQuote = type === "quote" || Boolean(plan || services);
  const subject = isQuote
    ? `New Quote Request from ${name || "a Landlord"}`
    : `New Contact Inquiry from ${name || "a Visitor"}`;

  const servicesHtml = Array.isArray(services) && services.length > 0
    ? `<ul style="margin: 6px 0 0; padding-left: 18px; color: #1e293b;">
        ${services.map((s) => `<li style="margin-bottom: 4px;">${s}</li>`).join("")}
       </ul>`
    : `<span style="color: #64748b;">None specified</span>`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: #162238; color: #ffffff; padding: 24px 32px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.025em; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #93c5fd; }
          .content { padding: 32px; }
          .badge { display: inline-block; padding: 4px 12px; font-size: 12px; font-weight: 600; border-radius: 9999px; background: ${isQuote ? "#e0f2fe" : "#fef3c7"}; color: ${isQuote ? "#0369a1" : "#92400e"}; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          td.label { width: 130px; font-weight: 600; color: #64748b; vertical-align: top; }
          td.value { color: #0f172a; }
          .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 12px; font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap; }
          .footer { padding: 16px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SmartKey Property Management</h1>
            <p>${isQuote ? "New Tailored Quote Request Submission" : "New Contact Form Inquiry"}</p>
          </div>
          <div class="content">
            <span class="badge">${isQuote ? "Quote Request" : "General Inquiry"}</span>
            <table>
              <tr>
                <td class="label">Full Name</td>
                <td class="value"><strong>${name || "Not provided"}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value">${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : "Not provided"}</td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : "Not provided"}</td>
              </tr>
              ${plan ? `
              <tr>
                <td class="label">Selected Plan</td>
                <td class="value"><strong>${plan}</strong></td>
              </tr>` : ""}
              ${isQuote ? `
              <tr>
                <td class="label">Services</td>
                <td class="value">${servicesHtml}</td>
              </tr>` : ""}
            </table>

            ${message ? `
              <div style="font-size: 13px; font-weight: 600; color: #64748b; margin-top: 16px;">Message:</div>
              <div class="message-box">${message}</div>
            ` : ""}
          </div>
          <div class="footer">
            Sent via Resend Email Service for SmartKey Property Management
          </div>
        </div>
      </body>
    </html>
  `;

  const payload = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    html: html,
  };

  if (email && email.includes("@")) {
    payload.reply_to = email;
  }

  const result = await resend.emails.send(payload);

  if (result.error) {
    throw new Error(result.error.message || "Failed to send email via Resend");
  }

  return result;
}
