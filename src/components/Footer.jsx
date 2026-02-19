import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import CopyToast, { useCopyToast } from './CopyToast'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { showCopied, copyEmail } = useCopyToast()

    const socialLinks = [
        { icon: Github, href: 'https://github.com/lokiadith0177', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/lokeshadith', label: 'LinkedIn' },
        { icon: Mail, href: '#', label: 'Email', onClick: copyEmail },
    ]

    return (
        <footer className="footer">
            <div className="footer__glow-line" />
            <div className="footer__content">
                {/* Big Email CTA */}
                <div className="footer__cta">
                    <p className="footer__cta-label">Ready to innovate?</p>
                    <a
                        href="#"
                        className="footer__big-link"
                        data-cursor-hover
                        onClick={copyEmail}
                    >
                        lokeshadith01@gmail.com
                    </a>
                </div>

                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo" data-cursor-hover>
                            <span className="footer__logo-text">LOKESH</span>
                            <span className="footer__logo-dot">.</span>
                        </Link>
                        <p className="footer__tagline">Pioneering innovative solutions,<br />one circuit at a time.</p>
                    </div>

                    <div className="footer__nav">
                        <div className="footer__nav-group">
                            <h4 className="footer__nav-title">Navigate</h4>
                            <Link to="/" className="footer__nav-link" data-cursor-hover>Home</Link>
                            <Link to="/about" className="footer__nav-link" data-cursor-hover>About</Link>
                            <Link to="/projects" className="footer__nav-link" data-cursor-hover>Projects</Link>
                        </div>
                        <div className="footer__nav-group">
                            <h4 className="footer__nav-title">More</h4>
                            <Link to="/skills" className="footer__nav-link" data-cursor-hover>Skills</Link>
                            <Link to="/contact" className="footer__nav-link" data-cursor-hover>Contact</Link>
                        </div>
                    </div>

                    <div className="footer__social">
                        {socialLinks.map(({ icon: Icon, href, label, onClick }) => (
                            <motion.a
                                key={label}
                                href={href}
                                className="footer__social-link"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                data-cursor-hover
                                aria-label={label}
                                target={label !== 'Email' ? '_blank' : undefined}
                                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                                onClick={onClick}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">© {currentYear} Lokesh Adith. All systems operational.</p>
                    <p className="footer__credit mono">
                        Engineered with <span style={{ color: 'var(--lime)' }}>⚡</span> precision
                    </p>
                </div>
            </div>

            <CopyToast show={showCopied} />
        </footer>
    )
}

export default Footer
