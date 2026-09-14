import Link from 'next/link'

const stats = [
  { valore: '25+', label: 'Anni di esercizio', sub: 'dal 1999' },
  { valore: '91',  label: 'Recensioni Google', sub: '5.0 stelle' },
  { valore: '6',   label: 'Province coperte',  sub: 'Campania' },
  { valore: '9',   label: 'Aree del diritto',  sub: 'specializzazioni' },
]

const badges = [
  { titolo: "Toga d'Onore", ente: "Ordine degli Avvocati di Nocera Inferiore", anno: '2001', descrizione: "Riconoscimento conferito a soli due anni dall'iscrizione all'albo per la qualità della condotta professionale e deontologica." },
  { titolo: 'Patrocinio in Cassazione', ente: 'Corte di Cassazione e Magistrature Superiori', anno: 'Dal 2014', descrizione: 'Abilitato al patrocinio davanti alle massime giurisdizioni italiane: Corte di Cassazione, Consiglio di Stato e Corte dei Conti.' },
  { titolo: 'Iscrizione Albo — Regolare', ente: 'Ordine degli Avvocati di Nocera Inferiore', anno: 'Attiva', descrizione: "Iscritto regolarmente all'Albo dal 1999. Nessun procedimento disciplinare. Obblighi deontologici e formativi costantemente assolti." },
  { titolo: 'Laurea in Giurisprudenza', ente: 'Università degli Studi di Salerno', anno: '1999', descrizione: 'Laurea magistrale con tesi in diritto del lavoro. Formazione accademica che ha posto le basi di una specializzazione multidisciplinare.' },
  { titolo: '25+ Anni di Esperienza', ente: 'Attività professionale continuativa', anno: 'Dal 1999', descrizione: "Un quarto di secolo di consulenza legale, con migliaia di pratiche gestite con successo in tutto il territorio campano." },
  { titolo: 'Formazione Continua', ente: 'Aggiornamento professionale obbligatorio', anno: 'Annuale', descrizione: 'Costante aggiornamento su riforme legislative, giurisprudenza di legittimità e dottrina. Partecipazione a convegni nazionali ogni anno.' },
]

export default function StatsBioSection() {
  return (
    <section style={{ background: 'var(--ink)', padding: '80px 28px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '72px',
        }}>
          {stats.map(s => (
            <div
              key={s.label}
              style={{
                padding: '32px 24px',
                background: 'var(--ink)',
                textAlign: 'center',
              }}
            >
              <p style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 500,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {s.valore}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,253,248,0.75)', fontFamily: "'Inter', sans-serif", marginBottom: '2px' }}>
                {s.label}
              </p>
              <p style={{ fontSize: '0.68rem', color: 'rgba(255,253,248,0.35)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Header */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '12px',
        }}>
          Credenziali
        </p>
        <h2 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 500,
          color: 'var(--white)',
          marginBottom: '40px',
          textAlign: 'left',
        }}>
          Perché scegliere questo Studio
        </h2>

        {/* Badges grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '48px',
        }}>
          {badges.map(b => (
            <div
              key={b.titolo}
              style={{
                padding: '24px',
                background: 'var(--ink)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '8px' }}>
                <p style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--white)',
                  textAlign: 'left',
                }}>
                  {b.titolo}
                </p>
                <span style={{
                  fontSize: '0.65rem',
                  color: 'var(--gold)',
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {b.anno}
                </span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,253,248,0.45)', fontFamily: "'Inter', sans-serif", marginBottom: '10px' }}>
                {b.ente}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,253,248,0.6)', lineHeight: 1.65, textAlign: 'left' }}>
                {b.descrizione}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/chi-sono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(255,253,248,0.2)',
            color: 'rgba(255,253,248,0.7)',
            padding: '12px 24px',
            borderRadius: '2px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.02em',
          }}
        >
          Biografia completa
        </Link>
      </div>
    </section>
  )
}
