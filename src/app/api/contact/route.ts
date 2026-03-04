import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: "Все поля обязательны" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Форма сайта" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "Новое сообщение с сайта",
    html: `
      <h2>Новое сообщение</h2>
      <p><b>Имя:</b> ${name}</p>
      <p><b>Телефон:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Сообщение:</b><br/>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
