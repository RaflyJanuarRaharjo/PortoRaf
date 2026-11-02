import { useState } from 'react'

// Logo perusahaan. Kalau src kosong / gagal dimuat -> tampil inisial nama.
export default function Logo({ src, name }) {
  const [failed, setFailed] = useState(false)

  // Ambil nama perusahaan saja (sebelum "(" atau "·"), lalu huruf depan max 2 kata
  const initials = name
    .split(/[(·|]/)[0]
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  // Ada logo: tampil apa adanya, tanpa kotak/border
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={name}
        className="w-10 h-10 flex-shrink-0 rounded-[10px] object-cover"
        onError={() => setFailed(true)}
      />
    )
  }

  // Belum ada logo: inisial di kotak abu-abu
  return (
    <div className="w-10 h-10 flex-shrink-0 rounded-[10px] bg-gray-100 flex items-center justify-center">
      <span className="text-[12px] font-semibold text-gray-500 tracking-wide">{initials}</span>
    </div>
  )
}
