import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Store API Key in .env file

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const response = await resend.emails.send({
      from: "alifdanish74@gmail.com", // Change this
      to: "alifdanish74@gmail.com", // Your email address
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
