'use client'

import { useState, useMemo } from 'react'
import { faqs, FAQ_CATEGORIE } from '@/lib/faq-data'

export default function FAQSection() {
  const [catFilter, setCatFilter] = useState('Tutte')
  const [search,    setSearch]    = useState('')
  const [openIdx,   setOpenIdx]   = useState<number | null>(null)
  const [showAll,   setShowAll]   = useState(false)

  const filtered = useMemo(() => {
    let list = catFilter === 'Tutte' ? faqs : faqs.filter(f => f.cat === catFilter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(f =>
        f.d.toLowerCase().includes(q) ||
        f.r.toLowerCase().includes(q) ||
        f.cat.toLowerCase().includes(q)
      )
    }
    return list
  }, [catFilter, search])

  const visible = search.trim()
    ? filtered
    : catFilter !== 'Tutte'
      ? filtered
      : showAll
        ? filtered
        : []

  function handleCat(cat: string) {
    if (cat === 'Tutte') {
      if (catFilter === 'Tutte' && showAll) {
        setShowAll(false)
      } else {
        setShowAll(true)
        setCatFilter('Tutte')
      }
    } else {
      if (catFilter === cat) {
        setCatFilter('Tutte')
        setShowAll(false)
      } else {
        setCatFilter(cat)
        setShowAll(false)
      }
    }
    setOpenIdx(null)
    setSearch('')
  }

  return (
    <section
      id="faq"
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '80px 28px',
      }}
    >
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
        Risposte immediate
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '8px',
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
          Domande frequenti
        </h2>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--ink-soft)',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {faqs.length} domande · {FAQ_CATEGORIE.length - 1} categorie
        </span>
      </div>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          maxWidth: '560px',
          marginBottom: '36px',
        }}
      >
        Risposte su temi legali frequenti. Fonti: normativa vigente, Ministero della Giustizia, Corte di Cassazione, Consiglio Nazionale Forense.
      </p>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: '480px', marginBottom: '28px' }}>
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setShowAll(true) }}
          placeholder="Cerca tra le domande…"
          style={{
            width: '100%',
            padding: '10px 36px 10px 14px',
            border: '1px solid var(--line)',
            borderRadius: '2px',
            background: 'var(--white)',
            color: 'var(--ink)',
            fontSize: '0.85rem',
            fontFamily: "'Inter', sans-serif",
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--ink-soft)',
              fontSize: '1rem',
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Cancella ricerca"
          >
            ×
          </button>
        )}
      </div>

      {/* Filtri categoria */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        {FAQ_CATEGORIE.map(cat => {
          const isTutte  = cat === 'Tutte'
          const isActive = isTutte ? (catFilter === 'Tutte' && showAll) : catFilter === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCat(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '2px',
                border: isActive ? '1px solid var(--wine)' : '1px solid var(--line)',
                background: isActive ? 'var(--wine)' : 'transparent',
                color: isActive ? 'var(--white)' : 'var(--ink-soft)',
                fontSize: '0.75rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
            >
              {cat}{isTutte ? ` (${faqs.length})` : ''}
            </button>
          )
        })}
      </div>

      {/* Stato */}
      {!search && catFilter === 'Tutte' && !showAll && (
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--ink-soft)',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '24px',
          }}
        >
          Seleziona una categoria o clicca <strong>Tutte ({faqs.length})</strong> per vedere l&apos;elenco completo.
        </p>
      )}
      {search.trim() && (
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--ink-soft)',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '16px',
          }}
        >
          {filtered.length} {filtered.length === 1 ? 'risultato' : 'risultati'} per &ldquo;{search}&rdquo;
        </p>
      )}

      {/* Accordion */}
      {visible.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '48px' }}>
          {visible.map((faq, i) => {
            const globalIdx = faqs.indexOf(faq)
            const isOpen    = openIdx === globalIdx
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${isOpen ? 'var(--wine)' : 'var(--line)'}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                  background: isOpen ? 'var(--white)' : 'transparent',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : globalIdx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '16px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.65rem',
                        fontFamily: "'Inter', sans-serif",
                        color: isOpen ? 'var(--wine)' : 'var(--ink-soft)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {faq.cat}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Newsreader', serif",
                        fontSize: '0.95rem',
                        fontWeight: isOpen ? 500 : 400,
                        color: isOpen ? 'var(--ink)' : 'var(--ink)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {faq.d}
                    </p>
                  </div>
                  <span
                    style={{
                      color: isOpen ? 'var(--wine)' : 'var(--ink-soft)',
                      fontSize: '1.1rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 20px 20px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.8,
                        textAlign: 'justify',
                        marginTop: '16px',
                      }}
                    >
                      {faq.r}
                    </p>
                    <div
                      style={{
                        marginTop: '16px',
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <a
                        href="tel:+390819211148"
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--wine)',
                          fontFamily: "'Inter', sans-serif",
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--wine)',
                          paddingBottom: '1px',
                        }}
                      >
                        Consulenza gratuita →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Stato vuoto */}
      {visible.length === 0 && (search.trim() || catFilter !== 'Tutte' || showAll) && (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Nessuna domanda trovata.
          </p>
          <button
            type="button"
            onClick={() => { setSearch(''); setCatFilter('Tutte'); setShowAll(false) }}
            style={{
              padding: '8px 20px',
              border: '1px solid var(--line)',
              borderRadius: '2px',
              background: 'transparent',
              color: 'var(--ink)',
              fontSize: '0.8rem',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
            }}
          >
            Azzera filtri
          </button>
        </div>
      )}

      {/* CTA bottom */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
          Non hai trovato la risposta che cercavi?
        </p>
        <a
          href="tel:+390819211148"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--wine)',
            color: 'var(--white)',
            padding: '11px 22px',
            borderRadius: '2px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.02em',
          }}
        >
          Chiama lo studio
        </a>
      </div>

      <p
        style={{
          marginTop: '24px',
          fontSize: '0.7rem',
          color: 'var(--ink-faint)',
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.6,
        }}
      >
        Le risposte hanno finalità informativa e non costituiscono parere legale ai sensi dell&apos;art. 2 L. 247/2012.
        Per una valutazione personalizzata: +39 081 921 1148 — cuomo.avv.giuseppe@tiscali.it
      </p>
    </section>
  )
}
