export interface CityPage {
  slug: string
  nome: string
  provincia: string
  sigla: string
  distanzaKm: number
  descrizione: string
  intro: string
  areeServite: string[]
  notaLocale: string
  tribunale: string
}

export const cities: CityPage[] = [
  {
    slug: 'nocera-inferiore',
    nome: 'Nocera Inferiore',
    provincia: 'Salerno',
    sigla: 'SA',
    distanzaKm: 0,
    descrizione: 'Sede dello Studio Legale Cuomo — assistenza legale diretta e consulenza sul posto',
    intro: "Lo Studio Legale dell'Avv. Giuseppe Cuomo ha sede in Via G. Matteotti 14, a Nocera Inferiore. Iscritta all'Ordine degli Avvocati di Nocera Inferiore dal 1999, lo Studio opera nel cuore dell'Agro Nocerino-Sarnese offrendo assistenza legale qualificata a privati, lavoratori, aziende e pubbliche amministrazioni dell'intera provincia di Salerno.",
    areeServite: ['Diritto del Lavoro', 'Diritto di Famiglia', 'Diritto Penale', 'Diritto Tributario', 'Diritto Previdenziale', 'Diritto Civile', 'Responsabilità Medica'],
    notaLocale: "Sede dello Studio con accesso diretto, ricevimento su appuntamento e consulenza telefonica immediata. Patrocinante in Cassazione — cause in ogni grado di giudizio inclusa la Corte di Cassazione.",
    tribunale: "Tribunale di Nocera Inferiore",
  },
  {
    slug: 'salerno',
    nome: 'Salerno',
    provincia: 'Salerno',
    sigla: 'SA',
    distanzaKm: 22,
    descrizione: 'Avvocato a Salerno — assistenza legale per privati e imprese del capoluogo',
    intro: "L'Avv. Giuseppe Cuomo assiste clienti residenti e con sede a Salerno in tutte le materie del diritto. Con studio a Nocera Inferiore (22 km dal capoluogo), raggiungibile in 25 minuti, garantisce piena operatività davanti al Tribunale di Salerno e alla Corte d'Appello di Salerno per controversie civili, penali, tributarie e lavoristiche.",
    areeServite: ['Diritto del Lavoro', 'Diritto di Famiglia', 'Diritto Penale', 'Diritto Tributario', 'Diritto Previdenziale', 'Diritto Civile', 'Responsabilità Medica'],
    notaLocale: "Operatività piena davanti al Tribunale di Salerno, alla Corte d'Appello di Salerno e alla Corte di Cassazione. Consulenza anche in videocall per i clienti salernitani.",
    tribunale: "Tribunale di Salerno · Corte d'Appello di Salerno",
  },
  {
    slug: 'napoli',
    nome: 'Napoli',
    provincia: 'Napoli',
    sigla: 'NA',
    distanzaKm: 48,
    descrizione: 'Avvocato a Napoli — studio legale specializzato in diritto del lavoro, penale e tributario',
    intro: "L'Avv. Giuseppe Cuomo, Patrocinante in Cassazione, assiste clienti con residenza o sede legale a Napoli in tutte le materie del diritto. Lo Studio, con sede a Nocera Inferiore (48 km, circa 45 minuti), opera davanti al Tribunale di Napoli, alla Corte d'Appello di Napoli e garantisce difesa tecnica in ogni grado, inclusa la Corte di Cassazione a Roma.",
    areeServite: ['Diritto del Lavoro', 'Diritto Penale', 'Diritto Tributario', 'Diritto Civile', 'Responsabilità Medica', 'Diritto di Famiglia', 'Diritto Previdenziale'],
    notaLocale: "Consulenza iniziale in videocall disponibile. Trasferte a Napoli per udienze e incontri con il cliente su appuntamento. Competenza specifica in diritto penale dell'economia e contenzioso tributario.",
    tribunale: "Tribunale di Napoli · Corte d'Appello di Napoli",
  },
  {
    slug: 'avellino',
    nome: 'Avellino',
    provincia: 'Avellino',
    sigla: 'AV',
    distanzaKm: 35,
    descrizione: 'Avvocato ad Avellino — assistenza legale in Irpinia per lavoro, famiglia e previdenza',
    intro: "L'Avv. Giuseppe Cuomo assiste clienti di Avellino e dell'intera Irpinia nelle principali materie del diritto. Lo Studio ha sede a Nocera Inferiore (35 km, circa 40 minuti da Avellino) e garantisce piena operatività davanti al Tribunale di Avellino per controversie lavoristiche, familiari, previdenziali e civili.",
    areeServite: ['Diritto del Lavoro', 'Diritto di Famiglia', 'Diritto Previdenziale', 'Diritto Civile', 'Diritto Tributario', 'Diritto Penale', 'Responsabilità Medica'],
    notaLocale: "Clienti avellinesi seguiti anche da remoto per consulenze preliminari. Udienze al Tribunale di Avellino con presenza del difensore. Specializzazione in diritto previdenziale INPS/INAIL particolarmente rilevante per la realtà lavorativa irpina.",
    tribunale: "Tribunale di Avellino",
  },
  {
    slug: 'caserta',
    nome: 'Caserta',
    provincia: 'Caserta',
    sigla: 'CE',
    distanzaKm: 55,
    descrizione: 'Avvocato a Caserta — difesa penale, lavoro e tributario in Terra di Lavoro',
    intro: "L'Avv. Giuseppe Cuomo offre assistenza legale a privati e imprese con sede o residenza a Caserta e in provincia. Lo Studio ha sede a Nocera Inferiore (55 km, circa 55 minuti) e opera davanti al Tribunale di Santa Maria Capua Vetere, principale sede giudiziaria del casertano, e alla Corte d'Appello di Napoli per i gradi successivi.",
    areeServite: ['Diritto Penale', 'Diritto del Lavoro', 'Diritto Tributario', 'Diritto Civile', 'Diritto di Famiglia', 'Diritto Previdenziale', 'Responsabilità Medica'],
    notaLocale: "Operatività davanti al Tribunale di Santa Maria Capua Vetere. Consulenza in videocall disponibile per una prima valutazione gratuita. Trasferte su appuntamento per clienti casertani.",
    tribunale: "Tribunale di Santa Maria Capua Vetere",
  },
  {
    slug: 'benevento',
    nome: 'Benevento',
    provincia: 'Benevento',
    sigla: 'BN',
    distanzaKm: 60,
    descrizione: 'Avvocato a Benevento — assistenza legale nel Sannio per lavoro, famiglia e previdenza',
    intro: "L'Avv. Giuseppe Cuomo assiste clienti di Benevento e del Sannio in materia di diritto del lavoro, previdenza, diritto di famiglia e diritto tributario. Lo Studio ha sede a Nocera Inferiore (60 km, circa 60 minuti) e garantisce piena assistenza davanti al Tribunale di Benevento in tutte le principali materie civili e penali.",
    areeServite: ['Diritto del Lavoro', 'Diritto Previdenziale', 'Diritto di Famiglia', 'Diritto Civile', 'Diritto Tributario', 'Diritto Penale', 'Responsabilità Medica'],
    notaLocale: "Prima consulenza gratuita anche in videocall per i clienti beneventani. Presenza alle udienze al Tribunale di Benevento. Patrocinante in Cassazione per i gradi superiori.",
    tribunale: "Tribunale di Benevento",
  },
]

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug)
}
