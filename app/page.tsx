import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import TestimonianzeSection from '@/components/TestimonianzeSection'
import FAQSection from '@/components/FAQSection'
import StatsBioSection from '@/components/StatsBioSection'
import RispostaGarantitaSection from '@/components/RispostaGarantitaSection'
import TerritorioServitoSection from '@/components/TerritorioServitoSection'
import CostiOrientativiSection from '@/components/CostiOrientativiSection'
import IntakePrequalificazioneSection from '@/components/IntakePrequalificazioneSection'
import SpecializzazioniSection from '@/components/SpecializzazioniSection'
import CaseResultsSection from '@/components/CaseResultsSection'

export const metadata: Metadata = {
  title: 'Avv. Giuseppe Cuomo — Studio Legale Nocera Inferiore',
  description:
    'Studio Legale Cuomo: diritto penale, civile, tributario, del lavoro. Patrocinante in Cassazione. Via G. Matteotti 14, Nocera Inferiore (SA). Tel: +39 081 921 1148.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Studio Legale Cuomo — Avv. Giuseppe Cuomo',
  url: 'https://www.studiolegalecuomogiuseppe.it',
  telephone: '+390819211148',
  email: 'info@studiolegalecuomogiuseppe.it',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via G. Matteotti, 14',
    addressLocality: 'Nocera Inferiore',
    addressRegion: 'SA',
    postalCode: '84014',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7449,
    longitude: 14.6416,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '15:00', closes: '19:00' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Giuseppe Cuomo',
    jobTitle: 'Avvocato Patrocinante in Cassazione',
  },
  areaServed: ['Nocera Inferiore', 'Salerno', 'Napoli', 'Campania'],
  knowsAbout: ['Diritto Penale', 'Diritto Civile', 'Diritto Tributario', 'Diritto del Lavoro', 'Diritto Previdenziale'],
  sameAs: [
    'https://www.facebook.com/studiolegalecuomogiuseppe',
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd id="schema-studio" data={localBusinessSchema} />
      {/* Hero */}
      <section style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '80px 28px 64px',
      }}>
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
          Nocera Inferiore · Cassazione
        </p>

        <h1
          data-animate
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'var(--ink)',
            marginBottom: '24px',
            letterSpacing: '-0.01em',
            textAlign: 'left',
          }}
        >
          Avvocato Giuseppe Cuomo
          <br />
          <span style={{ color: 'var(--wine)' }}>Patrocinante in Cassazione</span>
        </h1>

        <p
          data-animate
          style={{
            fontSize: '1.05rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.75,
            maxWidth: '620px',
            marginBottom: '40px',
          }}
        >
          Studio Legale specializzato in diritto penale, civile, tributario, del lavoro
          e previdenziale. Assistenza in ogni grado di giudizio, dalla consulenza
          preventiva al ricorso in Cassazione.
        </p>

        <div data-animate style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
            Prenota una consulenza
          </Link>
          <Link
            href="/chi-sono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--line)',
              color: 'var(--ink)',
              padding: '14px 28px',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Chi sono
          </Link>
        </div>
      </section>

      {/* Divisore */}
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 28px',
      }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--line)', opacity: 0.5 }} />
      </div>

      {/* Specializzazioni — aree con key points */}
      <SpecializzazioniSection />

      {/* Stats e credenziali */}
      <StatsBioSection />

      {/* Territorio servito */}
      <TerritorioServitoSection />

      {/* Costi orientativi */}
      <CostiOrientativiSection />

      {/* Risposta garantita */}
      <RispostaGarantitaSection />

      {/* Casi risolti */}
      <CaseResultsSection />

      {/* Intake pre-qualificazione */}
      <IntakePrequalificazioneSection />

      {/* Testimonianze */}
      <TestimonianzeSection />

      {/* FAQ */}
      <div style={{ background: 'var(--paper)' }}>
        <FAQSection />
      </div>

      {/* Banner contatti */}
      <section style={{
        background: 'var(--ink)',
        padding: '64px 28px',
      }}>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 500,
              color: 'var(--white)',
              marginBottom: '8px',
              textAlign: 'left',
            }}>
              Serve una consulenza?
            </h2>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,253,248,0.55)',
              textAlign: 'left',
            }}>
              Tel: +39 081 921 11 48 · Via G. Matteotti 14, Nocera Inferiore
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
