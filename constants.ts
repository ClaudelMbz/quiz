import { Question } from './types';

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

// Helper to get all questions combined
export const ALL_QUESTIONS = [...QUIZ_1, ...QUIZ_2, ...QUIZ_3];