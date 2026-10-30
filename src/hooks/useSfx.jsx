import { createContext, useContext, useEffect, useRef, useState } from 'react'

// Efek suara hover & click dengan Web Audio (tanpa file audio).
// Elemen yang diberi atribut data-sfx otomatis berbunyi.

const SoundContext = createContext({ muted: false, toggle: () => {} })

const readMuted = () => {
  try { return localStorage.getItem('sfx-muted') === '1' } catch { return false }
}

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(readMuted)
  const mutedRef = useRef(muted)
  const ctxRef = useRef(null)

  useEffect(() => {
    mutedRef.current = muted
    try { localStorage.setItem('sfx-muted', muted ? '1' : '0') } catch { /* abaikan */ }
  }, [muted])

  useEffect(() => {
    const unlock = () => {
      if (!ctxRef.current) {
        try { ctxRef.current = new (window.AudioContext || window.webkitAudioContext)() } catch { return }
      }
      if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    }

    const tone = (freq, dur, vol, type = 'sine', endFreq) => {
      const ctx = ctxRef.current
      if (mutedRef.current || !ctx || ctx.state !== 'running') return
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(freq, t)
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + dur)
      gain.gain.setValueAtTime(0.0001, t)
      gain.gain.exponentialRampToValueAtTime(vol, t + 0.005)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
      osc.connect(gain).connect(ctx.destination)
      osc.start(t)
      osc.stop(t + dur + 0.02)
    }

    let lastHovered = null
    const onOver = (e) => {
      const el = e.target.closest('[data-sfx]')
      if (el && el !== lastHovered && e.pointerType === 'mouse') tone(1800, 0.04, 0.025)
      lastHovered = el
    }
    const onClick = (e) => {
      if (e.target.closest('[data-sfx]')) { unlock(); tone(900, 0.07, 0.07, 'triangle', 500) }
    }

    const unlockEvents = ['pointerdown', 'keydown', 'touchstart']
    unlockEvents.forEach((ev) => window.addEventListener(ev, unlock, { passive: true }))
    document.addEventListener('pointerover', onOver)
    document.addEventListener('click', onClick)
    return () => {
      unlockEvents.forEach((ev) => window.removeEventListener(ev, unlock))
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <SoundContext.Provider value={{ muted, toggle: () => setMuted((m) => !m) }}>
      {children}
    </SoundContext.Provider>
  )
}

export const useSfx = () => useContext(SoundContext)
