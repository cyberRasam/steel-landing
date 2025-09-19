import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function corsHeaders(origin) {
  const headers = { "Content-Type": "application/json" };
  if (!origin) return headers;
  if (ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
  }
  return headers;
}

// Optional preflight handling
export async function OPTIONS(req) {
  const origin = req.headers.get("origin") || "*";
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req) {
  const origin = req.headers.get("origin") || "";
  try {
    const body = await req.json();
    const { name, email, message, phone } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "لطفاً نام، ایمیل و پیام را وارد کنید." },
        { status: 422, headers: corsHeaders(origin) }
      );
    }
    if (typeof message !== "string" || message.length < 5) {
      return NextResponse.json(
        { success: false, error: "پیام بسیار کوتاه است." },
        { status: 422, headers: corsHeaders(origin) }
      );
    }

    // Create SMTP transporter
    const port = process.env.SMTP_PORT
      ? parseInt(process.env.SMTP_PORT, 10)
      : 587;
    const secure = port === 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    const subject = `پیام فروش از وبسایت — ${name}`;
    const text = `نام: ${name}\nایمیل: ${email}\nتلفن: ${
      phone || "-"
    }\n\nپیام:\n${message}`;
    const html = `
      <div style="font-family: Tahoma, sans-serif; direction: rtl; color:#111">
        <h2>پیام جدید از وبسایت</h2>
        <p><strong>نام:</strong> ${name}</p>
        <p><strong>ایمیل:</strong> ${email}</p>
        <p><strong>تلفن:</strong> ${phone || "-"}</p>
        <hr/>
        <p><strong>پیام:</strong></p>
        <div style="white-space:pre-wrap;">${message}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json(
      { success: true, message: "پیام ارسال شد. متشکریم." },
      { headers: corsHeaders(origin) }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "خطا در ارسال پیام. بعداً دوباره تلاش کنید." },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
