import { useRef, useEffect } from 'react'

export default function Marquee({ children, speed = 40, reverse = false }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const totalWidth = el.scrollWidth / 2
    const duration = totalWidth / speed
    el.style.setProperty('--duration', `${duration}s`)
  }, [speed])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={ref}
        className={`flex whitespace-nowrap [--duration:40s] animate-marquee ${reverse ? 'direction-reverse' : ''}`}
        aria-hidden="true"
      >
        <div className="flex items-center gap-8 pr-8">
          {children}
        </div>
        <div className="flex items-center gap-8 pr-8" aria-hidden>
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white" />
    </div>
  )
}
