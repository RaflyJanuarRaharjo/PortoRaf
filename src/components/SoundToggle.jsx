import { AnimatePresence, motion } from 'motion/react'
import { useSfx } from '../hooks/useSfx'
import { SpeakerOff, SpeakerOn } from './icons'

export default function SoundToggle() {
  const { muted, toggle } = useSfx()
  return (
    <motion.button
      onClick={toggle}
      data-sfx
      aria-label={muted ? 'Nyalakan suara' : 'Matikan suara'}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full border border-gray-200 bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={muted ? 'off' : 'on'}
          initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
          transition={{ duration: 0.15 }}
          className="flex"
        >
          {muted ? <SpeakerOff /> : <SpeakerOn />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
