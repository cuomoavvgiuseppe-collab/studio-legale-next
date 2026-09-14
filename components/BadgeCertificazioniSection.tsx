const stats = [
  { valore: '25+', label: 'Anni di Esercizio', sub: 'dal 1999' },
  { valore: '91', label: 'Recensioni Verificate', sub: '5.0 stelle Google' },
  { valore: '6', label: 'Province Coperte', sub: 'Campania' },
  { valore: '9', label: 'Aree del Diritto', sub: 'specializzazioni' },
]

const badges = [
  {
    titolo: "Toga d'Onore",
    ente: "Consiglio dell'Ordine degli Avvocati",
    anno: '2001',
    descrizione:
      "Riconoscimento straordinario conferito dal Consiglio dell'Ordine degli Avvocati di Nocera Inferiore nel 2001, a soli due anni dall'iscrizione all'albo, per la qualità della condotta professionale e deontologica.",
    icon: 'award',
  },
  {
    titolo: 'Patrocinio in Cassazione',
    ente: 'Corte di Cassazione e Magistrature Superiori',
    anno: 'Dal 2014',
    descrizione:
      "Abilitato al patrocinio davanti alle massime giurisdizioni italiane: Corte di Cassazione, Consiglio di Stato e Corte dei Conti. Idoneità ottenuta dopo 15 anni di esercizio continuativo e superamento dell'esame di abilitazione.",
    icon: 'scale',
  },
  {
    titolo: 'Iscrizione Albo — Regolare',
    ente: 'Ordine degli Avvocati di Nocera Inferiore',
    anno: 'Attiva',
    descrizione:
      "Iscritto regolarmente all'Albo degli Avvocati di Nocera Inferiore dal 1999. Tutti gli obblighi deontologici e formativi previsti dalla Legge 247/2012 sono costantemente assolti. Nessun procedimento disciplinare.",
    icon: 'shield',
  },
  {
    titolo: 'Laurea in Giurisprudenza',
    ente: 'Università degli Studi di Salerno',
    anno: '1999',
    descrizione:
      "Laurea magistrale in Giurisprudenza conseguita presso l'Università degli Studi di Salerno con tesi in diritto del lavoro. Formazione accademica rigorosa che ha posto le basi di una specializzazione multidisciplinare.",
    icon: 'graduation',
  },
  {
    titolo: '25+ Anni di Esperienza',
    ente: 'Attività professionale continuativa',
    anno: 'Dal 1999',
    descrizione:
      "Un quarto di secolo di consulenza legale di alta qualità, con migliaia di pratiche gestite con successo in tutto il territorio campano. L'esperienza accumulata garantisce una lettura immediata e precisa di ogni situazione.",
    icon: 'star',
  },
  {
    titolo: 'Formazione Continua',
    ente: 'Aggiornamento professionale obbligatorio',
    anno: 'Annuale',
    descrizione:
      "Costante aggiornamento su riforme legislative, giurisprudenza di legittimità e dottrina. Partecipazione annuale a convegni nazionali e corsi di specializzazione nelle materie di riferimento dello Studio.",
    icon: 'book',
  },
  {
    titolo: 'Diritto del Lavoro — Specialista',
    ente: 'Previdenza · Infortuni · Sindacale',
    anno: 'Core area',
    descrizione:
      "Area di massima specializzazione: licenziamento illegittimo, mobbing, crediti di lavoro, NASpI, pensioni INPS, infortuni sul lavoro. Decine di procedure giudiziarie e stragiudiziali per lavoratori e aziende ogni anno.",
    icon: 'briefcase',
  },
  {
    titolo: 'Diritto di Famiglia — Esperto',
    ente: 'Separazione · Divorzio · Tutele',
    anno: 'Core area',
    descrizione:
      "Specializzazione consolidata in separazione, divorzio, affidamento figli, mantenimento e successioni. Applicazione delle Tabelle Milanesi 2022 e dei criteri SS.UU. Cass. 18287/2018 per la tutela dei diritti della persona.",
    icon: 'users',
  },
  {
    titolo: 'Gratuito Patrocinio',
    ente: 'DPR 115/2002 — Ammesso',
    anno: 'Attivo',
    descrizione:
      "Lo Studio accetta pratiche in regime di gratuito patrocinio a spese dello Stato (DPR 115/2002) per chi ha un reddito ISEE inferiore a € 11.746,68. Il diritto alla difesa non deve essere condizionato dalla situazione economica.",
    icon: 'gavel',
  },
]

const valori = [
  {
    titolo: 'Deontologia prima di tutto',
    testo:
      "La reputazione professionale è il bene più prezioso. Ogni mandato è gestito con rigore etico, trasparenza totale e rispetto delle norme deontologiche forensi.",
    icon: 'scale',
  },
  {
    titolo: 'Approccio risultato-orientato',
    testo:
      "Prima di intraprendere qualsiasi azione legale, viene sempre effettuata un'analisi realistica delle probabilità di successo. Non si promuovono cause destinate a soccombere.",
    icon: 'trend',
  },
  {
    titolo: 'Documentazione e tracciabilità',
    testo:
      "Ogni fase della pratica è documentata e comunicata al cliente con aggiornamenti periodici. Il cliente è sempre informato dell'avanzamento e delle scelte strategiche.",
    icon: 'file',
  },
  {
    titolo: 'Risposta garantita entro 48 ore',
    testo:
      "Nessuna richiesta di consulenza resta senza risposta. L'impegno formale dello Studio è di rispondere entro 48 ore lavorative a ogni contatto ricevuto.",
    icon: 'check',
  },
]

const CERTIFICATIONS = [
  { name: 'Vanderbilt University', area: 'Legal Technology' },
  { name: 'University of Pennsylvania', area: 'AI & Law' },
  { name: 'Google', area: 'AI & Machine Learning' },
  { name: 'IBM', area: 'Cybersecurity' },
  { name: 'Microsoft', area: 'Cloud & AI' },
  { name: 'LinkedIn Learning', area: 'Legal Tech' },
  { name: 'Fastweb Digital Academy', area: 'Digital Skills' },
  { name: 'Anthropic', area: 'Claude AI & Prompt Engineering' },
]

function BadgeIcon({ type }: { type: string }) {
  const s = { width: 20, height: 20, flexShrink: 0 as const }
  switch (type) {
    case 'award':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M3 9l4-6 4 6M17 9l4-6-4 6" /><line x1="3" y1="9" x2="7" y2="9" /><line x1="17" y1="9" x2="21" y2="9" /><line x1="5" y1="21" x2="19" y2="21" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 'graduation':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    case 'star':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    case 'book':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      )
    case 'users':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'gavel':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 13l-8.5 8.5a2.12 2.12 0 0 1-3-3L11 10" /><path d="M22 4l-4 4-4-4 4-4z" /><path d="M18 8l-4-4" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
        </svg>
      )
    case 'file':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case 'check':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    default:
      return null
  }
}

export default function BadgeCertificazioniSection() {
  return (
    <>
      {/* ── Credenziali — header + stats ──────────────────────────────── */}
      <section
        id="certificazioni"
        style={{
          background: 'var(--paper-deep)',
          borderTop: '1px solid var(--line)',
          padding: '80px 0',
        }}
      >
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
            Qualifiche · Titoli · Abilitazioni
          </p>
          <h2
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            Credenziali professionali
          </h2>
          <p
            data-animate
            style={{
              fontSize: '0.92rem',
              color: 'var(--ink-soft)',
              maxWidth: '620px',
              lineHeight: 1.8,
              marginBottom: '8px',
            }}
          >
            L'Avv. Giuseppe Cuomo esercita la professione forense dal 1999 con continuità,
            integrità deontologica e aggiornamento costante. Nel 2001 ha ricevuto la{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Toga d'Onore</strong> dal
            Consiglio dell'Ordine di Nocera Inferiore e dal 2014 è abilitato al{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
              patrocinio avanti la Corte di Cassazione
            </strong>{' '}
            e le Magistrature Superiori.
          </p>
          <p
            data-animate
            style={{
              fontSize: '0.8rem',
              color: 'var(--ink-soft)',
              maxWidth: '580px',
              lineHeight: 1.75,
              opacity: 0.7,
            }}
          >
            Le credenziali elencate sono verificabili pubblicamente presso il Consiglio
            dell'Ordine degli Avvocati di Nocera Inferiore e negli albi ufficiali del
            Ministero della Giustizia.
          </p>

          {/* Stats */}
          <div
            data-animate
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginTop: '48px',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: 'var(--wine)',
                    marginBottom: '4px',
                    textAlign: 'center',
                  }}
                >
                  {s.valore}
                </p>
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--ink)',
                    fontWeight: 500,
                    marginBottom: '2px',
                    textAlign: 'center',
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--ink-soft)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: "'Inter', sans-serif",
                    textAlign: 'center',
                    opacity: 0.7,
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Badges professionali ───────────────────────────────────────── */}
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
          Titoli e Riconoscimenti
        </p>
        <h3
          data-animate
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            fontWeight: 500,
            color: 'var(--ink)',
            marginBottom: '40px',
            textAlign: 'left',
          }}
        >
          Titoli professionali
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              data-animate
              className="hover-card"
              style={{
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '4px',
                    background: 'var(--paper-deep)',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--wine)',
                    flexShrink: 0,
                  }}
                >
                  <BadgeIcon type={badge.icon} />
                </div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    background: 'var(--paper-deep)',
                    border: '1px solid var(--line)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}
                >
                  {badge.anno}
                </span>
              </div>
              <h4
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '4px',
                  textAlign: 'left',
                }}
              >
                {badge.titolo}
              </h4>
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--wine)',
                  marginBottom: '10px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}
              >
                {badge.ente}
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.75,
                  textAlign: 'left',
                }}
              >
                {badge.descrizione}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certificazioni internazionali ─────────────────────────────── */}
      <section
        style={{
          background: 'var(--paper-deep)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 28px' }}>
          {/* Badge Anthropic Academy */}
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
            Certificazioni Internazionali
          </p>
          <h3
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: '32px',
              textAlign: 'left',
            }}
          >
            Oltre 40 certificazioni internazionali
          </h3>

          {/* Anthropic card */}
          <div
            data-animate
            className="hover-card"
            style={{
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              padding: '28px',
              marginBottom: '32px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '4px',
                background: '#1a1a2e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Anthropic A logo SVG */}
              <svg width="28" height="20" viewBox="0 0 46 32" fill="none">
                <path d="M32.73 0h-5.91L38.99 32h5.91L32.73 0Z" fill="#C96442" />
                <path d="M18.59 0 6.41 32h6.09l2.47-6.56h12.06L29.5 32h6.09L23.41 0h-4.82Zm-2.01 20.18 4.22-11.2 4.21 11.2h-8.43Z" fill="#C96442" />
                <path d="M0 0h5.91l12.17 32H12.1L0 0Z" fill="#C96442" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '6px',
                  flexWrap: 'wrap',
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    textAlign: 'left',
                  }}
                >
                  Anthropic Academy — Claude AI Certification
                </h4>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    background: 'var(--paper-deep)',
                    border: '1px solid var(--line)',
                    padding: '2px 7px',
                    borderRadius: '2px',
                  }}
                >
                  2025 · Verified
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--wine)',
                  marginBottom: '10px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}
              >
                Anthropic · anthropic.com
              </p>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.75,
                  textAlign: 'left',
                }}
              >
                Certificazione conseguita presso l'Anthropic Academy al termine di corsi
                ufficiali sull'utilizzo avanzato di Claude AI. Competenze validate su
                architettura dei modelli, prompt engineering professionale, integrazione AI
                in contesti legali e compliance con AI Act.
              </p>
            </div>
          </div>

          {/* Strip certificazioni */}
          <p
            data-animate
            style={{
              fontSize: '0.75rem',
              color: 'var(--ink-soft)',
              marginBottom: '20px',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'left',
            }}
          >
            Istituzioni d'eccellenza che attestano la competenza in Legal Tech, AI e Cybersecurity
          </p>
          <div
            data-animate
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {CERTIFICATIONS.map(({ name, area }) => (
              <div
                key={name}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
          <p
            data-animate
            style={{
              fontSize: '0.65rem',
              fontFamily: "'Inter', sans-serif",
              color: 'var(--ink-soft)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: '20px',
              opacity: 0.6,
            }}
          >
            Advanced Prompt Engineering · AI Security · Trustworthy AI · Legal Tech · AI Privacy
          </p>
        </div>
      </section>

      {/* ── Valori professionali ──────────────────────────────────────── */}
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
          I Valori dello Studio
        </p>
        <h3
          data-animate
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            fontWeight: 500,
            color: 'var(--ink)',
            marginBottom: '40px',
            textAlign: 'left',
          }}
        >
          I principi che guidano ogni mandato
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
            gap: '16px',
          }}
        >
          {valori.map((v, i) => (
            <div
              key={i}
              data-animate
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '4px',
                  background: 'var(--paper-deep)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--wine)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <BadgeIcon type={v.icon} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '6px',
                    textAlign: 'left',
                  }}
                >
                  {v.titolo}
                </h4>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                    textAlign: 'left',
                  }}
                >
                  {v.testo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Citazione */}
        <blockquote
          data-animate
          style={{
            marginTop: '56px',
            padding: '32px 36px',
            background: 'var(--paper-deep)',
            border: '1px solid var(--line)',
            borderLeft: '3px solid var(--wine)',
            borderRadius: '0 4px 4px 0',
          }}
        >
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.85,
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            "La qualità della difesa non dipende solo dalla conoscenza della legge, ma dalla
            capacità di ascoltare il cliente, comprendere la sua situazione e scegliere la
            strategia più efficace per quel caso specifico."
          </p>
          <footer
            style={{
              fontSize: '0.72rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textAlign: 'left',
            }}
          >
            Avv. Giuseppe Cuomo — Studio Legale, Nocera Inferiore
          </footer>
        </blockquote>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .badge-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .valori-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
