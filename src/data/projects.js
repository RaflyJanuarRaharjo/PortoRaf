// media.type: 'video' | 'image' | 'icon'
// featured: true -> tampil di halaman utama
export const projects = [
  {
    id: 'nietzsche',
    name: 'Nietzsche',
    description: 'AI agent software house where a team of specialized agents turns ideas into working software.',
    stack: 'Next.js · Vercel',
    url: 'https://nietzche-nu.vercel.app/', // GANTI dengan URL Vercel
    media: { type: 'video', src: '/videos/nietzsche.mp4' },
    featured: true,
  },
  {
    id: 'rhythm',
    name: 'Rhythm',
    description: 'Landing page for Ritme, a team productivity app, from Figma Dribbble shot to live site.',
    stack: 'Next.js · Vercel',
    url: 'https://rhythm-azure-gamma.vercel.app/', // GANTI dengan URL Vercel
    media: { type: 'video', src: '/videos/rhythm.mp4' },
  },
]
