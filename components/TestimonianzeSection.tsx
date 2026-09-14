'use client'

import { useState, useMemo } from 'react'
import { testimonianze, MATERIE } from '@/lib/testimonials'

const PER_PAGE = 6

export default function TestimonianzeSection() {
  const [filtro, setFiltro] = useState('Tutte')
  const [page, setPage]     = useState(0)

  const filtered = useMemo(() => {
    if (filtro === 'Tutte') return testimonianze
    return testimonianze.filter(t => t.m === filtro)
  }, [filtro])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const visibili   = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  function handleFiltro(m: string) {
    setFiltro(m)
    setPage(0)
  }

  return (
    <section
      id="testimonianze"
      style={{
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '80px 28px',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '12px',
          }}
        >
          Clienti
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 500,
              color: 'var(--ink)',
              textAlign: 'left',
              margin: 0,
            }}
          >
            Testimonianze
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              color: 'var(--ink-soft)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>★★★★★</span>
            5.0 · {testimonianze.length} recensioni
          </div>
        </div>

        {/* Filtri materia */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {MATERIE.map(m => (
            <button
              key={m}
              type="button"
              onClick={() => handleFiltro(m)}
              style={{
                padding: '6px 14px',
                borderRadius: '2px',
                border: filtro === m ? '1px solid var(--wine)' : '1px solid var(--line)',
                background: filtro === m ? 'var(--wine)' : 'transparent',
                color: filtro === m ? 'var(--white)' : 'var(--ink-soft)',
                fontSize: '0.75rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {visibili.map((t, i) => (
            <div
              key={`${t.i}-${i}`}
              className="hover-card"
              style={{
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Stars */}
              <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px' }}>
                ★★★★★
              </div>

              {/* Testo */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  textAlign: 'left',
                  flex: 1,
                }}
              >
                &ldquo;{t.t}&rdquo;
              </p>

              {/* Footer */}
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  paddingTop: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '8px',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: '2px',
                    }}
                  >
                    {t.i} · {t.l}
                  </p>
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--ink-soft)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {t.m}
                  </p>
                </div>
                <div
                  style={{
                    background: 'var(--paper-deep)',
                    border: '1px solid var(--line)',
                    borderRadius: '2px',
                    padding: '3px 8px',
                    fontSize: '0.68rem',
                    color: 'var(--wine)',
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.esito}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginazione */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage(p => p - 1)}
              style={{
                padding: '8px 16px',
                border: '1px solid var(--line)',
                borderRadius: '2px',
                background: 'transparent',
                color: page === 0 ? 'var(--ink-faint)' : 'var(--ink)',
                cursor: page === 0 ? 'default' : 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ← Precedente
            </button>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--ink-soft)',
                fontFamily: "'Inter', sans-serif",
                padding: '0 8px',
              }}
            >
              {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              disabled={page === totalPages - 1}
              onClick={() => setPage(p => p + 1)}
              style={{
                padding: '8px 16px',
                border: '1px solid var(--line)',
                borderRadius: '2px',
                background: 'transparent',
                color: page === totalPages - 1 ? 'var(--ink-faint)' : 'var(--ink)',
                cursor: page === totalPages - 1 ? 'default' : 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Successiva →
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <p
          style={{
            marginTop: '32px',
            fontSize: '0.72rem',
            color: 'var(--ink-faint)',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Le testimonianze sono reali. I nominativi sono espressi con iniziali per tutela della privacy.
        </p>
      </div>
    </section>
  )
}
