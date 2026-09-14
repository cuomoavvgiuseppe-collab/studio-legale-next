import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Consulenza Preventiva — Studio Legale Cuomo',
  description:
    'Consulenza preventiva scritta: parere legale scritto prima di agire, per valutare rischi, costi e strategie. Avv. Giuseppe Cuomo, Nocera Inferiore.',
}

const motivi = [
  {
    titolo: 'Valuta i rischi prima di agire',
    descrizione:
      'Prima di intraprendere una causa o firmare un contratto, conoscere il quadro normativo e la giurisprudenza consolidata permette di prendere decisioni informate.',
  },
  {
    titolo: 'Risparmia tempo e denaro',
    descrizione:
      'Un parere preventivo scritto costa meno di un procedimento avviato nel modo sbagliato. La prevenzione legale è sempre l\'investimento più redditizio.',
  },
  {
    titolo: 'Parere scritto e verificabile',
    descrizione:
      'Il parere è redatto in forma scritta, con riferimenti normativi precisi e giurisprudenza aggiornata. Nessuna risposta vaga o generica.',
  },
  {
    titolo: 'Risposta entro 48 ore',
    descrizione:
      'Dalla ricezione della documentazione alla consegna del parere scritto: 24–48 ore lavorative per le questioni standard.',
  },
]

const ambiti = [
  'Contratti e obbligazioni',
  'Diritto del lavoro e licenziamenti',
  'Diritto di famiglia — separazione e divorzio',
  'Controversie condominiali e locazioni',
  'Recupero crediti',
  'Responsabilità contrattuale ed extracontrattuale',
  'Contenzioso tributario e accertamenti',
  'Diritto penale — valutazione della posizione processuale',
  'AI Act e conformità degli strumenti AI nella professione',
  'Previdenza e controversie INPS/INAIL',
]

export default function ConsulenzaPreventivaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px 64px' }}>
          <p
            className="eyebrow"
            data-animate
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}
          >
            Servizio
          </p>
          <h1
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: '16px',
              textAlign: 'left',
            }}
          >
            Consulenza preventiva
          </h1>
          <p
            data-animate
            style={{
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              maxWidth: '580px',
              lineHeight: 1.75,
              marginBottom: '32px',
            }}
          >
            Un parere legale scritto prima di agire: la risposta più chiara,
            fondata su normativa e giurisprudenza aggiornata.
          </p>
          <div data-animate style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contatti"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'var(--wine)',
                color: 'var(--white)',
                padding: '13px 26px',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.03em',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Richiedi un parere
            </Link>
            <a
              href="https://consulenze.studiolegalecuomogiuseppe.it"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                padding: '13px 26px',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '0.88rem',
                letterSpacing: '0.03em',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Portale consulenze AI
            </a>
          </div>
        </div>
      </section>

      {/* Perche sceglierla */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <p
          className="eyebrow"
          data-animate
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '12px',
          }}
        >
          Vantaggi
        </p>
        <h2
          data-animate
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
            fontWeight: 500,
            color: 'var(--ink)',
            marginBottom: '48px',
            textAlign: 'left',
          }}
        >
          Perché scegliere la consulenza preventiva
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {motivi.map((m) => (
            <div
              key={m.titolo}
              data-animate
              style={{
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                padding: '28px',
              }}
            >
              <h3 style={{
                fontFamily: "'Newsreader', serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '10px',
                textAlign: 'left',
              }}>
                {m.titolo}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.75,
                textAlign: 'left',
              }}>
                {m.descrizione}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambiti */}
      <section style={{
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '80px 0',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 28px' }}>
          <p
            className="eyebrow"
            data-animate
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '12px',
            }}
          >
            Materie
          </p>
          <h2
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: '40px',
              textAlign: 'left',
            }}
          >
            Ambiti di consulenza
          </h2>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ambiti.map((a) => (
              <li
                key={a}
                data-animate
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--ink-soft)',
                  paddingLeft: '20px',
                  borderLeft: '2px solid var(--gold)',
                  lineHeight: 1.6,
                  textAlign: 'left',
                }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <div
          data-animate
          style={{
            background: 'var(--ink)',
            borderRadius: '4px',
            padding: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Newsreader', serif",
              fontSize: '1.3rem',
              fontWeight: 500,
              color: 'var(--white)',
              marginBottom: '8px',
              textAlign: 'left',
            }}>
              Richiedi il tuo parere scritto
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,253,248,0.5)', textAlign: 'left' }}>
              {contactInfo.phoneOffice} · risposta entro 48 ore lavorative
            </p>
          </div>
          <Link
            href="/contatti"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--gold)',
              color: 'var(--ink)',
              padding: '14px 28px',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              fontFamily: "'Inter', sans-serif",
              flexShrink: 0,
            }}
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  )
}
