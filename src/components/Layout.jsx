import { useEffect } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import Sidebar from './Sidebar'

// navItems & ids harus konstanta di luar komponen (supaya scroll spy tidak reset)
// intro (opsional): tampil di atas navbar saat mobile, di kolom kanan saat desktop
export default function Layout({ navItems, ids, note, back, intro, children }) {
  const [active, select] = useScrollSpy(ids)

  // Saat halaman dibuka: lompat ke #hash kalau ada, kalau tidak ke atas
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' }))
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-0 md:py-20 flex flex-col md:grid md:grid-cols-[10rem_minmax(0,42rem)]">
      {intro && (
        <div className="order-1 pt-12 md:pt-0 md:pb-0 md:col-start-2 md:row-start-1 md:border-l md:border-gray-100 md:pl-12 md:ml-6">
          {intro}
        </div>
      )}
      <Sidebar
        items={navItems}
        active={active}
        onSelect={select}
        note={note}
        back={back}
        className="order-2 md:col-start-1 md:row-start-1 md:row-span-2"
      />
      <main className="order-3 pt-8 md:pt-0 md:col-start-2 md:row-start-2 md:border-l md:border-gray-100 md:pl-12 md:ml-6">
        {children}
      </main>
    </div>
  )
}
