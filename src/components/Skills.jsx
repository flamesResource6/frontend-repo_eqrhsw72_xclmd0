import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { Code2, Database, Rocket, Accessibility } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', points: ['React, Next.js, Vite', 'TypeScript, Zustand', 'Tailwind, shadcn/ui'] },
  { icon: Database, title: 'Backend', points: ['FastAPI, Node, GraphQL', 'MongoDB, Postgres', 'Auth, Caching, Queues'] },
  { icon: Rocket, title: 'DevOps', points: ['CI/CD, GitHub Actions', 'Vercel, AWS, Docker', 'Observability & APM'] },
  { icon: Accessibility, title: 'Quality', points: ['A11y best practices', 'Lighthouse 90+ scores', 'Testing & docs'] },
]

function SkillCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <span className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
          <Icon size={20} />
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {item.points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Capabilities" title="Skills & strengths" subtitle="Tools and practices I use to deliver reliable, polished software." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={s.title} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
