import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="About" title="A bit about me" subtitle="I turn ideas into products — balancing craft, speed, and business impact." />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 text-gray-700 leading-relaxed"
          >
            <p>
              With years of experience across startups and enterprise teams, I specialize in building polished user experiences and robust APIs.
              I enjoy shaping design systems, optimizing performance, and mentoring teams in modern web practices.
            </p>
            <p className="mt-4">
              Outside of coding, you199ll find me sketching interfaces, reading about systems thinking, or exploring new ways to prototype ideas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-white shadow-sm"
          >
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center justify-between"><span>Location</span><span className="font-semibold">Remote / Global</span></li>
              <li className="flex items-center justify-between"><span>Experience</span><span className="font-semibold">6+ years</span></li>
              <li className="flex items-center justify-between"><span>Focus</span><span className="font-semibold">Web, DX, UI systems</span></li>
              <li className="flex items-center justify-between"><span>Availability</span><span className="font-semibold">Open to opportunities</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
