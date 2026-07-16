'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  inquiryType: z.string().min(1),
  message: z.string().min(10),
})

type FieldErrors = {
  name?: string[]
  email?: string[]
  phone?: string[]
  inquiryType?: string[]
  message?: string[]
}

export type ContactState = {
  ok: boolean
  errors?: { formErrors: string[]; fieldErrors: FieldErrors } | null
}

export async function submitContact(
  _: unknown,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    inquiryType: formData.get('inquiryType'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten() }
  }

  const { name, email, phone, inquiryType, message } = parsed.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'NUBIZ Website <contact@nubiz.ae>',
      to: ['info@nubiz.ae'],
      replyTo: email,
      subject: `New inquiry — ${inquiryType} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#EE005D">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px;font-weight:bold;
                width:140px;color:#374151">Name</td>
              <td style="padding:8px;color:#111">${name}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:8px;font-weight:bold;
                color:#374151">Email</td>
              <td style="padding:8px;color:#111">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px;font-weight:bold;
                color:#374151">Phone</td>
              <td style="padding:8px;color:#111">${phone}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:8px;font-weight:bold;
                color:#374151">Inquiry Type</td>
              <td style="padding:8px;color:#111">
                ${inquiryType}
              </td>
            </tr>
          </table>
          <div style="margin-top:16px;padding:16px;
            background:#f9f9f9;border-radius:8px">
            <p style="font-weight:bold;color:#374151;
              margin:0 0 8px">Message</p>
            <p style="color:#111;margin:0;
              white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;
            color:#9ca3af">
            Sent from nubiz.ae contact form
          </p>
        </div>
      `,
    })
    return { ok: true }
  } catch (error) {
    console.error('Resend error:', error)
    return {
      ok: false,
      errors: {
        fieldErrors: {},
        formErrors: ['Failed to send. Please WhatsApp us.'],
      },
    }
  }
}
