// Section dengan judul dan elemen opsional di kanan (jumlah, link, dll)
export default function Section({ id, title, aside, className = 'mb-20', children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {title && (
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[16px] font-semibold text-gray-900">{title}</h2>
          {aside}
        </div>
      )}
      {children}
    </section>
  )
}

export const Count = ({ children }) => <span className="text-[13px] text-gray-400">{children}</span>
