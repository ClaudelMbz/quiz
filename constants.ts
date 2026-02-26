import { Question } from './types';

// ─────────────────────────────────────────────
//  QUIZ ISOLATION THERMIQUE
// ─────────────────────────────────────────────

export const QUIZ_1: Question[] = [
  {
    id: 1,
    question: "What is the thermal conductivity of still air?",
    options: ["1.5 W/m².K", "0.0262 W/m².K", "0.50 W/m².K", "0.001 W/m².K"],
    correctAnswerIndex: 1,
    explanation: "The conductivity of air is very low (0.0262 W/m².K) provided it is perfectly still."
  },
  {
    id: 2,
    question: "What is the formula to calculate thermal resistance (R)?",
    options: ["R = λ / e", "R = e × λ", "R = e / λ", "R = 1 / λ"],
    correctAnswerIndex: 2,
    explanation: "Thermal resistance is calculated by dividing thickness (e) by thermal conductivity (λ)."
  },
  {
    id: 3,
    question: "What is the fundamental principle of a good thermal insulator?",
    options: ["Be as dense as possible", "Trap maximum still air in small cells", "Contain metallic particles", "Facilitate air circulation"],
    correctAnswerIndex: 1,
    explanation: "The main technique is to trap as much air as possible, because still air is the 'worst conductor' (thus an excellent insulator)."
  },
  {
    id: 4,
    question: "What is a 'thermal bridge'?",
    options: ["A floor heating system", "A walkway between two buildings", "A localized element of the envelope where conductivity is higher", "A type of synthetic insulation"],
    correctAnswerIndex: 2,
    explanation: "It is a localized element (like a wall corner or junction) that has higher conductivity than the adjacent area (heat leak)."
  },
  {
    id: 5,
    question: "What is the main advantage of External Thermal Insulation (ETI)?",
    options: ["It is cheaper than internal insulation", "It eliminates most thermal bridges without reducing living space", "It requires no administrative permits", "It uses only straw"],
    correctAnswerIndex: 1,
    explanation: "ETI allows for the elimination of the vast majority of thermal bridges without reducing the interior living space."
  },
  {
    id: 6,
    question: "What is a major disadvantage of synthetic insulators (polystyrene, polyurethane) in case of fire?",
    options: ["They extinguish too quickly", "They release deadly toxic fumes", "They become cold", "They turn into stone"],
    correctAnswerIndex: 1,
    explanation: "The vapors released by these materials during a fire are often fatal."
  },
  {
    id: 7,
    question: "What is the particularity of bio-sourced insulators regarding summer comfort?",
    options: ["They are very light and heat up quickly", "They are generally dense and offer good thermal phase shift", "They have no impact on summer comfort", "They actively cool the house"],
    correctAnswerIndex: 1,
    explanation: "Their good density allows for a good phase shift (time lag), which is ideal for summer comfort (preventing overheating)."
  },
  {
    id: 8,
    question: "From which raw material is cellulose insulation derived?",
    options: ["From sheep's wool", "From recycled paper", "From volcanic rocks", "From plastic bottles"],
    correctAnswerIndex: 1,
    explanation: "It is obtained from treated recycled paper."
  },
  {
    id: 9,
    question: "Which insulator is sometimes described as the 'best thermal insulator' due to its very low conductivity (λ between 0.022 and 0.028)?",
    options: ["Glass wool", "Cork", "Polyurethane", "Straw"],
    correctAnswerIndex: 2,
    explanation: "Polyurethane has a very high insulating power with a conductivity of 0.022 to 0.028 W/m.K."
  },
  {
    id: 10,
    question: "Why is cork production limited?",
    options: ["Because trees die after harvest", "Because one must wait 8 to 10 years between each bark harvest", "Because it only grows in Antarctica", "Because it is toxic in its raw state"],
    correctAnswerIndex: 1,
    explanation: "The cork oak takes about 10 years to regenerate its bark after a harvest."
  },
  {
    id: 11,
    question: "What ingredient allows aerated concrete (AAC) to create its air bubbles?",
    options: ["Aluminum powder", "Baker's yeast", "Carbon dioxide", "Polystyrene beads"],
    correctAnswerIndex: 0,
    explanation: "The mixture swells under the effect of aluminum powder (0.6%) which creates numerous air cells."
  },
  {
    id: 12,
    question: "What is the advantage of the 'Monomur' (Monolithic) brick?",
    options: ["It is transparent", "It serves as both a structural material and insulation", "It is the cheapest insulator on the market", "It is made of wood"],
    correctAnswerIndex: 1,
    explanation: "It allows building the wall and insulating at the same time, eliminating the need to add an insulating panel."
  },
  {
    id: 13,
    question: "How thick is the Vacuum Insulation Panel (VIP) mentioned in recent trends?",
    options: ["100 mm", "35 mm", "10 mm", "50 cm"],
    correctAnswerIndex: 1,
    explanation: "The VIP has excellent insulating properties for only 35 mm of thickness."
  },
  {
    id: 14,
    question: "What is the insulation equivalence of straw compared to polystyrene?",
    options: ["10 cm of straw = 10 cm of polystyrene", "40 cm of straw = 20 cm of polystyrene", "Straw does not insulate", "20 cm of straw = 40 cm of polystyrene"],
    correctAnswerIndex: 1,
    explanation: "40 cm of straw insulates as well as 20 cm of polystyrene."
  },
  {
    id: 15,
    question: "What is a disadvantage of glass wool during installation?",
    options: ["It is very heavy", "It can cause skin irritation", "It smells like sulfur", "It is liquid"],
    correctAnswerIndex: 1,
    explanation: "It can cause skin irritation during handling due to fibers."
  },
  {
    id: 16,
    question: "Where does extruded polystyrene come from?",
    options: ["From the petrochemical industry", "From glass recycling", "From hemp cultivation", "From volcanic rock"],
    correctAnswerIndex: 0,
    explanation: "It is an insulating material produced by the petrochemical industry."
  },
  {
    id: 17,
    question: "Which natural binder is preferable to polyurethane for hemp wool?",
    options: ["Cement", "Starch", "Wood glue", "Tar"],
    correctAnswerIndex: 1,
    explanation: "It is advised to prefer products bound with natural starch rather than polyurethane."
  },
  {
    id: 18,
    question: "What is the origin of Perlite and Vermiculite?",
    options: ["They are expanded volcanic rocks", "They are recycled plastics", "They are wood residues", "They are animal products"],
    correctAnswerIndex: 0,
    explanation: "Perlite and vermiculite are rocks heated to increase their volume."
  },
  {
    id: 19,
    question: "What is a weak point of sheep's wool?",
    options: ["It burns very easily", "It has low thermal inertia (less comfort in summer)", "It is very heavy", "It is not recyclable"],
    correctAnswerIndex: 1,
    explanation: "It has low inertia, which offers less comfort in summer."
  },
  {
    id: 20,
    question: "Which material is described as 'one of the lightest solid materials on the market'?",
    options: ["Aerated concrete", "Aerogel", "Hemp brick", "Cellular glass"],
    correctAnswerIndex: 1,
    explanation: "Aerogel is cited as one of the lightest solid materials."
  }
];

export const QUIZ_2: Question[] = [
  {
    id: 21,
    question: "What does the U-value (or K-value) represent in quality criteria?",
    options: ["Thermal resistance", "Thermal transmittance (inverse of resistance)", "Insulation thickness", "Insulation density"],
    correctAnswerIndex: 1,
    explanation: "The lower the U-value, the better the insulation. It is the inverse of resistance R."
  },
  {
    id: 22,
    question: "What percentage of the volume of an aerated concrete block is occupied by air?",
    options: ["20%", "50%", "80%", "99%"],
    correctAnswerIndex: 2,
    explanation: "Inert air occupies 80% of the volume of an aerated concrete block, versus 20% for solid matter."
  },
  {
    id: 23,
    question: "What raw material is used to manufacture rock wool (Rockwool)?",
    options: ["Sand only", "Basalt (black volcanic rock) or blast furnace slag", "Recycled glass", "Coconut fiber"],
    correctAnswerIndex: 1,
    explanation: "It is produced by melting basalt or blast furnace slag."
  },
  {
    id: 24,
    question: "Which binder (glue) is often used to assemble flax fibers?",
    options: ["Starch", "Polyester", "Bitumen", "Lime"],
    correctAnswerIndex: 1,
    explanation: "Flax fibers are assembled and thermobonded in most cases with polyester."
  },
  {
    id: 25,
    question: "What specific controversy concerns Vermiculite?",
    options: ["It attracts termites", "It may contain asbestos (cancer risk)", "It melts in the sun", "It is radioactive"],
    correctAnswerIndex: 1,
    explanation: "There is a historical risk that vermiculite contains traces of asbestos, which is dangerous for health."
  },
  {
    id: 26,
    question: "At what temperature is siliceous rock heated to obtain expanded Perlite?",
    options: ["100°C", "300°C", "Nearly 1200°C", "2000°C"],
    correctAnswerIndex: 2,
    explanation: "Perlite is heated to nearly 1200°C to expand and become insulating."
  },
  {
    id: 27,
    question: "What acoustic disadvantage is mentioned for the 'Monomur' brick?",
    options: ["It lets voices through", "Resonance problems and 'clicking' at switches", "It absorbs too much sound", "It vibrates with the wind"],
    correctAnswerIndex: 1,
    explanation: "Acoustic resonance problems and noise at electrical boxes are sometimes observed."
  },
  {
    id: 28,
    question: "Which natural substance allows expanded cork granules to agglomerate?",
    options: ["Vinyl glue", "Suberin (its own resin)", "Latex", "Beeswax"],
    correctAnswerIndex: 1,
    explanation: "Granules agglomerate under the natural action of their resin, suberin, when heated."
  },
  {
    id: 29,
    question: "With which material is Aerogel sometimes combined to become an 'exceptional' insulator?",
    options: ["Rock wool", "Polystyrene", "Straw", "Concrete"],
    correctAnswerIndex: 0,
    explanation: "Aerogel combined with rock wool (as in Aerowool) offers exceptional performance."
  },
  {
    id: 30,
    question: "What is 'Wood composite' (recent trend for exterior walls) made of?",
    options: ["Wood and stone", "Wood and PVC", "Wood and straw", "Wood and aluminum"],
    correctAnswerIndex: 1,
    explanation: "It is a composite material that combines the warmth of wood with the resistance of PVC."
  },
  {
    id: 31,
    question: "What is the main disadvantage of Fired Bricks regarding moisture?",
    options: ["They melt in water", "They are impermeable to moisture and don't let the wall breathe", "They absorb all water like a sponge", "They get moldy"],
    correctAnswerIndex: 1,
    explanation: "They are often too impermeable, preventing the wall from breathing properly."
  },
  {
    id: 32,
    question: "What is the approximate embodied energy value of Polyurethane?",
    options: ["50 kWh/m3", "450 kWh/m3", "974 kWh/m3", "10 kWh/m3"],
    correctAnswerIndex: 2,
    explanation: "Its embodied energy is very high, cited at about 974 kWh/m3, which is bad for the environment."
  },
  {
    id: 33,
    question: "Which Greek symbol represents resistance to water vapor diffusion?",
    options: ["λ (Lambda)", "μ (Mu)", "Ω (Omega)", "π (Pi)"],
    correctAnswerIndex: 1,
    explanation: "The coefficient μ (Mu) indicates a material's resistance to letting water vapor pass through."
  },
  {
    id: 34,
    question: "What is an example of a 'geometric thermal bridge'?",
    options: ["A double-glazed window", "An exterior wall corner", "A wooden door", "A rug"],
    correctAnswerIndex: 1,
    explanation: "The corner of an exterior wall is a classic example where the heat loss surface area is greater than the internal surface area."
  },
  {
    id: 35,
    question: "What is mixed with hemp to make hemp bricks?",
    options: ["Plaster", "Lime and water", "Pure cement", "Epoxy resin"],
    correctAnswerIndex: 1,
    explanation: "Hemp hurds are most often mixed with lime and water to form bricks."
  },
  {
    id: 36,
    question: "Why does coconut fiber have a negative environmental impact despite its natural origin?",
    options: ["It requires a lot of water", "It needs to be imported (transport CO2)", "It is toxic to fish", "It is not recyclable"],
    correctAnswerIndex: 1,
    explanation: "Long-distance transport (importation) significantly increases its carbon footprint."
  },
  {
    id: 37,
    question: "What problem can occur with glass wool and cellulose insulation over time?",
    options: ["They become radioactive", "They are susceptible to settling", "They evaporate", "They become electrically conductive"],
    correctAnswerIndex: 1,
    explanation: "They tend to settle over time, which can reduce their insulating performance at the top of walls."
  },
  {
    id: 38,
    question: "What protective equipment is recommended when installing sheep's wool?",
    options: ["Sunglasses", "A mask and gloves", "Earplugs", "A wetsuit"],
    correctAnswerIndex: 1,
    explanation: "Although natural, it may contain treatment products, so wearing a mask and gloves is advised."
  },
  {
    id: 39,
    question: "Which insulation technique involves a 'lining wall'?",
    options: ["External Thermal Insulation (ETI)", "Internal Thermal Insulation (ITI)", "Attic insulation", "Vacuum insulation"],
    correctAnswerIndex: 1,
    explanation: "ITI (Internal Insulation) often requires creating a lining wall (counter-partition) to hide the insulation."
  },
  {
    id: 40,
    question: "What is an indirect financial benefit of insulation mentioned in the introduction?",
    options: ["It is reimbursed by the city", "It increases the value of the building", "It allows selling electricity", "It is free"],
    correctAnswerIndex: 1,
    explanation: "Good insulation increases the property value of the building."
  }
];

export const QUIZ_3: Question[] = [
  {
    id: 41,
    question: "What is the fundamental physical principle for a material to be a good thermal insulator?",
    options: ["It must be able to conduct electricity.", "It must be very heavy and dense to block heat.", "It must trap still air (very low conductivity).", "It must be composed of pure metal."],
    correctAnswerIndex: 2,
    explanation: "Still air is a very poor conductor of heat; this is the basis of most insulators."
  },
  {
    id: 42,
    question: "Comparing External Insulation (ETI) and Internal Insulation (ITI), what is the major advantage of ETI?",
    options: ["It is cheaper to install.", "It reduces the living space of the house.", "It effectively treats thermal bridges and preserves building inertia.", "It requires no scaffolding."],
    correctAnswerIndex: 2,
    explanation: "ETI wraps the building, eliminating structural thermal bridges and keeping the wall mass inside for inertia."
  },
  {
    id: 43,
    question: "What formula allows calculating the Thermal Resistance (R) of an insulator?",
    options: ["R = thickness (e) / thermal conductivity (λ)", "R = thermal conductivity (λ) * thickness (e)", "R = 1 / thickness (e)", "R = thickness (e) + thermal conductivity (λ)"],
    correctAnswerIndex: 0,
    explanation: "The greater the thickness and the lower the conductivity, the higher the resistance R."
  },
  {
    id: 44,
    question: "What is a 'thermal bridge'?",
    options: ["A high-performance heating system.", "A walkway connecting two insulated buildings.", "A weak zone in the building envelope where heat escapes.", "An insulating material placed on the ground."],
    correctAnswerIndex: 2,
    explanation: "It is a break in the continuity of the insulation (wall/slab junction, corners) that lets heat escape."
  },
  {
    id: 45,
    question: "Besides thermal aspects, what other property do fibrous (wools) or porous insulators often possess?",
    options: ["They are waterproof.", "They generate electricity.", "They offer good acoustic absorption.", "They are transparent."],
    correctAnswerIndex: 2,
    explanation: "The fibrous or porous structure traps sound waves, offering good sound insulation."
  },
  {
    id: 46,
    question: "What is the main deadly risk of synthetic insulators (Polyurethane, Polystyrene) in case of fire?",
    options: ["They melt and create a flood.", "They release toxic gases/fumes.", "They become radioactive.", "They explode violently."],
    correctAnswerIndex: 1,
    explanation: "Combustion of plastics releases very toxic fumes (cyanide, etc.) which are deadly if inhaled."
  },
  {
    id: 47,
    question: "Why do mineral wools (glass, rock) have relatively high embodied energy?",
    options: ["Because they come from the moon.", "Because they contain oil.", "Because they require furnaces at very high temperatures to melt sand or rock.", "Because they are transported by plane only."],
    correctAnswerIndex: 2,
    explanation: "Melting rock or glass requires considerable energy (high temperature)."
  },
  {
    id: 48,
    question: "Among these materials, which has the highest embodied energy (approx. 974 kWh/m³)?",
    options: ["Straw.", "Cellulose insulation.", "Polyurethane.", "Cork."],
    correctAnswerIndex: 2,
    explanation: "Polyurethane is a product of heavy chemistry, very energy-intensive to manufacture."
  },
  {
    id: 49,
    question: "Which natural material can see its carbon footprint worsened if imported from far away (transport)?",
    options: ["Local straw.", "Coconut fiber.", "Glass wool manufactured on site.", "Polystyrene."],
    correctAnswerIndex: 1,
    explanation: "Coconut fiber often comes from distant tropical countries; transport degrades its ecological balance."
  },
  {
    id: 50,
    question: "What health problem is associated with installing glass wool?",
    options: ["Skin and respiratory irritation (fibers).", "Risk of food poisoning.", "Immediate severe chemical burns.", "Loss of sight."],
    correctAnswerIndex: 0,
    explanation: "Microscopic fibers are irritating to the skin and lungs during handling."
  },
  {
    id: 51,
    question: "What is the raw material of cellulose insulation?",
    options: ["New cotton.", "Sheep's wool.", "Recycled newspaper.", "Chipped wood."],
    correctAnswerIndex: 2,
    explanation: "It is manufactured by shredding recycled newspaper, to which boron salts are added."
  },
  {
    id: 52,
    question: "What advantage do bio-sourced insulators (wood, hemp) have over synthetics regarding summer comfort?",
    options: ["They cool the air like an air conditioner.", "Their higher density offers better thermal phase shift.", "They are whiter and reflect light.", "They are lighter."],
    correctAnswerIndex: 1,
    explanation: "Their ability to store heat (inertia) delays the entry of heat into the house in summer."
  },
  {
    id: 53,
    question: "What is the particularity of hemp cultivation?",
    options: ["It requires a lot of pesticides.", "It is a fast-growing, rot-proof plant that stores CO2.", "It only grows in tropical countries.", "It requires huge amounts of drinking water."],
    correctAnswerIndex: 1,
    explanation: "Hemp is very ecological: it grows fast, without pesticides, and absorbs a lot of CO2."
  },
  {
    id: 54,
    question: "What is the disadvantage linked to cork production?",
    options: ["The tree must be cut down to harvest cork.", "Cork rots in humidity.", "One must wait 8 to 10 years for the bark to regenerate between two harvests.", "It is a petroleum derivative."],
    correctAnswerIndex: 2,
    explanation: "The resource is renewable but slow to regenerate."
  },
  {
    id: 55,
    question: "To obtain insulation equivalent to 20 cm of polystyrene, what thickness of straw is needed roughly?",
    options: ["10 cm.", "20 cm.", "40 cm.", "1 meter."],
    correctAnswerIndex: 2,
    explanation: "Straw insulates less effectively per cm than polystyrene, so about double the thickness is needed."
  },
  {
    id: 56,
    question: "Which material is considered the lightest solid in the world and an extremely high-performance insulator?",
    options: ["Aerated concrete.", "Aerogel.", "Rock wool.", "Cellular glass."],
    correctAnswerIndex: 1,
    explanation: "Aerogel is composed of 99.8% air, making it ultra-light and insulating."
  },
  {
    id: 57,
    question: "What is the characteristic of the Vacuum Insulation Panel (VIP)?",
    options: ["Very thin (e.g., 35mm) for very high performance, but fragile to puncture.", "Very thick and very heavy.", "Liquid during installation.", "Made from duck feathers."],
    correctAnswerIndex: 0,
    explanation: "Vacuum is the best insulator, allowing extreme thinness, but if the panel is pierced, it loses its properties."
  },
  {
    id: 58,
    question: "The 'Monomur' brick and aerated concrete belong to which technique?",
    options: ["Internal insulation (lining).", "Distributed insulation (the load-bearing wall itself is insulating).", "External insulation under render.", "Lost attic insulation."],
    correctAnswerIndex: 1,
    explanation: "These load-bearing materials are sufficiently insulating not to require additional added insulation."
  },
  {
    id: 59,
    question: "Extruded Polystyrene (XPS) and Expanded Polystyrene (EPS) belong to which family of insulators?",
    options: ["Mineral.", "Bio-sourced.", "Synthetic (Petrochemical).", "Animal."],
    correctAnswerIndex: 2,
    explanation: "These are plastics derived from petroleum."
  },
  {
    id: 60,
    question: "Hemp concrete is generally a mixture of hemp hurds and which binder?",
    options: ["Pure cement.", "Lime (and water).", "Wood glue.", "Tar."],
    correctAnswerIndex: 1,
    explanation: "The Hemp + Lime mixture creates a lightweight, insulating, and breathable concrete."
  }
];

// Helper to get all insulation questions combined
export const ALL_QUESTIONS = [...QUIZ_1, ...QUIZ_2, ...QUIZ_3];


// ─────────────────────────────────────────────
//  QUIZ MACHINE LEARNING & DEEP LEARNING
// ─────────────────────────────────────────────

export const QUIZ_AI_1: Question[] = [
  {
    id: 101,
    question: "What is Machine Learning?",
    options: [
      "A subfield of artificial intelligence",
      "A traditional programming technique",
      "A programming language",
      "A type of database"
    ],
    correctAnswerIndex: 0,
    explanation: "Machine Learning is a subfield of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed."
  },
  {
    id: 102,
    question: "What is the main characteristic of Machine Learning?",
    options: [
      "The use of conditional logic",
      "The use of predefined rules",
      "Learning from data",
      "Manual configuration by experts"
    ],
    correctAnswerIndex: 2,
    explanation: "The defining characteristic of Machine Learning is its ability to learn patterns directly from data, rather than following explicitly programmed rules."
  },
  {
    id: 103,
    question: "What is Deep Learning?",
    options: [
      "A type of state machine",
      "A Machine Learning technique based on deep neural networks",
      "A sorting algorithm",
      "A data compression method"
    ],
    correctAnswerIndex: 1,
    explanation: "Deep Learning is a subset of Machine Learning that uses deep neural networks with multiple layers to learn complex representations from data."
  },
  {
    id: 104,
    question: "What is an activation function in a neural network?",
    options: [
      "A function that introduces non-linearity into the model",
      "A function that initializes the network weights",
      "A function that calculates the average of the inputs",
      "A function that splits data into batches"
    ],
    correctAnswerIndex: 0,
    explanation: "An activation function introduces non-linearity into the neural network, allowing it to learn and represent complex patterns beyond simple linear relationships."
  },
  {
    id: 105,
    question: "What is overfitting in Machine Learning?",
    options: [
      "A phenomenon where the model achieves optimal performance",
      "A phenomenon where the model does not learn enough from the training data",
      "A phenomenon where the model memorizes training data and does not generalize well",
      "A phenomenon where the model trains too quickly"
    ],
    correctAnswerIndex: 2,
    explanation: "Overfitting occurs when a model learns the training data too well — including its noise — and fails to generalize to new, unseen data."
  },
  {
    id: 106,
    question: "What is gradient descent?",
    options: [
      "An optimization algorithm for adjusting the parameters of a model",
      "An algorithm for sorting data",
      "An algorithm for splitting data into training and testing sets",
      "A method for visualizing neural networks"
    ],
    correctAnswerIndex: 0,
    explanation: "Gradient descent is an optimization algorithm that iteratively adjusts model parameters in the direction that minimizes the cost function."
  },
  {
    id: 107,
    question: "What is the main difference between classification and regression?",
    options: [
      "Classification predicts categories; regression predicts continuous values",
      "Classification predicts discrete values only",
      "Classification predicts continuous values; regression predicts categories",
      "There is no difference between them"
    ],
    correctAnswerIndex: 0,
    explanation: "Classification predicts which category an input belongs to (e.g., spam/not spam), while regression predicts a continuous numerical value (e.g., a price)."
  },
  {
    id: 108,
    question: "What is the typical representation of outputs in a binary classification problem?",
    options: [
      "Continuous values between 0 and 100",
      "Several classes (3 or more)",
      "Two classes (0 or 1)",
      "Floating point probabilities only"
    ],
    correctAnswerIndex: 2,
    explanation: "Binary classification outputs are represented as two mutually exclusive classes, typically encoded as 0 or 1 (e.g., yes/no, true/false)."
  },
  {
    id: 109,
    question: "Predicting a student's grade based on hours of study is what type of problem?",
    options: [
      "A multiclass classification problem",
      "A binary classification problem",
      "A regression problem",
      "An unsupervised learning problem"
    ],
    correctAnswerIndex: 2,
    explanation: "Predicting a grade is a regression problem since the output (the grade) is a continuous numerical value, not a category."
  },
  {
    id: 110,
    question: "For an e-commerce recommendation system, what is the primary business objective?",
    options: [
      "Improve customer age prediction",
      "Increase customer satisfaction",
      "Increase sales by recommending relevant products",
      "Reduce server costs"
    ],
    correctAnswerIndex: 2,
    explanation: "The core business objective of a recommendation system is to increase sales by surfacing products customers are most likely to purchase."
  }
];

export const QUIZ_AI_2: Question[] = [
  {
    id: 111,
    question: "Predicting the maximum temperature today from past weather data is what type of problem?",
    options: [
      "Regression",
      "Binary classification",
      "Multiclass classification",
      "Clustering"
    ],
    correctAnswerIndex: 0,
    explanation: "Temperature is a continuous numerical value, making this a regression problem."
  },
  {
    id: 112,
    question: "A system predicts whether a sound is 'hello', 'goodbye', or unrecognized. What type of problem is this?",
    options: [
      "Regression",
      "Binary classification",
      "Multiclass classification",
      "Dimensionality reduction"
    ],
    correctAnswerIndex: 2,
    explanation: "Since there are 3 possible output categories (hello, goodbye, unrecognized), this is a multiclass classification problem."
  },
  {
    id: 113,
    question: "What is precision as a performance metric?",
    options: [
      "True positives divided by true negatives",
      "True positives divided by the total number of examples",
      "True positives divided by the sum of true positives and false positives",
      "True positives divided by the sum of true positives and false negatives"
    ],
    correctAnswerIndex: 2,
    explanation: "Precision measures the accuracy of positive predictions: TP / (TP + FP). It answers 'of all the positive predictions, how many were actually correct?'"
  },
  {
    id: 114,
    question: "What is Mean Absolute Error (MAE)?",
    options: [
      "The mean of the squares of the differences between predicted and actual values",
      "The square root of the mean of squared differences between predicted and actual values",
      "The average of the absolute values of differences between predicted and actual values",
      "The sum of all prediction errors"
    ],
    correctAnswerIndex: 2,
    explanation: "MAE is the average of |predicted - actual| over all samples. It gives an intuitive measure of average prediction error in the same units as the target."
  },
  {
    id: 115,
    question: "What does a ROC (Receiver Operating Characteristic) curve represent?",
    options: [
      "Model performance as a function of the number of training iterations",
      "Model performance depending on the size of the dataset",
      "Model performance across different classification thresholds",
      "Model performance on the training set vs. the test set"
    ],
    correctAnswerIndex: 2,
    explanation: "A ROC curve plots True Positive Rate vs. False Positive Rate at various classification thresholds, visualizing the trade-off a model makes."
  },
  {
    id: 116,
    question: "In which type of model is a confusion matrix most commonly used?",
    options: [
      "Classification models",
      "Dimensionality reduction models",
      "Clustering models",
      "Regression models"
    ],
    correctAnswerIndex: 0,
    explanation: "A confusion matrix summarizes the correct and incorrect predictions for each class, making it a standard evaluation tool for classification models."
  },
  {
    id: 117,
    question: "What is a cost function in machine learning?",
    options: [
      "A measure of the error between model predictions and actual values",
      "A function to generate synthetic data",
      "A function to initialize the weights of a model",
      "A function to scale the input features"
    ],
    correctAnswerIndex: 0,
    explanation: "The cost (or loss) function quantifies how far the model's predictions are from the true values. Minimizing it is the goal of training."
  },
  {
    id: 118,
    question: "What is accuracy as a performance metric?",
    options: [
      "The proportion of correct predictions among all predictions",
      "The proportion of true positives among all positives",
      "The average distance between predicted and actual values",
      "The area under the ROC curve"
    ],
    correctAnswerIndex: 0,
    explanation: "Accuracy = (correct predictions) / (total predictions). It measures the overall fraction of predictions the model got right."
  },
  {
    id: 119,
    question: "System 1: MAE=2.35, RMSE=5.46. System 2: MAE=3.15, RMSE=3.85. Which system had the largest individual errors?",
    options: [
      "System 1",
      "System 2",
      "Both are equivalent",
      "Impossible to determine"
    ],
    correctAnswerIndex: 0,
    explanation: "System 1 has a much higher RMSE (5.46 vs 3.85). Since RMSE penalizes large errors more heavily than MAE, the large gap indicates System 1 made bigger individual errors."
  },
  {
    id: 120,
    question: "To evaluate a system predicting temperature from past temperatures, what metric should be used?",
    options: [
      "RMSE (Root Mean Squared Error)",
      "Confusion matrix",
      "Accuracy",
      "Precision"
    ],
    correctAnswerIndex: 0,
    explanation: "Temperature prediction is a regression problem. RMSE is an appropriate regression metric; confusion matrices and accuracy are for classification tasks."
  }
];

export const QUIZ_AI_3: Question[] = [
  {
    id: 121,
    question: "True or False: You can use the same neural network (same neurons, layers, connections) to solve 2 different problems.",
    options: [
      "True — neural networks are universal and reusable",
      "False — architecture must be adapted to each specific problem",
      "True, but only for similar problem types",
      "False, only for problems with different input sizes"
    ],
    correctAnswerIndex: 1,
    explanation: "The architecture (number of neurons, layers, connections) must be tailored to the specific problem. A network designed for image recognition cannot be directly reused for text generation."
  },
  {
    id: 122,
    question: "True or False: Deep Learning systems are sensitive to bias in training data.",
    options: [
      "True — biased data leads to biased models",
      "False — deep learning automatically corrects data bias",
      "True, but only for small datasets",
      "False — regularization removes all bias"
    ],
    correctAnswerIndex: 0,
    explanation: "Deep Learning models learn patterns from training data. If that data is biased, the model will learn and reproduce those biases in its predictions."
  },
  {
    id: 123,
    question: "True or False: Deep Learning has a 'black box' effect — we don't fully understand the solution it computes.",
    options: [
      "True — internal representations are difficult to interpret",
      "False — all computations are fully transparent",
      "True, but only for models with over 10 layers",
      "False — gradient descent makes models fully explainable"
    ],
    correctAnswerIndex: 0,
    explanation: "Deep Learning models are often considered black boxes because the reasoning behind their predictions is encoded across millions of parameters and is hard to interpret."
  },
  {
    id: 124,
    question: "True or False: The training cost of Deep Learning is high compared to traditional algorithmic solutions.",
    options: [
      "False — deep learning is always faster to train",
      "True — training requires significant computation resources",
      "False — modern GPUs have eliminated this problem",
      "True, but only for image-related tasks"
    ],
    correctAnswerIndex: 1,
    explanation: "Training deep neural networks requires many matrix operations over large datasets, demanding significant compute resources (GPUs/TPUs) and time."
  },
  {
    id: 125,
    question: "True or False: A solution based on classical computer vision gives better results than one based on Deep Learning.",
    options: [
      "True — classical methods are always more reliable",
      "False — Deep Learning has surpassed classical computer vision on most benchmarks",
      "True, but only for real-time applications",
      "False, but only for black-and-white images"
    ],
    correctAnswerIndex: 1,
    explanation: "Since AlexNet in 2012, Deep Learning has consistently outperformed classical computer vision approaches on major benchmarks such as ImageNet."
  },
  {
    id: 126,
    question: "True or False: Deep Learning has good generalization capacity on data not seen during training.",
    options: [
      "False — it always overfits the training data",
      "True — when trained well, it generalizes effectively to new inputs",
      "False — it requires retraining for every new input",
      "True, but only with very large datasets"
    ],
    correctAnswerIndex: 1,
    explanation: "When properly trained with sufficient data and regularization, Deep Learning models can generalize well and give good predictions on unseen inputs."
  },
  {
    id: 127,
    question: "True or False: It is easy to find good values for hyperparameters (learning rate, number of layers/neurons per layer).",
    options: [
      "True — there are standard values that always work",
      "False — hyperparameter tuning is complex and often requires extensive search",
      "True — AutoML has completely solved this problem",
      "False, but only for recurrent neural networks"
    ],
    correctAnswerIndex: 1,
    explanation: "Hyperparameter tuning is one of the most challenging parts of Deep Learning. There are no universal optimal values; it requires experimentation, domain knowledge, and often automated search strategies."
  }
];

// Helper to get all AI/ML questions combined
export const ALL_AI_QUESTIONS = [...QUIZ_AI_1, ...QUIZ_AI_2, ...QUIZ_AI_3];
