import { useEffect, useState } from 'react'
import mohsinLogo from './assets/Mohsin.png'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import SkillsEducation from './sections/SkillsEducation.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  const [showFullImage, setShowFullImage] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Theme init (reads saved preference)
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    setIsDark(currentTheme === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  // Initialize AOS (loaded via CDN script in index.html)
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        once: true,
        delay: 0,
        duration: 600,
      })
    }
  }, [])

  return (
    <>
      {/* Sticky navbar (bari + choti sub-navbar dono) - apni normal jagah document flow me rehta he, scroll pr top se chipak jata he */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onLogoClick={() => setShowFullImage(true)} />

      {/* Sare sections ek hi page pr, har ek full-screen (min-h-screen) */}
      <Home />
      <About />
      <Projects />
      <SkillsEducation />
      <Contact />

      {/* Footer */}
      <footer className="bg-ossph-dark dark:bg-gray-950 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">Muhammad Mohsin Yaqoob</h3>
          <p className="text-gray-300 text-sm mb-4">Video Editor & AI Content Specialist</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/in/im-mohsin-y11"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:immohsiny@outlook.com"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="https://wa.me/923096157211"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
          <div className="border-t border-white/10 pt-6 text-gray-400 text-sm">
            © 2026 Muhammad Mohsin Yaqoob. All rights reserved.
          </div>
        </div>
      </footer>

      {showFullImage && (
        <div
          onClick={() => setShowFullImage(false)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
        >
          <img
            src={mohsinLogo}
            alt="Muhammad Mohsin Yaqoob logo full"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  )
}

export default App