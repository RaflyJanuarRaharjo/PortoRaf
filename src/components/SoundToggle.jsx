import { useSfx } from '../hooks/useSfx'
import { SpeakerOff, SpeakerOn } from './icons'

export default function SoundToggle() {
  const { muted, toggle } = useSfx()
  return (
    <button
      onClick={toggle}
      data-sfx
      aria-label={muted ? 'Nyalakan suara' : 'Matikan suara'}
      className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full border border-gray-200 bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
    >
      {muted ? <SpeakerOff /> : <SpeakerOn />}
    </button>
  )
}
