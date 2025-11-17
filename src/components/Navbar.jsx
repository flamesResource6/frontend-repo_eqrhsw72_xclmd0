import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-xl">
          <span className="text-gray-900">dev</span>
          <span className="text-blue-600">.folio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="py-2 text-left text-gray-700 hover:text-blue-600">
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
