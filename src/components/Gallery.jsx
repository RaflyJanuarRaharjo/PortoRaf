import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Deretan thumbnail di bawah deskripsi. Klik -> buka gambar besar.
// images: [{ src: '/images/xxx.jpg', caption: 'Sertifikat' }]
export default function Gallery({ images = [] }) {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + images.length) % images.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, images.length])

  if (!images.length) return null

  return (
    <>
      <div className="flex gap-2.5 mt-3 overflow-x-auto no-scrollbar -mx-1 px-1 py-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            data-sfx
            onClick={() => setOpen(i)}
            className="group flex-shrink-0 text-left"
          >
            <div className="w-32 h-20 rounded-lg border border-gray-200/80 bg-gray-50 overflow-hidden">
              <img
                src={img.src}
                alt={img.caption || ''}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {img.caption && <div className="text-[12px] text-gray-400 mt-1.5 w-32 truncate">{img.caption}</div>}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              key={images[open].src}
              src={images[open].src}
              alt={images[open].caption || ''}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {images[open].caption && <p className="text-white/80 text-[14px] mt-4">{images[open].caption}</p>}
            <p className="text-white/40 text-[12px] mt-1">Klik di luar gambar atau tekan Esc untuk menutup</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
