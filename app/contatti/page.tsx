import type { Metadata } from 'next'
import { contactInfo } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contatti — Studio Legale Cuomo',
  description: `Contatta lo Studio Legale Cuomo: ${contactInfo.phoneOffice} · ${contactInfo.emailStudio} · ${contactInfo.address}, ${contactInfo.city} (SA). Prenotazione consulenza online e telefonica.`,
}

export default function ContattiPage() {
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
            Prenota una consulenza
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
            Contatti
          </h1>
          <p
            data-animate
            style={{
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              maxWidth: '540px',
              lineHeight: 1.7,
            }}
          >
            Siamo disponibili per consultazioni telefoniche e in Studio, previo appuntamento.
            Risposta garantita entro 24 ore lavorative.
          </p>
        </div>
      </section>

      {/* Griglia contatti */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
        }}>
          {/* Telefono */}
          <div
            data-animate
            style={{
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '16px',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'left',
            }}>
              Telefono
            </p>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: '1rem', color: 'var(--ink)', marginBottom: '6px', textAlign: 'left' }}>
              Studio
            </p>
            <a
              href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`}
              style={{
                display: 'block',
                fontSize: '1.3rem',
                fontFamily: "'Newsreader', serif",
                fontWeight: 600,
                color: 'var(--wine)',
                textDecoration: 'none',
                marginBottom: '12px',
                textAlign: 'left',
              }}
            >
              {contactInfo.phoneOffice}
            </a>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: '1rem', color: 'var(--ink)', marginBottom: '6px', textAlign: 'left' }}>
              Mobile
            </p>
            <a
              href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}
              style={{
                fontSize: '1.1rem',
                fontFamily: "'Newsreader', serif",
                fontWeight: 600,
                color: 'var(--wine)',
                textDecoration: 'none',
                textAlign: 'left',
                display: 'block',
              }}
            >
              {contactInfo.phoneMobile}
            </a>
          </div>

          {/* Email */}
          <div
            data-animate
            style={{
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '16px',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'left',
            }}>
              Email
            </p>
            {[
              { label: 'Studio', value: contactInfo.emailStudio ?? '' },
              { label: 'Personale', value: contactInfo.email },
              { label: 'PEC', value: contactInfo.pec },
            ].map((item) => item.value && (
              <div key={item.label} style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontFamily: "'Inter', sans-serif", marginBottom: '2px', textAlign: 'left' }}>
                  {item.label}
                </p>
                <a
                  href={`mailto:${item.value}`}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    textAlign: 'left',
                    display: 'block',
                  }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Sede */}
          <div
            data-animate
            style={{
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '16px',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'left',
            }}>
              Sede
            </p>
            <p style={{
              fontFamily: "'Newsreader', serif",
              fontSize: '1rem',
              color: 'var(--ink)',
              lineHeight: 1.8,
              marginBottom: '16px',
              textAlign: 'left',
            }}>
              {contactInfo.address}<br />
              {contactInfo.zipCode} {contactInfo.city} ({contactInfo.province})
            </p>
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                color: 'var(--wine)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--wine)',
                paddingBottom: '1px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Indicazioni su Maps
            </a>
          </div>
        </div>

        {/* Mappa */}
        <div
          data-animate
          style={{
            width: '100%',
            height: '360px',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid var(--line)',
          }}
        >
          <iframe
            src={contactInfo.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Studio Legale Cuomo"
          />
        </div>

        {/* Orari e info aggiuntive */}
        <div
          data-animate
          style={{
            marginTop: '48px',
            background: 'var(--paper-deep)',
            border: '1px solid var(--line)',
            borderRadius: '4px',
            padding: '32px',
          }}
        >
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'left',
          }}>
            Informazioni
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.85,
            textAlign: 'left',
          }}>
            Lo Studio riceve su appuntamento. Le consulenze possono svolgersi in Studio,
            telefonicamente o in videochiamata. Per urgenze, contattare direttamente
            il numero di studio o mobile.
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.75,
            marginTop: '12px',
            textAlign: 'left',
          }}>
            P.IVA: {contactInfo.vatNumber} · {contactInfo.ordine}
          </p>
        </div>
      </section>
    </>
  )
}
