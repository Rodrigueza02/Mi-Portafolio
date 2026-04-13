import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  console.log("🔥 API SEND EJECUTADA")

  try {
    const { comment } = await req.json()

    console.log("📩 Comentario recibido:", comment)
    console.log("🔑 API KEY:", process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'julirodriguezandrade@gmail.com',
      subject: 'Nuevo comentario en tu portafolio',
      html: `
        <h2>Nuevo comentario</h2>
        <p>${comment}</p>
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