import { useEffect, useState } from 'react'
import mohsinLogo from './assets/DP 1.png'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import SkillsEducation from './sections/SkillsEducation.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  const [showFullImage, setShowFullImage] = useState(false)
  const [isDark, setIsDark] = useState(false)

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

      <Navbar isDark={isDark} toggleTheme={toggleTheme} onLogoClick={() => setShowFullImage(true)} />

      <Home />
      <About />
      <Projects />
      <SkillsEducation />
      <Contact />


      <footer className="bg-ossph-dark dark:bg-gray-950 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">Muhammad Mohsin Yaqoob</h3>
          <p className="text-gray-300 text-sm mb-4">Video Editor & AI Content Specialist</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://wa.me/923096157211"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=immohsiny@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/im-mohsin-y11"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>

          </div>
          <div className="border-t border-white/10 pt-6 text-gray-400 text-sm">
            © 2026 Muhammad Mohsin Yaqoob. All rights reserved.
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Designed & Developed by{' '}
            <a
              href="https://www.linkedin.com/in/fahad-mehmood-687421388/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-ossph-light transition"
            >
              Fahad Mehmood
            </a>
          </p>
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