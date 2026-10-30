const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ChevronDown = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ArrowRight = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

export const ArrowLeft = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
)

export const SpeakerOn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" />
  </svg>
)

export const SpeakerOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="m22 9-6 6" /><path d="m16 9 6 6" />
  </svg>
)

export const FolderIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
  </svg>
)

export const OklchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" {...stroke}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5 2.5 14.8 3.3 15.9" />
    <path d="M15 8C16.6569 8 18 9.34315 18 11C18 12.6569 16.6569 14 15 14H9C7.34315 14 6 12.6569 6 11C6 9.34315 7.34315 8 9 8C9 8 11 8 12 11" />
    <path d="M10 16C10.5 16.7 11.2 17.2 12 17.5" />
    <path d="M9 8C7.34315 8 6 6.65685 6 5" />
  </svg>
)
