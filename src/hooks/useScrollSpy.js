import { useEffect, useRef, useState } from 'react'

// Mengembalikan id section yang sedang terlihat + fungsi untuk set manual saat klik
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  const lock = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (lock.current) return
      const offset = window.innerHeight * 0.3
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  const select = (id) => {
    setActive(id)
    lock.current = true
    setTimeout(() => { lock.current = false }, 800)
  }

  return [active, select]
}
