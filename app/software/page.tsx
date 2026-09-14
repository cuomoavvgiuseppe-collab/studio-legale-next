import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Software Legali — Studio Legale Cuomo',
  description: 'Oltre 50 utility legali gratuite, calcolatori, chatbot AI e software per la Pubblica Amministrazione. Cuomo Legal Platform.',
}

const categorie = [
  {
    titolo: 'Calcolatori legali',
    descrizione: 'Strumenti di calcolo per lavoro, previdenza, diritto di famiglia e responsabilità civile.',
    tools: [
      { nome: 'Calcolatore Busta Paga Pro', slug: 'calcolatore-busta-paga' },
      { nome: 'Calcolatore TFR / NASpI', slug: 'calcolatore-tfr-naspi' },
      { nome: 'Calcolatore Assegno di Mantenimento', slug: 'calcolatore-mantenimento' },
      { nome: 'Calcolatore Danno Biologico', slug: 'calcolatore-danno-biologico' },
      { nome: 'Calcolatore Interessi Legali', slug: 'calcolatore-interessi' },
      { nome: 'Calcolatore Prescrizione Reati', slug: 'calcolatore-prescrizione' },
    ],
  },
  {
    titolo: 'Analisi documenti',
    descrizione: 'Strumenti AI per analisi di contratti, cartelle esattoriali e atti amministrativi.',
    tools: [
      { nome: 'Analisi Cartella Esattoriale Pro', slug: 'analisi-cartella' },
      { nome: 'Analizzatore Contratti Pro', slug: 'analizzatore-contratti' },
      { nome: 'Analizzatore Documenti', slug: 'analizzatore-documenti' },
    ],
  },
  {
    titolo: 'Chatbot AI specializzati',
    descrizione: '33 assistenti virtuali per orientamento giuridico immediato nelle principali aree del diritto.',
    tools: [
      { nome: 'Chatbot Tributario', slug: 'chatbot-tributario' },
      { nome: 'Chatbot Diritto del Lavoro', slug: 'chatbot-lavoro' },
      { nome: 'Chatbot Diritto di Famiglia', slug: 'chatbot-famiglia' },
      { nome: 'Chatbot Diritto Penale', slug: 'chatbot-penale' },
    ],
  },
  {
    titolo: 'Software Pubblica Amministrazione',
    descrizione: 'Suite software dedicate a funzionari e professionisti PA: appalti, edilizia, enti locali e altro.',
    tools: [
      { nome: 'AppaltiPro', slug: 'appalti-pro' },
      { nome: 'AMMinPro', slug: 'ammin-pro' },
      { nome: 'DocentiPlus', slug: 'docenti-plus' },
      { nome: 'SanitaPlus', slug: 'sanita-plus' },
    ],
  },
]

export default function SoftwarePage() {
  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px 64px' }}>
          <p className="eyebrow" data-animate style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
            Cuomo Legal Platform
          </p>
          <h1 data-animate style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, lineHeight: 1.2, color: 'var(--ink)', marginBottom: '16px', textAlign: 'left' }}>
            Software e utility legali
          </h1>
          <p data-animate style={{ fontSize: '1rem', color: 'var(--ink-soft)', maxWidth: '580px', lineHeight: 1.75 }}>
            Oltre 50 strumenti gratuiti — calcolatori, analizzatori AI, chatbot specializzati e software
            per la Pubblica Amministrazione. Tutti sviluppati dallo Studio Legale Cuomo.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        {categorie.map((cat) => (
          <div key={cat.titolo} data-animate style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', textAlign: 'left' }}>
              {cat.titolo}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', marginBottom: '24px', lineHeight: 1.65, textAlign: 'left' }}>
              {cat.descrizione}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {cat.tools.map((tool) => (
                <div key={tool.slug} className="hover-card" style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '4px', padding: '20px 24px' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 500, textAlign: 'left', marginBottom: '8px' }}>
                    {tool.nome}
                  </p>
                  <Link href={`/software/${tool.slug}`} style={{ fontSize: '0.75rem', color: 'var(--wine)', textDecoration: 'none', borderBottom: '1px solid var(--wine)', paddingBottom: '1px', fontFamily: "'Inter', sans-serif" }}>
                    Apri strumento
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div data-animate style={{ background: 'var(--ink)', borderRadius: '4px', padding: '40px 48px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--white)', marginBottom: '6px', textAlign: 'left' }}>
              Tutti gli strumenti sono gratuiti
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,253,248,0.5)', textAlign: 'left' }}>
              Per assistenza legale personalizzata, contatta lo Studio.
            </p>
          </div>
          <Link href="/contatti" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--gold)', color: 'var(--ink)', padding: '13px 26px', borderRadius: '2px', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Inter', sans-serif", flexShrink: 0 }}>
            Contattaci
          </Link>
        </div>
      </section>
    </>
  )
}
