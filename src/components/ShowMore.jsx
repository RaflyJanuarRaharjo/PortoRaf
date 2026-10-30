import { useState } from 'react'
import { ChevronDown } from './icons'

// Tampilkan `limit` item dulu, sisanya lewat tombol Show all / Show less
export default function ShowMore({ items, limit, sectionId, buttonClass = 'mt-2', children }) {
  const [open, setOpen] = useState(false)
  const visible = open ? items : items.slice(0, limit)

  const toggle = () => {
    if (open) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(!open)
  }

  return (
    <>
      {children(visible)}
      {items.length > limit && (
        <button
          onClick={toggle}
          data-sfx
          className={`${buttonClass} inline-flex items-center gap-1.5 text-[14px] text-gray-500 hover:text-gray-900 transition-colors`}
        >
          {open ? 'Show less' : 'Show all'}
          <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      )}
    </>
  )
}
