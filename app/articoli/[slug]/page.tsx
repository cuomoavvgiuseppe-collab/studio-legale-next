import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface Props {
  params: Promise<{ slug: string }>
}

async function getArticolo(slug: string) {
  const id = parseInt(slug)
  if (isNaN(id)) return null

  const { data, error } = await supabase
    .from('articoli')
    .select('id, title, content, category, publish_date, created_at, excerpt, fonte, url_fonte, author')
    .eq('id', id)
    .eq('status', 'published')
    .single()
  if (error || !data) return null
  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const art = await getArticolo(slug)
  if (!art) return { title: 'Articolo non trovato' }

  return {
    title: `${art.title} — Studio Legale Cuomo`,
    description: art.excerpt ?? `Approfondimento giuridico: ${art.title}. Studio Legale Cuomo, Nocera Inferiore.`,
    openGraph: {
      title: art.title,
      description: art.excerpt ?? '',
      type: 'article',
      publishedTime: art.publish_date ?? art.created_at,
    },
  }
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

export default async function ArticoloPage({ params }: Props) {
  const { slug } = await params
  const art = await getArticolo(slug)
  if (!art) notFound()

  const data = new Date(art.publish_date ?? art.created_at).toLocaleDateString('it-IT', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <>
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 28px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Link href="/articoli" style={{ fontSize: '0.72rem', fontFamily: "'Inter', sans-serif", color: 'var(--ink-soft)', textDecoration: 'none', borderBottom: '1px solid var(--line)' }}>
              ← Articoli
            </Link>
            <span style={{ fontSize: '0.72rem', color: 'var(--ink-faint)' }}>·</span>
            <span style={{ fontSize: '0.72rem', fontFamily: "'Inter', sans-serif", color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {CATEGORIA_LABELS[art.category] ?? art.category}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, lineHeight: 1.25, color: 'var(--ink)', marginBottom: '16px', textAlign: 'left' }}>
            {art.title}
          </h1>
          {art.excerpt && (
            <p style={{ fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '20px', textAlign: 'left' }}>
              {art.excerpt}
            </p>
          )}
          <p style={{ fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", color: 'var(--ink-soft)' }}>
            {art.author ? `${art.author} · ` : ''}{data}
          </p>
        </div>
      </section>

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 28px 96px' }}>
        <div
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'var(--ink)',
            textAlign: 'left',
          }}
        >
          {art.content.split('\n\n').map((para: string, i: number) => (
            <p key={i} style={{ marginBottom: '1.4em' }}>{para}</p>
          ))}
        </div>

        {(art.fonte || art.url_fonte) && (
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
            <p style={{ fontSize: '0.78rem', fontFamily: "'Inter', sans-serif", color: 'var(--ink-soft)' }}>
              Fonte:{' '}
              {art.url_fonte ? (
                <a href={art.url_fonte} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--wine)' }}>
                  {art.fonte ?? art.url_fonte}
                </a>
              ) : (
                art.fonte
              )}
            </p>
          </div>
        )}

        <div style={{ marginTop: '64px', padding: '32px', background: 'var(--paper-deep)', borderRadius: '4px', border: '1px solid var(--line)' }}>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '8px', textAlign: 'left' }}>
            Hai bisogno di assistenza legale?
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginBottom: '20px', textAlign: 'left' }}>
            L&apos;Avv. Giuseppe Cuomo offre consulenza personalizzata nelle materie trattate.
          </p>
          <Link href="/contatti" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--wine)', color: 'var(--white)', padding: '11px 22px', borderRadius: '2px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
            Contatta lo Studio
          </Link>
        </div>
      </article>
    </>
  )
}
