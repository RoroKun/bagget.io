import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import { emailRequestSchema } from "@/lib/schema"

type ResponseData = { message: string }

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

async function verifyCaptcha(token: string) {
  const params = new URLSearchParams({ secret: process.env.CAPTCHA_SECRET_KEY ?? "", response: token })
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", { method: "POST", body: params })
  const data: { success: boolean; "error-codes"?: string[] } = await res.json()
  return data
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ message: "Method not allowed" })
  }

  const parsed = emailRequestSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid request" })
  }
  const { name, email, phone, subject, message, captchaToken } = parsed.data

  try {
    const captcha = await verifyCaptcha(captchaToken)
    if (!captcha.success) {
      return res.status(400).json({ message: `reCAPTCHA verification failed: ${captcha["error-codes"]?.[0] ?? "try again"}` })
    }
  } catch (error) {
    return res.status(502).json({ message: `Could not verify reCAPTCHA: ${error}` })
  }

  const html = `
    <div>
      <p><b>SUBJECT:</b> ${escapeHtml(subject)}</p>
      <p><b>NAME:</b> ${escapeHtml(name)}</p>
      <p><b>FROM:</b> ${escapeHtml(email)}</p>
      ${phone ? `<p><b>PHONE NUMBER:</b> ${escapeHtml(phone)}</p>` : ""}
      <p><b>MESSAGE:</b> ${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rohan@bagget.io, alan@bagget.io",
      replyTo: email,
      subject,
      text: `${message}\n\n— ${name} <${email}>${phone ? ` · ${phone}` : ""}`,
      html,
    })
    return res.status(200).json({ message: "Email sent successfully!" })
  } catch (error) {
    return res.status(500).json({ message: `Email failed: ${(error as Error).message}` })
  }
}
