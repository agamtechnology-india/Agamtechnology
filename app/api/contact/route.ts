import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Escape user input before inserting into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    const { data, error } = await resend.emails.send({
      from: "Agam Technology <info@agamtechnology.com>",
      to: ["info@agamtechnology.com"],
      replyTo: email,
      subject: `New Contact Message from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p>
          <strong>Name:</strong> ${safeName}
        </p>

        <p>
          <strong>Email:</strong> ${safeEmail}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${safeMessage}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}