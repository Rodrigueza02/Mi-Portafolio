import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  console.log("🔥 API SEND ejecutada")

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message, comment } = await req.json()

    if (process.env.NODE_ENV !== "production") {
      console.log("📩 Datos recibidos:", { name, email, message, comment })
    }

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'julirodriguezandrade@gmail.com',
      subject: 'Nuevo comentario en tu portafolio',
        html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>

        ${name ? `<p><strong>Nombre:</strong> ${name}</p>` : ""}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ""}
        ${comment ? `<p><strong>Comentario:</strong> ${comment}</p>` : ""}
        `
    })

  console.log("✅ Email enviado")

    return Response.json({ success: true })

  } catch (error) {
    console.error("❌ ERROR REAL:", error)

    return Response.json(
      { error: 'Error enviando correo' },
      { status: 500 }
    )
  }
}