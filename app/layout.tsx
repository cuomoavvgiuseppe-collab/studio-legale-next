import type { Metadata } from 'next'
import Link from 'next/link'
import { Newsreader, Source_Serif_4, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/CookieBanner'
import Header from '@/components/Header'
import ScrollAnimator from '@/components/ScrollAnimator'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-source-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.studiolegalecuomogiuseppe.it'),
  title: {
    template: '%s | Studio Legale Cuomo',
    default: 'Avv. Giuseppe Cuomo — Studio Legale Nocera Inferiore',
  },
  description:
    'Studio Legale Cuomo — Avvocato Giuseppe Cuomo, Patrocinante in Cassazione. Diritto penale, civile, tributario, del lavoro e previdenziale. Nocera Inferiore (SA).',
  verification: {
    google: 'xbEZOK4TrHysdeEz8hXZexsAJ_7p1roIHtsYFa-FkgQ',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Studio Legale Cuomo',
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
}

const footerNavLinks = [
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Aree di pratica', href: '/aree-di-pratica' },
  { label: 'Consulenza preventiva', href: '/consulenza-preventiva' },
  { label: 'Software legali', href: '/software' },
  { label: 'Contatti', href: '/contatti' },
]

const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Note legali', href: '/note-legali' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${newsreader.variable} ${sourceSerif4.variable} ${inter.variable}`}
    >
      <body>
        <style>{`
          :root {
            --paper: #F6F3EC;
            --paper-deep: #EFEAE0;
            --ink: #1C1917;
            --ink-soft: #4A4550;
            --wine: #6B1E22;
            --wine-deep: #4F1519;
            --gold: #9B7D35;
            --gold-light: #C4A855;
            --brass: #9B7D35;
            --line: #D4C9B5;
            --white: #FFFDF8;
            --surface: #FFFFFF;
            --ink-faint: #E8E4DC;
          }
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            background: var(--paper);
            color: var(--ink);
            font-family: var(--font-inter), sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            position: relative;
          }
          body::after {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.032;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
            background-size: 300px 300px;
          }
          p { text-align: justify; }
          a { transition: color 0.15s ease, opacity 0.15s ease; }
          .hover-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
          }
          .hover-card:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 28px rgba(28,25,23,0.12) !important;
          }
          .eyebrow::before {
            content: '';
            display: inline-block;
            width: 5px; height: 5px;
            border-radius: 50%;
            background: var(--gold);
            margin-right: 10px;
            vertical-align: middle;
            margin-bottom: 1px;
          }
          ::-webkit-scrollbar { width: 5px; }
          ::-webkit-scrollbar-track { background: var(--paper); }
          ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: var(--gold); }
        `}</style>

        <Header />
        <ScrollAnimator />

        <main style={{ minHeight: '70vh' }}>{children}</main>

        <CookieBanner />
        <Analytics />

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid rgba(212,201,181,0.2)',
          background: 'var(--ink)',
          padding: '64px 0 48px',
        }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 28px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '48px',
              marginBottom: '48px',
            }}>
              <div>
                <p style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 600, fontSize: '1.1rem',
                  color: 'var(--white)',
                  marginBottom: '6px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}>
                  Studio Legale{' '}
                  <span style={{ color: 'var(--gold-light)' }}>Cuomo</span>
                </p>
                <p style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,253,248,0.45)',
                  lineHeight: 1.75,
                  textAlign: 'left',
                  marginTop: '12px',
                }}>
                  Diritto penale, civile, tributario, del lavoro e previdenziale.
                  Patrocinante in Cassazione e dinanzi alle Giurisdizioni Superiori.
                  Nocera Inferiore (SA).
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  Navigazione
                </p>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {footerNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} style={{
                      fontSize: '0.82rem',
                      color: 'rgba(255,253,248,0.55)',
                      textDecoration: 'none',
                      fontFamily: "'Inter', sans-serif",
                      textAlign: 'left',
                    }}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  Contatti
                </p>
                <p style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,253,248,0.45)',
                  lineHeight: 1.9,
                  textAlign: 'left',
                }}>
                  Tel: +39 081 921 1148<br />
                  <a
                    href="mailto:info@studiolegalecuomogiuseppe.it"
                    style={{ color: 'rgba(255,253,248,0.45)', textDecoration: 'none' }}
                  >
                    info@studiolegalecuomogiuseppe.it
                  </a><br />
                  <a
                    href="mailto:cuomo.avv.giuseppe@tiscali.it"
                    style={{ color: 'rgba(255,253,248,0.45)', textDecoration: 'none' }}
                  >
                    cuomo.avv.giuseppe@tiscali.it
                  </a><br />
                  PEC: g.cuomo@avvocatinocera-pec.it<br />
                  Via G. Matteotti, 14 — Nocera Inferiore (SA)
                </p>
              </div>
            </div>

            <hr style={{
              border: 'none',
              borderTop: '1px solid rgba(212,201,181,0.1)',
              margin: '0 0 28px',
            }} />

            <p style={{
              fontSize: '0.72rem',
              color: 'rgba(255,253,248,0.3)',
              lineHeight: 1.85,
              textAlign: 'left',
            }}>
              <strong style={{ color: 'rgba(255,253,248,0.55)', fontWeight: 500 }}>
                Avv. Giuseppe Cuomo
              </strong>
              {' '}— Via G. Matteotti, 14 — 84014 Nocera Inferiore (SA) · P.IVA 03619420650 ·
              Ordine Avvocati Nocera Inferiore n. 2016000093 · Patrocinante in Cassazione e
              dinanzi alle Giurisdizioni Superiori
            </p>

            <div style={{
              marginTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 20px',
              alignItems: 'center',
            }}>
              {footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255,253,248,0.25)',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {link.label}
                </Link>
              ))}
              <span style={{
                marginLeft: 'auto',
                fontSize: '0.7rem',
                color: 'rgba(255,253,248,0.2)',
                fontFamily: "'Inter', sans-serif",
              }}>
                &copy; 2026 Studio Legale Cuomo
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
