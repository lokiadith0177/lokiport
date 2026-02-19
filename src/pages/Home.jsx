import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Cpu, Wifi, CircuitBoard, Code2, Sparkles } from 'lucide-react'
import SpotlightCard from '../components/SpotlightCard'
import MagneticButton from '../components/MagneticButton'
import KineticText from '../components/KineticText'
import StaggeredText from '../components/StaggeredText'
import ParallaxSection from '../components/ParallaxSection'
import FloatingIcons from '../components/FloatingIcons'
import './Home.css'

const stats = [
    { value: '3+', label: 'Projects Built' },
    { value: '6+', label: 'Certifications' },
    { value: '5', label: 'Languages Spoken' },
    { value: '2026', label: 'Graduating' },
]

const featuredSkills = [
    { icon: Cpu, name: 'Embedded Systems', desc: 'Tiva C Series, ARM Cortex, Embedded C programming' },
    { icon: Wifi, name: 'Wireless Comm', desc: 'RF 433MHz, GSM SIM800L, Bluetooth HC-05' },
    { icon: CircuitBoard, name: 'VLSI & VHDL', desc: 'Digital design, VHDL programming, SoC design' },
    { icon: Code2, name: 'Python & ML', desc: 'Machine learning, regression models, data analysis' },
]

const Home = () => {
    const navigate = useNavigate()
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -80])

    return (
        <div className="page home-page">
            {/* ===== HERO (Brutalist) ===== */}
            <section className="hero" ref={heroRef}>
                {/* Levitating icons — drift + orbit on hover */}
                <FloatingIcons heroRef={heroRef} />

                <motion.div
                    className="hero__content"
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                >
                    <div className="hero__grid-pattern" />

                    <motion.div
                        className="hero__badge mono"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Sparkles size={14} />
                        <span>Electronics & Communication Engineer</span>
                    </motion.div>

                    <div className="hero__title-wrap">
                        <StaggeredText
                            text="Engineering"
                            tag="h1"
                            className="hero__title-line"
                            delay={0.3}
                        />
                        <motion.h1
                            className="hero__title-line hero__title-stroke"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="stroke-text">That Works.</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <p>
                            Blending hardware precision with intelligent software solutions.
                            Specializing in embedded systems, wireless communication, and VLSI design. No boring code.
                        </p>
                    </motion.div>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                    >
                        <MagneticButton onClick={() => navigate('/projects')}>
                            View Projects <ArrowRight size={16} />
                        </MagneticButton>
                        <MagneticButton onClick={() => navigate('/contact')} className="btn-ghost">
                            Let's Connect
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <div className="hero__scroll-dot" />
                    </motion.div>
                    <span className="mono">Scroll</span>
                </motion.div>
            </section>

            {/* ===== LIME MARQUEE ===== */}
            <section className="marquee-section">
                <KineticText
                    text="Python • Embedded C • MATLAB • IoT • VHDL • PCB Design • Machine Learning"
                    variant="lime"
                />
            </section>

            {/* ===== OUTLINE MARQUEE ===== */}
            <section style={{ overflow: 'hidden' }}>
                <KineticText
                    text="TIVA C SERIES • RF MODULE • GSM • BLUETOOTH • KCT • INNOVATION"
                    variant="outline"
                    direction="right"
                />
            </section>

            {/* ===== MINI ABOUT ===== */}
            <section className="section about-mini">
                <div className="page-content">
                    <div className="about-mini__grid">
                        <motion.div
                            className="about-mini__image-wrap"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="about-mini__image">
                                <img src="/about-portrait-mini.jpg" alt="Lokesh Adith" />
                            </div>
                            <div className="about-mini__image-decoration" />
                        </motion.div>

                        <div className="about-mini__content">
                            <motion.div
                                className="section-label"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                Who I Am
                            </motion.div>
                            <StaggeredText
                                text="Engineering with a Pulse"
                                tag="h2"
                                className="about-mini__title"
                            />
                            <motion.p
                                className="about-mini__desc"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Making hardware and software actually vibe. Taking static code and bringing it IRL through embedded tech and predictive models. Blurring the line between the physical and the digital.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <MagneticButton onClick={() => navigate('/about')}>
                                    More About Me <ArrowRight size={16} />
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BENTO GRID ===== */}
            <section className="section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        What I do
                    </motion.div>

                    <StaggeredText
                        text="Building the Future"
                        tag="h2"
                        className="section__title"
                        delay={0.1}
                    />

                    <div className="bento-grid home-bento">
                        {/* Large featured card */}
                        <SpotlightCard className="span-2 row-2 bento-featured">
                            <div className="bento-featured__content">
                                <span className="card-tag">About</span>
                                <h3>The Professional Profile</h3>
                                <p>Currently pursuing B.E. at <strong style={{ color: 'var(--text-primary)' }}>Kumaraguru College of Technology</strong> (CGPA 7.18). I specialize in creating efficient electronic systems and communication technologies.</p>
                                <div className="bento-featured__chips">
                                    <div className="feature-chip">🚀 Wireless Comms</div>
                                    <div className="feature-chip">🤖 ML Predictions</div>
                                    <div className="feature-chip">🇯🇵 Japanese</div>
                                </div>
                            </div>
                            <div className="bento-featured__graphic">
                                <div className="circuit-lines">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="circuit-line"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15, duration: 0.8 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>

                        {/* Skill cards */}
                        {featuredSkills.map((skill, i) => {
                            const Icon = skill.icon
                            return (
                                <SpotlightCard key={skill.name} className="bento-skill">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <div className="bento-skill__icon">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <h4>{skill.name}</h4>
                                        <p>{skill.desc}</p>
                                    </motion.div>
                                </SpotlightCard>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <ParallaxSection speed={0.15}>
                <section className="section stats-section">
                    <div className="page-content">
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-item"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                >
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label mono">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ParallaxSection>

            {/* ===== CTA ===== */}
            <section className="section cta-section">
                <div className="page-content">
                    <div className="cta-container">
                        <StaggeredText
                            text="Ready to innovate?"
                            tag="h2"
                            className="cta__title"
                        />
                        <motion.p
                            className="cta__desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Let's combine engineering precision with creative innovation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <MagneticButton onClick={() => navigate('/contact')}>
                                Start a Conversation <ArrowRight size={16} />
                            </MagneticButton>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
