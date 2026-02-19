import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
    }, [location.pathname])

    return (
        <>
            <motion.nav
                className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="navbar__inner">
                    <Link to="/" className="navbar__logo" data-cursor-hover>
                        <span className="navbar__logo-text">LOKESH</span>
                        <span className="navbar__logo-dot">.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="navbar__links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                                data-cursor-hover
                            >
                                <span>{link.label}</span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        className="navbar__link-indicator"
                                        layoutId="navIndicator"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="navbar__right">
                        <Link to="/contact" className="navbar__cta" data-cursor-hover>
                            Let's Talk
                        </Link>
                        <button
                            className="navbar__mobile-toggle"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            data-cursor-hover
                        >
                            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                                    data-cursor-hover
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
