// 🐾 Hey, Vet! - Constants & Mock Data

import { Vaccine, Disease, PetSound, Plan } from './types';

// Design System - Paleta Pastel
export const COLORS = {
  primary: '#A3D8F4', // Azul pastel suave
  secondary: '#B8E4C9', // Verde menta pastel
  accent: '#F7D9D9', // Rosa pêssego suave
  purple: '#D8C7FF', // Lilás claro
  cream: '#FFF7E9', // Creme neutro
  brown: '#A7866A', // Marrom suave
} as const;

// Vacinas para Cães
export const DOG_VACCINES: Vaccine[] = [
  {
    id: 'v8-v10',
    name: 'V8 ou V10 (Polivalente)',
    description: 'Vacina múltipla que protege contra as principais doenças virais caninas',
    petType: ['dog'],
    ageRecommendation: '6-8 semanas (1ª dose), reforços a cada 21-30 dias',
    isRequired: true,
    boosterSchedule: 'anual',
    protectsAgainst: [
      'Cinomose',
      'Parvovirose',
      'Hepatite Infecciosa',
      'Adenovirose',
      'Parainfluenza',
      'Coronavirose',
      'Leptospirose (2 ou 4 cepas)'
    ]
  },
  {
    id: 'raiva-dog',
    name: 'Antirrábica',
    description: 'Proteção contra o vírus da raiva, doença fatal transmitida por mordidas',
    petType: ['dog'],
    ageRecommendation: '4 meses (após completar V8/V10)',
    isRequired: true,
    boosterSchedule: 'anual',
    protectsAgainst: ['Raiva']
  },
  {
    id: 'giardia-dog',
    name: 'Giárdia',
    description: 'Proteção contra parasita intestinal que causa diarreia crônica',
    petType: ['dog'],
    ageRecommendation: '8 semanas (2 doses com intervalo de 21 dias)',
    isRequired: false,
    boosterSchedule: 'anual',
    protectsAgainst: ['Giardíase']
  },
  {
    id: 'gripe-dog',
    name: 'Gripe Canina (Tosse dos Canis)',
    description: 'Proteção contra Bordetella e vírus da parainfluenza',
    petType: ['dog'],
    ageRecommendation: '8 semanas',
    isRequired: false,
    boosterSchedule: 'anual ou semestral (cães em creches)',
    protectsAgainst: ['Traqueobronquite Infecciosa', 'Tosse dos Canis']
  },
  {
    id: 'leishmaniose',
    name: 'Leishmaniose',
    description: 'Proteção contra doença transmitida por mosquito-palha',
    petType: ['dog'],
    ageRecommendation: '4 meses (3 doses com intervalo de 21 dias)',
    isRequired: false,
    boosterSchedule: 'anual',
    protectsAgainst: ['Leishmaniose Visceral']
  }
];

// Vacinas para Gatos
export const CAT_VACCINES: Vaccine[] = [
  {
    id: 'v3-v4-v5',
    name: 'V3, V4 ou V5 (Polivalente Felina)',
    description: 'Vacina múltipla contra as principais doenças virais felinas',
    petType: ['cat'],
    ageRecommendation: '6-8 semanas (1ª dose), reforços a cada 21-30 dias',
    isRequired: true,
    boosterSchedule: 'anual',
    protectsAgainst: [
      'Panleucopenia Felina',
      'Rinotraqueíte',
      'Calicivirose',
      'Clamidiose (V4/V5)',
      'Leucemia Felina (V5)'
    ]
  },
  {
    id: 'raiva-cat',
    name: 'Antirrábica Felina',
    description: 'Proteção contra o vírus da raiva',
    petType: ['cat'],
    ageRecommendation: '4 meses (após completar V3/V4/V5)',
    isRequired: true,
    boosterSchedule: 'anual',
    protectsAgainst: ['Raiva']
  },
  {
    id: 'felv',
    name: 'FeLV (Leucemia Felina)',
    description: 'Proteção específica contra vírus da leucemia felina',
    petType: ['cat'],
    ageRecommendation: '8 semanas (2 doses com intervalo de 21 dias)',
    isRequired: false,
    boosterSchedule: 'anual',
    protectsAgainst: ['Leucemia Felina (FeLV)']
  }
];

// Doenças Tradicionais e Modernas
export const DISEASES: Disease[] = [
  {
    id: 'cinomose',
    name: 'Cinomose',
    category: 'traditional',
    petType: ['dog'],
    description: 'Doença viral grave que afeta sistema respiratório, digestivo e nervoso',
    symptoms: [
      'Febre alta',
      'Secreção nasal e ocular',
      'Tosse',
      'Vômitos e diarreia',
      'Convulsões (fase neurológica)',
      'Tremores musculares'
    ],
    causes: ['Vírus da cinomose (Morbillivirus)', 'Contato com cães infectados'],
    severity: 'critical',
    firstAidActions: [
      'Isolar o animal imediatamente',
      'Manter hidratado',
      'Procurar veterinário URGENTE'
    ],
    whenToSeeVet: 'IMEDIATAMENTE ao notar qualquer sintoma',
    treatments: [
      'Tratamento de suporte (soro, antibióticos)',
      'Controle de convulsões',
      'Internação em casos graves'
    ],
    prevention: ['Vacinação V8/V10 em dia', 'Evitar contato com cães não vacinados']
  },
  {
    id: 'ansiedade-pet',
    name: 'Ansiedade e Estresse Crônico',
    category: 'modern',
    petType: ['dog', 'cat'],
    description: 'Transtorno comportamental causado por ambiente urbano, solidão ou mudanças',
    symptoms: [
      'Lambedura excessiva',
      'Destruição de objetos',
      'Latidos/miados excessivos',
      'Perda de apetite',
      'Isolamento social',
      'Tremores sem causa aparente',
      'Comportamento compulsivo'
    ],
    causes: [
      'Solidão prolongada',
      'Falta de enriquecimento ambiental',
      'Mudanças bruscas (mudança de casa, novo pet)',
      'Traumas passados',
      'Ambiente urbano estressante'
    ],
    severity: 'medium',
    firstAidActions: [
      'Criar rotina previsível',
      'Aumentar tempo de interação',
      'Oferecer brinquedos interativos',
      'Música calma ou difusor de feromônios'
    ],
    whenToSeeVet: 'Se sintomas persistirem por mais de 2 semanas ou piorarem',
    treatments: [
      'Terapia comportamental',
      'Enriquecimento ambiental',
      'Ansiolíticos naturais (valeriana, camomila)',
      'Medicação (em casos graves, prescrita por veterinário)',
      'Consulta com comportamentalista animal'
    ],
    prevention: [
      'Rotina estruturada',
      'Exercícios físicos diários',
      'Socialização adequada',
      'Brinquedos de enriquecimento'
    ]
  },
  {
    id: 'alopecia-stress',
    name: 'Alopecia por Estresse',
    category: 'modern',
    petType: ['dog', 'cat'],
    description: 'Perda de pelo causada por estresse emocional e lambedura compulsiva',
    symptoms: [
      'Áreas sem pelo (geralmente simétricas)',
      'Lambedura excessiva em áreas específicas',
      'Pele avermelhada ou irritada',
      'Comportamento ansioso'
    ],
    causes: [
      'Estresse crônico',
      'Ansiedade de separação',
      'Tédio',
      'Conflitos com outros pets'
    ],
    severity: 'medium',
    firstAidActions: [
      'Identificar fonte de estresse',
      'Aumentar estímulos mentais',
      'Evitar punições'
    ],
    whenToSeeVet: 'Se houver feridas ou infecções secundárias',
    treatments: [
      'Terapia comportamental',
      'Redução de estressores',
      'Suplementos calmantes',
      'Tratamento tópico para pele (se necessário)'
    ],
    prevention: ['Ambiente enriquecido', 'Rotina estável', 'Atenção adequada']
  },
  {
    id: 'depression-pet',
    name: 'Depressão em Pets',
    category: 'modern',
    petType: ['dog', 'cat'],
    description: 'Estado emocional de apatia e desinteresse prolongado',
    symptoms: [
      'Apatia e desinteresse',
      'Perda de apetite',
      'Sono excessivo',
      'Evitar interação social',
      'Perda de interesse em brincadeiras',
      'Olhar triste/vazio'
    ],
    causes: [
      'Perda de companheiro (humano ou animal)',
      'Mudanças drásticas no ambiente',
      'Falta de estímulos',
      'Doenças crônicas não diagnosticadas'
    ],
    severity: 'high',
    firstAidActions: [
      'Aumentar interação positiva',
      'Passeios em novos ambientes',
      'Introduzir novos brinquedos',
      'Manter rotina alimentar'
    ],
    whenToSeeVet: 'Se sintomas durarem mais de 1 semana ou houver recusa alimentar',
    treatments: [
      'Avaliação veterinária completa',
      'Terapia comportamental',
      'Aumento de atividades prazerosas',
      'Medicação antidepressiva (casos graves)',
      'Suplementos de ômega-3 e triptofano'
    ],
    prevention: [
      'Socialização contínua',
      'Rotina de exercícios',
      'Atenção e carinho diários',
      'Enriquecimento ambiental'
    ]
  }
];

// Sons e Comunicação Pet
export const PET_SOUNDS: PetSound[] = [
  {
    id: 'dog-short-bark',
    petType: 'dog',
    soundType: 'Latido curto e agudo',
    audioUrl: '/sounds/dog-short-bark.mp3',
    emotion: 'Alerta / Atenção',
    meaning: 'Seu cão está chamando atenção ou alertando sobre algo novo no ambiente',
    tutorRecommendations: [
      'Verifique o que chamou atenção dele',
      'Reforce positivamente se for comportamento adequado',
      'Redirecione se for latido excessivo'
    ]
  },
  {
    id: 'dog-growl',
    petType: 'dog',
    soundType: 'Rosnado baixo',
    audioUrl: '/sounds/dog-growl.mp3',
    emotion: 'Medo / Ameaça',
    meaning: 'Seu cão está se sentindo ameaçado ou desconfortável',
    tutorRecommendations: [
      'NÃO se aproxime bruscamente',
      'Remova a fonte de estresse',
      'Dê espaço ao animal',
      'Consulte comportamentalista se for frequente'
    ]
  },
  {
    id: 'cat-purr',
    petType: 'cat',
    soundType: 'Ronronar',
    audioUrl: '/sounds/cat-purr.mp3',
    emotion: 'Contentamento / Relaxamento',
    meaning: 'Seu gato está relaxado e feliz',
    tutorRecommendations: [
      'Continue o carinho se estiver interagindo',
      'É um sinal de vínculo positivo',
      'Aproveite o momento de conexão'
    ]
  },
  {
    id: 'cat-hiss',
    petType: 'cat',
    soundType: 'Sibilo (Hiss)',
    audioUrl: '/sounds/cat-hiss.mp3',
    emotion: 'Medo / Defesa',
    meaning: 'Seu gato está assustado ou se sentindo ameaçado',
    tutorRecommendations: [
      'Afaste-se e dê espaço',
      'Não force interação',
      'Identifique e remova a fonte de medo',
      'Deixe o gato se acalmar sozinho'
    ]
  },
  {
    id: 'cat-meow-long',
    petType: 'cat',
    soundType: 'Miado longo e alto',
    audioUrl: '/sounds/cat-meow-long.mp3',
    emotion: 'Demanda / Insistência',
    meaning: 'Seu gato quer algo específico (comida, atenção, porta aberta)',
    tutorRecommendations: [
      'Verifique necessidades básicas (água, comida, caixa de areia)',
      'Avalie se é comportamento manipulativo',
      'Estabeleça limites se for demanda excessiva'
    ]
  }
];

// Planos e Preços
export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Plano Gratuito',
    type: 'free',
    price: 0,
    billingCycle: 'monthly',
    features: {
      maxPets: 1,
      vaccinationModule: 'basic',
      foodModule: 'basic',
      healthModule: 'limited',
      communicationModule: false,
      clinicLocator: false,
      priceComparison: false,
      reports: false
    }
  },
  {
    id: 'trial',
    name: 'Trial Premium (7 dias)',
    type: 'trial',
    price: 0,
    billingCycle: 'monthly',
    features: {
      maxPets: 3,
      vaccinationModule: 'full',
      foodModule: 'full',
      healthModule: 'full',
      communicationModule: true,
      clinicLocator: true,
      priceComparison: true,
      reports: true
    }
  },
  {
    id: 'premium-monthly',
    name: 'Premium Mensal',
    type: 'premium',
    price: 29.90,
    billingCycle: 'monthly',
    features: {
      maxPets: 999,
      vaccinationModule: 'full',
      foodModule: 'full',
      healthModule: 'full',
      communicationModule: true,
      clinicLocator: true,
      priceComparison: true,
      reports: true
    }
  },
  {
    id: 'premium-yearly',
    name: 'Premium Anual',
    type: 'premium',
    price: 299.90,
    billingCycle: 'yearly',
    features: {
      maxPets: 999,
      vaccinationModule: 'full',
      foodModule: 'full',
      healthModule: 'full',
      communicationModule: true,
      clinicLocator: true,
      priceComparison: true,
      reports: true
    }
  }
];

// Mock Data - Locais de Vacinação
export const MOCK_VACCINATION_LOCATIONS = [
  {
    id: 'loc-1',
    name: 'Clínica Veterinária PetCare',
    type: 'clinic' as const,
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    phone: '(11) 3456-7890',
    hours: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
    availableVaccines: ['v8-v10', 'raiva-dog', 'giardia-dog'],
    prices: {
      'v8-v10': 80,
      'raiva-dog': 60,
      'giardia-dog': 90
    },
    rating: 4.8,
    distance: 2.3
  },
  {
    id: 'loc-2',
    name: 'Hospital Veterinário 24h',
    type: 'hospital' as const,
    address: 'Av. Principal, 456',
    city: 'São Paulo',
    state: 'SP',
    phone: '(11) 9876-5432',
    hours: '24 horas',
    availableVaccines: ['v8-v10', 'raiva-dog', 'v3-v4-v5', 'raiva-cat'],
    prices: {
      'v8-v10': 95,
      'raiva-dog': 70,
      'v3-v4-v5': 85,
      'raiva-cat': 65
    },
    rating: 4.9,
    distance: 5.1
  },
  {
    id: 'loc-3',
    name: 'Petshop Amigo Fiel',
    type: 'petshop' as const,
    address: 'Rua do Comércio, 789',
    city: 'São Paulo',
    state: 'SP',
    phone: '(11) 2345-6789',
    hours: 'Seg-Sáb: 9h-19h',
    availableVaccines: ['v8-v10', 'raiva-dog', 'gripe-dog'],
    prices: {
      'v8-v10': 75,
      'raiva-dog': 55,
      'gripe-dog': 70
    },
    rating: 4.5,
    distance: 1.8
  }
];
