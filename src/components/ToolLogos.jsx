import {
  siFigma,
  siFirebase,
  siFramer,
  siGithub,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siSanity,
  siStreamlit,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from 'simple-icons'

// Nama tool (seperti ditulis di data/projects.js) -> ikon.
// Mau tambah tool lain? Cari namanya di https://simpleicons.org, import di atas, lalu daftarkan di sini.
const ICONS = {
  'Figma': siFigma,
  'Next.js': siNextdotjs,
  'React': siReact,
  'Tailwind CSS': siTailwindcss,
  'Vercel': siVercel,
  'Vite': siVite,
  'Framer Motion': siFramer,
  'Motion': siFramer,
  'TypeScript': siTypescript,
  'JavaScript': siJavascript,
  'GitHub': siGithub,
  'Node.js': siNodedotjs,
  'Python': siPython,
  'Streamlit': siStreamlit,
  'Supabase': siSupabase,
  'Firebase': siFirebase,
  'Sanity': siSanity,
}

export default function ToolLogos({ tools }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
      {tools.map((name) => {
        const icon = ICONS[name]
        return (
          <div
            key={name}
            className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/50 py-5 px-2 hover:border-gray-200 hover:bg-white transition-colors"
          >
            {icon ? (
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill={`#${icon.hex}`}
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <title>{name}</title>
                <path d={icon.path} />
              </svg>
            ) : (
              <span className="w-[26px] h-[26px] rounded-md bg-gray-200 flex items-center justify-center text-[11px] font-semibold text-gray-500">
                {name[0]}
              </span>
            )}
            <span className="text-[12.5px] text-gray-500 text-center leading-tight">{name}</span>
          </div>
        )
      })}
    </div>
  )
}
