import Link from 'next/link'

const aree = [
  {
    slug: 'diritto-civile',
    titolo: 'Diritto Civile',
    sottotitolo: 'Tutela dei diritti',
    descrizione: 'Controversie contrattuali, recupero crediti, risarcimento danni, diritti reali e successioni.',
    punti: [
      'Responsabilità contrattuale ed extracontrattuale',
      'Risarcimento danni — patrimoniali e non patrimoniali',
      'Recupero crediti e decreti ingiuntivi',
      'Locazioni, condominio e diritti reali',
      'Successioni e testamenti',
    ],
    urgenza: null,
  },
  {
    slug: 'diritto-lavoro',
    titolo: 'Diritto del Lavoro',
    sottotitolo: 'Previdenza · INPS · INAIL',
    descrizione: 'Licenziamenti illegittimi, mobbing, crediti di lavoro, NASpI, pensioni e infortuni.',
    punti: [
      'Licenziamento illegittimo — impugnazione 60 giorni',
      'Mobbing e demansionamento',
      'Crediti di lavoro e TFR arretrati',
      'Ricorsi INPS / NASpI / invalidità',
      'Infortuni sul lavoro — INAIL',
    ],
    urgenza: '60 giorni per impugnare il licenziamento',
  },
  {
    slug: 'diritto-famiglia',
    titolo: 'Diritto di Famiglia',
    sottotitolo: 'Separazione · Divorzio · Tutele',
    descrizione: 'Separazione, divorzio, affidamento figli, mantenimento e mediazione familiare.',
    punti: [
      'Separazione consensuale e giudiziale',
      'Divorzio — L. 55/2015 (tempi ridotti)',
      'Affidamento e mantenimento dei figli',
      'Modifica condizioni post-separazione',
      'Adozione e unioni civili',
    ],
    urgenza: null,
  },
  {
    slug: 'diritto-penale',
    titolo: 'Diritto Penale',
    sottotitolo: 'Difesa in ogni grado',
    descrizione: 'Difesa tecnica dal primo grado alla Cassazione — reati economici, cybercrime, reati d\'impresa.',
    punti: [
      'Difesa dall\'indagine preliminare al giudizio',
      'Reati tributari e societari',
      'Cybercrime e reati informatici',
      'Riti alternativi e patteggiamento',
      'Riforma Cartabia — improcedibilità',
    ],
    urgenza: 'Urgenza massima — agire subito',
  },
  {
    slug: 'diritto-tributario',
    titolo: 'Diritto Tributario',
    sottotitolo: 'Contenzioso fiscale',
    descrizione: 'Cartelle esattoriali, accertamenti, avvisi bonari — impugnazione entro 60 giorni.',
    punti: [
      'Impugnazione cartelle e accertamenti',
      'Contenzioso Commissioni Tributarie',
      'Concordato Preventivo Biennale',
      'Reati tributari — difesa penale-fiscale',
      'Pianificazione fiscale preventiva',
    ],
    urgenza: 'Ricorso: 60 giorni dalla notifica',
  },
  {
    slug: 'diritto-previdenziale',
    titolo: 'Diritto Previdenziale',
    sottotitolo: 'INPS · INAIL · Pensioni',
    descrizione: 'Pensioni, invalidità, ricostruzione carriera contributiva, NASpI e malattie professionali.',
    punti: [
      'Pensione di vecchiaia, invalidità, reversibilità',
      'Ricostruzione carriera contributiva',
      'NASpI, DIS-COLL e ammortizzatori sociali',
      'Infortuni e malattie professionali INAIL',
      'Ricorsi INPS — termini 90 giorni',
    ],
    urgenza: 'Ricorso INPS: 90 giorni dalla notifica',
  },
  {
    slug: 'responsabilita-medica',
    titolo: 'Responsabilità Medica',
    sottotitolo: 'Legge Gelli-Bianco',
    descrizione: 'Malasanità, errori medici e risarcimento danni — gestione completa dell\'iter risarcitorio.',
    punti: [
      'Legge Gelli-Bianco (L. 24/2017)',
      'Responsabilità struttura e medico',
      'Consulenza medico-legale tecnica',
      'Negoziazione con assicurazioni',
      'Prescrizione: 10 anni (resp. contrattuale)',
    ],
    urgenza: null,
  },
]

export default function SpecializzazioniSection() {
  return (
    <section
      id="specializzazioni"
      style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}
    >
      {/* Header */}
      <div data-animate style={{ marginBottom: '48px' }}>
        <p
          className="eyebrow"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '12px',
          }}
        >
          Competenze
        </p>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 500,
            color: 'var(--ink)',
            marginBottom: '16px',
            textAlign: 'left',
          }}
        >
          Aree di specializzazione
        </h2>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--ink-soft)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}
        >
          Assistenza legale qualificata in ogni settore del diritto, dal primo grado
          di giudizio fino alla Corte di Cassazione.
        </p>
      </div>

      {/* Griglia */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        {aree.map((area) => (
          <Link
            key={area.slug}
            href={`/aree-di-pratica/${area.slug}`}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div
              data-animate
              className="hover-card"
              style={{
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              {/* Header card */}
              <div style={{ marginBottom: '14px' }}>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '6px',
                  }}
                >
                  {area.sottotitolo}
                </p>
                <h3
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '8px',
                    textAlign: 'left',
                  }}
                >
                  {area.titolo}
                </h3>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.65,
                    textAlign: 'left',
                  }}
                >
                  {area.descrizione}
                </p>
              </div>

              {/* Punti chiave */}
              <div style={{ flex: 1, marginBottom: '16px' }}>
                {area.punti.map((punto, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: 'var(--wine)',
                        flexShrink: 0,
                        marginTop: '6px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.5,
                        textAlign: 'left',
                      }}
                    >
                      {punto}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  paddingTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                {area.urgenza ? (
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontFamily: "'Inter', sans-serif",
                      color: 'var(--wine)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.4,
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    ⚠ {area.urgenza}
                  </span>
                ) : (
                  <span style={{ flex: 1 }} />
                )}
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--wine)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Scopri →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div
        data-animate
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '24px 28px',
          background: 'var(--paper-deep)',
          border: '1px solid var(--line)',
          borderRadius: '4px',
        }}
      >
        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--ink-soft)',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Non sei sicuro di quale area riguardi la tua situazione?
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            href="#intake-prequalificazione"
            style={{
              fontSize: '0.82rem',
              color: 'var(--ink)',
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              padding: '9px 18px',
              border: '1px solid var(--line)',
              borderRadius: '2px',
            }}
          >
            Usa lo strumento gratuito
          </Link>
          <Link
            href="/contatti"
            style={{
              fontSize: '0.82rem',
              color: 'var(--white)',
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              padding: '9px 18px',
              background: 'var(--wine)',
              borderRadius: '2px',
            }}
          >
            Consulenza gratuita
          </Link>
        </div>
      </div>
    </section>
  )
}
