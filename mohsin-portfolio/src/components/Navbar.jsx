import { useState } from 'react'
import mohsinLogo from '../assets/Mohsin.png'

// Sub-navbar ke section links - id yahan se match hona chahiye har section k <section id="..."> se
const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills-education', label: 'Skills & Education' },
    { id: 'contact', label: 'Contact' },
]

function Navbar({ isDark, toggleTheme, onLogoClick }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    // Smooth scroll to section by id (fixed navbar height ke liye scroll-margin-top section me lagaya hoga)
    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    return (
        // Poora navbar block (bari navbar + choti sub-navbar) normal document flow me he - scroll krte hi page k sath upar chala jata he
        <div className="w-full z-50">
            {/* ===== Main (Bari) Navbar ===== */}
            <header className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-ossph-blue/20 dark:border-ossph-light/20">
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <img
                                className="h-10 cursor-pointer"
                                src={mohsinLogo}
                                alt="Muhammad Mohsin Yaqoob logo"
                                style={{ borderRadius: '50%' }}
                                onClick={onLogoClick}
                            />
                            <div className="h-6 w-px bg-ossph-blue/30 dark:bg-ossph-light/30"></div>
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold text-ossph-blue dark:text-ossph-light">
                                    Muhammad Mohsin Yaqoob
                                </h1>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Video Editor & AI Content Specialist
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/in/im-mohsin-y11"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-ossph-blue hover:bg-ossph-dark text-white rounded-lg transition shadow-md hover:shadow-lg"
                            >
                                <i className="fab fa-linkedin text-lg"></i>
                                <span className="hidden sm:block text-sm font-medium">Connect on LinkedIn</span>
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
                            {/* Mobile menu toggle - sirf choti screen pr dikhega */}
                            <button
                                className="md:hidden p-2 bg-ossph-pale dark:bg-gray-800 rounded-lg"
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                <i className={`fas ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-ossph-blue dark:text-ossph-light text-lg`}></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* ===== Choti Sub-Navbar (section links) - bari navbar k mid-width se attach ===== */}
            <div className="bg-ossph-pale dark:bg-gray-800 border-b border-ossph-blue/20 dark:border-ossph-light/20 shadow-md">
                <div className="container mx-auto px-6">
                    <div className="hidden md:flex items-center justify-center space-x-8 py-2.5">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-semibold text-ossph-blue dark:text-ossph-light hover:text-ossph-dark dark:hover:text-white transition tracking-wide"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile sub-navbar dropdown */}
                    {mobileOpen && (
                        <div className="md:hidden flex flex-col items-center py-3 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-sm font-semibold text-ossph-blue dark:text-ossph-light hover:text-ossph-dark dark:hover:text-white transition"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar