const province = [
  {
    nome: 'Nocera Inferiore',
    sigla: 'SA',
    badge: 'Sede Principale',
    tribunale: 'Tribunale di Nocera Inferiore',
    comuni: 19,
    specialita: ['Diritto del Lavoro', 'Diritto di Famiglia', 'Previdenza', 'Resp. Medica'],
    desc: 'Sede principale dello Studio in Via G. Matteotti 14, a pochi passi dal Tribunale. Oltre 25 anni di presenza quotidiana nel foro locale.',
    highlight: true,
  },
  {
    nome: 'Salerno',
    sigla: 'SA',
    badge: 'Corte d\'Appello',
    tribunale: 'Tribunale di Salerno',
    comuni: 158,
    specialita: ['Diritto Civile', 'Diritto Commerciale', 'Privacy & GDPR', 'Diritto Penale'],
    desc: 'Capoluogo e sede della Corte d\'Appello. Centro direzionale del Sud Italia con controversie complesse in materia civile e commerciale.',
    highlight: false,
  },
  {
    nome: 'Napoli',
    sigla: 'NA',
    badge: 'Metropoli giudiziaria',
    tribunale: 'Tribunale di Napoli',
    comuni: 92,
    specialita: ['Corte d\'Appello', 'Diritto Societario', 'Appalti', 'Lavoro & Previdenza'],
    desc: 'Terza città italiana per popolazione, sede della Corte d\'Appello e del TAR Campania. Mercato legale più dinamico del Meridione.',
    highlight: false,
  },
  {
    nome: 'Avellino',
    sigla: 'AV',
    badge: 'Irpinia',
    tribunale: 'Tribunale di Avellino',
    comuni: 119,
    specialita: ['Diritto Agrario', 'Appalti Pubblici', 'Diritto del Lavoro', 'Successioni'],
    desc: 'Capoluogo irpino con forte vocazione agricola e manifatturiera. Controversie in materia agricola, appalti e lavoro.',
    highlight: false,
  },
  {
    nome: 'Caserta',
    sigla: 'CE',
    badge: 'Terra di Lavoro',
    tribunale: 'Tribunale di S. Maria Capua Vetere',
    comuni: 104,
    specialita: ['Diritto Urbanistico', 'Diritto Ambientale', 'Appalti', 'Diritto di Famiglia'],
    desc: 'Provincia con importante polo industriale. Numerosi contenziosi in materia di edilizia, appalti e diritto ambientale.',
    highlight: false,
  },
  {
    nome: 'Benevento',
    sigla: 'BN',
    badge: 'Sannio',
    tribunale: 'Tribunale di Benevento',
    comuni: 78,
    specialita: ['Diritto Penale', 'Diritto Civile', 'Successioni', 'Diritto Agrario'],
    desc: 'Capoluogo sannita al crocevia tra Campania e Molise. Foro attivo con specialità nelle materie penali e civili.',
    highlight: false,
  },
]

const stats = [
  { value: '6',    label: 'Province campane', sub: 'tutta la Campania' },
  { value: '570+', label: 'Comuni coperti',   sub: 'intera regione' },
  { value: '25+',  label: 'Anni nel foro',    sub: 'dal 1999' },
  { value: '5M+',  label: 'Abitanti serviti', sub: 'bacino di utenza' },
]

export default function TerritorioServitoSection() {
  return (
    <section style={{ padding: '80px 28px', background: 'var(--white)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '12px',
        }}>
          Copertura territoriale
        </p>
        <h2 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 500, color: 'var(--ink)',
          marginBottom: '16px', textAlign: 'left',
        }}>
          6 Province della Campania
        </h2>
        <p style={{
          fontSize: '0.88rem', color: 'var(--ink-soft)',
          lineHeight: 1.7, maxWidth: '560px', marginBottom: '48px',
        }}>
          Lo Studio Legale Cuomo opera in tutte le province campane, con sede principale a Nocera Inferiore
          e presenza continuativa nei tribunali di Salerno, Napoli, Avellino, Caserta e Benevento.
        </p>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1px',
          background: 'var(--line)',
          border: '1px solid var(--line)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '48px',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ padding: '24px 20px', background: 'var(--white)', textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                fontWeight: 600, color: 'var(--wine)', lineHeight: 1, marginBottom: '6px',
              }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--ink)', fontFamily: "'Inter', sans-serif", marginBottom: '2px' }}>
                {s.label}
              </p>
              <p style={{ fontSize: '0.65rem', color: 'var(--ink-soft)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Griglia province */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {province.map(p => (
            <div key={p.nome} style={{
              padding: '24px',
              background: p.highlight ? 'var(--ink)' : 'var(--white)',
              border: `1px solid ${p.highlight ? 'var(--ink)' : 'var(--line)'}`,
              borderRadius: '4px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <p style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1rem', fontWeight: 600,
                    color: p.highlight ? 'var(--white)' : 'var(--ink)',
                    textAlign: 'left',
                  }}>
                    {p.nome}
                  </p>
                  <p style={{
                    fontSize: '0.68rem', color: p.highlight ? 'rgba(255,253,248,0.4)' : 'var(--ink-soft)',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {p.tribunale}
                  </p>
                </div>
                <span style={{
                  fontSize: '0.62rem', letterSpacing: '0.06em',
                  color: p.highlight ? 'var(--gold)' : 'var(--gold)',
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap',
                  background: p.highlight ? 'rgba(155,125,53,0.15)' : 'rgba(155,125,53,0.08)',
                  padding: '3px 8px', borderRadius: '2px',
                  flexShrink: 0,
                }}>
                  {p.badge}
                </span>
              </div>

              <p style={{
                fontSize: '0.8rem',
                color: p.highlight ? 'rgba(255,253,248,0.6)' : 'var(--ink-soft)',
                lineHeight: 1.65, marginBottom: '16px', textAlign: 'left',
              }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.specialita.map(s => (
                  <span key={s} style={{
                    fontSize: '0.65rem', letterSpacing: '0.03em',
                    color: p.highlight ? 'rgba(255,253,248,0.5)' : 'var(--ink-soft)',
                    border: `1px solid ${p.highlight ? 'rgba(255,253,248,0.15)' : 'var(--line)'}`,
                    padding: '3px 8px', borderRadius: '2px',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
