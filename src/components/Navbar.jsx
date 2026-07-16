import { useState } from 'react'
import mohsinLogo from '../assets/DP 1.png'
import mohsinResume from '../assets/M.Mohsin CV.pdf'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills-education', label: 'Skills & Education' },
    { id: 'contact', label: 'Contact' },
]

function Navbar({ isDark, toggleTheme, onLogoClick }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    return (
        <div className="w-full z-50">
            <header className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-ossph-blue/20 dark:border-ossph-light/20">
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <img
                                className="h-14 w-14 object-cover cursor-pointer flex-shrink-0"
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
                                href={mohsinResume}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-ossph-blue hover:bg-ossph-dark text-white rounded-lg transition shadow-md hover:shadow-lg"
                            >
                                <span className="hidden sm:block text-sm font-medium">My CV</span>
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