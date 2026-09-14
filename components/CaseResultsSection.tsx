'use client'

import { useState, useEffect } from 'react'

// ─── TIPI ─────────────────────────────────────────────────────────────────────
interface CaseResult {
  id: string
  materia: string
  titolo: string
  fatto: string
  risultato: string
  data: string
  esito: 'vittoria' | 'accordo' | 'archiviazione' | 'annullamento'
  importanza: 'alta' | 'media'
  importo?: string
  nota_importo?: string
}

// ─── DATI ─────────────────────────────────────────────────────────────────────
const CASI: CaseResult[] = [
  { id:'cr-01', materia:'Diritto del Lavoro', titolo:'Licenziamento illegittimo — reintegro e risarcimento', fatto:'Lavoratrice con 15 anni di anzianità licenziata senza giusta causa con motivazione pretestuosa. L\'Amministratore aveva comunicato oralmente la cessazione del rapporto senza alcuna procedura scritta.', risultato:'Impugnazione ex art. 18 L. 300/1970. Il Tribunale del Lavoro ha disposto il reintegro e la condanna al pagamento di tutte le retribuzioni perdute, oltre al risarcimento del danno non patrimoniale.', data:'Gennaio 2025', esito:'vittoria', importanza:'alta', importo:'Reintegro + 18 mensilità arretrate', nota_importo:'Art. 18 L. 300/1970 — tutela reale piena' },
  { id:'cr-02', materia:'Diritto di Famiglia', titolo:'Separazione consensuale — accordo patrimoniale complesso', fatto:'Coppia con tre figli minori, patrimonio immobiliare rilevante e attività imprenditoriale comune da sciogliere. Le parti erano in profondo disaccordo su affidamento e divisione dei beni.', risultato:'Negoziazione assistita ex D.L. 132/2014. Raggiunto accordo con affidamento condiviso, assegno mantenimento figli, trasferimento immobiliare con accollo mutuo e liquidazione quota societaria. Omologato in prima udienza.', data:'Febbraio 2025', esito:'accordo', importanza:'alta', importo:'Accordo patrimoniale stimato € 280.000', nota_importo:'Trasferimento immobiliare con accollo mutuo + quota societaria liquidata' },
  { id:'cr-03', materia:'Responsabilità Medica', titolo:'Ritardo diagnostico oncologico — risarcimento danno biologico', fatto:'Diagnosi di neoplasia polmonare ritardata di oltre 14 mesi. Il ritardo ha determinato il passaggio dallo stadio II allo stadio IV con drastica riduzione delle prospettive di sopravvivenza.', risultato:'ATP ex art. 696-bis c.p.c. con CTU medico-legale. Accertato nesso causale tra ritardo e peggioramento prognostico. Liquidazione transattiva per danno biologico permanente, danno morale e perdita di chance.', data:'Marzo 2025', esito:'accordo', importanza:'alta', importo:'Liquidazione transattiva € 185.000', nota_importo:'Danno biologico permanente + danno morale + perdita di chance' },
  { id:'cr-04', materia:'Diritto Civile', titolo:'Vizi occulti immobiliare — risoluzione del contratto', fatto:'Gravi problemi strutturali (infiltrazioni, lesioni portanti, impianto elettrico non a norma) scoperti sei mesi dopo il rogito, taciuti dal venditore.', risultato:'Azione ex art. 1490 c.c. Il Tribunale ha pronunciato la risoluzione con restituzione del prezzo, rimborso spese notarili e risarcimento del danno da mancato godimento.', data:'Marzo 2025', esito:'vittoria', importanza:'alta', importo:'Restituzione prezzo € 145.000 + spese', nota_importo:'Risoluzione ex art. 1490 c.c. — prezzo compravendita + danni da mancato godimento' },
  { id:'cr-05', materia:'Diritto della Previdenza Sociale', titolo:'Riconoscimento invalidità civile — ricorso avverso diniego INPS', fatto:'Lavoratore con patologie plurime (cardiopatia ischemica, ernia discale L4-L5, sindrome ansioso-depressiva) a cui l\'INPS aveva negato l\'invalidità civile con percentuale inferiore al 74%.', risultato:'Ricorso ex art. 445-bis c.p.c. Il CTU ha accertato invalidità 80%, con diritto all\'assegno mensile e alle agevolazioni L. 68/1999 per collocamento mirato.', data:'Aprile 2025', esito:'vittoria', importanza:'alta', importo:'Assegno mensile INPS + arretrati € 9.800', nota_importo:'Invalidità 80% — assegno ordinario ex L. 222/1984 + ratei arretrati dalla domanda' },
  { id:'cr-06', materia:'Diritto del Lavoro', titolo:'Mobbing lavorativo — risarcimento danno esistenziale', fatto:'Dipendente di ente pubblico sottoposta per due anni a esclusione sistematica, dequalificazione professionale e pressioni psicologiche. Disturbo dell\'adattamento certificato.', risultato:'Azione ex artt. 2087 e 2049 c.c. Il Tribunale ha accertato il mobbing verticale e condannato l\'ente al risarcimento del danno biologico (CTU), morale e alla professionalità.', data:'Aprile 2025', esito:'vittoria', importanza:'alta', importo:'Risarcimento € 42.000', nota_importo:'Danno biologico 8% (CTU) + danno morale + danno alla professionalità — art. 2087 c.c.' },
  { id:'cr-07', materia:'Diritto Civile', titolo:'Sinistro stradale — triplicazione del risarcimento assicurativo', fatto:'Pedone investito con lesioni permanenti (danno biologico 9%). L\'assicurazione aveva formulato un\'offerta del tutto inadeguata.', risultato:'Azione diretta ex art. 144 D.Lgs. 209/2005. Perizia medico-legale con corretta quantificazione del danno. Liquidazione tre volte l\'offerta assicurativa iniziale.', data:'Maggio 2025', esito:'accordo', importanza:'alta', importo:'Liquidazione € 38.500 (vs offerta € 12.000)', nota_importo:'Danno biologico 9% — Tabella Unica Nazionale D.P.R. 12/2025' },
  { id:'cr-08', materia:'Diritto di Famiglia', titolo:'Affidamento esclusivo — tutela minore in contesto di violenza', fatto:'Madre di due figli (5 e 8 anni) che aveva subito violenza domestica documentata anche alla presenza dei bambini. Il padre si opponeva all\'allontanamento.', risultato:'Procedimento ex art. 709-ter c.p.c. con provvedimenti urgenti. Il Tribunale ha disposto affidamento esclusivo con incontri padre-figli in luogo protetto.', data:'Maggio 2025', esito:'vittoria', importanza:'alta', importo:'Affidamento esclusivo + mantenimento € 1.200/mese', nota_importo:'Art. 337-ter c.c. — assegno mantenimento parametrato al tenore di vita dei figli' },
  { id:'cr-09', materia:'Diritto della Previdenza Sociale', titolo:'NASpI — ricorso avverso decadenza per rifiuto offerta congrua', fatto:'Lavoratore destinatario di decadenza dalla NASpI per presunto rifiuto offerta di lavoro congrua in provincia diversa, con retribuzione inferiore del 35% e mansioni declassate.', risultato:'Ricorso accolto: l\'offerta non possedeva i requisiti di congruità ex D.M. 10 aprile 2018. INPS condannato al pagamento delle mensilità arretrate con interessi.', data:'Giugno 2025', esito:'vittoria', importanza:'media', importo:'NASpI ripristinata + arretrati € 8.400', nota_importo:'D.M. 10 aprile 2018 — massimale NASpI 2025: € 1.550,42/mese' },
  { id:'cr-10', materia:'Responsabilità Medica', titolo:'Errore chirurgico — risarcimento danno da perdita di chance', fatto:'Lesione iatrogena del nervo safeno durante artroscopia del ginocchio, non comunicata dalla struttura. La complicanza non trattata tempestivamente ha causato deficit sensitivo permanente.', risultato:'ATP con CTU ortopedico e neurologo. Accertato errore nella tecnica e nella gestione post-operatoria. Liquidazione per danno biologico permanente, danno morale e spese mediche future.', data:'Giugno 2025', esito:'accordo', importanza:'alta', importo:'Accordo transattivo € 95.000', nota_importo:'Danno biologico permanente + spese mediche future — L. 24/2017 Legge Gelli-Bianco' },
  { id:'cr-11', materia:'Diritto del Lavoro', titolo:'Lavoro nero — riconoscimento rapporto e versamento contributi', fatto:'Lavoratore impiegato in nero per oltre quattro anni presso un\'impresa edile senza contratto né contributi. Al termine, l\'imprenditore aveva negato qualsiasi rapporto lavorativo.', risultato:'Accertamento del rapporto con testimonianze, messaggi WhatsApp e documentazione bancaria. Condanna al pagamento di tutte le retribuzioni e trasmissione atti all\'INPS per i contributi omessi.', data:'Luglio 2025', esito:'vittoria', importanza:'alta', importo:'Retribuzioni + TFR + contributi: € 68.000', nota_importo:'4 anni di lavoro nero — arretrati + TFR + versamento INPS ex art. 23 L. 218/1952' },
  { id:'cr-12', materia:'Diritto Civile', titolo:'Responsabilità precontrattuale — risarcimento da trattative interrotte', fatto:'Imprenditore che aveva sostenuto ingenti spese di due diligence per acquisizione di complesso industriale. La controparte aveva interrotto improvvisamente le trattative dopo mesi di negoziazione avanzata.', risultato:'Azione ex art. 1337 c.c. Il Tribunale ha accertato la violazione della buona fede e condannato al risarcimento dell\'interesse negativo: spese sostenute e lucro cessante.', data:'Luglio 2025', esito:'vittoria', importanza:'media', importo:'Risarcimento interesse negativo € 24.000', nota_importo:'Spese due diligence + lucro cessante — art. 1337 c.c. responsabilità precontrattuale' },
  { id:'cr-13', materia:'Diritto di Famiglia', titolo:'Revisione assegno divorzile — cambio rilevante delle circostanze', fatto:'Ex coniuge tenuto all\'assegno divorzile stabilito dieci anni prima, con significativa riduzione del reddito per effetto della crisi del settore (perdita del 60% del fatturato).', risultato:'Ricorso per revisione ex art. 9 L. 898/1970. Il Tribunale ha verificato il mutamento effettivo e non temporaneo delle condizioni economiche e disposto la riduzione proporzionata al reddito attuale.', data:'Agosto 2025', esito:'vittoria', importanza:'media', importo:'Riduzione assegno del 45%', nota_importo:'Da € 2.200 a € 1.210/mese — art. 9 L. 898/1970 revisione condizioni divorzio' },
  { id:'cr-14', materia:'Diritto della Previdenza Sociale', titolo:'Pensione anticipata — mancato riconoscimento contributi figurativi', fatto:'Lavoratrice impossibilitata a raggiungere i requisiti per la pensione anticipata per mancato riconoscimento di due anni di contributi figurativi per assistenza a familiare disabile.', risultato:'Ricorso accolto: riconosciuti i contributi ex art. 80, c. 3, L. 388/2000 con accesso alla pensione anticipata e pagamento degli arretrati dalla data di prima domanda.', data:'Agosto 2025', esito:'vittoria', importanza:'alta', importo:'Pensione anticipata + arretrati € 18.600', nota_importo:'Contributi figurativi ex art. 80 L. 388/2000 — pensione anticipata Quota 103' },
  { id:'cr-15', materia:'Responsabilità Medica', titolo:'Parto traumatico — danno perinatale e responsabilità della struttura', fatto:'Neonato con danno neurologico permanente (paralisi cerebrale infantile) in seguito a parto condotto con ritardo nell\'eseguire il taglio cesareo nonostante le sofferenze fetali documentate sul tracciato CTG.', risultato:'ATP con CTU ginecologo, neonatologo e neurologo pediatrico. Accertata la responsabilità della struttura ex L. 24/2017 per il ritardo nel parto. Accordo transattivo con massimale assicurativo.', data:'Settembre 2025', esito:'accordo', importanza:'alta', importo:'Accordo con massimale assicurativo', nota_importo:'Danno biologico permanente 100% + danno morale genitori — L. 24/2017' },
  { id:'cr-16', materia:'Diritto del Lavoro', titolo:'Licenziamento per riduzione personale — nullità del criterio di scelta', fatto:'Lavoratore licenziato nell\'ambito di una procedura di licenziamento collettivo. Il datore aveva applicato criteri di scelta non concordati con le OO.SS. e non comunicati al lavoratore.', risultato:'Impugnazione per violazione dell\'art. 5 L. 223/1991 (criteri di scelta) e dell\'art. 4 (obblighi di comunicazione). Il Tribunale ha dichiarato l\'inefficacia del licenziamento con condanna al risarcimento.', data:'Settembre 2025', esito:'vittoria', importanza:'alta', importo:'12 mensilità ex art. 18 co. 4 L. 300/1970', nota_importo:'Licenziamento collettivo — violazione art. 5 L. 223/1991 criteri di scelta' },
  { id:'cr-17', materia:'Diritto di Famiglia', titolo:'Divisione giudiziale eredità — immobile con comproprietari dissenzienti', fatto:'Tre eredi in disaccordo sulla divisione di un immobile di pregio lasciato in eredità. Due eredi intendevano vendere, uno si opponeva pretendendo la quota superiore al terzo.', risultato:'Azione di scioglimento della comunione ex art. 1111 c.c. con nomina di perito giudiziario. Il Tribunale ha disposto la vendita all\'incanto con attribuzione delle quote secondo le quote ereditarie e compensazione degli oneri sostenuti.', data:'Ottobre 2025', esito:'vittoria', importanza:'media', importo:'Divisione quota stimata € 95.000', nota_importo:'Art. 1111 c.c. — scioglimento comunione ereditaria + conguagli per spese sostenute' },
  { id:'cr-18', materia:'Diritto Tributario', titolo:'Accertamento IRPEF — annullamento per vizi formali e sostanziali', fatto:'Piccolo imprenditore raggiunto da avviso di accertamento IRPEF per imponibile aggiuntivo di 280.000 euro con metodo sintetico (redditometro), senza considerare le spese di pertinenza professionale.', risultato:'Ricorso alla CGT con produzione analitica di tutte le giustificazioni documentali. Il giudice ha annullato l\'accertamento per difetto di motivazione (art. 7 L. 212/2000) e erronea imputazione delle spese professionali.', data:'Marzo 2025', esito:'annullamento', importanza:'alta' },
  { id:'cr-19', materia:'Diritto Tributario', titolo:'Cartella IVA — prescrizione quinquennale e annullamento', fatto:'Artigiano che aveva ricevuto una cartella esattoriale per IVA notificata oltre i termini di decadenza con importi sproporzionati incluse sanzioni e interessi di mora.', risultato:'Ricorso alla CGT con eccezione di decadenza e prescrizione ex art. 25 D.P.R. 602/1973. Il giudice ha accolto il ricorso con sgravamento totale e cancellazione del ruolo.', data:'Maggio 2025', esito:'annullamento', importanza:'alta' },
  { id:'cr-20', materia:'Privacy, GDPR & AI Act', titolo:'Data breach aziendale — gestione notifica Garante e contenimento sanzione', fatto:'PMI sanitaria privata vittima di attacco ransomware con esfiltrazione dati di circa 8.000 pazienti. L\'azienda non aveva ancora adottato un sistema strutturato ex art. 33 GDPR.', risultato:'Assistenza nella notifica al Garante entro 72 ore con documentazione tecnica. Il Garante, valutata la collaborazione, ha applicato una sanzione minima rispetto al massimo edittale.', data:'Aprile 2025', esito:'accordo', importanza:'alta' },
  { id:'cr-21', materia:'Privacy, GDPR & AI Act', titolo:'Videosorveglianza aziendale — riduzione sanzione Garante', fatto:'Azienda manifatturiera con sistema di videosorveglianza estesa installato senza accordo sindacale preventivo. Il Garante aveva irrogato sanzione di 80.000 euro.', risultato:'Ricorso ex art. 78 GDPR. Il giudice ha ridotto la sanzione a 22.000 euro riconoscendo le finalità legittime e la buona fede dell\'azienda che aveva successivamente regolarizzato con accordo sindacale.', data:'Giugno 2025', esito:'vittoria', importanza:'alta', importo:'Sanzione ridotta da € 80.000 a € 22.000', nota_importo:'Art. 78 GDPR — ricorso giurisdizionale + art. 4 L. 300/1970' },
  { id:'cr-22', materia:'Privacy, GDPR & AI Act', titolo:'AI Act — classificazione sistema IA e adeguamento compliance', fatto:'Startup con sistema IA per valutazione del rischio creditizio sviluppato prima dell\'entrata in vigore dell\'AI Act senza verificare la classificazione del rischio.', risultato:'Analisi di classificazione ex Allegato III AI Act: sistema ad alto rischio (punto 5b). Assistenza nell\'implementazione completa degli obblighi: gestione rischio, documentazione tecnica, log, supervisione umana, registrazione banca dati UE.', data:'Agosto 2025', esito:'accordo', importanza:'alta' },
  { id:'cr-23', materia:'Privacy, GDPR & AI Act', titolo:'Trattamento illecito dati sanitari — risarcimento ex art. 82 GDPR', fatto:'Cartella clinica e referti oncologici condivisi senza consenso con un\'agenzia assicurativa che li aveva utilizzati per rifiutare la stipula di una polizza vita.', risultato:'Reclamo al Garante e azione civile ex art. 82 GDPR. Il Garante ha sanzionato la struttura e ordinato la cancellazione. Il Tribunale ha condannato al risarcimento del danno non patrimoniale e patrimoniale.', data:'Ottobre 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-24', materia:"Diritto delle Forze dell'Ordine", titolo:'Procedimento penale per uso della forza — archiviazione', fatto:'Agente di Polizia di Stato indagato per lesioni a seguito di un intervento per sedare una rissa. La persona tratta in arresto aveva sporto querela sostenendo lesioni sproporzionate.', risultato:'Difesa con produzione delle riprese bodycam e testimonianze dei colleghi. Il PM, verificata la proporzionalità e la causa di giustificazione ex art. 53 c.p., ha richiesto l\'archiviazione accolta dal GIP con decreto motivato.', data:'Marzo 2025', esito:'archiviazione', importanza:'alta' },
  { id:'cr-25', materia:'Diritto Penale', titolo:'Frode fiscale — patteggiamento con pena sospesa', fatto:'Imprenditore indagato per dichiarazione fraudolenta mediante uso di fatture per operazioni inesistenti. Il PM aveva richiesto la misura cautelare degli arresti domiciliari.', risultato:'Difesa nella fase cautelare con produzione di documentazione bancaria che ha escluso l\'aggravante della sistematicità. Patteggiamento ex art. 444 c.p.p. con pena sospesa e oblazione delle sanzioni tributarie.', data:'Maggio 2025', esito:'accordo', importanza:'alta' },
  { id:'cr-26', materia:'Diritto del Lavoro', titolo:'Infortunio sul lavoro — rendita INAIL e risarcimento differenziale', fatto:'Lavoratore edile con amputazione di due dita della mano destra in seguito a incidente con sega circolare, in assenza dei dispositivi di protezione obbligatori ex D.Lgs. 81/2008.', risultato:'Ottenimento rendita INAIL per inabilità permanente 22%. Azione civile per il risarcimento differenziale rispetto alla rendita: danno biologico residuo, danno morale e danno patrimoniale da riduzione della capacità lavorativa.', data:'Giugno 2025', esito:'vittoria', importanza:'alta', importo:'Rendita INAIL + risarcimento differenziale € 55.000', nota_importo:'Inabilità permanente 22% (INAIL) + differenziale danno biologico non coperto' },
  { id:'cr-27', materia:'Diritto Civile', titolo:'Usucapione ventennale — accertamento e trascrizione proprietà', fatto:'Cliente che occupava pacificamente un terreno agricolo da oltre 22 anni con costruzione di manufatti, coltivazione e pagamento imposte, senza che il formale proprietario avesse mai contestato il possesso.', risultato:'Azione ex art. 1158 c.c. con documentazione fotografica datata, testimonianze e documentazione catastale. Il Tribunale ha pronunciato sentenza costitutiva della proprietà con ordine di trascrizione.', data:'Febbraio 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-28', materia:'Diritto Civile', titolo:'Fideiussione omnibus — nullità per violazione normativa antitrust bancaria', fatto:'Fideiussore escusso dalla banca per un debito dell\'impresa garantita. Il contratto era redatto sul modello ABI dichiarato anticompetitivo (Provvedimento Banca d\'Italia 2005) con le tre clausole nulle.', risultato:'Opposizione al decreto ingiuntivo con eccezione di nullità parziale ex art. 2 L. 287/1990. Il Tribunale ha dichiarato la nullità delle clausole di reviviscenza, sopravvivenza e rinuncia ai termini (Cass. SS.UU. n. 41994/2021), con riduzione significativa dell\'importo.', data:'Aprile 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-29', materia:'Diritto Tributario', titolo:'Verifica GdF — riduzione da € 420.000 a € 28.000', fatto:'Società commerciale oggetto di verifica GdF con PVC che contestava operazioni inesistenti per 420.000 euro.', risultato:'Assistenza nel contraddittorio ex D.Lgs. 219/2023. L\'Agenzia delle Entrate ha emesso avviso ridotto a 95.000 euro. Ricorso alla CGT con ulteriore riduzione a 28.000 euro e applicazione del cumulo giuridico delle sanzioni.', data:'Luglio 2025', esito:'accordo', importanza:'alta', importo:'Riduzione da € 420.000 a € 28.000', nota_importo:'Contraddittorio ex D.Lgs. 219/2023 + CGT primo grado + cumulo giuridico sanzioni' },
  { id:'cr-30', materia:'Diritto Civile', titolo:'Danno da animale — cane e lesioni gravi a minore', fatto:'Bambino di 9 anni gravemente morso al volto da cane di grossa taglia. Necessità di intervento chirurgico ricostruttivo e permanenza di cicatrici visibili. Il proprietario sosteneva il caso fortuito.', risultato:'Azione ex art. 2052 c.c. con inversione dell\'onere della prova. Il Tribunale ha rigettato l\'eccezione di caso fortuito e condannato al risarcimento del danno biologico permanente (cicatrici), estetico, morale del minore e dei genitori.', data:'Agosto 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-31', materia:'Responsabilità Medica', titolo:'Farmaco errato in terapia intensiva — decesso del paziente', fatto:'Paziente deceduto dopo 72 ore per somministrazione di farmaco controindicato a causa di scambio di terapia tra due pazienti con cognome simile.', risultato:'ATP con CTU farmacologico e anestesiologo. Accertata la causalità materiale. Liquidazione in favore del coniuge e dei tre figli: perdita del rapporto parentale, danno terminale iure hereditatis, danno morale e patrimoniale.', data:'Giugno 2025', esito:'accordo', importanza:'alta' },
  { id:'cr-32', materia:'Responsabilità Medica', titolo:'Diagnosi errata di tumore — intervento demolitivo non necessario', fatto:'Paziente sottoposta a mastectomia destra dopo diagnosi di carcinoma su biopsia rivelatasi errata per scambio di preparato istologico.', risultato:'Azione nei confronti della struttura e del laboratorio. ATP con CTU. Accordo con massimale assicurativo per danno biologico da mutilazione, danno morale catastrofico, danno estetico e spese di ricostruzione.', data:'Settembre 2025', esito:'accordo', importanza:'alta' },
  { id:'cr-33', materia:'Diritto Civile', titolo:'Mutuo usurario — restituzione interessi e saldo zero', fatto:'Piccolo imprenditore con mutuo ipotecario del 2010 con TAEG risultato superiore al tasso soglia usura, emerso da perizia economico-finanziaria dopo anni di regolare pagamento.', risultato:'Azione ex art. 1815, c. 2, c.c. per nullità della clausola di interessi usurari. Il Tribunale ha condannato la banca alla restituzione di tutti gli interessi versati e azzerato il saldo residuo del mutuo.', data:'Marzo 2026', esito:'vittoria', importanza:'alta' },
  { id:'cr-34', materia:"Diritto delle Forze dell'Ordine", titolo:'Procedimento disciplinare — annullamento sanzione e riabilitazione', fatto:'Sottufficiale dei Carabinieri destinatario di provvedimento disciplinare di corpo per fatti contestati come violazione del dovere di fedeltà, basato su segnalazione anonima non verificata.', risultato:'Ricorso gerarchico e successivo TAR con impugnazione del provvedimento per difetto di istruttoria e violazione del principio del contraddittorio. Il TAR ha annullato la sanzione con condanna alle spese.', data:'Luglio 2025', esito:'annullamento', importanza:'alta' },
  { id:'cr-35', materia:'Diritto del Lavoro', titolo:'Discriminazione sindacale — procedimento urgente ex art. 28', fatto:'Azienda che, dopo un conflitto con la RSA, aveva adottato misure di ostracismo verso i lavoratori iscritti al sindacato promotore delle agitazioni, negando straordinari e trasferendo alcuni dipendenti.', risultato:'Procedimento ex art. 28 L. 300/1970 davanti al Tribunale del Lavoro con richiesta urgente. Il giudice ha accertato il comportamento antisindacale e ordinato la rimozione di tutte le misure discriminatorie con pubblicazione del decreto.', data:'Settembre 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-36', materia:'Diritto Tributario', titolo:'IMU — esenzione prima casa non riconosciuta e rimborso', fatto:'Comune che aveva negato l\'esenzione IMU per la prima casa sostenendo che l\'abitazione non fosse quella di residenza effettiva.', risultato:'Ricorso alla CGT con documentazione inequivocabile (utenze, vicinato, medico di base, scuola figli). Il giudice ha accolto il ricorso e condannato il Comune al rimborso di tutti gli importi degli ultimi cinque anni con interessi.', data:'Settembre 2025', esito:'vittoria', importanza:'media' },
  { id:'cr-37', materia:'Diritto di Famiglia', titolo:'Sottrazione internazionale di minore — rientro nel Paese di residenza', fatto:'Madre che aveva portato i figli all\'estero in occasione di una visita autorizzata, rifiutando di riportarli in Italia alla scadenza. Il padre aveva sporto denuncia e attivato la Convenzione dell\'Aja.', risultato:'Procedimento ex L. 64/1994 (Convenzione dell\'Aja 1980 sul rapimento internazionale di minori). Il Tribunale per i Minorenni ha emesso ordine di rientro immediato dei minori, eseguito con la collaborazione delle autorità consolari.', data:'Ottobre 2025', esito:'vittoria', importanza:'alta' },
  { id:'cr-38', materia:'Diritto Penale', titolo:'Stalking — archiviazione in favore dell\'indagato', fatto:'Cliente denunciato per atti persecutori (art. 612-bis c.p.) dall\'ex partner dopo la fine di una relazione sentimentale. Le prove addotte erano esclusivamente messaggi estrapolati dal contesto.', risultato:'Produzione di memorie difensive con integrale allegazione dei messaggi nel contesto originario. Il PM, verificata l\'insussistenza del carattere persecutorio e della reiterazione qualificata, ha archiviato il procedimento.', data:'Novembre 2025', esito:'archiviazione', importanza:'media' },
  { id:'cr-39', materia:'Diritto Civile', titolo:'Responsabilità professionale del notaio — risarcimento', fatto:'Acquirente di un immobile che aveva scoperto dopo il rogito l\'esistenza di un\'ipoteca non cancellata, non rilevata dal notaio rogante nella sua attività di verifica ipocatastale.', risultato:'Azione di responsabilità professionale ex art. 2236 c.c. Il Tribunale ha accertato la colpa grave del notaio per l\'omissione di verifica e lo ha condannato al risarcimento integrale del danno pari all\'onere di cancellazione dell\'ipoteca e alle spese di consolidamento.', data:'Dicembre 2025', esito:'vittoria', importanza:'media' },
  { id:'cr-40', materia:'Diritto della Previdenza Sociale', titolo:'Legge 104 — riconoscimento caregiver familiare e permessi retribuiti', fatto:'Lavoratrice che assisteva il padre affetto da Alzheimer grave ma il cui datore di lavoro rifiutava sistematicamente di concedere i tre giorni mensili di permesso ex L. 104/1992, sostituendoli con ferie o aspettativa.', risultato:'Ricorso d\'urgenza ex art. 700 c.p.c. con richiesta di reintegro dei permessi negati e di condanna al risarcimento del danno. Il giudice ha accolto il ricorso e condannato il datore al risarcimento di tutti i permessi non fruiti.', data:'Gennaio 2026', esito:'vittoria', importanza:'alta', importo:'Permessi + risarcimento € 4.200', nota_importo:'L. 104/1992 art. 33 — 3 giorni mensili retribuiti caregiver familiare' },
]

// ─── COSTANTI ─────────────────────────────────────────────────────────────────
const MATERIE = ['Tutte', ...Array.from(new Set(CASI.map(c => c.materia)))]
const PER_PAG = 6

const ESITO_STYLE: Record<CaseResult['esito'], { label: string; color: string; bg: string }> = {
  vittoria:      { label: 'Vittoria',      color: '#2a7d5f', bg: 'rgba(42,125,95,0.08)'   },
  accordo:       { label: 'Accordo',       color: '#8a6200', bg: 'rgba(201,168,76,0.12)'  },
  archiviazione: { label: 'Archiviazione', color: '#1e5a8a', bg: 'rgba(30,90,138,0.1)'   },
  annullamento:  { label: 'Annullamento',  color: '#6b2d8a', bg: 'rgba(107,45,138,0.1)'  },
}

// ─── STATISTICHE ──────────────────────────────────────────────────────────────
function computeStats(casi: CaseResult[]) {
  const tot = casi.length
  const vittorie = casi.filter(c => c.esito === 'vittoria').length
  const accordi  = casi.filter(c => c.esito === 'accordo').length
  const archiviazioni = casi.filter(c => c.esito === 'archiviazione').length
  const annullamenti  = casi.filter(c => c.esito === 'annullamento').length
  const favorevoli = vittorie + accordi + archiviazioni + annullamenti
  return { tot, vittorie, accordi, archiviazioni, annullamenti, favorevoli }
}

// ─── COMPONENTE ───────────────────────────────────────────────────────────────
export default function CaseResultsSection() {
  const [filtro, setFiltro]     = useState('Tutte')
  const [aperto, setAperto]     = useState<string | null>(null)
  const [pagina, setPagina]     = useState(0)
  const [query, setQuery]       = useState('')
  const [visible, setVisible]   = useState(false)

  const casiMateria = filtro === 'Tutte' ? CASI : CASI.filter(c => c.materia === filtro)
  const casiFiltrati = query.trim()
    ? casiMateria.filter(c => {
        const q = query.toLowerCase()
        return (
          c.titolo.toLowerCase().includes(q) ||
          c.fatto.toLowerCase().includes(q) ||
          c.risultato.toLowerCase().includes(q) ||
          c.materia.toLowerCase().includes(q)
        )
      })
    : casiMateria

  const totPagine  = Math.ceil(casiFiltrati.length / PER_PAG)
  const casiPagina = casiFiltrati.slice(pagina * PER_PAG, (pagina + 1) * PER_PAG)
  const stats = computeStats(CASI)

  useEffect(() => { setPagina(0); setAperto(null) }, [query, filtro])
  useEffect(() => { if (query.trim() && !visible) setVisible(true) }, [query])

  const handleFiltro = (m: string) => {
    if (!visible) {
      setFiltro(m); setVisible(true)
    } else if (filtro === m) {
      setVisible(false); setAperto(null); setQuery('')
    } else {
      setFiltro(m); setPagina(0); setAperto(null)
    }
  }

  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px' }}>

      {/* Intestazione */}
      <div data-animate style={{ marginBottom: '40px' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '16px',
        }}>
          Casi risolti
        </p>
        <h2 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 500,
          color: 'var(--ink)',
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          Risultati ottenuti per i nostri clienti
        </h2>
        <p style={{
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          maxWidth: '600px',
        }}>
          Una selezione documentata di casi trattati. Ogni vicenda è reale; i dati identificativi
          sono stati resi anonimi nel rispetto della privacy.
        </p>
      </div>

      {/* Statistiche sintetiche */}
      <div data-animate style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1px',
        background: 'var(--line)',
        border: '1px solid var(--line)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '40px',
      }}>
        {[
          { label: 'Casi totali',    value: stats.tot,           sub: 'dal 2024' },
          { label: 'Vittorie',       value: stats.vittorie,      sub: `${Math.round(stats.vittorie / stats.tot * 100)}% dei casi` },
          { label: 'Accordi',        value: stats.accordi,       sub: 'transazioni' },
          { label: 'Archiviazioni',  value: stats.archiviazioni + stats.annullamenti, sub: 'penali/tributarie' },
        ].map(item => (
          <div key={item.label} style={{
            background: 'var(--paper)',
            padding: '20px 24px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Newsreader', serif",
              fontSize: '2rem',
              fontWeight: 500,
              color: 'var(--wine)',
              lineHeight: 1,
              marginBottom: '4px',
            }}>
              {item.value}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--ink)',
              marginBottom: '2px',
            }}>
              {item.label}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Filtri materia */}
      <div data-animate style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {MATERIE.map(m => {
            const isActive = filtro === m && visible
            return (
              <button
                key={m}
                onClick={() => handleFiltro(m)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  padding: '6px 14px',
                  border: isActive ? '1px solid var(--wine)' : '1px solid var(--line)',
                  borderRadius: '2px',
                  background: isActive ? 'var(--wine)' : 'transparent',
                  color: isActive ? 'var(--white)' : 'var(--ink-soft)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {m}
              </button>
            )
          })}
        </div>
      </div>

      {/* Ricerca */}
      {visible && (
        <div style={{ marginBottom: '24px', position: 'relative' }}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Cerca per materia, fattispecie, esito…"
            style={{
              width: '100%',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              padding: '10px 40px 10px 14px',
              border: '1px solid var(--line)',
              borderRadius: '2px',
              background: 'var(--paper)',
              color: 'var(--ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--ink-soft)',
                fontSize: '1rem',
                lineHeight: 1,
              }}
              aria-label="Cancella ricerca"
            >
              ×
            </button>
          )}
        </div>
      )}

      {/* Elenco casi */}
      {visible && (
        <>
          {casiFiltrati.length === 0 ? (
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', padding: '32px 0' }}>
              Nessun caso trovato per questa ricerca.
            </p>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--line)', border: '1px solid var(--line)', borderRadius: '2px', overflow: 'hidden', marginBottom: '24px' }}>
                {casiPagina.map(caso => {
                  const esito = ESITO_STYLE[caso.esito]
                  const isOpen = aperto === caso.id
                  return (
                    <div key={caso.id} style={{ background: 'var(--paper)' }}>
                      {/* Header card */}
                      <button
                        onClick={() => setAperto(isOpen ? null : caso.id)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '20px 24px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '16px',
                        }}
                      >
                        {/* Indicatore esito */}
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          flexShrink: 0,
                          marginTop: '3px',
                          padding: '2px 8px',
                          borderRadius: '2px',
                          background: esito.bg,
                          color: esito.color,
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                        }}>
                          {esito.label}
                        </span>

                        {/* Titolo e meta */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontFamily: "'Newsreader', serif",
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'var(--ink)',
                            lineHeight: 1.4,
                            marginBottom: '4px',
                          }}>
                            {caso.titolo}
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--gold)' }}>
                              {caso.materia}
                            </span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--ink-soft)' }}>
                              {caso.data}
                            </span>
                          </div>
                        </div>

                        {/* Chevron */}
                        <span style={{
                          flexShrink: 0,
                          color: 'var(--ink-soft)',
                          fontSize: '0.8rem',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                          marginTop: '4px',
                        }}>
                          ▾
                        </span>
                      </button>

                      {/* Dettaglio espanso */}
                      {isOpen && (
                        <div style={{
                          padding: '0 24px 24px 24px',
                          borderTop: '1px solid var(--line)',
                        }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '20px' }}>
                            <div>
                              <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.65rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--gold)',
                                marginBottom: '8px',
                              }}>
                                Il fatto
                              </p>
                              <p style={{ fontSize: '0.85rem', color: 'var(--ink)', lineHeight: 1.65 }}>
                                {caso.fatto}
                              </p>
                            </div>
                            <div>
                              <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.65rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--gold)',
                                marginBottom: '8px',
                              }}>
                                Il risultato
                              </p>
                              <p style={{ fontSize: '0.85rem', color: 'var(--ink)', lineHeight: 1.65 }}>
                                {caso.risultato}
                              </p>
                            </div>
                          </div>

                          {caso.importo && (
                            <div style={{
                              marginTop: '16px',
                              padding: '12px 16px',
                              background: 'rgba(201,168,76,0.06)',
                              border: '1px solid rgba(201,168,76,0.2)',
                              borderRadius: '2px',
                            }}>
                              <span style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.65rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--gold)',
                              }}>
                                Valore economico:{' '}
                              </span>
                              <span style={{ fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 500 }}>
                                {caso.importo}
                              </span>
                              {caso.nota_importo && (
                                <span style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', marginLeft: '8px' }}>
                                  — {caso.nota_importo}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Paginazione */}
              {totPagine > 1 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                  <button
                    onClick={() => { if (pagina > 0) { setPagina(p => p - 1); setAperto(null) } }}
                    disabled={pagina === 0}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      padding: '8px 16px',
                      border: '1px solid var(--line)',
                      borderRadius: '2px',
                      background: 'transparent',
                      color: pagina === 0 ? 'var(--line)' : 'var(--ink)',
                      cursor: pagina === 0 ? 'default' : 'pointer',
                    }}
                  >
                    ← Precedente
                  </button>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                    {pagina + 1} / {totPagine}
                  </span>
                  <button
                    onClick={() => { if (pagina < totPagine - 1) { setPagina(p => p + 1); setAperto(null) } }}
                    disabled={pagina === totPagine - 1}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      padding: '8px 16px',
                      border: '1px solid var(--line)',
                      borderRadius: '2px',
                      background: 'transparent',
                      color: pagina === totPagine - 1 ? 'var(--line)' : 'var(--ink)',
                      cursor: pagina === totPagine - 1 ? 'default' : 'pointer',
                    }}
                  >
                    Successiva →
                  </button>
                </div>
              )}
            </>
          )}

          {/* Chiudi elenco */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <button
              onClick={() => { setVisible(false); setAperto(null); setQuery('') }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                color: 'var(--ink-soft)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Chiudi elenco
            </button>
          </div>
        </>
      )}

      {/* Nota legale */}
      <p data-animate style={{
        marginTop: '40px',
        fontSize: '0.72rem',
        color: 'var(--ink-soft)',
        lineHeight: 1.6,
        borderTop: '1px solid var(--line)',
        paddingTop: '20px',
        fontFamily: "'Inter', sans-serif",
      }}>
        I casi sono presentati in forma anonimizzata nel rispetto del segreto professionale e della normativa sulla privacy.
        I risultati ottenuti in passato non costituiscono garanzia di analoghi esiti futuri.
      </p>
    </section>
  )
}
