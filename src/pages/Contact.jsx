import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Phone } from 'lucide-react'
import StaggeredText from '../components/StaggeredText'
import SpotlightCard from '../components/SpotlightCard'
import MagneticButton from '../components/MagneticButton'
import CopyToast, { useCopyToast } from '../components/CopyToast'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [focusedField, setFocusedField] = useState(null)
    const { showCopied, copyEmail } = useCopyToast()

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'lokeshadith01@gmail.com', href: '#', onClick: copyEmail },
        { icon: Phone, label: 'Phone', value: '+91 9740920885', href: 'tel:+919740920885' },
        { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/lokeshadith', href: 'https://www.linkedin.com/in/lokeshadith', external: true },
        { icon: MapPin, label: 'Location', value: 'Bangalore / Coimbatore, India', href: '#' },
    ]

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="page contact-page">
            <section className="section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get in Touch
                    </motion.div>

                    <StaggeredText
                        text="Let's Connect & Create"
                        tag="h1"
                        className="contact__title"
                        delay={0.3}
                    />

                    <motion.p
                        className="contact__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Have a project in mind, or just want to discuss embedded systems and IoT? Drop me a line.
                    </motion.p>

                    <div className="contact-layout">
                        {/* Form */}
                        <motion.div
                            className="contact-form-wrap"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <SpotlightCard className="contact-form-card">
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className={`form-group ${focusedField === 'name' || formData.name ? 'form-group--active' : ''}`}>
                                        <label htmlFor="name" className="form-label mono">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                        <div className="form-line" />
                                    </div>

                                    <div className={`form-group ${focusedField === 'email' || formData.email ? 'form-group--active' : ''}`}>
                                        <label htmlFor="email" className="form-label mono">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                        <div className="form-line" />
                                    </div>

                                    <div className={`form-group ${focusedField === 'subject' || formData.subject ? 'form-group--active' : ''}`}>
                                        <label htmlFor="subject" className="form-label mono">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-input"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                        <div className="form-line" />
                                    </div>

                                    <div className={`form-group ${focusedField === 'message' || formData.message ? 'form-group--active' : ''}`}>
                                        <label htmlFor="message" className="form-label mono">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-input form-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={5}
                                            required
                                        />
                                        <div className="form-line" />
                                    </div>

                                    <MagneticButton type="submit">
                                        Send Message <Send size={16} />
                                    </MagneticButton>
                                </form>
                            </SpotlightCard>
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            className="contact-info-wrap"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="contact-info-cards">
                                {contactInfo.map((info, i) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            target={info.external ? '_blank' : undefined}
                                            rel={info.external ? 'noopener noreferrer' : undefined}
                                            onClick={info.onClick}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            data-cursor-hover
                                        >
                                            <SpotlightCard className="contact-info-card">
                                                <div className="contact-info-card__icon">
                                                    <Icon size={20} strokeWidth={1.5} />
                                                </div>
                                                <div className="contact-info-card__text">
                                                    <span className="contact-info-card__label mono">{info.label}</span>
                                                    <span className="contact-info-card__value">{info.value}</span>
                                                </div>
                                                <ArrowUpRight size={16} className="contact-info-card__arrow" />
                                            </SpotlightCard>
                                        </motion.a>
                                    )
                                })}
                            </div>

                            {/* Status */}
                            <SpotlightCard className="contact-status">
                                <div className="contact-status__dot" />
                                <div className="contact-status__text">
                                    <span className="contact-status__label">Current Status</span>
                                    <span className="contact-status__value">Open to opportunities</span>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="contact-bg-grid" />
            <CopyToast show={showCopied} />
        </div>
    )
}

export default Contact
