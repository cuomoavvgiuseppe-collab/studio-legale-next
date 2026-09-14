import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities, getCityBySlug } from '@/lib/cities'
import { contactInfo } from '@/lib/contact'
import { practiceAreas } from '@/lib/practice-areas'

type Props = { params: Promise<{ citta: string }> }

export async function generateStaticParams() {
  return cities.map((c) => ({ citta: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citta } = await params
  const city = getCityBySlug(citta)
  if (!city) return {}
  const isHQ = city.distanzaKm === 0
  return {
    title: `Avvocato a ${city.nome} — Studio Legale Cuomo`,
    description: `Avv. Giuseppe Cuomo, Patrocinante in Cassazione. ${isHQ ? 'Sede studio a ' : 'Assistenza legale a '}${city.nome} (${city.sigla}). Diritto del lavoro, penale, tributario, famiglia. ${isHQ ? 'Via G. Matteotti 14, Nocera Inferiore.' : `Studio a Nocera Inferiore, ${city.distanzaKm} km da ${city.nome}.`}`,
    alternates: { canonical: `https://www.studiolegalecuomogiuseppe.it/avvocato/${city.slug}` },
  }
}

export default async function CityPage({ params }: Props) {
  const { citta } = await params
  const city = getCityBySlug(citta)
  if (!city) notFound()

  const isHQ = city.distanzaKm === 0

  return (
    <>
      {/* Breadcrumb */}
      <nav style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 28px 0' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>
          <Link href="/" style={{ color: 'var(--ink-soft)', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <span style={{ color: 'var(--ink)' }}>Avvocato a {city.nome}</span>
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
            {isHQ ? 'Sede dello Studio' : `${city.provincia} (${city.sigla}) · ${city.distanzaKm} km`}
          </p>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: '16px',
              textAlign: 'left',
            }}
          >
            Avvocato a {city.nome}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink-soft)', maxWidth: '580px', lineHeight: 1.75 }}>
            {city.descrizione}
          </p>
        </div>
      </section>

      {/* Contenuto principale */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 260px', gap: '64px', alignItems: 'start' }}>

          {/* Testo */}
          <div>
            <p
              data-animate
              style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.85, marginBottom: '24px' }}
            >
              {city.intro}
            </p>
            <p
              data-animate
              style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: 1.85, marginBottom: '40px' }}
            >
              {city.notaLocale}
            </p>

            {/* Aree servite */}
            <div data-animate style={{ marginBottom: '40px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
                Aree di competenza
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {city.areeServite.map((area) => {
                  const pa = practiceAreas.find((p) => p.title === area)
                  return pa ? (
                    <Link key={area} href={`/aree-di-pratica/${pa.slug}`} style={{ fontSize: '0.78rem', color: 'var(--ink)', textDecoration: 'none', padding: '6px 12px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '2px', fontFamily: "'Inter', sans-serif" }}>
                      {area}
                    </Link>
                  ) : (
                    <span key={area} style={{ fontSize: '0.78rem', color: 'var(--ink)', padding: '6px 12px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '2px', fontFamily: "'Inter', sans-serif" }}>
                      {area}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Tribunale */}
            <div data-animate style={{ padding: '20px 24px', background: 'var(--paper-deep)', border: '1px solid var(--line)', borderLeft: '3px solid var(--wine)', borderRadius: '0 4px 4px 0', marginBottom: '40px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
                Giurisdizione competente
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 500, fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>
                {city.tribunale}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', marginTop: '4px', textAlign: 'left' }}>
                Patrocinante in Cassazione e dinanzi alle Giurisdizioni Superiori
              </p>
            </div>

            {/* CTA */}
            <div data-animate style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/contatti"
                style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--wine)', color: 'var(--white)', padding: '13px 24px', borderRadius: '2px', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
              >
                Richiedi consulenza gratuita
              </Link>
              <a
                href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`}
                style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--paper-deep)', color: 'var(--wine)', padding: '13px 24px', borderRadius: '2px', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Inter', sans-serif", border: '1px solid var(--line)' }}
              >
                {contactInfo.phoneOffice}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '88px' }}>
            {/* Contatti */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '4px', padding: '28px', marginBottom: '20px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', textAlign: 'left' }}>
                Studio Legale Cuomo
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink)', lineHeight: 2, textAlign: 'left' }}>
                <strong>Avv. Giuseppe Cuomo</strong><br />
                {contactInfo.address}<br />
                {contactInfo.city} (SA)<br />
                <a href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`} style={{ color: 'var(--wine)', textDecoration: 'none', fontWeight: 600 }}>
                  {contactInfo.phoneOffice}
                </a><br />
                <a href={`mailto:${contactInfo.emailStudio}`} style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: '0.75rem' }}>
                  {contactInfo.emailStudio}
                </a>
              </p>
            </div>

            {/* Credenziali */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '4px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', textAlign: 'left' }}>
                Credenziali
              </p>
              {[
                "Iscritto all'Albo di Nocera Inferiore dal 1999",
                'Patrocinante in Cassazione dal 2014',
                "Toga d'Onore 2001",
                '25+ anni di esperienza',
                'Prima consulenza gratuita',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--wine)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Altre città */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', textAlign: 'left' }}>
                Zone servite
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {cities.filter((c) => c.slug !== city.slug).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/avvocato/${c.slug}`}
                    style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid var(--ink-faint)', textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>{c.nome}</span>
                    {c.distanzaKm > 0 && <span style={{ fontSize: '0.7rem', color: 'var(--gold)' }}>{c.distanzaKm} km</span>}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
