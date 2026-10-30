import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from './icons'

export default function Sidebar({ items, active, onSelect, note, back }) {
  const refs = useRef({})

  // Di mobile, geser menu aktif ke tengah bar
  useEffect(() => {
    if (window.innerWidth < 768) {
      refs.current[active]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
    }
  }, [active])

  return (
    <aside className="md:w-40 flex-shrink-0 sticky top-0 z-40 -mx-6 px-6 bg-white/90 backdrop-blur border-b border-gray-100 md:border-0 md:mx-0 md:px-0 md:bg-transparent md:static">
      <div className="md:sticky md:top-24 md:pl-4">
        <div className="flex md:flex-col items-center md:items-start gap-7 md:gap-0 py-3 md:py-0">
          {back && (
            <Link
              to={back.to}
              data-sfx
              className="inline-flex items-center gap-1.5 text-[14px] text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap md:mb-6"
            >
              <ArrowLeft />
              {back.label}
            </Link>
          )}

          <nav className="flex md:flex-col gap-7 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
            {items.map((item) => (
              <a
                key={item.id}
                ref={(el) => (refs.current[item.id] = el)}
                href={`#${item.id}`}
                data-sfx
                onClick={() => onSelect(item.id)}
                className={`nav-link ${active === item.id ? 'active' : ''} relative whitespace-nowrap text-[15px] leading-[1.7]`}
              >
                <span className="arrow hidden md:inline absolute -left-3.5 top-1/2 -translate-y-1/2 text-[9px]">&#9654;</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {note && (
          <p className="hidden md:block text-[12px] leading-[1.4] text-gray-400 mt-5 max-w-[130px]">{note}</p>
        )}
      </div>
    </aside>
  )
}
