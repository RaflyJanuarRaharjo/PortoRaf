import { useScrollSpy } from '../hooks/useScrollSpy'
import Sidebar from './Sidebar'

// navItems harus konstanta di luar komponen (supaya scroll spy tidak reset)
export default function Layout({ navItems, ids, note, back, children }) {
  const [active, select] = useScrollSpy(ids)

  return (
    <div className="max-w-5xl mx-auto px-6 py-0 md:py-20 flex flex-col md:flex-row gap-8 md:gap-0">
      <Sidebar items={navItems} active={active} onSelect={select} note={note} back={back} />
      <main className="flex-1 max-w-2xl pt-6 md:pt-0 md:border-l md:border-gray-100 md:pl-12 md:ml-6">
        {children}
      </main>
    </div>
  )
}
