import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SoundProvider } from './hooks/useSfx'
import SoundToggle from './components/SoundToggle'
import Home from './pages/Home'
import Projects from './pages/Projects'

// Saat pindah halaman: ke atas, atau ke #hash kalau ada
function ScrollManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <SoundProvider>
      <ScrollManager />
      <SoundToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </SoundProvider>
  )
}
