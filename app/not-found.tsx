import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 28px', textAlign: 'center' }}>
      <p style={{
        fontFamily: "'Newsreader', serif",
        fontSize: '5rem',
        fontWeight: 600,
        color: 'var(--ink-faint)',
        lineHeight: 1,
        marginBottom: '24px',
      }}>
        404
      </p>
      <h1 style={{
        fontFamily: "'Newsreader', serif",
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 500,
        color: 'var(--ink)',
        marginBottom: '16px',
        textAlign: 'center',
      }}>
        Pagina non trovata
      </h1>
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--ink-soft)',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'var(--wine)',
          color: 'var(--white)',
          padding: '12px 24px',
          borderRadius: '2px',
          textDecoration: 'none',
          fontSize: '0.88rem',
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
        }}>
          Torna alla home
        </Link>
        <Link href="/contatti" style={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '1px solid var(--line)',
          color: 'var(--ink)',
          padding: '12px 24px',
          borderRadius: '2px',
          textDecoration: 'none',
          fontSize: '0.88rem',
          fontFamily: "'Inter', sans-serif",
        }}>
          Contatti
        </Link>
      </div>
    </section>
  )
}
