import { useState } from 'react'
import { motion } from 'motion/react'
import { footer } from '../data/footer'
import { profile } from '../data/profile'
import { reveal } from '../lib/motion'

const gmail = (body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` +
  `&su=${encodeURIComponent(footer.ctaSubject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : '')

export default function Footer() {
  const [msg, setMsg] = useState('')
  const socials = footer.socials.filter((s) => s.url && s.url !== '#')

  const send = (e) => {
    e.preventDefault()
    window.open(gmail(msg.trim()), '_blank', 'noopener')
    setMsg('')
  }

  return (
    <motion.footer {...reveal} className="bg-white border-t border-gray-100 font-mono uppercase text-[12px] tracking-[0.04em] text-gray-900">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          {/* Kiri */}
          <div className="space-y-5 text-center md:text-left leading-[1.5] order-2 md:order-1">
            {footer.left.map((lines) => (
              <p key={lines[0]}>
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            ))}
          </div>

          {/* Tengah: logo */}
          <div className="flex justify-center order-1 md:order-2">
            <motion.img
              src={profile.avatar}
              alt={profile.name}
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-16 h-16 rounded-full object-cover grayscale contrast-125"
            />
          </div>

          {/* Kanan: form + sosial */}
          <div className="flex flex-col items-center md:items-end gap-5 order-3">
            <form onSubmit={send} className="flex w-full max-w-[240px] items-center bg-white border border-gray-200 focus-within:border-gray-400 transition-colors rounded-lg pl-3 pr-1.5 py-1.5">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder={footer.ctaPlaceholder}
                aria-label={footer.ctaPlaceholder}
                className="flex-1 min-w-0 bg-transparent outline-none placeholder:text-gray-400 uppercase text-[12px] tracking-[0.04em] py-1"
              />
              <button
                type="submit"
                data-sfx
                aria-label="Send"
                className="w-8 h-8 flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17L22 12 3 20.5Zm2-3.1L16.9 12 5 6.6v4.1l6 1.3-6 1.3v4.1Z" /></svg>
              </button>
            </form>

            {socials.length > 0 && (
              <nav className="flex items-center gap-2">
                {socials.map((s, i) => (
                  <span key={s.label} className="flex items-center gap-2">
                    {i > 0 && <span className="text-gray-400">·</span>}
                    <a href={s.url} target="_blank" rel="noopener" data-sfx className="hover:opacity-50 transition-opacity">
                      {s.label}
                    </a>
                  </span>
                ))}
              </nav>
            )}
          </div>
        </div>

        {/* Bawah tengah */}
        <div className="text-center mt-12 space-y-2">
          <p>{footer.title}</p>
          <p className="text-gray-400">©{footer.year} · All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  )
}
