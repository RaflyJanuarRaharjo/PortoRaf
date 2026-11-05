// Setiap project punya halaman case study sendiri di /projects/<id>
//
// media     : media utama (hero). type 'video' | 'image' | 'icon'
// featured  : true -> tampil di halaman utama
// tags      : kategori singkat (tampil sebagai label)
// services  : apa yang kamu kerjakan
// overview / challenge / outcome : paragraf (array of string)
// result    : satu kalimat hasil (opsional, boleh dihapus)
// tools     : alat yang dipakai -> tampil sebagai logo (daftar logo di components/ToolLogos.jsx)
// url       : link live website (tombol "Visit site" di halaman detail)

export const projects = [
  {
    id: 'nietzsche',
    name: 'Nietzsche',
    description: 'AI agent software house where a team of specialized agents turns ideas into working software.',
    year: '2026',
    tags: ['AI', 'SaaS', 'Landing page'],
    services: ['UI/UX Design', 'Front-end Development', 'Motion'],
    url: '#', // GANTI dengan URL Vercel
    media: { type: 'video', src: '/videos/nietzsche.mp4' },
    featured: true,
    overview: [
      'Nietzsche is a concept for a software house run by AI agents. Instead of one assistant, five specialized agents (Architect, Designer, Builder, Tester, and Optimizer) work together to turn a brief into functional software.',
      'I designed the landing page in Figma and built it with Next.js, using orange as the brand color and a set of 3D mascots to give each agent its own personality.',
    ],
    challenge: [
      'Most AI product pages look the same: dark gradients, abstract blobs, and vague promises. The goal was to explain a multi-agent workflow clearly while keeping it playful and memorable.',
    ],
    outcome: [
      'The hero starts with a prompt box that accepts files like a brief, a character, and references, showing the product idea in one glance.',
      'An “agents” section gives each role a distinct isometric illustration and one-line description, so visitors understand who does what without reading a wall of text.',
      'Testimonials and a bold orange closing CTA (“build your next product with a team of agents”) finish the page with a friendly mascot.',
    ],
    result: 'Designed and shipped as a live Next.js site on Vercel.',
    tools: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'rhythm',
    name: 'Rhythm',
    description: 'Landing page for Ritme, a team productivity app, from Figma Dribbble shot to live site.',
    year: '2026',
    tags: ['Productivity', 'B2B', 'Landing page'],
    services: ['UI/UX Design', 'Front-end Development'],
    url: '#', // GANTI dengan URL Vercel
    media: { type: 'video', src: '/videos/rhythm.mp4' },
    overview: [
      'Rhythm (Ritme) is a workspace that turns meetings, chats, and documents into clear priorities and a focused weekly plan.',
      'It started as a Dribbble shot in Figma and was then built into a full responsive landing page with Next.js.',
    ],
    challenge: [
      'Productivity tools promise a lot. The page needed to show the actual product (schedule, AI priorities, weekly progress) so the value is visible before any copy is read.',
    ],
    outcome: [
      'The hero pairs a short headline with a realistic dashboard preview: today’s schedule, AI-ranked priorities, and focus-time stats.',
      'Feature sections (“Everything clicks into place”, “From scattered to in rhythm”) explain the workflow step by step with small UI cards.',
      'An integrations section shows how Rhythm plugs into the tools teams already use.',
    ],
    result: 'Taken from a single Dribbble shot to a live Next.js site.',
    tools: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)
