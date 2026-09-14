import type { Metadata } from 'next'
import Link from 'next/link'
import { practiceAreas } from '@/lib/practice-areas'

export const metadata: Metadata = {
  title: 'Aree di pratica — Studio Legale Cuomo',
  description:
    'Diritto civile, penale, tributario, del lavoro, previdenziale, di famiglia e responsabilità medica. Assistenza legale specializzata in ogni settore del diritto.',
}

export default function AreeDiPraticaPage() {
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
            Competenze
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
            Aree di pratica
          </h1>
          <p
            data-animate
            style={{
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              maxWidth: '580px',
              lineHeight: 1.7,
            }}
          >
            Assistenza legale qualificata in ogni settore del diritto, dal primo grado di
            giudizio fino alla Corte di Cassazione.
          </p>
        </div>
      </section>

      {/* Griglia aree */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/aree-di-pratica/${area.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                data-animate
                className="hover-card"
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '32px',
                  height: '100%',
                }}
              >
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  {area.subtitle}
                </p>
                <h2 style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '12px',
                  textAlign: 'left',
                }}>
                  {area.title}
                </h2>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}>
                  {area.description}
                </p>
                <p style={{
                  marginTop: '20px',
                  fontSize: '0.78rem',
                  color: 'var(--wine)',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                  borderBottom: '1px solid var(--wine)',
                  display: 'inline-block',
                  paddingBottom: '1px',
                }}>
                  Approfondisci
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
