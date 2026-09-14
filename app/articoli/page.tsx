import type { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Articoli legali — Studio Legale Cuomo',
  description: 'Articoli e approfondimenti giuridici redatti dall\'Avv. Giuseppe Cuomo su diritto civile, penale, tributario, del lavoro e previdenziale.',
}

export const revalidate = 300 // ISR ogni 5 minuti

async function getArticoli() {
  const { data, error } = await supabase
    .from('articoli')
    .select('id, titolo, slug, categoria, created_at, excerpt')
    .eq('stato', 'published')
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    console.error('[articoli page]', error.message)
    return []
  }
  return data ?? []
}

const CATEGORIA_LABELS: Record<string, string> = {
  civile: 'Diritto Civile',
  penale: 'Diritto Penale',
  lavoro: 'Diritto del Lavoro',
  tributario: 'Diritto Tributario',
  famiglia: 'Diritto di Famiglia',
  previdenziale: 'Diritto Previdenziale',
  ai_act: 'AI Act & Legal Tech',
}

export default async function ArticoliPage() {
  const articoli = await getArticoli()

  const categorie = Array.from(new Set(articoli.map((a) => a.categoria))).filter(Boolean)

  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px 64px' }}>
          <p className="eyebrow" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
            Approfondimenti
          </p>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px', textAlign: 'left' }}>
            Articoli legali
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink-soft)', maxWidth: '540px', lineHeight: 1.75 }}>
            Approfondimenti giuridici redatti dall&apos;Avv. Giuseppe Cuomo e aggiornati periodicamente.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        {articoli.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', textAlign: 'left' }}>
            Nessun articolo disponibile al momento.
          </p>
        ) : (
          <>
            {categorie.map((cat) => {
              const items = articoli.filter((a) => a.categoria === cat)
              if (!items.length) return null
              return (
                <div key={cat} style={{ marginBottom: '56px' }}>
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--wine)', marginBottom: '20px', textAlign: 'left', letterSpacing: '0.01em' }}>
                    {CATEGORIA_LABELS[cat] ?? cat}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {items.map((art, i) => (
                      <Link
                        key={art.id}
                        href={art.slug ? `/articoli/${art.slug}` : `/articoli/${art.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="hover-card" style={{ padding: '20px 0', borderBottom: '1px solid var(--ink-faint)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                          <div>
                            <p style={{ fontFamily: "'Newsreader', serif", fontSize: '1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '4px', textAlign: 'left' }}>
                              {art.titolo}
                            </p>
                            {art.excerpt && (
                              <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', lineHeight: 1.6, textAlign: 'left' }}>
                                {art.excerpt}
                              </p>
                            )}
                          </div>
                          <p style={{ fontSize: '0.72rem', color: 'var(--ink-soft)', fontFamily: "'Inter', sans-serif", whiteSpace: 'nowrap', marginTop: '2px' }}>
                            {new Date(art.created_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </>
        )}
      </section>
    </>
  )
}
