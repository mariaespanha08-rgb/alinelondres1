import { FAQItem, GalleryPhoto, ServiceItem } from '../types';

export const WHATSAPP_NUMBER = '447515384559';
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=447515384559';
export const INSTAGRAM_URL = 'https://www.instagram.com/alineferreira_uk/';
export const REEL_URL = 'https://www.instagram.com/reel/CvH5lrcN6FH/';
export const REEL_EMBED_URL = 'https://www.instagram.com/reel/CvH5lrcN6FH/embed';
export const CONTACT_EMAIL = 'alineferreira.uk@gmail.com';

export const IMAGES = {
  hero: 'https://i.ibb.co/MkdpGsY7/Adjusting-skin-tone-2-K-20261020091220.webp',
  studio: 'https://i.ibb.co/zT1QR6vW/b0cea29a-3253-4bc0-8aad-662d856e04a6.webp',
  gallery: [
    'https://i.ibb.co/S4JBgP9w/Save-Clip-App-514029843-18509687173049648-4332428849062287139-n.webp',
    'https://i.ibb.co/kVHKrPvy/Save-Clip-App-587719694-18541735489049648-7793670355054150261-n.webp',
    'https://i.ibb.co/nMdqD015/Save-Clip-App-841099534-18629054995049648-1387015286537177111-n.webp',
    'https://i.ibb.co/0yPgLVL6/Save-Clip-App-774513615-18610137724049648-2901385233262025205-n.webp',
    'https://i.ibb.co/27wRsq5t/Save-Clip-App-621725121-18549780370049648-8571125411006443448-n.webp',
    'https://i.ibb.co/nqGQpw7Z/Save-Clip-App-589597743-18541198366049648-9070672585997488640-n.webp',
    'https://i.ibb.co/3yWF3Gqk/Save-Clip-App-532129334-18518453143049648-4508850317967157654-n.webp',
    'https://i.ibb.co/LzLzPttH/Save-Clip-App-550703658-18524676340049648-4994744429308132015-n.jpg',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'fibra',
    name: {
      pt: 'Aplicação de Unhas de Fibra',
      en: 'Fiberglass Nails Full Set',
    },
    price: '£95',
    duration: {
      pt: 'Até 3 horas',
      en: 'Up to 3 hours',
    },
    description: {
      pt: 'O procedimento pode levar até 3 horas. Você pode incluir esmaltação shellac ou nail arte, tudo de acordo com o seu gosto.',
      en: 'The procedure takes up to 3 hours. You can include shellac gel polish or custom nail art, tailored to your exact taste.',
    },
    image: IMAGES.gallery[0],
    whatsappMessage: {
      pt: 'Olá, Aline! Gostaria de agendar uma Aplicação de Unhas de Fibra (£95).',
      en: 'Hello Aline! I would like to book a Fiberglass Nails Full Set (£95).',
    },
  },
  {
    id: 'banho-gel',
    name: {
      pt: 'Banho de Gel',
      en: 'Builder Gel Treatment (BIAB)',
    },
    price: '£70',
    duration: {
      pt: 'Até 3 horas',
      en: 'Up to 3 hours',
    },
    description: {
      pt: 'Indicado para quem não quer alongamento, mas deseja um serviço com durabilidade que deixa as unhas mais belas. Usamos a sua própria unha natural como estrutura, e o resultado fica extremamente natural. Pode ser natural ou com esmaltação, shellac ou nail arte. Duração de até 3 horas.',
      en: 'Ideal for those who do not want extensions, but desire high durability and elegance. We use your natural nail as the structure, achieving a refined, natural finish. Can be left natural or with shellac polish/nail art. Duration up to 3 hours.',
    },
    image: IMAGES.gallery[1],
    whatsappMessage: {
      pt: 'Olá, Aline! Gostaria de agendar um Banho de Gel (£70).',
      en: 'Hello Aline! I would like to book a Builder Gel Treatment (£70).',
    },
  },
  {
    id: 'manutencao',
    name: {
      pt: 'Manutenção',
      en: 'Infill & Maintenance',
    },
    price: '£70',
    duration: {
      pt: '2 a 3 horas',
      en: '2 to 3 hours',
    },
    description: {
      pt: 'Recomendamos fazer a manutenção em até 20 dias (no máximo 30 dias) para manter a beleza do serviço em dia e as unhas saudáveis. Dica: deixe sempre a próxima manutenção agendada com antecedência para garantir o seu horário!',
      en: 'We recommend infills every 20 days (maximum 30 days) to preserve nail health, structure, and flawless aesthetics. Pro tip: always pre-book your next infill to guarantee your preferred slot!',
    },
    image: IMAGES.gallery[2],
    whatsappMessage: {
      pt: 'Olá, Aline! Gostaria de agendar a Manutenção das minhas unhas (£70).',
      en: 'Hello Aline! I would like to book an Infill & Maintenance appointment (£70).',
    },
  },
  {
    id: 'outros',
    name: {
      pt: 'Outros Serviços',
      en: 'Additional Treatments',
    },
    price: 'A partir de £5',
    description: {
      pt: 'Procedimentos complementares e cuidados essenciais para manter a integridade, o formato e a renovação de suas unhas.',
      en: 'Complementary procedures and essential care to preserve nail integrity, shape redesigns, and gentle renewals.',
    },
    image: IMAGES.gallery[3],
    items: [
      {
        pt: 'Remoção segura e higiênica',
        en: 'Safe & gentle removal',
        price: '£30',
      },
      {
        pt: 'Reposição de unhas (por unidade)',
        en: 'Single nail replacement',
        price: '£5',
      },
      {
        pt: 'Troca de formato na manutenção',
        en: 'Shape change during infill',
        price: '£25',
      },
    ],
    whatsappMessage: {
      pt: 'Olá, Aline! Gostaria de agendar um serviço adicional (Remoção / Reposição / Troca de formato).',
      en: 'Hello Aline! I would like to enquire about additional treatments (Removal / Replacement / Shape change).',
    },
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    url: IMAGES.gallery[0],
    alt: {
      pt: 'Aplicação de unhas de fibra com acabamento translúcido e natural por Aline Ferreira',
      en: 'Fiberglass nail extensions with translucent natural finish by Aline Ferreira',
    },
    caption: {
      pt: 'Alongamento em fibra de vidro com acabamento ultranatural',
      en: 'Fiberglass nail extensions with ultra-natural finish',
    },
  },
  {
    id: 2,
    url: IMAGES.gallery[1],
    alt: {
      pt: 'Banho de gel sobre unha natural com brilho espelhado',
      en: 'Builder gel overlay over natural nails with mirror gloss',
    },
    caption: {
      pt: 'Banho de gel com blindagem e brilho duradouro',
      en: 'Builder gel overlay with reinforced strength and lasting shine',
    },
  },
  {
    id: 3,
    url: IMAGES.gallery[2],
    alt: {
      pt: 'Manutenção de unhas de fibra após 25 dias com cutícula impecável',
      en: 'Fiberglass infill after 25 days with flawless cuticle work',
    },
    caption: {
      pt: 'Manutenção com alinhamento perfeito e cuticulagem russa',
      en: 'Precision infill with perfect apex balance and Russian cuticle technique',
    },
  },
  {
    id: 4,
    url: IMAGES.gallery[3],
    alt: {
      pt: 'Unhas elegantes com esmaltação clássica e formato amendoado',
      en: 'Elegant almond shape nails with timeless nude palette',
    },
    caption: {
      pt: 'Formato amendoado sofisticado com tons neutros',
      en: 'Sophisticated almond shape with signature neutral tones',
    },
  },
  {
    id: 5,
    url: IMAGES.gallery[4],
    alt: {
      pt: 'Design delicado de unhas francesinhas modernas em banho de gel',
      en: 'Modern French tip nail design with delicate builder gel structure',
    },
    caption: {
      pt: 'Francesinha refinada com contorno suave e discreto',
      en: 'Refined modern French tips with soft, subtle lines',
    },
  },
  {
    id: 6,
    url: IMAGES.gallery[5],
    alt: {
      pt: 'Alongamento de fibra com efeito babyboomer suave e degradê perfeito',
      en: 'Fiberglass nails with seamless babyboomer ombré gradient',
    },
    caption: {
      pt: 'Efeito degradê suave para máxima discrição e luxo',
      en: 'Soft ombré gradient for understated luxury',
    },
  },
  {
    id: 7,
    url: IMAGES.gallery[6],
    alt: {
      pt: 'Unhas curtas reforçadas com banho de gel natural',
      en: 'Short natural nails reinforced with builder gel',
    },
    caption: {
      pt: 'Naturalidade pura: unhas curtas fortalecidas e protegidas',
      en: 'Pure natural elegance: short nails fortified and protected',
    },
  },
  {
    id: 8,
    url: IMAGES.gallery[7],
    alt: {
      pt: 'Trabalho de nail art minimalista e detalhes dourados sofisticados',
      en: 'Minimalist nail art with delicate luxury golden accents',
    },
    caption: {
      pt: 'Nail art minimalista para ocasiões especiais',
      en: 'Minimalist nail art designed for memorable moments',
    },
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: {
      pt: 'Como faço para agendar?',
      en: 'How do I book an appointment?',
    },
    answer: {
      pt: 'Informe o melhor dia e horário pelo formulário acima ou direto no WhatsApp. A Aline confirma a disponibilidade com você e envia todos os detalhes.',
      en: 'Simply fill in your preferred day and time in the form above or message directly via WhatsApp. Aline will check availability and confirm your booking.',
    },
  },
  {
    question: {
      pt: 'Preciso pagar sinal?',
      en: 'Do I need to pay a deposit?',
    },
    answer: {
      pt: 'Sim. O sinal de £20 reserva o seu horário. Esse valor garante a sua vaga e a organização da agenda.',
      en: 'Yes. A £20 deposit is required to secure your appointment. This secures your exclusive slot and assists with schedule management.',
    },
  },
  {
    question: {
      pt: 'Quanto tempo dura o atendimento?',
      en: 'How long does an appointment take?',
    },
    answer: {
      pt: 'A aplicação de fibra e o banho de gel podem levar até 3 horas. Cada passo é executado com calma, precisão e acabamento impecável.',
      en: 'A full fiberglass set or builder gel application can take up to 3 hours. Every step is performed with meticulous attention, calm focus, and pristine execution.',
    },
  },
  {
    question: {
      pt: 'Qual a diferença entre fibra e banho de gel?',
      en: 'What is the difference between fiberglass extensions and builder gel?',
    },
    answer: {
      pt: 'A fibra é um alongamento feito com filamentos de vidro para dar comprimento e resistência. O banho de gel não alonga: reforça a sua unha natural, deixando-a mais bonita, uniforme e resistente à quebra.',
      en: 'Fiberglass is an extension method using ultra-thin glass strands to create length and strength. Builder gel does not extend: it coats and reinforces your natural nail, making it stronger, smoother, and resistant to breakage.',
    },
  },
  {
    question: {
      pt: 'Posso incluir shellac ou nail art?',
      en: 'Can I include shellac polish or nail art?',
    },
    answer: {
      pt: 'Sim, tudo de acordo com o seu gosto! Você pode escolher desde acabamentos naturais até esmaltação em gel e decorações elegantes.',
      en: 'Yes, everything is tailored to your taste! You can choose anything from a clean natural look to shellac gel polish or bespoke elegant nail art.',
    },
  },
  {
    question: {
      pt: 'Quando devo fazer a manutenção?',
      en: 'When should I schedule my infill / maintenance?',
    },
    answer: {
      pt: 'Recomendamos fazer a manutenção em até 20 dias (no máximo 30 dias) para manter a beleza do serviço em dia e as unhas saudáveis. Dica: deixe sempre a próxima manutenção agendada com antecedência.',
      en: 'We recommend infills within 20 days (maximum 30 days) to keep your nails balanced, healthy, and pristine. Pro tip: always book your next session in advance.',
    },
  },
  {
    question: {
      pt: 'Posso levar acompanhante?',
      en: 'Can I bring a friend or companion?',
    },
    answer: {
      pt: 'Pedimos, por gentileza, que não traga acompanhante. Assim garantimos um atendimento tranquilo, focado e reservado para o seu momento de autocuidado.',
      en: 'We kindly request that you come unaccompanied. This ensures a calm, serene, and entirely private space dedicated exclusively to your self-care moment.',
    },
  },
  {
    question: {
      pt: 'E se eu precisar remarcar?',
      en: 'What if I need to reschedule?',
    },
    answer: {
      pt: 'Precisou remarcar? Avise com no mínimo 24 horas de antecedência, para que possamos reorganizar a agenda e disponibilizar o horário.',
      en: 'Need to reschedule? Please give at least 24 hours notice so we can adjust our schedule and offer the slot to someone on the waiting list.',
    },
  },
  {
    question: {
      pt: 'Estou resfriada, o que faço?',
      en: 'I feel unwell or have a cold, what should I do?',
    },
    answer: {
      pt: 'Se estiver resfriada ou com qualquer suspeita de indisposição, avise para remarcarmos o atendimento. Cuidamos da saúde e proteção de todas.',
      en: 'If you are experiencing cold symptoms or feel unwell, please message us immediately to reschedule. We prioritize mutual health and safety.',
    },
  },
  {
    question: {
      pt: 'Onde fica o studio?',
      en: 'Where is the studio located?',
    },
    answer: {
      pt: 'O endereço exato é enviado após a confirmação do agendamento, por motivos de privacidade e segurança. O espaço conta com fácil acesso no Reino Unido.',
      en: 'For privacy and security, the exact address and access instructions are provided upon appointment confirmation. The studio is conveniently accessible in the UK.',
    },
  },
  {
    question: {
      pt: 'A Aline dá aulas?',
      en: 'Does Aline offer training and mentorship courses?',
    },
    answer: {
      pt: 'Sim! Através da Mentoria – Curso Fiber Glass Vip, a Aline forma e acompanha novas profissionais desde a base teórica até a aplicação perfeita e posicionamento no mercado. Chame no WhatsApp para saber mais!',
      en: 'Yes! Through the VIP Fiberglass Mentorship, Aline mentors and guides aspiring nail technicians from foundational anatomy to master-level application and business positioning. Send a message on WhatsApp to learn more!',
    },
  },
];
