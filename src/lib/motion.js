// Preset animasi yang dipakai ulang
export const ease = [0.22, 1, 0.36, 1]

// Muncul saat discroll ke layar
export const reveal = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease },
}

// Container yang memunculkan anak-anaknya bergantian
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease } },
}

// Item list yang muncul saat "Show all"
export const listItem = (i = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease, delay: i * 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
})
