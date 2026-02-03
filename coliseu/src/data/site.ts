export const siteMeta = {
  name: 'Coliseu',
  domain: 'chuteboxecoliseu.online',
  logo: '/assets/logo.png',
  heroImage: '/assets/foto6.jpeg',
  aboutImage: '/assets/about.jpg',
  contactImage: '/assets/contact.jpg',
  whatsappNumber: '554498249535',
  whatsappMessage: 'Olá! Gostaria de mais informações sobre as aulas da Coliseu!',
  phoneDisplay: '(44) 99824-9535',
  instagram: 'https://instagram.com/chuteboxesiam.coliseu',
  instagramHandle: '@chuteboxesiam.coliseu',
};

export const classes = [
  { name: 'Muay Thai', slug: '/muay-thai', image: '/assets/foto7.jpeg' },
  { name: 'Jiu-Jitsu', slug: '/jiu-jitsu', image: '/assets/foto11.jpeg' },
  { name: 'MMA', slug: '/mma', image: '/assets/foto9.jpeg' },
  { name: 'Boxe', slug: '/boxe', image: '/assets/foto8.jpeg' },
  { name: 'Personal Fight | Aulas Particulares', slug: '/turmas-e-personal-fight', image: '/assets/foto10.jpeg' },
];

export const schedules = {
  unidade1: [
    'Muay Thai Adulto | Segundas e Quartas | 09:00',
    'Muay Thai Adulto | Terças e Quintas | 19:00',
    'Muay Thai Infantil (06 a 13 anos) | Terças e Quintas | 18:15',
    'Muay Thai | Segundas e Quartas | 19:15',
    'Muay Thai | Terças e Quintas | 09:30',
    'Jiu-Jitsu | Segundas e Quartas | 20:15',
    'Fight Circuit | Terças e Quintas | 09:30',
  ],
};

export const locations = [
  {
    name: 'Unidade 1',
    address: 'Av. Alziro Zarur, 505. (Anexo à Academia Milenium) Vila Vardelina - Maringá - PR',
    map: 'https://maps.google.com/maps?q=Av.%20Alziro%20Zarur%2C%20505.%20%20(Anexo%20%C3%A0%20Academia%20Milenium)%20Vila%20Vardelina%20-%20Maring%C3%A1%20-%20PR&t=m&z=13&ie=UTF8&output=embed',
  },
  {
    name: 'Unidade 2',
    address: "Praça Rocha Pombo, 334 - loja 5 - Zona 01, Maringá - PR. 'Anexo a Academia Physical'",
    map: 'https://maps.google.com/maps?q=Pra%C3%A7a%20Rocha%20Pombo%2C%20334%20-%20loja%205%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR&t=m&z=13&ie=UTF8&output=embed',
  },
];

export const gallery = [
  '/assets/gallery-1.jpg',
  '/assets/gallery-2.jpg',
  '/assets/gallery-3.jpg',
  '/assets/gallery-4.jpg',
  '/assets/gallery-5.jpg',
  '/assets/gallery-6.jpg',
];

export const whatsappBase = `https://wa.me/${siteMeta.whatsappNumber}`;

export const whatsappMessageFor = (topic?: string) => {
  const message = topic
    ? `Olá! Tenho interesse em saber mais sobre ${topic}.`
    : siteMeta.whatsappMessage;
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
};

export const aboutCopy =
  'Desde 2013, a COLISEU é mais do que uma escola de artes marciais; é um centro de excelência dedicado à promoção da saúde, qualidade e estilo de vida para todos. Aqui, oferecemos um ambiente acolhedor e seguro para o desenvolvimento de habilidades em Muay Thai, Jiu Jitsu, MMA e Boxe. Nossos programas são projetados para atender tanto iniciantes quanto atletas experientes. Junte-se a nós e descubra os benefícios transformadores das artes marciais.';

export const contactCopy =
  'Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações sobre nossos programas. Entre em contato conosco pelo telefone ou e-mail, ou visite-nos pessoalmente para conhecer nossas instalações. Sua jornada nas artes marciais começa com um simples passo!';
