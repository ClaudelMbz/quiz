import { Question } from './types';

// PARTIE 1 – Organisation des sessions et livrables (Q1–Q6)
export const QUIZ_FREQ_1: Question[] = [
  {
    id: 1,
    question: "Quelle est la durée estimée de l'activité d'introduction à la stabilité de fréquence (session 1, incluant Simulink) ?",
    options: ["1h", "1h30", "2h", "3h40"],
    correctAnswerIndex: 2,
    explanation: "Le document indique : « The working time including Simulink implementation is estimated to (2h) »."
  },
  {
    id: 2,
    question: "Combien de temps est prévu pour les exercices de la session 2 ?",
    options: ["1h30", "2h", "3h", "3h40"],
    correctAnswerIndex: 3,
    explanation: "Le document précise que les 3 exercices de la session 2 sont à réaliser en 3h40."
  },
  {
    id: 3,
    question: "Quel est le livrable associé au travail sur banc d'essai (session 1) ?",
    options: [
      "Un rapport de simulation Simulink",
      "Une note de synthèse à inclure dans la phase retour",
      "Un fichier Psim commenté",
      "Un quiz sur Moodle"
    ],
    correctAnswerIndex: 1,
    explanation: "Le Livrable 1 est explicitement décrit comme « A synthesis note to be included in your return phase »."
  },
  {
    id: 4,
    question: "Le quiz individuel de la session 1 dure :",
    options: ["10 mn", "20 mn", "30 mn", "40 mn"],
    correctAnswerIndex: 1,
    explanation: "Le document indique : « Individual Quiz (20 mn) » pour la session 1."
  },
  {
    id: 5,
    question: "Le quiz de fin de PBL (session 2) se déroule sur :",
    options: ["Matlab", "Psim", "Moodle", "Simulink"],
    correctAnswerIndex: 2,
    explanation: "Le document précise : « Quiz on moodle at the end of the PBL (30-40 mn) »."
  },
  {
    id: 6,
    question: "Combien de livrables distincts sont mentionnés dans l'ensemble des deux sessions intermédiaires ?",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 2,
    explanation: "Le document liste 3 livrables : Livrable 1 (note de synthèse), Livrable 2 (quiz individuel), Livrable 3 (rapport d'exercices)."
  }
];

// PARTIE 2 – Banc d'essai et simulation (Q7–Q14)
export const QUIZ_FREQ_2: Question[] = [
  {
    id: 7,
    question: "Dans le banc d'essai présenté, quelle machine joue le rôle de la centrale électrique (power station / source) ?",
    options: [
      "Un moteur synchrone triphasé",
      "Un groupe moteur DC + alternateur",
      "Un transformateur HTA/BT",
      "Un onduleur photovoltaïque"
    ],
    correctAnswerIndex: 1,
    explanation: "Le banc d'essai est composé d'un moteur DC couplé à un alternateur, représentant la centrale de production électrique."
  },
  {
    id: 8,
    question: "Quelle est la charge connectée en sortie de l'alternateur dans le banc d'essai ?",
    options: ["Une charge inductive", "Une charge capacitive", "Une charge résistive", "Une machine asynchrone"],
    correctAnswerIndex: 2,
    explanation: "Le document décrit explicitement le banc comme « DC motor / alternator bench delivering on a resistive load »."
  },
  {
    id: 9,
    question: "À quoi correspond l'analogue de la « soupape vapeur » dans le banc d'essai DC/alternateur ?",
    options: [
      "La tension aux bornes de l'induit du moteur DC",
      "Le courant d'excitation de l'alternateur",
      "La résistance de charge",
      "Le couplage mécanique"
    ],
    correctAnswerIndex: 0,
    explanation: "La soupape vapeur régule la puissance mécanique fournie à la turbine ; son analogue dans le banc est la tension d'alimentation du moteur DC, qui contrôle sa vitesse."
  },
  {
    id: 10,
    question: "Pourquoi est-il nécessaire d'alimenter l'inducteur (rotor) de l'alternateur ?",
    options: [
      "Pour protéger les enroulements statoriques",
      "Pour créer le flux inducteur permettant de générer une f.é.m. et donc une tension de sortie",
      "Pour démarrer le moteur DC",
      "Pour réguler la fréquence uniquement"
    ],
    correctAnswerIndex: 1,
    explanation: "Sans alimentation de l'inducteur, il n'y a pas de flux, donc pas de f.é.m. induite et pas de tension en sortie de l'alternateur."
  },
  {
    id: 11,
    question: "Quelle est la conséquence d'une augmentation soudaine de la demande en puissance sur le réseau ?",
    options: [
      "La tension augmente proportionnellement",
      "La fréquence augmente",
      "La vitesse de rotation (et donc la fréquence) diminue",
      "Le courant d'excitation augmente automatiquement"
    ],
    correctAnswerIndex: 2,
    explanation: "Une demande accrue freine le groupe tournant : la vitesse baisse, ce qui fait chuter la fréquence (f = p·n/60)."
  },
  {
    id: 12,
    question: "Quelle version du logiciel Psim est indiquée dans le document pour la simulation du banc ?",
    options: ["V10-2019a", "V11-2020b", "V12-2021b", "V13-2022a"],
    correctAnswerIndex: 2,
    explanation: "Le document mentionne « demo version V12-2021b » disponible sur powersimtech.com."
  },
  {
    id: 13,
    question: "Quel fichier de simulation doit être ouvert dans Psim ?",
    options: [
      "alternator_bench.psimch",
      "DC_motor_freq_control.psimch",
      "DC motor alternator bench simulation.psimch",
      "grid_frequency_model.psimch"
    ],
    correctAnswerIndex: 2,
    explanation: "Le document précise : « Then open the following file : DC motor alternator bench simulation.psimch »."
  },
  {
    id: 14,
    question: "Dans la vidéo 6, que mesure-t-on en réponse à un échelon de tension ?",
    options: [
      "La variation de courant de charge",
      "La variation de vitesse (ou de fréquence)",
      "La variation de flux d'excitation",
      "La variation de puissance active"
    ],
    correctAnswerIndex: 1,
    explanation: "La vidéo 6 porte sur les « final operating tests. Measurement of the change in speed (or frequency) in response to a step of voltage »."
  }
];

// PARTIE 3 – Formules fondamentales de l'alternateur (Q15–Q24)
export const QUIZ_FREQ_3: Question[] = [
  {
    id: 15,
    question: "Quelle est la formule correcte de la fréquence statorique f en fonction de la vitesse n (tr/min) et du nombre de paires de pôles p ?",
    options: ["f = n / p", "f = (p · n) / 60", "f = 60 / (p · n)", "f = p / (60 · n)"],
    correctAnswerIndex: 1,
    explanation: "La formule fondamentale est f = (p·n)/60. Pour 50 Hz avec p=1, la vitesse de synchronisme est 3000 tr/min."
  },
  {
    id: 16,
    question: "La f.é.m. efficace E par enroulement statorique est donnée par :",
    options: ["E = K · p · n · Φ", "E = K · n² · Φ", "E = K · p² · Φ / n", "E = K · Φ / (p · n)"],
    correctAnswerIndex: 0,
    explanation: "E = K·p·n·Φ, où K est une constante machine, p le nombre de paires de pôles, n la vitesse en tr/min et Φ le flux maximal par pôle."
  },
  {
    id: 17,
    question: "Dans la formule E = K·p·n·Φ, que représente Φ ?",
    options: [
      "Le flux de fuite statorique",
      "Le flux maximal par pôle inducteur",
      "Le facteur de puissance",
      "La résistance synchrone"
    ],
    correctAnswerIndex: 1,
    explanation: "Φ représente le flux maximal par pôle créé par l'inducteur (rotor). C'est lui qui est contrôlé via le courant d'excitation."
  },
  {
    id: 18,
    question: "La puissance active produite par un alternateur triphasé équilibré s'exprime par :",
    options: [
      "P = U · I · cos φ",
      "P = √3 · U · I · cos φ",
      "P = 3 · U · I · sin φ",
      "P = U² / R"
    ],
    correctAnswerIndex: 1,
    explanation: "P = √3·U·I·cosφ = 3·V·I·cosφ, avec U la tension composée, V la tension simple, I le courant de ligne et cosφ le facteur de puissance."
  },
  {
    id: 19,
    question: "Dans la formule de puissance P = √3·U·I·cosφ, U désigne :",
    options: [
      "La tension simple (phase-neutre)",
      "La tension composée (entre phases)",
      "La tension d'excitation",
      "La tension aux bornes de la résistance synchrone"
    ],
    correctAnswerIndex: 1,
    explanation: "U désigne la tension composée (entre deux phases). La tension simple V est telle que U = √3·V."
  },
  {
    id: 20,
    question: "L'impédance synchrone Zs d'un enroulement statorique est définie par :",
    options: ["Zs = Rs · jLsω", "Zs = Rs + jLsω", "Zs = Rs − jXs", "Zs = jXs / Rs"],
    correctAnswerIndex: 1,
    explanation: "Zs = Rs + jLsω = Rs + jXs, avec Rs la résistance statorique et Xs = Lsω la réactance synchrone."
  },
  {
    id: 21,
    question: "La loi des mailles du modèle de Behn-Eschenburg donne :",
    options: ["V = E + Zs · I", "V = E · Zs · I", "V = E − Zs · I", "V = Zs · I − E"],
    correctAnswerIndex: 2,
    explanation: "La loi des mailles donne Vi = Ei − (Rs + jXs)·Ii, soit V = E − Zs·I. La chute de tension dans Zs s'oppose à la f.é.m."
  },
  {
    id: 22,
    question: "Dans le modèle de Behn-Eschenburg, que représente Rs ?",
    options: [
      "La résistance de charge",
      "La résistance d'un enroulement statorique (couplage Y)",
      "La résistance de l'inducteur rotorique",
      "La résistance de synchronisation"
    ],
    correctAnswerIndex: 1,
    explanation: "Rs est la résistance d'un enroulement statorique dans le couplage étoile (Y torque selon le document)."
  },
  {
    id: 23,
    question: "Dans le modèle de Behn-Eschenburg, Xs est la réactance synchrone. Elle est liée à l'inductance Ls par :",
    options: ["Xs = Ls / ω", "Xs = Ls · ω", "Xs = ω / Ls", "Xs = √(Ls · ω)"],
    correctAnswerIndex: 1,
    explanation: "La réactance synchrone Xs = Lsω, où ω = 2πf est la pulsation des courants statoriques."
  },
  {
    id: 24,
    question: "Dans le schéma de Behn-Eschenburg (1 phase, couplage étoile), Vi représente :",
    options: [
      "La tension composée entre deux phases",
      "La tension entre phase et neutre",
      "La f.é.m. à vide de la machine",
      "La tension aux bornes de l'inducteur"
    ],
    correctAnswerIndex: 1,
    explanation: "Vi est la tension entre la phase et le neutre (tension simple). Le document précise : « Vi : Voltage between phase and neutral »."
  }
];

// PARTIE 4 – Régulation primaire/secondaire + Modélisation (Q25–Q30)
export const QUIZ_FREQ_4: Question[] = [
  {
    id: 25,
    question: "La régulation primaire de fréquence agit sur :",
    options: [
      "Le réglage de la tension d'excitation uniquement",
      "La commande de la soupape de vapeur pour ajuster la puissance mécanique fournie",
      "La déconnexion de charges du réseau",
      "La modification du nombre de paires de pôles"
    ],
    correctAnswerIndex: 1,
    explanation: "La régulation primaire (frequency response control) ajuste la vanne de vapeur (ou son équivalent) pour modifier la puissance mécanique et corriger la fréquence."
  },
  {
    id: 26,
    question: "Quelle est la limite principale de la régulation primaire de fréquence ?",
    options: [
      "Elle est trop lente pour réagir aux variations",
      "Elle ne peut pas éliminer complètement l'écart résiduel de fréquence (nécessité d'une régulation secondaire)",
      "Elle dégrade la qualité de la tension",
      "Elle ne fonctionne que pour les charges résistives"
    ],
    correctAnswerIndex: 1,
    explanation: "La vidéo 4 met en évidence les « limits (need for a secondary control) » : la régulation primaire laisse un écart statique permanent de fréquence."
  },
  {
    id: 27,
    question: "À quoi sert la régulation secondaire de fréquence ?",
    options: [
      "À protéger les machines contre les surcharges",
      "À corriger l'écart permanent de fréquence laissé par la régulation primaire",
      "À réguler la tension aux bornes de la charge",
      "À identifier la fonction de transfert du système"
    ],
    correctAnswerIndex: 1,
    explanation: "La régulation secondaire annule l'écart résiduel de fréquence que la régulation primaire ne peut pas éliminer seule."
  },
  {
    id: 28,
    question: "Si la puissance de charge augmente (cos φ constant), que se passe-t-il sur la tension V aux bornes de la charge selon le modèle de Behn-Eschenburg ?",
    options: [
      "V reste constante car l'alternateur est idéal",
      "V augmente car le courant augmente",
      "V diminue en raison de la chute de tension dans Zs",
      "V oscille sans se stabiliser"
    ],
    correctAnswerIndex: 2,
    explanation: "V = E − Zs·I. Si la charge augmente, I augmente, la chute Zs·I augmente et donc V diminue (visible sur le diagramme de Behn-Eschenburg)."
  },
  {
    id: 29,
    question: "Quel outil logiciel est utilisé pour construire le modèle de régulation de fréquence en session 1 (Question 1) ?",
    options: ["Python / NumPy", "Matlab / Simulink", "LabVIEW", "PLECS"],
    correctAnswerIndex: 1,
    explanation: "La Question 1 demande explicitement : « Reuse the proposed example to build your own simulation model on Matlab Simulink »."
  },
  {
    id: 30,
    question: "La vidéo 5 porte sur :",
    options: [
      "Les tests finaux et la mesure de la réponse en fréquence",
      "La présentation du banc d'essai physique",
      "L'identification de la fonction de transfert du groupe machine à partir du schéma-bloc",
      "L'analogie turbine vapeur / soupape vapeur"
    ],
    correctAnswerIndex: 2,
    explanation: "La vidéo 5 est décrite comme : « block diagram for transfer function identification »."
  }
];

export const ALL_FREQ_QUESTIONS: Question[] = [
  ...QUIZ_FREQ_1,
  ...QUIZ_FREQ_2,
  ...QUIZ_FREQ_3,
  ...QUIZ_FREQ_4
];
