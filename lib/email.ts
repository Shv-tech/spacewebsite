import { Resend } from "resend"
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function sendEmail(to: string, subject: string, html: string) {
  if (!resend) return
  await resend.emails.send({
    from: "Utopian Space <no-reply@utopianspace.org>",
    to,
    subject,
    html
  })
}
