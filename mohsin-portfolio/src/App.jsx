import { useEffect, useState } from 'react'
import mohsinLogo from './assets/Mohsin.png'
const templates = [
  {
    href: 'hacker',
    img: '/images/hacker.png',
    alt: 'Hacker Template',
    name: 'Hacker',
    description: 'Terminal-inspired portfolio for programmers',
    tags: ['Minimal', 'Dark'],
    badge: { text: 'Terminal Style', className: 'bg-ossph-blue text-white' },
  },
  {
    href: 'indify',
    img: '/images/indify.png',
    alt: 'Indify Template',
    name: 'Indify',
    description: 'Modern and creative portfolio design',
    tags: ['Creative', 'Modern'],
    badge: null,
  },
  {
    href: 'plain',
    img: '/images/plain.png',
    alt: 'Plain Template',
    name: 'Plain',
    description: 'Simple and straightforward portfolio',
    tags: ['Minimal', 'Clean'],
    badge: null,
  },
  {
    href: 'clean',
    img: '/images/clean.png',
    alt: 'Clean Template',
    name: 'Clean',
    description: 'Minimalist design with focus on content',
    tags: ['Minimal', 'Professional'],
    badge: null,
  },
  {
    href: 'beginner',
    img: '/images/beginner.png',
    alt: 'Beginner Template',
    name: 'Beginner',
    description: 'Perfect starter template for newcomers',
    tags: ['Simple', 'Starter'],
    badge: null,
  },
  {
    href: 'outlines',
    img: '/images/outlines.png',
    alt: 'Outlines Template',
    name: 'Outlines',
    description: 'Unique outline-based design approach',
    tags: ['Creative', 'Unique'],
    badge: null,
  },
  {
    href: 'simple',
    img: '/images/simple.PNG',
    alt: 'Simple Template',
    name: 'Simple',
    description: 'Straightforward and easy to use',
    tags: ['Minimal', 'Basic'],
    badge: null,
  },
  {
    href: 'deepsea',
    img: '/images/deepsea.png',
    alt: 'Deep Sea Template',
    name: 'Deep Sea',
    description: 'Ocean-inspired dark theme portfolio',
    tags: ['Dark', 'Creative'],
    badge: null,
  },
  {
    href: 'dark-hack',
    img: '/images/dark-hack.png',
    alt: 'Dark Hack Template',
    name: 'Dark Hack',
    description: 'Dark mode hacker-style portfolio',
    tags: ['Dark', 'Terminal'],
    badge: null,
  },
  {
    href: 'ingolfur',
    img: '/images/ingolfur.png',
    alt: 'Ingólfur Template',
    name: 'Ingólfur',
    description: 'Nordic-inspired elegant design',
    tags: ['Elegant', 'Nordic'],
    badge: null,
  },
  {
    href: 'anime',
    img: '/images/anime.png',
    alt: 'Anime Template',
    name: 'Anime',
    description: 'Anime-style creative portfolio',
    tags: ['Creative', 'Fun'],
    badge: null,
  },
  {
    href: 'easy',
    img: '/images/easy.png',
    alt: 'Easy Template',
    name: 'Easy',
    description: 'Easy to customize starter template',
    tags: ['Simple', 'Starter'],
    badge: null,
  },
  {
    href: 'flower',
    img: '/images/flower.png',
    alt: 'Flower Template',
    name: 'Flower',
    description: 'Nature-inspired portfolio with animations',
    tags: ['Creative', 'Animated'],
    badge: { text: 'New', className: 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' },
  },
  {
    href: 'aurora',
    img: '/images/aurora.png',
    alt: 'Aurora Template',
    name: 'Aurora',
    description: 'Northern Lights inspired dark theme with 9+ sections',
    tags: ['Dark', 'Professional'],
    badge: { text: 'New', className: 'bg-gradient-to-r from-ossph-blue to-ossph-light text-white' },
  },
]

function App() {
  const [showFullImage, setShowFullImage] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Theme init (reads saved preference), same behavior as original inline script
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
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-ossph-blue/20 dark:border-ossph-light/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">



              <img
                className="h-10 cursor-pointer"
                src={mohsinLogo}
                alt="M.Mohsin logo"
                style={{ borderRadius: '50%' }}
                onClick={() => setShowFullImage(true)}
              />



              <div className="h-6 w-px bg-ossph-blue/30 dark:bg-ossph-light/30"></div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-ossph-blue dark:text-ossph-light">
                  M.Mohsin
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Transforming Ideas into Engaging Courses</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/OSSPhilippines/freefolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-ossph-blue hover:bg-ossph-dark text-white rounded-lg transition shadow-md hover:shadow-lg"
              >
                <i className="fab fa-github text-lg"></i>
                <span className="hidden sm:block text-sm font-medium">Star on GitHub</span>
              </a>
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="p-2 bg-ossph-pale dark:bg-gray-800 rounded-lg hover:bg-ossph-blue/20 dark:hover:bg-ossph-light/20 transition"
              >
                <i
                  className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-ossph-blue dark:text-ossph-light text-lg`}
                  id="theme-icon"
                ></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ossph-pale via-white to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ossph-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ossph-light/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 bg-ossph-blue/10 dark:bg-ossph-light/20 rounded-full">
            <span className="text-ossph-blue dark:text-ossph-light font-semibold text-sm">🚀 100% Free & Open Source</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Muhammad Mohsin Yaqoob
            <span className="block text-3xl lg:text-5xl mt-2 bg-gradient-to-r from-ossph-blue to-ossph-light bg-clip-text text-transparent">
              Video Editor & AI Course Production Specialist
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I create high-quality educational content by combining professional video editing, AI-powered workflows, motion graphics, and visual storytelling. I specialize in transforming raw recordings into engaging online courses that deliver an exceptional learning experience.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">

              <span className="font-medium">🎬 Professional Video Editing</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">

              <span className="font-medium">🤖 AI Workflow Integration</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">

              <span className="font-medium">📚 eLearning Course Production</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">

              <span className="font-medium">⚡ Fast & Detail-Oriented Delivery</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
              <div
                className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform"
                id="templateCount"
              >
                {3}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years of Editing Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
              <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Educational Videos Produced</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
              <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">40+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI & eLearning Courses</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
              <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Gallery */}
      <main className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="templatesGrid">
            {templates.map((template) => (
              <div key={template.href} className="template-card group" data-aos="fade-up">
                <a href={template.href} target="_blank" rel="noreferrer" className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative overflow-hidden">
                      <img
                        src={template.img}
                        alt={template.alt}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {template.badge && (
                        <div
                          className={`absolute top-4 right-4 ${template.badge.className} px-3 py-1 rounded-full text-sm font-semibold`}
                        >
                          {template.badge.text}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {template.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-ossph-blue dark:text-ossph-light group-hover:translate-x-1 transition-transform inline-flex items-center">
                          View <i className="fas fa-arrow-right ml-1 text-sm"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 border-8 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Start Building Your Portfolio Today</h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
            Join the OSSPH community. Choose a template, customize it, and launch your professional portfolio in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/OSSPhilippines/freefolio"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-ossph-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <i className="fab fa-github mr-2"></i>
              View on GitHub
            </a>
            <a
              href="https://github.com/OSSPhilippines/freefolio/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-ossph-blue transition transform hover:scale-105"
            >
              <i className="fas fa-code-branch mr-2"></i>
              Contribute a Template
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ossph-dark dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-code text-ossph-light"></i>
                </div>
                <h3 className="text-xl font-bold">Freefolio</h3>
              </div>
              <p className="text-gray-300">
                100% free portfolio templates by the Open Source Software Philippines community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://github.com/OSSPhilippines/freefolio" className="hover:text-ossph-light transition">
                    <i className="fas fa-link text-xs mr-2"></i>GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/OSSPhilippines/freefolio/blob/main/CONTRIBUTING.md"
                    className="hover:text-ossph-light transition"
                  >
                    <i className="fas fa-link text-xs mr-2"></i>Contributing Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/OSSPhilippines/freefolio/blob/main/LICENSE"
                    className="hover:text-ossph-light transition"
                  >
                    <i className="fas fa-link text-xs mr-2"></i>MIT License
                  </a>
                </li>
                <li>
                  <a href="https://ossph.org" className="hover:text-ossph-light transition">
                    <i className="fas fa-link text-xs mr-2"></i>OSSPH Website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/OSSPhilippines"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/ossphilippines"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ossph-light hover:text-ossph-dark transition"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
              <p className="text-sm text-gray-400">Join our community and contribute!</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p className="flex items-center justify-center">
              © 2024 OSSPH Freefolio. Made with <span className="text-red-500 mx-2">❤️</span> by the community.
            </p>
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
            alt="M.Mohsin logo full"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"

          />
        </div>
      )}
    </>
  )
}

export default App
