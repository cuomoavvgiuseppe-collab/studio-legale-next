import Link from 'next/link'

const garanzie = [
  {
    titolo: 'Risposta entro 48 ore lavorative',
    testo: 'Ogni richiesta riceve risposta entro 48 ore lavorative. Non ore solari: ore effettivamente lavorate, dal lunedì al venerdì.',
    accent: true,
  },
  {
    titolo: 'Prima consulenza gratuita',
    testo: "Il primo colloquio è gratuito e senza impegno. L'Avvocato valuta la situazione e fornisce un'indicazione sui costi orientativi.",
    accent: false,
  },
  {
    titolo: "Parli sempre con l'Avvocato",
    testo: "Nessun centralino interposto. Chi chiama riceve risposta diretta dall'Avv. Cuomo o un appuntamento entro 24 ore.",
    accent: false,
  },
]

const orari = [
  { giorno: 'Lunedì',    ore: '09:00 – 13:00 / 15:00 – 18:00', tipo: 'aperto' },
  { giorno: 'Martedì',   ore: 'Udienze e fuori sede',            tipo: 'fuori' },
  { giorno: 'Mercoledì', ore: '09:00 – 13:00 / 15:00 – 18:00', tipo: 'aperto' },
  { giorno: 'Giovedì',   ore: 'Udienze e fuori sede',            tipo: 'fuori' },
  { giorno: 'Venerdì',   ore: '09:00 – 13:00 / 15:00 – 18:00', tipo: 'aperto' },
  { giorno: 'Sabato',    ore: 'Su appuntamento',                 tipo: 'appuntamento' },
]

const canali = [
  { label: 'Telefono Studio', dettaglio: '+39 081 921 11 48',              href: 'tel:+390819211148',                        primario: true  },
  { label: 'Cellulare',       dettaglio: '+39 333 800 18 57',              href: 'tel:+393338001857',                        primario: true  },
  { label: 'Email',           dettaglio: 'cuomo.avv.giuseppe@tiscali.it', href: 'mailto:cuomo.avv.giuseppe@tiscali.it',     primario: false },
]

export default function RispostaGarantitaSection() {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 28px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '12px',
        }}>
          Impegno dello Studio
        </p>
        <h2 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 500, color: 'var(--ink)',
          marginBottom: '48px', textAlign: 'left',
        }}>
          Risposta garantita entro 48 ore
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          {/* Colonna sinistra — garanzie */}
          <div>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif", marginBottom: '20px',
            }}>
              Le nostre garanzie
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {garanzie.map((g, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  background: g.accent ? 'var(--wine)' : 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                }}>
                  <p style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '0.95rem', fontWeight: 600,
                    color: g.accent ? 'var(--white)' : 'var(--ink)',
                    marginBottom: '8px', textAlign: 'left',
                  }}>
                    {g.titolo}
                  </p>
                  <p style={{
                    fontSize: '0.82rem',
                    color: g.accent ? 'rgba(255,253,248,0.75)' : 'var(--ink-soft)',
                    lineHeight: 1.65, textAlign: 'left',
                  }}>
                    {g.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonna destra — recapiti + orari */}
          <div>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif", marginBottom: '20px',
            }}>
              Recapiti
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              {canali.map((c, i) => (
                <a key={i} href={c.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px',
                  background: 'var(--white)',
                  border: `1px solid ${c.primario ? 'var(--wine)' : 'var(--line)'}`,
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
                    {c.label}
                  </span>
                  <span style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '0.9rem', fontWeight: 600,
                    color: c.primario ? 'var(--wine)' : 'var(--ink)',
                  }}>
                    {c.dettaglio}
                  </span>
                </a>
              ))}
            </div>

            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif", marginBottom: '16px',
            }}>
              Orari di ricevimento
            </p>
            <div style={{ border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
              {orari.map((o, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 16px',
                  borderBottom: i < orari.length - 1 ? '1px solid var(--line)' : 'none',
                  background: i % 2 === 0 ? 'var(--white)' : 'var(--paper)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                      background: o.tipo === 'aperto' ? '#10B981' : o.tipo === 'appuntamento' ? 'var(--gold)' : 'rgba(0,0,0,0.15)',
                    }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--ink)' }}>
                      {o.giorno}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'var(--ink-soft)' }}>
                    {o.ore}
                  </span>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '0.72rem', color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif", lineHeight: 1.5, marginBottom: '20px',
            }}>
              <strong>Urgenze:</strong> per arresti, scadenze imminenti o misure cautelari, chiamare il cellulare +39 333 800 18 57 in qualsiasi orario.
            </p>

            <Link href="/contatti" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--wine)', color: 'var(--white)',
              padding: '12px 24px', borderRadius: '2px',
              textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
              fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em',
            }}>
              Prenota una consulenza
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
