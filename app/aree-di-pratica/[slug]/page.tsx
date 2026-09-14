import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { practiceAreas, getPracticeAreaBySlug } from '@/lib/practice-areas'
import { contactInfo } from '@/lib/contact'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = getPracticeAreaBySlug(slug)
  if (!area) return {}
  return {
    title: `${area.title} — Studio Legale Cuomo`,
    description: area.description,
  }
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params
  const area = getPracticeAreaBySlug(slug)
  if (!area) notFound()

  const others = practiceAreas.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <nav style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '20px 28px 0',
      }}>
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--ink-soft)',
          fontFamily: "'Inter', sans-serif",
          textAlign: 'left',
        }}>
          <Link href="/" style={{ color: 'var(--ink-soft)', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <Link href="/aree-di-pratica" style={{ color: 'var(--ink-soft)', textDecoration: 'none' }}>
            Aree di pratica
          </Link>
          {' / '}
          <span style={{ color: 'var(--ink)' }}>{area.title}</span>
        </p>
      </nav>

      {/* Hero */}
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)', marginTop: '24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '56px 28px 48px' }}>
          <p
            className="eyebrow"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
            }}
          >
            {area.subtitle}
          </p>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              textAlign: 'left',
            }}
          >
            {area.title}
          </h1>
        </div>
      </section>

      {/* Contenuto principale */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 260px',
          gap: '64px',
          alignItems: 'start',
        }}>
          {/* Testo */}
          <div>
            <p style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: '1.1rem',
              color: 'var(--ink)',
              lineHeight: 1.85,
              marginBottom: '24px',
            }}>
              {area.description}
            </p>
            <p style={{
              fontSize: '0.92rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.85,
            }}>
              {area.longDescription}
            </p>

            <div style={{ marginTop: '48px' }}>
              <Link
                href="/contatti"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--wine)',
                  color: 'var(--white)',
                  padding: '14px 28px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Richiedi una consulenza
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              padding: '28px',
              marginBottom: '20px',
            }}>
              <p style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '16px',
                fontFamily: "'Inter', sans-serif',",
                textAlign: 'left',
              }}>
                Contatti diretti
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--ink)',
                lineHeight: 1.9,
                textAlign: 'left',
              }}>
                <a
                  href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`}
                  style={{ color: 'var(--wine)', textDecoration: 'none', fontWeight: 600 }}
                >
                  {contactInfo.phoneOffice}
                </a>
                <br />
                <a
                  href={`mailto:${contactInfo.emailStudio}`}
                  style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: '0.8rem' }}
                >
                  {contactInfo.emailStudio}
                </a>
                <br />
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
                  {contactInfo.address}, {contactInfo.city}
                </span>
              </p>
            </div>

            {others.length > 0 && (
              <div>
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  Altre aree
                </p>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/aree-di-pratica/${other.slug}`}
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--ink-soft)',
                        textDecoration: 'none',
                        textAlign: 'left',
                        padding: '8px 0',
                        borderBottom: '1px solid var(--ink-faint)',
                      }}
                    >
                      {other.title}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
