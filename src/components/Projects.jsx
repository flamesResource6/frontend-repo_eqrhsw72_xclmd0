import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Interactive Analytics Dashboard',
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d0d8d?auto=format&fit=crop&w=1600&q=60',
    stack: ['React', 'Node', 'PostgreSQL', 'Tailwind'],
    description: 'Real-time metrics with role-based access, custom charts, and blazing-fast filters.',
    links: { live: '#', repo: '#' },
  },
  {
    title: '3D Product Showcase',
    mediaType: 'video',
    media: 'https://www.w3schools.com/html/mov_bbb.mp4',
    stack: ['Next.js', 'Three.js', 'Stripe'],
    description: 'Immersive buying experience with WebGL, video, and seamless checkout.',
    links: { live: '#', repo: '#' },
  },
  {
    title: 'Knowledge Base Platform',
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1600&q=60',
    stack: ['FastAPI', 'MongoDB', 'Redis'],
    description: 'AI-assisted content authoring, search, and analytics for large teams.',
    links: { live: '#', repo: '#' },
  },
]

function ProjectCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video overflow-hidden bg-gray-100">
        {item.mediaType === 'image' ? (
          <img src={item.media} alt="Project media" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        ) : (
          <video src={item.media} controls className="w-full h-full object-cover" preload="metadata" />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-gray-700">{item.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <li key={s} className="px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100">{s}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <a href={item.links.live} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Live demo →</a>
          <a href={item.links.repo} className="text-sm text-gray-600 hover:text-gray-800">Source</a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Featured work" title="Projects" subtitle="A selection of shipped products and prototypes." />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
