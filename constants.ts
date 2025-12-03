import { Question } from './types';

export const QUIZ_1: Question[] = [
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

export const QUIZ_2: Question[] = [
  {
    id: 21,
    question: "Que représente le coefficient U (ou K) mentionné dans les critères de qualité ?",
    options: ["La résistance thermique", "La transmission thermique (inverse de la résistance)", "L'épaisseur de l'isolant", "La densité de l'isolant"],
    correctAnswerIndex: 1,
    explanation: "Plus U est bas, meilleure est l'isolation. C'est l'inverse de la résistance R."
  },
  {
    id: 22,
    question: "Quel pourcentage du volume d'un bloc de béton cellulaire est occupé par de l'air ?",
    options: ["20%", "50%", "80%", "99%"],
    correctAnswerIndex: 2,
    explanation: "L'air inerte occupe 80% du volume d'un bloc de béton cellulaire, contre 20% pour la matière solide."
  },
  {
    id: 23,
    question: "Quelle est la matière première utilisée pour fabriquer la laine de roche (Rockwool) ?",
    options: ["Le sable uniquement", "Le basalte (roche volcanique noire) ou le laitier de haut fourneau", "Le verre recyclé", "La fibre de coco"],
    correctAnswerIndex: 1,
    explanation: "Elle est produite par la fusion du basalte ou de laitier de haut fourneau."
  },
  {
    id: 24,
    question: "Quel liant (colle) est souvent utilisé pour assembler les fibres de la laine de lin ?",
    options: ["L'amidon", "Le polyester", "Le bitume", "La chaux"],
    correctAnswerIndex: 1,
    explanation: "Les fibres de lin sont assemblées et thermoliées dans la plupart des cas avec du polyester."
  },
  {
    id: 25,
    question: "Quelle controverse spécifique concerne la Vermiculite ?",
    options: ["Elle attire les termites", "Elle peut contenir de l'amiante (risque de cancer)", "Elle fond au soleil", "Elle est radioactive"],
    correctAnswerIndex: 1,
    explanation: "Il y a un risque historique que la vermiculite contienne des traces d'amiante, ce qui est dangereux pour la santé."
  },
  {
    id: 26,
    question: "À quelle température la roche siliceuse est-elle chauffée pour obtenir de la Perlite expansée ?",
    options: ["100°C", "300°C", "Près de 1200°C", "2000°C"],
    correctAnswerIndex: 2,
    explanation: "La perlite est chauffée à près de 1200°C pour s'expanser et devenir isolante."
  },
  {
    id: 27,
    question: "Quel est l'inconvénient acoustique mentionné pour la brique 'Monomur' ?",
    options: ["Elle laisse passer les voix", "Problèmes de résonance et 'clic' au niveau des interrupteurs", "Elle absorbe trop les sons", "Elle vibre avec le vent"],
    correctAnswerIndex: 1,
    explanation: "Des problèmes de résonance acoustique et de bruits au niveau des boîtiers électriques sont parfois constatés."
  },
  {
    id: 28,
    question: "Quelle substance naturelle permet d'agglomérer les granulés de liège expansé (Cork) ?",
    options: ["La colle vinylique", "La subérine (sa propre résine)", "Le latex", "La cire d'abeille"],
    correctAnswerIndex: 1,
    explanation: "Les granulés s'agglomèrent sous l'action naturelle de leur résine, la subérine, lorsqu'ils sont chauffés."
  },
  {
    id: 29,
    question: "Avec quel matériau l'Aérogel est-il parfois combiné pour devenir un isolant 'exceptionnel' ?",
    options: ["La laine de roche", "Le polystyrène", "La paille", "Le béton"],
    correctAnswerIndex: 0,
    explanation: "L'aérogel combiné à la laine de roche (comme dans l'Aerowool) offre des performances exceptionnelles."
  },
  {
    id: 30,
    question: "De quoi est composé le 'Wood composite' (tendance récente pour les murs extérieurs) ?",
    options: ["De bois et de pierre", "De bois et de PVC", "De bois et de paille", "De bois et d'aluminium"],
    correctAnswerIndex: 1,
    explanation: "C'est un matériau composite qui combine la chaleur du bois avec la résistance du PVC."
  },
  {
    id: 31,
    question: "Quel est l'inconvénient principal des briques cuites (Fired Bricks) par rapport à l'humidité ?",
    options: ["Elles fondent à l'eau", "Elles sont imperméables à l'humidité et ne laissent pas respirer le mur", "Elles absorbent toute l'eau comme une éponge", "Elles moisissent"],
    correctAnswerIndex: 1,
    explanation: "Elles sont souvent trop imperméables, empêchant le mur de respirer correctement."
  },
  {
    id: 32,
    question: "Quelle est la valeur approximative de l'énergie grise du Polyuréthane ?",
    options: ["50 kWh/m3", "450 kWh/m3", "974 kWh/m3", "10 kWh/m3"],
    correctAnswerIndex: 2,
    explanation: "Son énergie grise est très élevée, citée à environ 974 kWh/m3, ce qui est mauvais pour l'environnement."
  },
  {
    id: 33,
    question: "Quel symbole grec représente la résistance à la diffusion de la vapeur d'eau ?",
    options: ["λ (Lambda)", "μ (Mu)", "Ω (Omega)", "π (Pi)"],
    correctAnswerIndex: 1,
    explanation: "Le coefficient μ (Mu) indique la résistance d'un matériau à laisser passer la vapeur d'eau."
  },
  {
    id: 34,
    question: "Quel est un exemple de 'pont thermique géométrique' ?",
    options: ["Une fenêtre à double vitrage", "Un angle de mur extérieur", "Une porte en bois", "Un tapis"],
    correctAnswerIndex: 1,
    explanation: "L'angle d'un mur extérieur est un exemple classique où la surface de déperdition est plus grande que la surface intérieure."
  },
  {
    id: 35,
    question: "Avec quoi mélange-t-on le chanvre pour fabriquer des briques de chanvre ?",
    options: ["Du plâtre", "De la chaux et de l'eau", "Du ciment pur", "De la résine époxy"],
    correctAnswerIndex: 1,
    explanation: "Le granulat de chanvre est mélangé le plus souvent avec de la chaux et de l'eau pour former des briques."
  },
  {
    id: 36,
    question: "Pourquoi la fibre de coco a-t-elle un impact environnemental négatif malgré son origine naturelle ?",
    options: ["Elle nécessite beaucoup d'eau", "Elle nécessite d'être importée (transport CO2)", "Elle est toxique pour les poissons", "Elle est non recyclable"],
    correctAnswerIndex: 1,
    explanation: "Le transport sur de longues distances (importation) augmente considérablement son bilan carbone."
  },
  {
    id: 37,
    question: "Quel problème peut survenir avec la laine de verre et la ouate de cellulose au fil du temps ?",
    options: ["Elles deviennent radioactives", "Elles sont sujettes au tassement (settling)", "Elles s'évaporent", "Elles deviennent conductrices d'électricité"],
    correctAnswerIndex: 1,
    explanation: "Elles ont tendance à se tasser avec le temps, ce qui peut réduire leur performance isolante en haut des murs."
  },
  {
    id: 38,
    question: "Quel équipement de protection est recommandé pour poser de la laine de mouton ?",
    options: ["Des lunettes de soleil", "Un masque et des gants", "Des bouchons d'oreilles", "Une combinaison de plongée"],
    correctAnswerIndex: 1,
    explanation: "Bien que naturelle, elle peut contenir des produits de traitement, il est donc conseillé de porter masque et gants."
  },
  {
    id: 39,
    question: "Quelle est la technique d'isolation qui implique une 'contre-cloison' (lining wall) ?",
    options: ["L'Isolation Thermique par l'Extérieur (ITE)", "L'Isolation Thermique par l'Intérieur (ITI)", "L'isolation des combles perdus", "L'isolation sous vide"],
    correctAnswerIndex: 1,
    explanation: "L'ITI (Isolation par l'Intérieur) nécessite souvent la création d'une contre-cloison pour masquer l'isolant."
  },
  {
    id: 40,
    question: "Quel est un avantage financier indirect de l'isolation mentionné dans l'introduction ?",
    options: ["Elle est remboursée par la mairie", "Elle augmente la valeur du bâtiment", "Elle permet de vendre de l'électricité", "Elle est gratuite"],
    correctAnswerIndex: 1,
    explanation: "Une bonne isolation augmente la valeur patrimoniale (immobilière) du bâtiment."
  }
];

export const QUIZ_3: Question[] = [
  {
    id: 41,
    question: "Quel est le principe physique fondamental pour qu'un matériau soit un bon isolant thermique ?",
    options: ["Il doit être capable de conduire l'électricité.", "Il doit être très lourd et dense pour bloquer la chaleur.", "Il doit emprisonner de l'air immobile (conductivité très faible).", "Il doit être composé de métal pur."],
    correctAnswerIndex: 2,
    explanation: "L'air immobile est un très mauvais conducteur de chaleur, c'est la base de la plupart des isolants."
  },
  {
    id: 42,
    question: "Si l'on compare l'Isolation par l'Extérieur (ITE) et l'Isolation par l'Intérieur (ITI), quel est l'avantage majeur de l'ITE ?",
    options: ["Elle est moins chère à installer.", "Elle réduit la surface habitable de la maison.", "Elle traite efficacement les ponts thermiques et préserve l'inertie du bâtiment.", "Elle ne nécessite aucun échafaudage."],
    correctAnswerIndex: 2,
    explanation: "L'ITE enveloppe le bâtiment, supprimant les ponts thermiques de structure et gardant la masse des murs à l'intérieur pour l'inertie."
  },
  {
    id: 43,
    question: "Quelle formule permet de calculer la Résistance Thermique (R) d'un isolant ?",
    options: ["R = épaisseur (e) / conductivité thermique (λ)", "R = conductivité thermique (λ) * épaisseur (e)", "R = 1 / épaisseur (e)", "R = épaisseur (e) + conductivité thermique (λ)"],
    correctAnswerIndex: 0,
    explanation: "Plus l'épaisseur est grande et la conductivité faible, plus la résistance R est élevée."
  },
  {
    id: 44,
    question: "Qu'est-ce qu'un 'pont thermique' ?",
    options: ["Un système de chauffage performant.", "Une passerelle reliant deux bâtiments isolés.", "Une zone de faiblesse dans l'enveloppe du bâtiment par où la chaleur s'échappe.", "Un matériau isolant posé au sol."],
    correctAnswerIndex: 2,
    explanation: "C'est une rupture dans la continuité de l'isolant (jonction mur/dalle, angles) qui laisse fuir la chaleur."
  },
  {
    id: 45,
    question: "Outre l'aspect thermique, quelle autre propriété possèdent souvent les isolants fibreux (laines) ou poreux ?",
    options: ["Ils sont imperméables à l'eau.", "Ils génèrent de l'électricité.", "Ils offrent une bonne absorption acoustique.", "Ils sont transparents."],
    correctAnswerIndex: 2,
    explanation: "La structure fibreuse ou poreuse piège les ondes sonores, offrant une bonne isolation phonique."
  },
  {
    id: 46,
    question: "Quel est le risque mortel principal des isolants synthétiques (Polyuréthane, Polystyrène) en cas d'incendie ?",
    options: ["Ils fondent et créent une inondation.", "Ils dégagent des gaz/fumées toxiques.", "Ils deviennent radioactifs.", "Ils explosent violemment."],
    correctAnswerIndex: 1,
    explanation: "La combustion des plastiques libère des fumées très toxiques (cyanure, etc.) qui sont mortelles si inhalées."
  },
  {
    id: 47,
    question: "Pourquoi les laines minérales (verre, roche) ont-elles une énergie grise assez élevée ?",
    options: ["Parce qu'elles viennent de la lune.", "Parce qu'elles contiennent du pétrole.", "Parce qu'elles nécessitent des fours à très haute température pour fondre le sable ou la roche.", "Parce qu'elles sont transportées par avion uniquement."],
    correctAnswerIndex: 2,
    explanation: "La fusion de la roche ou du verre demande une énergie considérable (haute température)."
  },
  {
    id: 48,
    question: "Parmi ces matériaux, lequel a l'énergie grise la plus élevée (env. 974 kWh/m³) ?",
    options: ["La paille.", "La ouate de cellulose.", "Le Polyuréthane.", "Le liège."],
    correctAnswerIndex: 2,
    explanation: "Le Polyuréthane est un produit issu de la chimie lourde, très énergivore à fabriquer."
  },
  {
    id: 49,
    question: "Quel matériau naturel peut voir son bilan carbone alourdi s'il est importé de loin (transport) ?",
    options: ["La paille locale.", "La fibre de coco.", "La laine de verre fabriquée sur place.", "Le polystyrène."],
    correctAnswerIndex: 1,
    explanation: "La fibre de coco provient souvent de pays tropicaux lointains, le transport dégrade son bilan écologique."
  },
  {
    id: 50,
    question: "Quel problème de santé est associé à la pose de la laine de verre ?",
    options: ["Irritation de la peau et des voies respiratoires (fibres).", "Risque d'intoxication alimentaire.", "Brûlures chimiques graves immédiates.", "Perte de la vue."],
    correctAnswerIndex: 0,
    explanation: "Les fibres microscopiques sont irritantes pour la peau et les poumons lors de la manipulation."
  },
  {
    id: 51,
    question: "Quelle est la matière première de la ouate de cellulose ?",
    options: ["Le coton neuf.", "La laine de mouton.", "Le papier journal recyclé.", "Le bois déchiqueté."],
    correctAnswerIndex: 2,
    explanation: "Elle est fabriquée en broyant du papier journal recyclé, auquel on ajoute des sels de bore."
  },
  {
    id: 52,
    question: "Quel avantage les isolants bio-sourcés (bois, chanvre) ont-ils sur le confort d'été par rapport aux synthétiques ?",
    options: ["Ils refroidissent l'air comme un climatiseur.", "Leur densité plus élevée offre un meilleur déphasage thermique.", "Ils sont plus blancs et réfléchissent la lumière.", "Ils sont plus légers."],
    correctAnswerIndex: 1,
    explanation: "Leur capacité à stocker la chaleur (inertie) retarde l'entrée de la chaleur dans la maison en été."
  },
  {
    id: 53,
    question: "Quelle est la particularité de la culture du chanvre (Hemp) ?",
    options: ["Elle nécessite beaucoup de pesticides.", "C'est une plante à croissance rapide, imputrescible et stockant du CO2.", "Elle ne pousse que dans les pays tropicaux.", "Elle nécessite énormément d'eau potable."],
    correctAnswerIndex: 1,
    explanation: "Le chanvre est très écologique : il pousse vite, sans pesticides, et absorbe beaucoup de CO2."
  },
  {
    id: 54,
    question: "Quel est l'inconvénient lié à la production du liège (Cork) ?",
    options: ["L'arbre doit être abattu pour récolter le liège.", "Le liège pourrit à l'humidité.", "Il faut attendre 8 à 10 ans pour que l'écorce se reconstitue entre deux récoltes.", "C'est un produit dérivé du pétrole."],
    correctAnswerIndex: 2,
    explanation: "La ressource est renouvelable mais lente à se régénérer."
  },
  {
    id: 55,
    question: "Pour obtenir une isolation équivalente à 20 cm de polystyrène, quelle épaisseur de paille faut-il environ ?",
    options: ["10 cm.", "20 cm.", "40 cm.", "1 mètre."],
    correctAnswerIndex: 2,
    explanation: "La paille isole moins bien par cm que le polystyrène, il faut donc environ le double d'épaisseur."
  },
  {
    id: 56,
    question: "Quel matériau est considéré comme le solide le plus léger du monde et un isolant extrêmement performant ?",
    options: ["Le béton cellulaire.", "L'Aérogel.", "La laine de roche.", "Le verre cellulaire."],
    correctAnswerIndex: 1,
    explanation: "L'Aérogel est composé à 99.8% d'air, ce qui le rend ultra-léger et isolant."
  },
  {
    id: 57,
    question: "Quelle est la caractéristique du Panneau Isolant Sous Vide (VIP) ?",
    options: ["Très fin (ex: 35mm) pour une très haute performance, mais fragile au percement.", "Très épais et très lourd.", "Liquide à la pose.", "Fabriqué à base de plumes de canard."],
    correctAnswerIndex: 0,
    explanation: "Le vide est le meilleur isolant, permettant une extrême finesse, mais si on perce le panneau, il perd ses propriétés."
  },
  {
    id: 58,
    question: "La brique 'Monomur' et le béton cellulaire font partie de quelle technique ?",
    options: ["Isolation par l'intérieur (doublage).", "Isolation répartie (le mur porteur est lui-même isolant).", "Isolation par l'extérieur sous enduit.", "Isolation des combles perdus."],
    correctAnswerIndex: 1,
    explanation: "Ces matériaux porteurs sont suffisamment isolants pour ne pas nécessiter d'isolation rapportée supplémentaire."
  },
  {
    id: 59,
    question: "Le Polystyrène Extrudé (XPS) et le Polystyrène Expansé (EPS) sont des isolants de quelle famille ?",
    options: ["Minérale.", "Bio-sourcée.", "Synthétique (Pétrochimique).", "Animale."],
    correctAnswerIndex: 2,
    explanation: "Ce sont des plastiques dérivés du pétrole."
  },
  {
    id: 60,
    question: "Le béton de chanvre est généralement un mélange de chènevotte (chanvre) et de quel liant ?",
    options: ["De ciment pur.", "De chaux (et eau).", "De colle à bois.", "De goudron."],
    correctAnswerIndex: 1,
    explanation: "Le mélange Chanvre + Chaux crée un béton léger, isolant et respirant."
  }
];

// Helper to get all questions combined
export const ALL_QUESTIONS = [...QUIZ_1, ...QUIZ_2, ...QUIZ_3];