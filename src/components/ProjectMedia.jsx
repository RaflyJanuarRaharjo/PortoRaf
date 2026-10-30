import { FolderIcon } from './icons'

const icons = { folder: FolderIcon }

export default function ProjectMedia({ media, alt, className = '' }) {
  if (media.type === 'video') {
    return (
      <video
        className={`w-full h-full object-cover ${className}`}
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }

  if (media.type === 'image') {
    return <img className={`w-full h-full object-cover ${className}`} src={media.src} alt={alt} />
  }

  const Icon = icons[media.icon] ?? FolderIcon
  return (
    <div className={`w-full h-full flex items-center justify-center text-gray-300 ${className}`}>
      <Icon />
    </div>
  )
}
