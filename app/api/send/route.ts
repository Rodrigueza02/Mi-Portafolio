import { Resend } from 'resend'

export async function POST(req: Request) {
  console.log("🔥 API SEND EJECUTADA")

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message, comment } = await req.json()

    console.log("📩 Datos recibidos:", { name, email, message, comment })
    console.log("🔑 API KEY:", process.env.RESEND_API_KEY)

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

    console.log("✅ Respuesta de Resend:", response)

    return Response.json({ success: true })

  } catch (error) {
    console.error("❌ ERROR REAL:", error)

    return Response.json(
      { error: 'Error enviando correo' },
      { status: 500 }
    )
  }
}