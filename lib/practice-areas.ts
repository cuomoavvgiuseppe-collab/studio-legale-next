export interface PracticeArea {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image?: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'diritto-civile',
    title: 'Diritto Civile',
    subtitle: 'Tutela dei diritti',
    description:
      'Risoluzione di controversie, contratti, recupero crediti e tutela dei diritti civili.',
    longDescription:
      'Lo Studio assiste i clienti in tutte le controversie di diritto civile: obbligazioni e contratti, responsabilità extracontrattuale, risarcimento danni, diritti reali e successioni. Ogni caso viene affrontato con un\'analisi approfondita e una strategia processuale personalizzata.',
    image: '/diritto-civile.jpg',
  },
  {
    slug: 'diritto-lavoro',
    title: 'Diritto del Lavoro',
    subtitle: 'Previdenza sociale',
    description: 'Consulenza e assistenza per tutte le problematiche relative al lavoro e previdenza.',
    longDescription:
      'L\'Avvocato Cuomo assiste lavoratori e datori di lavoro in materia di licenziamenti illegittimi, mobbing, discriminazioni, contratti di lavoro, controversie sindacali e previdenziali. Profonda competenza nei rapporti con INPS, INAIL e in tutte le fasi del contenzioso giuslavoristico.',
    image: '/spec-lavoro.webp',
  },
  {
    slug: 'diritto-famiglia',
    title: 'Diritto di Famiglia',
    subtitle: 'Mediazione familiare',
    description: 'Separazioni, divorzi, affidamento dei figli e mediazione familiare.',
    longDescription:
      'Lo Studio offre un approccio attento e umano in tutte le vicende familiari: separazione personale e divorzio, affidamento e mantenimento dei figli, modifica delle condizioni di separazione, adozione e unioni civili. La mediazione familiare è proposta come alternativa al contenzioso per tutelare al meglio gli interessi di tutte le parti coinvolte.',
    image: '/spec-famiglia.webp',
  },
  {
    slug: 'diritto-penale',
    title: 'Diritto Penale',
    subtitle: 'Difesa in ogni grado',
    description: 'Difesa in giudizio, reati tributari, cybercrime, reati societari e d\'impresa.',
    longDescription:
      'Lo Studio garantisce difesa tecnica qualificata in ogni fase del procedimento penale, dalla notizia di reato al giudizio in Cassazione. Specializzazione in diritto penale dell\'economia, reati tributari, cybercrime e reati d\'impresa. Esperienza consolidata nei riti alternativi e nel patteggiamento.',
  },
  {
    slug: 'diritto-tributario',
    title: 'Diritto Tributario',
    subtitle: 'Contenzioso fiscale',
    description: 'Accertamenti fiscali, contenzioso tributario, pianificazione fiscale.',
    longDescription:
      'Assistenza nelle controversie con l\'Agenzia delle Entrate, Guardia di Finanza e Agenzia della Riscossione. Impugnazione di avvisi di accertamento, cartelle esattoriali, avvisi bonari. Difesa in ogni grado delle Commissioni Tributarie. Consulenza su pianificazione fiscale e prevenzione dei rischi tributari.',
  },
  {
    slug: 'diritto-previdenziale',
    title: 'Diritto Previdenziale',
    subtitle: 'INPS · INAIL · Pensioni',
    description: 'Pensioni, invalidità, contributi previdenziali, controversie INPS/INAIL.',
    longDescription:
      'Lo Studio assiste i clienti in tutte le controversie previdenziali: riconoscimento di pensioni di vecchiaia, invalidità e reversibilità, ricostruzione di carriera contributiva, indennità di disoccupazione (NASpI, DIS-COLL), infortuni sul lavoro e malattie professionali INAIL. Esperienza consolidata nel recupero di contributi versati in eccesso o non riconosciuti.',
  },
  {
    slug: 'responsabilita-medica',
    title: 'Responsabilità Medica',
    subtitle: 'Malpractice medica',
    description:
      'Risoluzione di controversie per responsabilità professionale medica e risarcimento danni.',
    longDescription:
      'L\'Avvocato Cuomo assiste i pazienti — e i loro familiari — che hanno subito danni a causa di errori medici o sanitari. Gestione dell\'intero iter risarcitorio: consulenza tecnica medico-legale, negoziazione con assicurazioni, e azione giudiziaria in sede civile e penale ai sensi della Legge Gelli-Bianco (L. 24/2017).',
    image: '/malpractice-medica.jpg',
  },
]

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug)
}
