import type { Metadata } from 'next'
import { contactInfo } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Note legali — Studio Legale Cuomo',
  description: 'Note legali e disclaimer del sito Studio Legale Avv. Giuseppe Cuomo — Nocera Inferiore (SA).',
}

export default function NoteLegaliPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px 48px' }}>
          <p className="eyebrow" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Documenti legali
          </p>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: 'var(--ink)', textAlign: 'left' }}>
            Note legali
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 28px' }}>
        {[
          {
            titolo: 'Titolare del sito',
            testo: `Avv. Giuseppe Cuomo\n${contactInfo.address}, ${contactInfo.zipCode} ${contactInfo.city} (${contactInfo.province})\nP.IVA: ${contactInfo.vatNumber}\n${contactInfo.ordine}\nEmail: ${contactInfo.emailStudio}\nPEC: ${contactInfo.pec}`,
          },
          {
            titolo: 'Natura delle informazioni',
            testo: 'Le informazioni contenute in questo sito hanno carattere generale e non costituiscono parere legale né consulenza professionale. Per questioni giuridiche specifiche è necessario rivolgersi a un avvocato. L\'Avvocato Giuseppe Cuomo non è responsabile per eventuali errori od omissioni nelle informazioni pubblicate, né per eventuali danni derivanti dall\'utilizzo delle stesse.',
          },
          {
            titolo: 'Pubblicità',
            testo: 'Ai sensi del Codice Deontologico Forense (artt. 35 ss.) e del D.Lgs. 145/2007, le informazioni contenute nel presente sito costituiscono comunicazione professionale conforme alle norme deontologiche dell\'Ordine degli Avvocati di Nocera Inferiore.',
          },
          {
            titolo: 'Proprietà intellettuale',
            testo: 'I contenuti del sito (testi, grafica, loghi, immagini) sono di proprietà dello Studio Legale Cuomo o concessi in licenza. È vietata la riproduzione, anche parziale, senza autorizzazione scritta del titolare.',
          },
          {
            titolo: 'Legge applicabile e foro competente',
            testo: `Le presenti note legali sono regolate dalla legge italiana. Per qualsiasi controversia relativa al presente sito è competente il Tribunale di Nocera Inferiore (SA).`,
          },
        ].map((sezione) => (
          <div key={sezione.titolo} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px', textAlign: 'left' }}>
              {sezione.titolo}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
              {sezione.testo}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
