import type { Metadata } from 'next'
import { contactInfo } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Privacy Policy — Studio Legale Cuomo',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) — Studio Legale Avv. Giuseppe Cuomo.',
}

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px 48px' }}>
          <p className="eyebrow" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Documenti legali
          </p>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: 'var(--ink)', textAlign: 'left' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '12px', textAlign: 'left' }}>
            Ai sensi del Regolamento (UE) 2016/679 — Aggiornata al 1° gennaio 2026
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 28px' }}>
        {[
          {
            titolo: '1. Titolare del trattamento',
            testo: `Avv. Giuseppe Cuomo — Studio Legale Cuomo\n${contactInfo.address}, ${contactInfo.zipCode} ${contactInfo.city} (${contactInfo.province})\nP.IVA: ${contactInfo.vatNumber}\nEmail: ${contactInfo.emailStudio}\nPEC: ${contactInfo.pec}`,
          },
          {
            titolo: '2. Dati raccolti',
            testo: 'Il sito raccoglie esclusivamente i dati forniti volontariamente dall\'utente tramite il modulo di contatto (nome, indirizzo email, numero di telefono, testo del messaggio). Non vengono raccolti dati di navigazione a fini di profilazione né vengono utilizzati cookie di tracciamento di terze parti.',
          },
          {
            titolo: '3. Finalità e base giuridica del trattamento',
            testo: 'I dati sono trattati per rispondere alle richieste di consulenza (art. 6, par. 1, lett. b GDPR — esecuzione di misure precontrattuali) e per adempiere ad obblighi di legge (art. 6, par. 1, lett. c GDPR). Non vengono utilizzati per finalità di marketing o profilazione.',
          },
          {
            titolo: '4. Conservazione dei dati',
            testo: 'I dati sono conservati per il tempo strettamente necessario a evadere la richiesta e, in caso di instaurazione del rapporto professionale, per il tempo previsto dagli obblighi di legge in materia di esercizio della professione forense (art. 5, par. 1, lett. e GDPR).',
          },
          {
            titolo: '5. Diritti dell\'interessato',
            testo: 'L\'interessato può esercitare, in qualsiasi momento, i diritti previsti dagli artt. 15–22 GDPR: accesso, rettifica, cancellazione, limitazione, portabilità, opposizione. Le richieste vanno inviate a: ' + contactInfo.emailStudio + ' oppure tramite PEC: ' + contactInfo.pec,
          },
          {
            titolo: '6. Cookie',
            testo: 'Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non vengono installati cookie di profilazione o di terze parti a fini pubblicitari. Per maggiori informazioni consultare la Cookie Policy.',
          },
          {
            titolo: '7. Reclamo all\'Autorità di controllo',
            testo: 'L\'interessato ha il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it), Piazza Venezia 11, 00187 Roma.',
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
