import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft } from './icons'
import { ease } from '../lib/motion'

const spring = { type: 'spring', stiffness: 500, damping: 35 }

export default function Sidebar({ items, active, onSelect, note, back, className = '' }) {
  const refs = useRef({})

  // Di mobile, geser menu aktif ke tengah bar
  useEffect(() => {
    if (window.innerWidth < 768) {
      refs.current[active]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
    }
  }, [active])

  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease }}
      className={`${className} md:w-40 flex-shrink-0 sticky top-0 z-40 -mx-6 px-6 bg-white/90 backdrop-blur border-y border-gray-100 md:border-0 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:static`}
    >
      <div className="md:sticky md:top-24 md:pl-4">
        <div className="flex md:flex-col items-center md:items-start gap-7 md:gap-0 py-3 md:py-0">
          {back && (
            <Link
              to={back.to}
              data-sfx
              className="group inline-flex items-center gap-1.5 text-[14px] text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap md:mb-6"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5"><ArrowLeft /></span>
              {back.label}
            </Link>
          )}

          <nav className="flex md:flex-col gap-7 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
            {items.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  ref={(el) => (refs.current[item.id] = el)}
                  href={`#${item.id}`}
                  data-sfx
                  onClick={() => onSelect(item.id)}
                  className={`nav-link ${isActive ? 'active' : ''} relative whitespace-nowrap text-[15px] leading-[1.7] transition-transform duration-200 md:hover:translate-x-0.5`}
                >
                  {/* Penanda aktif desktop: segitiga yang meluncur */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-arrow"
                      transition={spring}
                      className="hidden md:flex absolute -left-3.5 inset-y-0 items-center text-[9px]"
                    >
                      &#9654;
                    </motion.span>
                  )}
                  {/* Penanda aktif mobile: garis bawah yang meluncur */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={spring}
                      className="md:hidden absolute -bottom-3 left-0 right-0 h-px bg-gray-900"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>

        {note && (
          <p className="hidden md:block text-[12px] leading-[1.4] text-gray-400 mt-5 max-w-[130px]">{note}</p>
        )}
      </div>
    </motion.aside>
  )
}
