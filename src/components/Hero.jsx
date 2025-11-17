import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Building elegant, scalable experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-700"
          >
            I’m a software developer crafting modern web apps — blending performance, accessibility, and delightful interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 flex gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:shadow-md transition-all">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-all">Contact</a>
          </motion.div>
        </div>

        <div className="h-[380px] md:h-[520px] rounded-2xl border border-gray-200/70 bg-white/60 backdrop-blur shadow-sm p-6 flex flex-col justify-center">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-600" /> Frontend engineering with React, TypeScript, Tailwind</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-600" /> Backend systems with Node, Python, FastAPI</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-600" /> Cloud & DevOps: Vercel, AWS, CI/CD</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-600" /> Accessibility-first and performance-driven</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">Scroll to explore — micro-interactions throughout.</p>
        </div>
      </div>
    </section>
  )
}
