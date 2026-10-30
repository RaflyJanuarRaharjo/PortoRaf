// media.type: 'video' | 'image' | 'icon'
// featured: true -> tampil di halaman utama
export const projects = [
  {
    id: 'nietzsche',
    name: 'Nietzsche',
    description: 'Landing page for an AI agent software house, built with Next.js.',
    stack: 'Next.js · Vercel',
    url: '#', // GANTI dengan URL Vercel
    media: { type: 'video', src: '/videos/nietzsche.mp4' },
    featured: true,
  },
  {
    id: 'nara-studio',
    name: 'Nara Studio',
    description: 'A design engineering magazine.',
    stack: '',
    url: '#',
    media: { type: 'icon', icon: 'folder' },
  },
  {
    id: 'oklch',
    name: 'oklch.fyi',
    description: 'OKLCH color generator & converter.',
    stack: '',
    url: '#',
    media: { type: 'icon', icon: 'oklch' },
  },
]
