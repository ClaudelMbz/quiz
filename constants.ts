import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Quelle est la conductivité thermique de l'air immobile ?",
    options: ["1.5 W/m².K", "0.0262 W/m².K", "0.50 W/m².K", "0.001 W/m².K"],
    correctAnswerIndex: 1,
    explanation: "La conductivité de l'air est très faible (0.0262 W/m².K) à condition qu'il soit immobile."
  },
  {
    id: 2,
    question: "Quelle est la formule pour calculer la résistance thermique (R) ?",
    options: ["R = λ / e", "R = e × λ", "R = e / λ", "R = 1 / λ"],
    correctAnswerIndex: 2,
    explanation: "La résistance thermique est calculée par l'épaisseur (e) divisée par la conductivité thermique (λ)."
  },
  {
    id: 3,
    question: "Quel est le principe fondamental d'un bon isolant thermique ?",
    options: ["Être le plus dense possible", "Emprisonner un maximum d'air immobile dans de petites cellules", "Contenir des particules métalliques", "Faciliter la circulation de l'air"],
    correctAnswerIndex: 1,
    explanation: "La technique principale est de piéger autant d'air que possible, car l'air immobile est le 'pire conducteur' (donc un excellent isolant)."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un 'pont thermique' ?",
    options: ["Un système de chauffage par le sol", "Une passerelle entre deux bâtiments", "Un élément localisé de l'enveloppe où la conductivité est plus élevée", "Un type d'isolant synthétique"],
    correctAnswerIndex: 2,
    explanation: "C'est un élément localisé (comme un angle de mur ou une jonction) qui a une conductivité plus élevée que la zone adjacente (fuite de chaleur)."
  },
  {
    id: 5,
    question: "Quel est l'avantage principal de l'Isolation Thermique par l'Extérieur (ITE) ?",
    options: ["Elle est moins chère que l'isolation intérieure", "Elle élimine la majorité des ponts thermiques sans réduire la surface habitable", "Elle ne nécessite aucune autorisation administrative", "Elle utilise uniquement de la paille"],
    correctAnswerIndex: 1,
    explanation: "L'ITE permet d'éliminer la grande majorité des ponts thermiques sans réduire la surface habitable."
  },
  {
    id: 6,
    question: "Quel est un inconvénient majeur des isolants synthétiques (polystyrène, polyuréthane) en cas d'incendie ?",
    options: ["Ils s'éteignent trop vite", "Ils dégagent des vapeurs toxiques mortelles", "Ils deviennent froids", "Ils se transforment en pierre"],
    correctAnswerIndex: 1,
    explanation: "Les vapeurs libérées par ces matériaux en cas de feu sont souvent fatales."
  },
  {
    id: 7,
    question: "Quelle est la particularité des isolants bio-sourcés concernant le confort d'été ?",
    options: ["Ils sont très légers et chauffent vite", "Ils sont généralement denses et offrent un bon déphasage thermique", "Ils n'ont aucun impact sur le confort d'été", "Ils refroidissent la maison activement"],
    correctAnswerIndex: 1,
    explanation: "Leur bonne densité permet un bon déphasage, ce qui est idéal pour le confort d'été (éviter la surchauffe)."
  },
  {
    id: 8,
    question: "De quelle matière première est issue la ouate de cellulose ?",
    options: ["De la laine de mouton", "De papier recyclé", "De roches volcaniques", "De bouteilles en plastique"],
    correctAnswerIndex: 1,
    explanation: "Elle est obtenue à partir de papier recyclé traité."
  },
  {
    id: 9,
    question: "Quel isolant est parfois qualifié de 'meilleur isolant thermique' grâce à sa très faible conductivité (λ entre 0.022 et 0.028) ?",
    options: ["La laine de verre", "Le liège", "Le polyuréthane", "La paille"],
    correctAnswerIndex: 2,
    explanation: "Le polyuréthane a un pouvoir isolant très élevé avec une conductivité de 0.022 à 0.028 W/m.K."
  },
  {
    id: 10,
    question: "Pourquoi la production de liège (cork) est-elle limitée ?",
    options: ["Car les arbres meurent après la récolte", "Car il faut attendre 8 à 10 ans entre chaque récolte d'écorce", "Car il ne pousse qu'en Antarctique", "Car il est toxique à l'état brut"],
    correctAnswerIndex: 1,
    explanation: "Le chêne-liège met environ 10 ans à reconstituer son écorce après une récolte."
  },
  {
    id: 11,
    question: "Quel ingrédient permet au béton cellulaire de créer ses bulles d'air ?",
    options: ["La poudre d'aluminium", "La levure de boulanger", "Le gaz carbonique", "Des billes de polystyrène"],
    correctAnswerIndex: 0,
    explanation: "Le mélange gonfle sous l'effet de la poudre d'aluminium (0.6%) qui crée de nombreuses cellules d'air."
  },
  {
    id: 12,
    question: "Quel est l'avantage de la brique 'Monomur' ?",
    options: ["Elle est transparente", "Elle sert à la fois de matériau de construction (porteur) et d'isolant", "Elle est l'isolant le moins cher du marché", "Elle est faite en bois"],
    correctAnswerIndex: 1,
    explanation: "Elle permet de construire le mur et d'isoler en même temps, éliminant le besoin d'ajouter un panneau isolant."
  },
  {
    id: 13,
    question: "Quelle épaisseur fait le panneau isolant sous vide (VIP) mentionné dans les dernières tendances ?",
    options: ["100 mm", "35 mm", "10 mm", "50 cm"],
    correctAnswerIndex: 1,
    explanation: "Le VIP a d'excellentes propriétés isolantes pour seulement 35 mm d'épaisseur."
  },
  {
    id: 14,
    question: "Quelle est l'équivalence d'isolation de la paille par rapport au polystyrène ?",
    options: ["10 cm de paille = 10 cm de polystyrène", "40 cm de paille = 20 cm de polystyrène", "La paille n'isole pas", "20 cm de paille = 40 cm de polystyrène"],
    correctAnswerIndex: 1,
    explanation: "40 cm de paille isolent aussi bien que 20 cm de polystyrène."
  },
  {
    id: 15,
    question: "Quel est un inconvénient de la laine de verre lors de la pose ?",
    options: ["Elle est très lourde", "Elle peut provoquer des irritations de la peau", "Elle dégage une odeur de soufre", "Elle est liquide"],
    correctAnswerIndex: 1,
    explanation: "Elle peut causer des irritations cutanées lors de la manipulation."
  },
  {
    id: 16,
    question: "D'où provient le polystyrène extrudé ?",
    options: ["De l'industrie pétrochimique", "Du recyclage du verre", "De la culture du chanvre", "De la roche volcanique"],
    correctAnswerIndex: 0,
    explanation: "C'est un matériau isolant produit par l'industrie pétrochimique."
  },
  {
    id: 17,
    question: "Quel liant naturel est préférable au polyuréthane pour la laine de chanvre ?",
    options: ["Le ciment", "L'amidon", "La colle à bois", "Le goudron"],
    correctAnswerIndex: 1,
    explanation: "Il est conseillé de préférer les produits liés avec de l'amidon naturel plutôt que du polyuréthane."
  },
  {
    id: 18,
    question: "Quelle est l'origine de la Perlite et de la Vermiculite ?",
    options: ["Ce sont des roches volcaniques expansées", "Ce sont des plastiques recyclés", "Ce sont des résidus de bois", "Ce sont des produits animaux"],
    correctAnswerIndex: 0,
    explanation: "La perlite et la vermiculite sont des roches chauffées pour augmenter leur volume."
  },
  {
    id: 19,
    question: "Quel est un point faible de la laine de mouton ?",
    options: ["Elle brûle très facilement", "Elle a une faible inertie (moins de confort en été)", "Elle est très lourde", "Elle n'est pas recyclable"],
    correctAnswerIndex: 1,
    explanation: "Elle a une faible inertie, ce qui offre moins de confort en été."
  },
  {
    id: 20,
    question: "Quel matériau est décrit comme 'l'un des matériaux solides les plus légers du marché' ?",
    options: ["Le béton cellulaire", "L'Aérogel", "La brique de chanvre", "Le verre cellulaire"],
    correctAnswerIndex: 1,
    explanation: "L'aérogel est cité comme l'un des matériaux solides les plus légers."
  }
];
