import { useState, useEffect, useRef } from 'react'
import mohsinLogo from '../assets/DP 2.png'
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
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const headerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0
            setIsScrolled(window.scrollY > headerHeight)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Track which section is currently in view
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-40% 0px -40% 0px', // section counts as "active" when its middle crosses viewport middle
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))
        return () => sections.forEach((section) => observer.unobserve(section))
    }, [])

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setActiveSection(id)
        setMobileOpen(false)
    }

    return (
        <div className="w-full z-50">
            <header ref={headerRef} className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-ossph-blue/20 dark:border-ossph-light/20">
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
                                    fahad mehmood
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

            {/* Desktop sub-nav */}
            <div className="hidden md:block relative">
                <nav
                    className={`w-full flex items-center justify-center bg-ossph-pale dark:bg-gray-800 transition-all duration-500 ease-in-out ${isScrolled
                        ? 'fixed top-3 left-1/2 -translate-x-1/2 w-fit z-50 rounded-full shadow-2xl px-12 py-2 gap-10'
                        : 'relative shadow-md px-10 py-2 gap-8'
                        }`}
                    style={{
                        clipPath: isScrolled
                            ? 'none'
                            : 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))',
                    }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`font-semibold transition tracking-wide whitespace-nowrap rounded-full border-2 ${isScrolled ? 'text-base px-4 py-1.5' : 'text-sm px-3 py-1'
                                } ${activeSection === link.id
                                    ? 'border-ossph-blue text-ossph-blue dark:border-ossph-light dark:text-ossph-light'
                                    : 'border-transparent text-ossph-blue/70 dark:text-ossph-light/70 hover:underline hover:text-ossph-dark dark:hover:text-white'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-ossph-pale dark:bg-gray-800 border-b border-ossph-blue/20 dark:border-ossph-light/20 flex flex-col items-center py-3 space-y-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-sm font-semibold transition rounded-full border-2 px-4 py-1 ${activeSection === link.id
                                ? 'border-ossph-blue text-ossph-blue dark:border-ossph-light dark:text-ossph-light'
                                : 'border-transparent text-ossph-blue/70 dark:text-ossph-light/70 hover:text-ossph-dark dark:hover:text-white'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar