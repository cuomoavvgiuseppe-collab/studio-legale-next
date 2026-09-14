'use client'

import { useState } from 'react'

type Complessita = 'bassa' | 'media' | 'alta' | 'variabile'

interface Pratica {
  nome: string
  min: number
  max: number
  complessita: Complessita
  nota: string
  fattori?: string[]
}

interface Area {
  id: string
  label: string
  pratiche: Pratica[]
}

const AREE: Area[] = [
  {
    id: 'lavoro',
    label: 'Diritto del Lavoro',
    pratiche: [
      { nome: 'Impugnazione licenziamento illegittimo', min: 1500, max: 5000, complessita: 'media', nota: 'Include impugnazione stragiudiziale e ricorso al Tribunale del Lavoro. La tutela reintegratoria (art. 18) o indennitaria (D.Lgs. 23/2015) incide sul valore della causa.', fattori: ['Tipo di tutela applicabile', 'Anzianità aziendale', 'Numero di udienze', 'Eventuale accordo conciliativo'] },
      { nome: 'Recupero retribuzioni / TFR arretrati', min: 800, max: 3000, complessita: 'bassa', nota: 'Spesso risolto con decreto ingiuntivo o ricorso al rito del lavoro. Se il datore è fallito, si attiva il Fondo di Garanzia INPS.', fattori: ['Importo da recuperare', 'Presenza del datore o fallimento', 'Via monitoria o ordinaria'] },
      { nome: 'Causa per mobbing / straining', min: 3000, max: 8000, complessita: 'alta', nota: 'Causa complessa che richiede documentazione estesa e spesso perizie medico-legali sul danno biologico da stress.', fattori: ['Durata della condotta', 'Perizia medico-legale (costo separato)', 'Numero di testimoni'] },
      { nome: 'Riconoscimento infortunio + danno differenziale', min: 2000, max: 6000, complessita: 'alta', nota: 'Include fase INAIL e eventuale causa civile contro il datore per il danno non coperto (art. 10 D.P.R. 1124/1965).', fattori: ['Percentuale invalidità INAIL', 'Azione verso il datore', 'CTU medico-legale'] },
      { nome: 'Impugnazione sanzione disciplinare', min: 600, max: 2000, complessita: 'bassa', nota: 'Sanzioni diverse dal licenziamento. Procedura snella, spesso risolta in sede sindacale o con ricorso di urgenza.', fattori: ['Tipo di sanzione', 'Via sindacale o giudiziaria'] },
      { nome: 'Discriminazione sul lavoro (art. 28 Stat. Lav.)', min: 1500, max: 4000, complessita: 'media', nota: 'Procedimento di urgenza con tempi rapidi. Risultato ottenibile in poche settimane.', fattori: ['Tipo di discriminazione', 'Prove disponibili', 'Urgenza del procedimento'] },
    ],
  },
  {
    id: 'famiglia',
    label: 'Diritto di Famiglia',
    pratiche: [
      { nome: 'Separazione consensuale', min: 1500, max: 4000, complessita: 'bassa', nota: 'Include trattative, accordo e udienza di omologazione. Con accordo tra le parti, procedura rapida (2-4 mesi).', fattori: ['Presenza di figli minori', 'Complessità patrimoniale', 'Accordo sulla casa coniugale'] },
      { nome: 'Separazione giudiziale', min: 3500, max: 9000, complessita: 'alta', nota: 'Procedimento contenzioso completo con udienze presidenziali e istruttorie. I tempi possono superare 2 anni.', fattori: ['Numero di udienze', 'CTU sul minore o patrimoniale', 'Durata del procedimento'] },
      { nome: 'Divorzio consensuale', min: 1200, max: 3500, complessita: 'bassa', nota: 'Possibile anche con negoziazione assistita senza udienza. Procedura più snella se dopo separazione già omologata.', fattori: ['Via tribunale o negoziazione assistita', 'Accordo tra le parti'] },
      { nome: 'Divorzio giudiziale', min: 3500, max: 10000, complessita: 'alta', nota: 'Procedimento contenzioso. I costi non comprendono eventuali CTU o perizie patrimoniali.', fattori: ['Durata del procedimento', 'Perizie patrimoniali', 'Questioni sui figli'] },
      { nome: 'Provvedimenti urgenti su figli minori', min: 1200, max: 3500, complessita: 'media', nota: 'Ricorso di urgenza per pericolo del minore. Tempi rapidi (giorni/settimane). Poi giudizio di merito.', fattori: ['Urgenza', 'Tipo di provvedimento', 'Giudizio di merito successivo'] },
      { nome: 'Modifica condizioni separazione / divorzio', min: 800, max: 2500, complessita: 'bassa', nota: 'Revisione dell\'assegno di mantenimento o condizioni sui figli per cambiamento delle circostanze.', fattori: ['Via consensuale o giudiziale', 'Entità della modifica'] },
    ],
  },
  {
    id: 'previdenza',
    label: 'Previdenza Sociale',
    pratiche: [
      { nome: 'Ricorso per NASpI negata / ridotta', min: 600, max: 2000, complessita: 'bassa', nota: 'Ricorso amministrativo prima, poi eventuale Tribunale previdenziale. Spesso risolto in fase amministrativa.', fattori: ['Via amministrativa o giudiziaria', 'Documentazione disponibile'] },
      { nome: 'Ricorso per pensione negata / rivalutazione', min: 1200, max: 4000, complessita: 'media', nota: 'Include analisi estratto conto contributivo e ricorso al Tribunale previdenziale.', fattori: ['Tipo di pensione contestata', 'Anni di contributi da accertare'] },
      { nome: 'Riconoscimento invalidità civile', min: 800, max: 2500, complessita: 'media', nota: 'Ricorso avverso il verbale della Commissione Medica con nomina di CTU.', fattori: ['Tipo di patologia', 'CTU medico-legale', 'Percentuale da riconoscere'] },
      { nome: 'Controversia malattia professionale / INAIL', min: 1500, max: 5000, complessita: 'alta', nota: 'Include fase amministrativa INAIL e ricorso al Tribunale con CTU specialistica.', fattori: ['Tipo di malattia', 'Percentuale invalidità', 'Esposizione documentata'] },
      { nome: 'Recupero contributi omessi dal datore', min: 1500, max: 4500, complessita: 'alta', nota: 'Include denuncia penale ex art. 37 L. 689/1981 e azione civile con perizia attuariale.', fattori: ['Anni di omissione', 'Solvibilità del datore', 'Perizia attuariale'] },
    ],
  },
  {
    id: 'civile',
    label: 'Diritto Civile',
    pratiche: [
      { nome: 'Decreto ingiuntivo', min: 600, max: 2500, complessita: 'bassa', nota: 'Procedura rapida per recupero crediti documentati. Se opposto, si trasforma in giudizio ordinario.', fattori: ['Importo del credito', 'Eventuale opposizione', 'Esecuzione forzata successiva'] },
      { nome: 'Risarcimento danni da sinistro stradale', min: 1500, max: 5000, complessita: 'media', nota: 'Varia molto in base alla gravità delle lesioni. Per danni gravi il risarcimento può raggiungere centinaia di migliaia di euro.', fattori: ['Gravità delle lesioni', 'Percentuale invalidità', 'Trattativa con assicurazione'] },
      { nome: 'Causa per vizi dell\'immobile', min: 2000, max: 6000, complessita: 'media', nota: 'Include perizia tecnica (costo separato). La garanzia per vizi ex art. 1490 c.c. si prescrive in 1 anno dalla scoperta.', fattori: ['Entità dei vizi', 'Perizia tecnica (costo separato)', 'Accordo o giudizio'] },
      { nome: 'Controversia condominiale', min: 1200, max: 4000, complessita: 'media', nota: 'Mediazione obbligatoria prima del giudizio. Varia in base alla complessità della questione.', fattori: ['Tipo di controversia', 'Mediazione o giudizio', 'Valore della causa'] },
      { nome: 'Accertamento usucapione', min: 2500, max: 6000, complessita: 'alta', nota: 'Include istruttoria testimoniale e spesso CTU catastale. Sentenza costitutiva della proprietà.', fattori: ['Anni di possesso da documentare', 'CTU catastale', 'Numero di testimoni'] },
      { nome: 'Successione ereditaria contestata', min: 3000, max: 9000, complessita: 'alta', nota: 'Include azione di riduzione per lesione di legittima o impugnazione del testamento.', fattori: ['Valore dell\'eredità', 'Numero di eredi', 'Tipo di azione'] },
    ],
  },
  {
    id: 'penale',
    label: 'Diritto Penale',
    pratiche: [
      { nome: 'Difesa nel procedimento penale ordinario', min: 2000, max: 8000, complessita: 'variabile', nota: 'Varia enormemente in base al reato, alle fasi del procedimento e alla durata del dibattimento. Il preventivo viene definito per fasi.', fattori: ['Tipo e gravità del reato', 'Fase processuale', 'Durata del dibattimento', 'Eventuale appello'] },
      { nome: 'Patteggiamento (assistenza)', min: 1000, max: 3000, complessita: 'bassa', nota: 'Negoziazione della pena con il PM. Procedura snella senza dibattimento. Riduzione di 1/3 della pena.', fattori: ['Tipo di reato', 'Pena da negoziare', 'Precedenti penali'] },
      { nome: 'Messa alla prova (art. 168-bis c.p.)', min: 1000, max: 2500, complessita: 'bassa', nota: 'Estingue il reato dopo il periodo di prova. Disponibile con Riforma Cartabia per reati fino a 4 anni.', fattori: ['Tipo di reato', 'Programma UEPE', 'Risarcimento alla persona offesa'] },
      { nome: 'Parte offesa / costituzione parte civile', min: 800, max: 3000, complessita: 'media', nota: 'Include presentazione querela, monitoraggio indagini e eventuale costituzione di parte civile.', fattori: ['Tipo di reato subito', 'Fase del procedimento', 'Valore del risarcimento'] },
    ],
  },
  {
    id: 'fisco',
    label: 'Diritto Tributario',
    pratiche: [
      { nome: 'Ricorso avverso cartella esattoriale', min: 800, max: 3000, complessita: 'media', nota: 'Dipende dal tributo, dall\'importo e dai motivi di ricorso (prescrizione, decadenza, vizi formali).', fattori: ['Importo della cartella', 'Tipo di tributo', 'Motivi di ricorso'] },
      { nome: 'Impugnazione avviso di accertamento', min: 1200, max: 4000, complessita: 'media', nota: 'Include contraddittorio preventivo obbligatorio (D.Lgs. 219/2023) e ricorso alla Corte di Giustizia Tributaria.', fattori: ['Importo accertato', 'Tipo di accertamento', 'Prove a disposizione'] },
      { nome: 'Contestazione redditometro / sintetico', min: 1500, max: 4500, complessita: 'alta', nota: 'Include analisi patrimonio, raccolta prove giustificative e memorie difensive.', fattori: ['Importo dell\'accertamento', 'Fonti di reddito da giustificare'] },
      { nome: 'Assistenza in verifica fiscale GdF / AE', min: 1500, max: 5000, complessita: 'alta', nota: 'Assistenza durante accesso e verifica fino al PVC. Intervento tempestivo riduce i rischi.', fattori: ['Durata della verifica', 'Tipo di tributo', 'Fasi post-verifica'] },
    ],
  },
  {
    id: 'medica',
    label: 'Responsabilità Medica',
    pratiche: [
      { nome: 'Danno biologico da errore medico', min: 3000, max: 10000, complessita: 'alta', nota: 'Include ATP obbligatorio (art. 8 L. 24/2017), perizia medico-legale (costo separato: 1.500-5.000 €) e eventuale giudizio.', fattori: ['Gravità del danno', 'CTU medico-legale (costo separato)', 'Struttura pubblica o privata'] },
      { nome: 'Mancato / errato consenso informato', min: 2000, max: 6000, complessita: 'media', nota: 'Il Tribunale condanna anche senza danno biologico grave (Cass. SS.UU. 28985/2019).', fattori: ['Documentazione del consenso', 'Esito dell\'intervento'] },
      { nome: 'Ritardo diagnostico', min: 3500, max: 10000, complessita: 'alta', nota: 'Causa di lunga durata con perizie multidisciplinari. Il nesso causale è il punto cruciale.', fattori: ['Tipo di patologia', 'Entità del ritardo', 'Perizie multidisciplinari'] },
      { nome: 'Infezione nosocomiale', min: 3000, max: 8000, complessita: 'alta', nota: 'La struttura risponde per custodia ex art. 1218 c.c. — inversione dell\'onere della prova.', fattori: ['Tipo di infezione', 'Prova del nesso causale', 'Esito clinico'] },
    ],
  },
]

const coloriComplessita: Record<Complessita, { bg: string; color: string; label: string }> = {
  bassa:     { bg: 'rgba(16,185,129,0.08)',  color: '#10B981', label: 'Bassa' },
  media:     { bg: 'rgba(155,125,53,0.08)',   color: 'var(--gold)', label: 'Media' },
  alta:      { bg: 'rgba(107,30,34,0.08)',    color: 'var(--wine)', label: 'Alta' },
  variabile: { bg: 'rgba(100,100,100,0.08)', color: 'var(--ink-soft)', label: 'Variabile' },
}

const MAX_SCALA = 12000

export default function CostiOrientativiSection() {
  const [areaId, setAreaId] = useState<string>(AREE[0].id)
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const area = AREE.find(a => a.id === areaId)!

  return (
    <section style={{ padding: '80px 28px', background: 'var(--paper-deep)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '12px',
        }}>
          Trasparenza tariffaria
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', marginBottom: '8px' }}>
          <h2 style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 500, color: 'var(--ink)', textAlign: 'left', margin: 0,
          }}>
            Costi orientativi
          </h2>
          <span style={{
            fontSize: '0.72rem', color: 'var(--ink-soft)',
            fontFamily: "'Inter', sans-serif",
          }}>
            D.M. 55/2014 e s.m.i. — aggiornato 2026
          </span>
        </div>
        <p style={{
          fontSize: '0.85rem', color: 'var(--ink-soft)',
          lineHeight: 1.7, maxWidth: '620px', marginBottom: '36px',
        }}>
          Indicazioni orientative sulle fasce di costo per le principali pratiche legali.
          Ogni situazione è unica: il preventivo definitivo viene fornito dopo un primo colloquio gratuito.
        </p>

        {/* Selettore area */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {AREE.map(a => (
            <button
              key={a.id}
              type="button"
              onClick={() => { setAreaId(a.id); setOpenIdx(null) }}
              style={{
                padding: '7px 16px', borderRadius: '2px', cursor: 'pointer',
                fontSize: '0.78rem', fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.02em',
                border: areaId === a.id ? '1px solid var(--wine)' : '1px solid var(--line)',
                background: areaId === a.id ? 'var(--wine)' : 'var(--white)',
                color: areaId === a.id ? 'var(--white)' : 'var(--ink-soft)',
                transition: 'all 0.15s ease',
              }}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Lista pratiche */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {area.pratiche.map((pratica, i) => {
            const isOpen = openIdx === i
            const comp = coloriComplessita[pratica.complessita]
            const barPct = pratica.max === 0 ? 100 : Math.min((pratica.max / MAX_SCALA) * 100, 100)
            const barMinPct = (pratica.min / MAX_SCALA) * 100

            return (
              <div key={i} style={{
                border: `1px solid ${isOpen ? 'var(--wine)' : 'var(--line)'}`,
                borderRadius: '4px', overflow: 'hidden',
                background: 'var(--white)',
                transition: 'border-color 0.2s ease',
              }}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: '16px',
                    padding: '16px 20px', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "'Newsreader', serif", fontSize: '0.93rem',
                      fontWeight: isOpen ? 500 : 400, color: 'var(--ink)',
                      lineHeight: 1.4, margin: 0, textAlign: 'left',
                    }}>
                      {pratica.nome}
                    </p>
                    {/* Barra visuale */}
                    <div style={{
                      position: 'relative', height: '3px',
                      background: 'var(--line)', borderRadius: '2px',
                      marginTop: '10px',
                    }}>
                      <div style={{
                        position: 'absolute', left: `${barMinPct}%`,
                        width: `${barPct - barMinPct}%`, height: '100%',
                        background: isOpen ? 'var(--wine)' : 'var(--gold)',
                        borderRadius: '2px', transition: 'background 0.2s ease',
                      }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{
                        fontFamily: "'Newsreader', serif", fontSize: '0.9rem',
                        fontWeight: 600, color: isOpen ? 'var(--wine)' : 'var(--ink)',
                        margin: 0,
                      }}>
                        {pratica.max === 0
                          ? `da € ${pratica.min.toLocaleString('it-IT')}`
                          : `€ ${pratica.min.toLocaleString('it-IT')} – ${pratica.max.toLocaleString('it-IT')}`
                        }
                      </p>
                      <span style={{
                        display: 'inline-block', fontSize: '0.6rem',
                        color: comp.color, background: comp.bg,
                        padding: '2px 6px', borderRadius: '2px',
                        fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em',
                        marginTop: '4px',
                      }}>
                        {comp.label}
                      </span>
                    </div>
                    <span style={{
                      color: isOpen ? 'var(--wine)' : 'var(--ink-soft)',
                      fontSize: '1.1rem', lineHeight: 1, flexShrink: 0,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      display: 'inline-block',
                    }}>
                      +
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--line)' }}>
                    <p style={{
                      fontSize: '0.83rem', color: 'var(--ink-soft)',
                      lineHeight: 1.75, marginTop: '16px', marginBottom: '12px',
                    }}>
                      {pratica.nota}
                    </p>
                    {pratica.fattori && pratica.fattori.length > 0 && (
                      <div>
                        <p style={{
                          fontSize: '0.65rem', letterSpacing: '0.08em',
                          textTransform: 'uppercase', color: 'var(--ink-soft)',
                          fontFamily: "'Inter', sans-serif", marginBottom: '8px',
                        }}>
                          Fattori che influenzano il costo
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {pratica.fattori.map(f => (
                            <span key={f} style={{
                              fontSize: '0.72rem', color: 'var(--ink-soft)',
                              border: '1px solid var(--line)',
                              padding: '3px 10px', borderRadius: '2px',
                              fontFamily: "'Inter', sans-serif",
                            }}>
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <p style={{
          marginTop: '28px', fontSize: '0.7rem',
          color: 'var(--ink-faint)', fontFamily: "'Inter', sans-serif",
          lineHeight: 1.6,
        }}>
          I valori indicati sono stime orientative basate su D.M. 55/2014 e s.m.i. Non costituiscono preventivo vincolante.
          Il costo effettivo dipende dalla complessità del caso, dalla durata del procedimento e dagli atti necessari.
          Prima consulenza gratuita: +39 081 921 11 48
        </p>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .costi-bar-label { display: none !important; }
        }
      `}</style>
    </section>
  )
}
