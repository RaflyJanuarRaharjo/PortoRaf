import { motion } from 'motion/react'
import { reveal } from '../lib/motion'

// Section dengan judul + elemen opsional di kanan. Muncul halus saat discroll.
export default function Section({ id, title, aside, className = 'mb-20', animate = true, children }) {
  return (
    <motion.section id={id} className={`scroll-mt-24 ${className}`} {...(animate ? reveal : {})}>
      {title && (
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[16px] font-semibold text-gray-900">{title}</h2>
          {aside}
        </div>
      )}
      {children}
    </motion.section>
  )
}

export const Count = ({ children }) => <span className="text-[13px] text-gray-400">{children}</span>
