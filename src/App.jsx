import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="relative bg-white text-gray-900">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />

        {/* Trend-forward marquee divider */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-6">
            <Marquee>
              {['React', 'TypeScript', 'FastAPI', 'Design Systems', 'AI UX', 'Three.js', 'Edge Compute', 'DX'].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-gray-900 text-white/90 border border-white/10 shadow-sm">{tag}</span>
              ))}
            </Marquee>
          </div>
        </section>

        <About />

        {/* HyperGrid wrapper to add depth */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Projects />
          </div>
        </section>

        <Skills />
        <Contact />
      </main>
      <footer className="py-10 border-t text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name — Built with care.</footer>
    </div>
  )
}

export default App
