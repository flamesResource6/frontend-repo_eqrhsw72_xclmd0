import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HyperGrid({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/60 backdrop-blur">
      <motion.div style={{ rotate, scale }} className="absolute inset-0 -z-10 opacity-60">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(2,6,23,0.09)" strokeWidth="1" />
            </pattern>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.35"/>
              <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="120%" height="140%" x="-10%" y="-20%" fill="url(#glow)" />
        </svg>
      </motion.div>

      <div className="relative">
        {children}
      </div>
    </div>
  )
}
