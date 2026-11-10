// Setiap project punya halaman case study sendiri di /projects/<id>
// Semua field opsional kecuali id, name, description, media. Section tanpa isi otomatis disembunyikan.
//
// media      : media utama (hero). type 'video' | 'image' | 'icon'
// featured   : true -> tampil di halaman utama
// tags       : kategori singkat (label)
// year, role, type, services : info singkat di bawah video
// url        : link live website (tombol "Visit site")
// overview   : paragraf pembuka (array of string)
// result     : satu kalimat hasil (ditampilkan sebagai kutipan)
// challenge  : masalah yang ingin diselesaikan (array of string)
// goals      : target desain (array of string, tampil sebagai list bernomor)
// process    : tahapan kerja [{ title, text }]
// features   : bagian penting + screenshot [{ title, text, image }]
//              simpan gambar di public/projects/<id>/
// palette    : warna utama [{ name, hex }]
// outcome    : hasil akhir (array of string)
// learnings  : pelajaran (array of string)
// tools      : alat -> tampil sebagai logo (daftar logo di components/ToolLogos.jsx)

export const projects = [
  {
    id: 'nietzsche',
    name: 'Nietzsche',
    description: 'AI agent software house where a team of specialized agents turns ideas into working software.',
    year: '2026',
    role: 'Designer & front-end developer',
    type: 'Concept product',
    tags: ['AI', 'SaaS', 'Landing page'],
    services: ['UI/UX Design', 'Front-end Development', 'Motion'],
    url: 'https://nietzche-nu.vercel.app/',
    media: { type: 'video', src: '/videos/nietzsche.mp4' },
    featured: true,

    overview: [
      'Nietzsche is a concept for a software house run by AI agents. Instead of one assistant, five specialized agents (Architect, Designer, Builder, Tester, and Optimizer) work together to turn a brief into functional software.',
      'I designed the landing page in Figma and built it with Next.js, using orange as the brand color and a set of 3D mascots to give each agent its own personality.',
    ],
    result: 'Designed in Figma and shipped as a live, responsive Next.js site on Vercel.',

    challenge: [
      'Most AI product pages look the same: dark gradients, abstract blobs, and vague promises. Visitors leave without understanding what the product actually does.',
      'Nietzsche has an extra layer of complexity. It is not one AI but a team of five, so the page had to explain a multi-agent workflow clearly while still feeling playful and memorable.',
    ],

    goals: [
      'Explain the five-agent workflow in seconds, without technical jargon.',
      'Give an AI product a warm, friendly personality instead of the usual dark and abstract look.',
      'Put the core interaction (handing over a brief) right in the first screen.',
    ],

    process: [
      {
        title: 'Research',
        text: 'Reviewed AI product and digital studio landing pages, noting what made them feel generic and which patterns explained the product best.',
      },
      {
        title: 'Concept',
        text: 'Framed the product as “a different kind of digital studio” where agents do the work, then split the workflow into five clear roles.',
      },
      {
        title: 'Design',
        text: 'Designed the page in Figma with an orange brand color, isometric illustrations for each agent, and a mascot for the closing section.',
      },
      {
        title: 'Build',
        text: 'Built the page with Next.js and Tailwind CSS, added scroll-based text reveals, and deployed it on Vercel.',
      },
    ],

    features: [
      {
        title: 'Prompt-first hero',
        text: 'The headline “Build and launch high performing software with AI” sits above a prompt box that already holds a brief, a character, and references. Visitors see how the product works before reading any copy.',
        image: '/projects/nietzsche/hero.jpg',
      },
      {
        title: 'Story that reveals on scroll',
        text: '“We are a team of AI agents working together to turn ideas into software.” The intro reveals word by word as you scroll, with small inline icons that keep the long sentence light.',
        image: '/projects/nietzsche/intro.jpg',
      },
      {
        title: 'Meet the agents',
        text: '“Different minds. One mission.” Each agent gets its own card with an isometric illustration and technical details like “TEST SUITE · 128 CASES” and “PASS 127 / FAIL 01”, so every role feels like part of a real product.',
        image: '/projects/nietzsche/agents.jpg',
      },
      {
        title: 'Social proof',
        text: 'A centered testimonial with a client logo keeps the page focused on one clear message: going from idea to working product without switching tools.',
        image: '/projects/nietzsche/testimonial.jpg',
      },
      {
        title: 'Orange closing CTA',
        text: 'The page ends on a bold orange section, “build your next product with a team of agents”, with a friendly mascot surrounded by floating coins and blocks.',
        image: '/projects/nietzsche/cta.jpg',
      },
    ],

    palette: [
      { name: 'Nietzsche Orange', hex: '#EA580C' },
      { name: 'Ink', hex: '#0F0F11' },
      { name: 'Canvas', hex: '#F9F9F9' },
      { name: 'White', hex: '#FFFFFF' },
    ],

    outcome: [
      'A complete landing page that explains a multi-agent AI product in one scroll: the hero shows the input, the agents section shows who does what, and the closing section turns curiosity into action.',
      'The orange brand and mascots make Nietzsche stand out from typical AI product pages while keeping the layout clean and readable.',
    ],

    learnings: [
      'Showing the main interaction in the hero explains a product faster than a paragraph of copy.',
      'Small technical details, like test counts and spec labels, make illustrations feel like a real product.',
      'A strong single brand color can carry a whole page without needing extra decoration.',
    ],

    tools: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },

  {
    id: 'rhythm',
    name: 'Rhythm',
    description: 'Landing page for Ritme, a team productivity app, from Figma Dribbble shot to live site.',
    year: '2026',
    role: 'Designer & front-end developer',
    type: 'Concept product',
    tags: ['Productivity', 'B2B', 'Landing page'],
    services: ['UI/UX Design', 'Front-end Development'],
    url: 'https://rhythm-azure-gamma.vercel.app/',
    media: { type: 'video', src: '/videos/rhythm.mp4' },

    overview: [
      'Rhythm (Ritme) is a workspace that turns meetings, chats, and documents into clear priorities and a focused weekly plan.',
      'It started as a single Dribbble shot in Figma. I expanded it into a full landing page and built it as a responsive Next.js site.',
    ],
    result: 'Taken from a single Dribbble shot to a full, live Next.js site.',

    challenge: [
      'Productivity tools all promise the same thing: save time, stay focused, work better. Those words alone do not convince anyone.',
      'The page needed to show the actual product (schedule, AI priorities, weekly progress) so the value is visible before any copy is read, while explaining six features without overwhelming the visitor.',
    ],

    goals: [
      'Show the product working in the very first screen.',
      'Explain six features in a way that is easy to scan.',
      'Tell the “scattered to in rhythm” story in three simple steps.',
    ],

    process: [
      {
        title: 'Dribbble shot',
        text: 'Designed the hero as a single Dribbble shot in Figma: headline, call to action, and a detailed dashboard preview.',
      },
      {
        title: 'Expand',
        text: 'Grew the shot into a full page in Figma: features, how it works, testimonials, integrations, and a closing call to action.',
      },
      {
        title: 'Build',
        text: 'Built every section with Next.js and Tailwind CSS, recreating the dashboard UI as real components instead of flat images.',
      },
      {
        title: 'Ship',
        text: 'Made the layout responsive, added small interactions like the testimonial slider, and deployed on Vercel.',
      },
    ],

    features: [
      {
        title: 'Dashboard hero',
        text: '“Your team, in Rhythm.” The headline sits next to a realistic dashboard: “Good morning, Nadia”, a Sprint 14 pulse at 72%, weekly progress at 13 of 20 tasks, and three AI-ranked priorities.',
        image: '/projects/rhythm/hero.jpg',
      },
      {
        title: 'Trust and social proof',
        text: 'Partner badges, a rating line, and a strip of customer logos build trust right below the hero.',
        image: '/projects/rhythm/logos.jpg',
      },
      {
        title: 'Feature grid',
        text: '“Everything clicks into place.” Six features (AI Meeting Capture, Smart Priorities, Weekly Focus Plan, Pulse Updates, Team Workload, and Connected Context), each with a small UI card instead of an icon.',
        image: '/projects/rhythm/features.jpg',
      },
      {
        title: 'How it works',
        text: '“From scattered to in rhythm.” Three steps show a 32-minute product sync turning into next steps, plus an assistant that answers “What did we decide in the sync?”',
        image: '/projects/rhythm/how.jpg',
      },
      {
        title: 'Testimonials',
        text: 'A slider of short quotes, each tagged with the problem it solves: planning time, team focus, and meeting overload.',
        image: '/projects/rhythm/testimonial.jpg',
      },
      {
        title: 'Integrations',
        text: '“Plug rhythm into the tools you already use.” Isometric tool tiles connect to the plan, with live status like “8 tools connected” and “12 PRs linked”.',
        image: '/projects/rhythm/integrations.jpg',
      },
    ],

    palette: [
      { name: 'Ocean', hex: '#0369A1' },
      { name: 'Sky', hex: '#69AAD2' },
      { name: 'Teal', hex: '#4CB8A9' },
      { name: 'Ink', hex: '#0A0A0A' },
      { name: 'White', hex: '#FFFFFF' },
    ],

    outcome: [
      'A complete landing page where the product does the talking: the dashboard, feature cards, and meeting demo show what Rhythm does before the copy explains it.',
      'The calm blue palette and generous white space match the product promise: “Plan calmly. Let AI handle the rest.”',
    ],

    learnings: [
      'A Dribbble shot only covers one screen. Expanding it into a full page means designing the story, not just more sections.',
      'Building UI previews as real components keeps them sharp on every screen size.',
      'Tagging each testimonial with the problem it solves makes social proof easier to scan.',
    ],

    tools: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)
