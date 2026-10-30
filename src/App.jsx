import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { SoundProvider } from './hooks/useSfx'
import SoundToggle from './components/SoundToggle'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const location = useLocation()

  return (
    // reducedMotion="user": animasi dimatikan jika user mengaktifkan "reduce motion" di OS
    <MotionConfig reducedMotion="user">
      <SoundProvider>
        <SoundToggle />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </SoundProvider>
    </MotionConfig>
  )
}
