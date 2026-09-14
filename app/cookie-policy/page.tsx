import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Studio Legale Cuomo',
  description: 'Informativa sui cookie del sito Studio Legale Cuomo — solo cookie tecnici necessari al funzionamento.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px 48px' }}>
          <p className="eyebrow" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Documenti legali
          </p>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: 'var(--ink)', textAlign: 'left' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '12px', textAlign: 'left' }}>
            Ai sensi del Provvedimento Garante n. 229/2014 e del GDPR — Aggiornata al 1° gennaio 2026
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 28px' }}>
        {[
          {
            titolo: '1. Cosa sono i cookie',
            testo: 'I cookie sono piccoli file di testo che i siti web salvano nel browser dell\'utente durante la navigazione. Vengono utilizzati per far funzionare il sito in modo efficiente e per trasmettere informazioni.',
          },
          {
            titolo: '2. Cookie utilizzati da questo sito',
            testo: 'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento:\n\n• slc_cookie_consent — memorizza la scelta dell\'utente in merito al banner cookie (accettazione o rifiuto). Durata: persistente (localStorage). Nessun dato inviato a terzi.\n\nNon vengono installati cookie di profilazione, cookie di terze parti a fini pubblicitari, né strumenti di tracciamento comportamentale.',
          },
          {
            titolo: '3. Dati di navigazione',
            testo: 'I sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono, nel corso del loro normale esercizio, alcuni dati la cui trasmissione è implicita nell\'uso dei protocolli di comunicazione di Internet (es. indirizzo IP, tipo di browser). Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull\'uso del sito e per controllarne il corretto funzionamento.',
          },
          {
            titolo: '4. Come disabilitare i cookie',
            testo: 'L\'utente può disabilitare i cookie tecnici dal proprio browser, ma questo potrebbe pregiudicare il corretto funzionamento del sito. Le impostazioni dei cookie si trovano di norma nel menu "Strumenti" o "Preferenze" del browser.',
          },
          {
            titolo: '5. Modifiche alla presente policy',
            testo: 'Il Titolare si riserva di modificare la presente Cookie Policy in qualunque momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.',
          },
        ].map((sezione) => (
          <div key={sezione.titolo} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px', textAlign: 'left' }}>
              {sezione.titolo}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
              {sezione.testo}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
