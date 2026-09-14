'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { contactInfo } from '@/lib/contact'

/* ─── TIPI ────────────────────────────────────────────────────────────────── */
interface Risposta { id: string; label: string; sub?: string }
interface Domanda  { id: string; step: number; testo: string; sottotesto?: string; risposte: Risposta[] }
interface EsitoConfig {
  area: string; urgenza: 'immediata' | 'alta' | 'media' | 'normale'
  messaggio: string; azione: string; termini?: string; link: string
}

/* ─── DOMANDE ─────────────────────────────────────────────────────────────── */
const DOMANDE: Domanda[] = [
  {
    id: 'tipo_problema', step: 1,
    testo: 'Qual è la natura del suo problema?',
    sottotesto: "Selezioni l'area che meglio descrive la sua situazione",
    risposte: [
      { id: 'lavoro',     label: 'Lavoro / Impiego',         sub: 'Licenziamento, mobbing, stipendi' },
      { id: 'famiglia',   label: 'Famiglia / Separazione',   sub: 'Divorzio, affidamento, mantenimento' },
      { id: 'previdenza', label: 'Pensione / INPS / NASpI',  sub: 'Contributi, invalidità, ricorsi' },
      { id: 'medica',     label: 'Danno medico / Sanitario', sub: 'Malasanità, consenso, risarcimento' },
      { id: 'civile',     label: 'Contratti / Immobili',     sub: 'Inadempimento, locazioni, crediti' },
      { id: 'penale',     label: 'Materia penale',           sub: 'Difesa, querele, reati' },
      { id: 'fisco',      label: 'Fisco / Tasse',            sub: 'Cartelle, accertamenti, ricorsi' },
      { id: 'altro',      label: 'Altro / Non so',           sub: 'Orientamento generale' },
    ],
  },
  {
    id: 'atto_ricevuto', step: 2,
    testo: 'Ha già ricevuto un atto ufficiale?',
    sottotesto: 'Lettere, cartelle, decreti o citazioni hanno termini perentori',
    risposte: [
      { id: 'si_recente',   label: 'Sì, negli ultimi 30 giorni',    sub: 'Attenzione: potrebbero esserci scadenze imminenti' },
      { id: 'si_vecchio',   label: 'Sì, da più di 30 giorni',       sub: 'Verificare se i termini sono ancora aperti' },
      { id: 'no_imminente', label: 'No, ma temo di riceverlo',      sub: 'Meglio agire preventivamente' },
      { id: 'no',           label: 'No, è una situazione in corso', sub: 'Nessun atto formale ricevuto' },
    ],
  },
  {
    id: 'quando_accaduto', step: 3,
    testo: 'Quando si è verificato il fatto?',
    sottotesto: 'Molti diritti hanno termini di prescrizione — il tempo è essenziale',
    risposte: [
      { id: 'meno_30gg',  label: 'Meno di 30 giorni fa', sub: 'Situazione recente — termini ancora ampi' },
      { id: '1_6_mesi',   label: 'Da 1 a 6 mesi fa',     sub: 'Verificare le scadenze specifiche' },
      { id: '6_12_mesi',  label: 'Da 6 a 12 mesi fa',    sub: 'Alcuni termini potrebbero avvicinarsi' },
      { id: 'oltre_anno', label: 'Oltre un anno fa',      sub: 'Valutare attentamente la prescrizione' },
      { id: 'in_corso',   label: 'È ancora in corso',     sub: 'Situazione attiva e continuativa' },
    ],
  },
  {
    id: 'altro_avvocato', step: 4,
    testo: 'Ha già consultato un altro avvocato?',
    sottotesto: 'Ci aiuta a capire in quale fase si trova la sua situazione',
    risposte: [
      { id: 'si_insoddisfatto', label: 'Sì, ma non sono soddisfatto',    sub: 'Valuteremo insieme la situazione' },
      { id: 'si_proseguire',    label: 'Sì, voglio un secondo parere',   sub: 'Il confronto professionale è prezioso' },
      { id: 'no_primo',         label: 'No, è il mio primo contatto',    sub: "Partiamo dall'inizio insieme" },
      { id: 'no_urgente',       label: 'No, ma la situazione è urgente', sub: 'Contatto prioritario' },
    ],
  },
  {
    id: 'contatto_preferito', step: 5,
    testo: 'Come preferisce essere contattato?',
    sottotesto: 'La prima consulenza è gratuita — sceglie lei quando e come',
    risposte: [
      { id: 'telefono', label: 'Per telefono il prima possibile', sub: 'Risposta entro le ore di studio' },
      { id: 'email',    label: 'Per email, rispondo con comodo',  sub: 'Risposta entro 24 ore lavorative' },
      { id: 'entrambi', label: 'Telefono e email entrambi',       sub: 'Massima disponibilità' },
    ],
  },
]

/* ─── ESITI ───────────────────────────────────────────────────────────────── */
const AREE_CONFIG: Record<string, EsitoConfig> = {
  lavoro:     { area: 'Diritto del Lavoro',     urgenza: 'alta',      link: '/aree-di-pratica/diritto-lavoro',    messaggio: "La sua situazione rientra nell'area del Diritto del Lavoro.",           azione: "In questa materia vigono termini perentori molto brevi. Le consigliamo di contattarci al più presto per non perdere i suoi diritti.",         termini: 'Impugnazione licenziamento: 60 giorni — art. 6 L. 604/1966' },
  famiglia:   { area: 'Diritto di Famiglia',    urgenza: 'media',     link: '/aree-di-pratica/diritto-famiglia',  messaggio: "La sua situazione rientra nell'area del Diritto di Famiglia.",         azione: "Le pratiche di famiglia richiedono un approccio attento e personalizzato. La prima consulenza ci permetterà di valutare la strategia migliore." },
  previdenza: { area: 'Previdenza Sociale',      urgenza: 'alta',      link: '/aree-di-pratica',                   messaggio: "La sua situazione rientra nel Diritto Previdenziale (INPS, pensione, NASpI).",  azione: "I ricorsi previdenziali hanno termini precisi. Agire tempestivamente è fondamentale per non perdere diritti maturati.", termini: 'Ricorso INPS: 90 giorni dalla notifica' },
  medica:     { area: 'Responsabilità Medica',  urgenza: 'media',     link: '/aree-di-pratica',                   messaggio: "La sua situazione rientra nell'area della Responsabilità Medica.",       azione: "Le cause mediche richiedono una valutazione tecnica specializzata. Raccogliere tutta la documentazione sanitaria prima della consulenza è fondamentale.", termini: 'Prescrizione: 10 anni per resp. contrattuale (art. 2946 c.c.)' },
  civile:     { area: 'Diritto Civile',          urgenza: 'normale',   link: '/aree-di-pratica/diritto-civile',    messaggio: "La sua situazione rientra nell'area del Diritto Civile.",               azione: "Contratti, immobili, risarcimenti: valutiamo insieme la soluzione più efficiente, preferendo la via stragiudiziale quando possibile." },
  penale:     { area: 'Diritto Penale',          urgenza: 'immediata', link: '/aree-di-pratica',                   messaggio: "La sua situazione rientra nell'area Penale.",                           azione: "In materia penale ogni ora può essere determinante. La consigliamo di contattarci immediatamente per tutelare i suoi diritti fin dal primo momento.", termini: 'Garanzia difensiva: il difensore può intervenire da subito' },
  fisco:      { area: 'Diritto Tributario',      urgenza: 'alta',      link: '/aree-di-pratica',                   messaggio: "La sua situazione rientra nell'area del Diritto Tributario.",           azione: "I ricorsi tributari hanno termini perentori. Cartelle, accertamenti e avvisi di irregolarità vanno impugnati entro 60 giorni dalla notifica.", termini: 'Ricorso tributario: 60 giorni dalla notifica — art. 21 D.Lgs. 546/1992' },
  altro:      { area: 'Consulenza Generale',     urgenza: 'normale',   link: '/aree-di-pratica',                   messaggio: "Abbiamo bisogno di qualche informazione in più per orientarla correttamente.",  azione: "La prima consulenza gratuita ci permetterà di inquadrare la sua situazione e indirizzarla verso la soluzione più adatta." },
}

const URGENZA_CONFIG = {
  immediata: { label: 'Urgenza massima — agire subito', color: '#991B1B', bg: '#FEF2F2', border: '#FECACA' },
  alta:      { label: 'Urgenza alta — tempi brevi',     color: '#92400E', bg: '#FFFBEB', border: '#FDE68A' },
  media:     { label: 'Consigliato agire presto',        color: '#78350F', bg: '#FEF3C7', border: '#FDE68A' },
  normale:   { label: 'Nessuna urgenza immediata',       color: '#065F46', bg: '#ECFDF5', border: '#A7F3D0' },
}

function calcolaUrgenza(risposte: Record<string, string>): 'immediata' | 'alta' | 'media' | 'normale' {
  const area   = risposte['tipo_problema'] || 'altro'
  const atto   = risposte['atto_ricevuto'] || 'no'
  const quando = risposte['quando_accaduto'] || 'in_corso'
  const base   = AREE_CONFIG[area]?.urgenza || 'normale'
  if (atto === 'si_recente') return 'immediata'
  if (area === 'penale')     return 'immediata'
  if (atto === 'si_vecchio' && (base === 'alta' || base === 'immediata')) return 'alta'
  if (quando === 'meno_30gg' && base !== 'normale') return 'alta'
  return base as 'immediata' | 'alta' | 'media' | 'normale'
}

const VANTAGGI = [
  { titolo: 'Termini urgenti evidenziati', desc: 'Il sistema segnala immediatamente se ci sono scadenze imminenti per non perdere i propri diritti.' },
  { titolo: 'Nessun dato personale',       desc: 'Lo strumento non raccoglie informazioni sensibili. Le domande sono completamente anonime.' },
  { titolo: 'Prima consulenza gratuita',   desc: "Qualunque sia l'esito, la prima consulenza con l'Avv. Cuomo è sempre gratuita e senza impegno." },
  { titolo: 'Risposta in 48 ore',          desc: "Dopo il contatto, l'Avv. Cuomo si fa vivo entro 48 ore lavorative per valutare la situazione." },
]

/* ─── COMPONENTE ──────────────────────────────────────────────────────────── */
export default function IntakePrequalificazioneSection() {
  const [step,     setStep]     = useState(0)
  const [risposte, setRisposte] = useState<Record<string, string>>({})
  const [done,     setDone]     = useState(false)
  const [fading,   setFading]   = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const TOTALE = DOMANDE.length

  const transita = (cb: () => void) => {
    setFading(true)
    setTimeout(() => { cb(); setFading(false) }, 200)
  }

  const handleRisposta = (domId: string, rispId: string) => {
    const nuove = { ...risposte, [domId]: rispId }
    setRisposte(nuove)
    const domanda = DOMANDE.find(d => d.id === domId)
    if (!domanda) return
    if (domanda.step < TOTALE) {
      transita(() => setStep(domanda.step + 1))
    }
  }

  const indietro = () => { if (step > 0) transita(() => setStep(s => s - 1)) }
  const avanti   = () => { if (step === 0) transita(() => setStep(1)) }
  const vediEsito = () => transita(() => setDone(true))
  const reset    = () => transita(() => { setStep(0); setRisposte({}); setDone(false) })

  const areaId   = risposte['tipo_problema'] || 'altro'
  const esito    = AREE_CONFIG[areaId] || AREE_CONFIG['altro']
  const urgenza  = calcolaUrgenza(risposte)
  const urgCfg   = URGENZA_CONFIG[urgenza]
  const domanda  = step > 0 && step <= TOTALE ? DOMANDE[step - 1] : null
  const progressPct = step === 0 ? 0 : Math.round((step / TOTALE) * 100)

  /* ── INTRO ─────────────────────────────────────────────────────────────── */
  const renderIntro = () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 56, height: 56, borderRadius: '4px',
        background: 'var(--paper-deep)', border: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px',
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--wine)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
        </svg>
      </div>

      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: '0.65rem',
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--gold)', marginBottom: '8px',
      }}>
        Strumento gratuito
      </p>
      <h3 style={{
        fontFamily: "'Newsreader', serif", fontSize: '1.4rem', fontWeight: 500,
        color: 'var(--ink)', marginBottom: '12px', textAlign: 'center',
      }}>
        Parliamo della sua situazione
      </h3>
      <p style={{
        fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.75,
        maxWidth: '340px', margin: '0 auto 28px',
      }}>
        5 domande rapide per capire in quale area del diritto si colloca la sua
        situazione e se esistono termini urgenti da rispettare.
      </p>

      <div style={{ maxWidth: '280px', margin: '0 auto 32px', textAlign: 'left' }}>
        {[
          'Nessun dato personale richiesto',
          'Prima consulenza gratuita',
          'Risposta entro 48 ore lavorative',
          'Zero impegno prima del contatto',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: 'var(--paper-deep)', border: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--wine)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>{item}</span>
          </div>
        ))}
      </div>

      <button
        onClick={avanti}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--wine)', color: 'var(--white)',
          border: 'none', borderRadius: '2px',
          padding: '12px 28px', fontSize: '0.85rem', fontWeight: 600,
          fontFamily: "'Inter', sans-serif", cursor: 'pointer',
          letterSpacing: '0.02em',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--wine-deep)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--wine)' }}
      >
        Inizia — 2 minuti
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  )

  /* ── DOMANDA ─────────────────────────────────────────────────────────────── */
  const renderDomanda = () => {
    if (!domanda) return null
    const sel = risposte[domanda.id]
    const cols = domanda.risposte.length <= 4 ? 1 : 2

    return (
      <div>
        <h3 style={{
          fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 500,
          color: 'var(--ink)', marginBottom: '6px', textAlign: 'left',
        }}>
          {domanda.testo}
        </h3>
        {domanda.sottotesto && (
          <p style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', marginBottom: '20px', textAlign: 'left' }}>
            {domanda.sottotesto}
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: cols === 2 ? 'repeat(2, 1fr)' : '1fr',
          gap: '8px',
          marginBottom: '24px',
        }}>
          {domanda.risposte.map(r => {
            const selected = sel === r.id
            return (
              <button
                key={r.id}
                onClick={() => handleRisposta(domanda.id, r.id)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '12px 14px', textAlign: 'left',
                  background: selected ? 'var(--white)' : 'var(--paper)',
                  border: selected ? '1px solid var(--wine)' : '1px solid var(--line)',
                  borderRadius: '4px', cursor: 'pointer',
                  transition: 'border-color 0.15s ease, background 0.15s ease',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (!selected) {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--gold)'
                    el.style.background = 'var(--white)'
                  }
                }}
                onMouseLeave={e => {
                  if (!selected) {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--line)'
                    el.style.background = 'var(--paper)'
                  }
                }}
              >
                <div style={{
                  width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: '1px',
                  background: selected ? 'var(--wine)' : 'var(--paper-deep)',
                  border: selected ? '1px solid var(--wine)' : '1px solid var(--line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {selected && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </div>
                <div>
                  <p style={{
                    fontSize: '0.82rem', fontWeight: selected ? 600 : 400,
                    color: selected ? 'var(--wine)' : 'var(--ink)',
                    marginBottom: '2px', textAlign: 'left',
                  }}>
                    {r.label}
                  </p>
                  {r.sub && (
                    <p style={{ fontSize: '0.7rem', color: 'var(--ink-soft)', textAlign: 'left' }}>
                      {r.sub}
                    </p>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={indietro}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'none', border: '1px solid var(--line)',
              borderRadius: '2px', padding: '8px 14px',
              fontSize: '0.75rem', color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif", cursor: 'pointer',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Indietro
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {DOMANDE.map((_, i) => (
              <div key={i} style={{
                height: 5, borderRadius: '3px',
                width: i === step - 1 ? 16 : 5,
                background: i < step ? 'var(--wine)' : i === step - 1 ? 'var(--gold)' : 'var(--line)',
                transition: 'width 0.3s ease, background 0.3s ease',
              }} />
            ))}
          </div>

          {sel && step === TOTALE ? (
            <button
              onClick={vediEsito}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'var(--wine)', color: 'var(--white)',
                border: 'none', borderRadius: '2px',
                padding: '8px 16px', fontSize: '0.75rem', fontWeight: 600,
                fontFamily: "'Inter', sans-serif", cursor: 'pointer',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--wine-deep)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--wine)' }}
            >
              Vedi risultato
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          ) : (
            <div style={{ width: 100 }} />
          )}
        </div>
      </div>
    )
  }

  /* ── ESITO ──────────────────────────────────────────────────────────────── */
  const renderEsito = () => (
    <div>
      {/* Area individuata */}
      <div style={{
        background: 'var(--paper-deep)', border: '1px solid var(--line)',
        borderLeft: '3px solid var(--wine)', borderRadius: '0 4px 4px 0',
        padding: '16px 20px', marginBottom: '16px',
      }}>
        <p style={{
          fontSize: '0.65rem', fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: '4px',
        }}>
          Area individuata
        </p>
        <p style={{
          fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600,
          color: 'var(--wine)', marginBottom: '6px', textAlign: 'left',
        }}>
          {esito.area}
        </p>
        <Link
          href={esito.link}
          style={{
            fontSize: '0.72rem', color: 'var(--ink-soft)',
            textDecoration: 'underline', fontFamily: "'Inter', sans-serif",
          }}
        >
          Pagina dedicata →
        </Link>
      </div>

      {/* Badge urgenza */}
      <div style={{
        background: urgCfg.bg, border: `1px solid ${urgCfg.border}`,
        borderRadius: '4px', padding: '12px 16px',
        marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '10px',
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: urgCfg.color, flexShrink: 0, marginTop: '5px',
        }} />
        <div>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: urgCfg.color, marginBottom: '2px', textAlign: 'left' }}>
            {urgCfg.label}
          </p>
          {esito.termini && (
            <p style={{ fontSize: '0.7rem', color: urgCfg.color, opacity: 0.75, textAlign: 'left' }}>
              {esito.termini}
            </p>
          )}
        </div>
      </div>

      {/* Messaggio */}
      <div style={{
        background: 'var(--white)', border: '1px solid var(--line)',
        borderRadius: '4px', padding: '16px 20px', marginBottom: '20px',
      }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--ink)', lineHeight: 1.75, marginBottom: '8px', textAlign: 'left' }}>
          {esito.messaggio}
        </p>
        <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', lineHeight: 1.75, textAlign: 'left' }}>
          {esito.azione}
        </p>
      </div>

      {/* CTA contatti */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <a
          href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: 'var(--wine)', color: 'var(--white)',
            textDecoration: 'none', padding: '12px 20px', borderRadius: '2px',
            fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Inter', sans-serif",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Chiama ora — {contactInfo.phoneOffice}
        </a>
        <Link
          href="/contatti"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: 'var(--paper-deep)', color: 'var(--ink)',
            textDecoration: 'none', padding: '11px 20px', borderRadius: '2px',
            fontSize: '0.85rem', fontFamily: "'Inter', sans-serif",
            border: '1px solid var(--line)',
          }}
        >
          Richiedi consulenza via modulo
        </Link>
      </div>

      {/* Riepilogo compatto */}
      <div style={{
        borderTop: '1px solid var(--line)', paddingTop: '16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <button
          onClick={reset}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '0.72rem', color: 'var(--ink-soft)', fontFamily: "'Inter', sans-serif',",
            display: 'flex', alignItems: 'center', gap: '5px',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--wine)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-soft)' }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.87"/>
          </svg>
          Ricomincia
        </button>
        <p style={{ fontSize: '0.65rem', color: 'var(--ink-soft)', opacity: 0.6, textAlign: 'right', maxWidth: '200px' }}>
          Orientamento preliminare — non costituisce parere legale (art. 2 L. 247/2012)
        </p>
      </div>
    </div>
  )

  /* ── RENDER ────────────────────────────────────────────────────────────── */
  return (
    <section id="intake-prequalificazione" style={{ background: 'var(--paper-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '80px 0' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 28px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p
            className="eyebrow"
            data-animate
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.7rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--gold)', marginBottom: '12px',
            }}
          >
            Prima di chiamare
          </p>
          <h2
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 500, color: 'var(--ink)', marginBottom: '16px', textAlign: 'left',
            }}
          >
            Trova la tua area legale
          </h2>
          <p
            data-animate
            style={{ fontSize: '0.92rem', color: 'var(--ink-soft)', maxWidth: '560px', lineHeight: 1.8 }}
          >
            Rispondi a 5 domande: capiamo insieme di cosa ha bisogno, se ci sono termini
            urgenti e come possiamo aiutarla al meglio fin dal primo contatto.
          </p>
        </div>

        {/* Layout 2 colonne */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* Wizard */}
          <div
            ref={cardRef}
            style={{
              background: 'var(--white)', border: '1px solid var(--line)',
              borderRadius: '4px', padding: '32px',
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            {/* Progress bar */}
            {step > 0 && !done && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.65rem', fontFamily: "'Inter', sans-serif", color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Domanda {step} di {TOTALE}
                  </span>
                  <span style={{ fontSize: '0.65rem', fontFamily: "'Inter', sans-serif", color: 'var(--gold)' }}>
                    {progressPct}%
                  </span>
                </div>
                <div style={{ height: 3, background: 'var(--line)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: '2px',
                    width: `${progressPct}%`,
                    background: 'var(--wine)',
                    transition: 'width 0.4s ease',
                  }} />
                </div>
              </div>
            )}

            {done ? renderEsito() : step === 0 ? renderIntro() : renderDomanda()}
          </div>

          {/* Colonna destra */}
          <div data-animate>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--gold)', marginBottom: '12px',
            }}>
              Perché questo strumento
            </p>
            <h3 style={{
              fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 500,
              color: 'var(--ink)', marginBottom: '16px', textAlign: 'left',
            }}>
              La risposta giusta inizia dalle domande giuste
            </h3>
            <p style={{
              fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              Ogni area del diritto ha regole e termini diversi. Un licenziamento richiede
              azione entro 60 giorni; un ricorso tributario entro 60 giorni dalla notifica;
              un danno medico si prescrive in 10 anni. Sapere dove ci si trova è il primo
              passo per non perdere i propri diritti.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {VANTAGGI.map(({ titolo, desc }) => (
                <div key={titolo} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '14px 16px', background: 'var(--white)',
                  border: '1px solid var(--line)', borderRadius: '4px',
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--wine)', flexShrink: 0, marginTop: '6px',
                  }} />
                  <div>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px', textAlign: 'left' }}>
                      {titolo}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', lineHeight: 1.65, textAlign: 'left' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '0.65rem', fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--ink-soft)', marginBottom: '10px', opacity: 0.7,
            }}>
              Preferisce contattarci direttamente?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`tel:${contactInfo.phoneOffice.replace(/\s/g, '')}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--wine)', textDecoration: 'none',
                  fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Inter', sans-serif",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {contactInfo.phoneOffice}
              </a>
              <a
                href={`mailto:${contactInfo.emailStudio}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--ink-soft)', textDecoration: 'none',
                  fontSize: '0.82rem', fontFamily: "'Inter', sans-serif",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                {contactInfo.emailStudio}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #intake-prequalificazione .intake-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
