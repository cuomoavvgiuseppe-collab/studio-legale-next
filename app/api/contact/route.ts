import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  nome: string
  email: string
  telefono?: string
  messaggio: string
  materia?: string
}

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  if (typeof b.nome !== 'string' || b.nome.trim().length < 2) return null
  if (typeof b.email !== 'string' || !b.email.includes('@')) return null
  if (typeof b.messaggio !== 'string' || b.messaggio.trim().length < 10) return null
  return {
    nome: b.nome.trim(),
    email: b.email.trim().toLowerCase(),
    telefono: typeof b.telefono === 'string' ? b.telefono.trim() : undefined,
    messaggio: b.messaggio.trim(),
    materia: typeof b.materia === 'string' ? b.materia.trim() : undefined,
  }
}

export async function POST(req: NextRequest) {
  // Rate limit grezzo: blocca body > 10KB
  const contentLength = req.headers.get('content-length')
  if (contentLength && parseInt(contentLength) > 10_000) {
    return NextResponse.json({ error: 'Payload troppo grande' }, { status: 413 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Formato non valido' }, { status: 400 })
  }

  const data = validatePayload(body)
  if (!data) {
    return NextResponse.json({ error: 'Dati mancanti o non validi' }, { status: 422 })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpHost = process.env.SMTP_HOST ?? 'smtps.aruba.it'
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465')
  const recipientEmail = process.env.CONTACT_EMAIL ?? 'info@studiolegalecuomogiuseppe.it'

  if (!smtpUser || !smtpPass) {
    console.error('[contact] SMTP_USER o SMTP_PASS non configurati')
    return NextResponse.json({ error: 'Servizio non disponibile' }, { status: 503 })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const subject = data.materia
    ? `[Studio Legale] Richiesta: ${data.materia} — ${data.nome}`
    : `[Studio Legale] Nuovo messaggio da ${data.nome}`

  const textBody = [
    `Nome: ${data.nome}`,
    `Email: ${data.email}`,
    data.telefono ? `Telefono: ${data.telefono}` : '',
    data.materia ? `Materia: ${data.materia}` : '',
    '',
    'Messaggio:',
    data.messaggio,
    '',
    '---',
    `Inviato da: ${req.headers.get('origin') ?? 'studiolegalecuomogiuseppe.it'}`,
  ].filter(Boolean).join('\n')

  try {
    await transporter.sendMail({
      from: `"Studio Legale Cuomo — Sito" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: `"${data.nome}" <${data.email}>`,
      subject,
      text: textBody,
    })

    // Email di conferma al mittente
    await transporter.sendMail({
      from: `"Studio Legale Cuomo" <${smtpUser}>`,
      to: data.email,
      subject: 'Abbiamo ricevuto il tuo messaggio — Studio Legale Cuomo',
      text: [
        `Gentile ${data.nome},`,
        '',
        'abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore lavorative.',
        '',
        'Studio Legale Cuomo',
        'Via G. Matteotti, 14 — 84014 Nocera Inferiore (SA)',
        'Tel: +39 081 921 1148',
        'info@studiolegalecuomogiuseppe.it',
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Errore invio email:', err)
    return NextResponse.json({ error: 'Errore invio. Riprova o contatta direttamente lo Studio.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Metodo non consentito' }, { status: 405 })
}
