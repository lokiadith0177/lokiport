import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Heart, BookOpen, Coffee, Gamepad2, Camera, Globe, Wrench, Users } from 'lucide-react'
import StaggeredText from '../components/StaggeredText'
import SpotlightCard from '../components/SpotlightCard'
import ParallaxSection from '../components/ParallaxSection'
import './About.css'

const timeline = [
    {
        year: 'Jun 2025 – Jul 2025',
        title: 'IoT Internship',
        org: 'Enthu Technology Solutions India Pvt Ltd',
        desc: <>Hands-on with the full IoT loop on the <span style={{ color: 'var(--lime)' }}>ThingzKit Mini</span>. I handled sensor interfacing and managed data communication to integrate embedded systems directly into real-time architectures.</>,
        icon: Briefcase,
        type: 'work',
    },
    {
        year: 'Nov 2022 – May 2026',
        title: 'B.E. Electronics & Communication Engineering',
        org: 'Kumaraguru College of Technology',
        desc: 'Pursuing B.E. in ECE with CGPA 7.18. Active member of technical and non-technical clubs, contributing to workshops, events, and student engagement initiatives.',
        icon: GraduationCap,
        type: 'edu',
    },
    {
        year: '2020 – 2022',
        title: 'Higher Secondary School',
        org: 'Shishya BEML Public School, Bangalore',
        desc: 'Completed higher secondary education with 72%, building a strong foundation in mathematics and physics.',
        icon: GraduationCap,
        type: 'edu',
    },
    {
        year: '2015 – 2020',
        title: 'Secondary School',
        org: 'Global City International School, Bangalore',
        desc: 'Completed secondary education with 76.5%, developing early interest in electronics and technology.',
        icon: GraduationCap,
        type: 'edu',
    },
]

const interests = [
    { icon: Globe, name: 'Multilingual', desc: 'English, Hindi, Tamil, Kannada, Japanese' },
    { icon: Wrench, name: 'Tinkering', desc: 'Building embedded prototypes & IoT setups' },
    { icon: Users, name: 'Club Activities', desc: 'Technical & non-technical clubs at KCT' },
    { icon: BookOpen, name: 'Continuous Learning', desc: 'Certifications in VLSI, FPGA, Python & IoT' },
]

const About = () => {
    return (
        <div className="page about-page">
            {/* Hero */}
            <section className="about-hero section">
                <div className="page-content">
                    <div className="about-hero__layout">
                        <div className="about-hero__text">
                            <motion.div
                                className="section-label"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                About Me
                            </motion.div>

                            <StaggeredText
                                text="K P Lokesh Adith"
                                tag="h1"
                                className="about-hero__title"
                                delay={0.3}
                            />

                            <motion.div
                                className="about-hero__content"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <p className="about-hero__bio">
                                    Built different. No basic moves here—strictly turning wild ideas into things that actually work. Locked in on making it make sense. The impact just hits different
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="about-hero__portrait"
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="about-hero__portrait-frame">
                                <img src="/portrait.jpg" alt="K P Lokesh Adith" />
                                <div className="about-hero__portrait-border" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <ParallaxSection speed={0.2}>
                <section className="section philosophy-section">
                    <div className="page-content">
                        <div className="philosophy-grid">
                            <SpotlightCard className="philosophy-card">
                                <div className="philosophy-card__number mono">01</div>
                                <h3>Sensor-Driven Solutions</h3>
                                <p><span className="highlight-text">No ghosting allowed</span>. I take proximity and gas sensors in smart bins and handle the wireless transmission across RF, GSM, and Bluetooth so the real world always stays connected.</p>
                            </SpotlightCard>
                            <SpotlightCard className="philosophy-card">
                                <div className="philosophy-card__number mono">02</div>
                                <h3>Full-Stack Embedded</h3>
                                <p><span className="highlight-text">No black boxes allowed</span>. I run the whole stack from VHDL to Embedded C and handle everything from circuit design to firmware so the hardware and software never miss a beat.</p>
                            </SpotlightCard>
                            <SpotlightCard className="philosophy-card">
                                <div className="philosophy-card__number mono">03</div>
                                <h3>Data-Driven Thinking</h3>
                                <p><span className="highlight-text">Real problems</span> need actual receipts. I combine engineering with machine learning and build regression models so the data science provides answers that are valid.</p>
                            </SpotlightCard>
                        </div>
                    </div>
                </section>
            </ParallaxSection>

            {/* Timeline */}
            <section className="section timeline-section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Journey
                    </motion.div>

                    <StaggeredText
                        text="Experience & Education"
                        tag="h2"
                        className="section__title"
                    />

                    <div className="timeline">
                        {timeline.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={i}
                                    className="timeline__item"
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <div className="timeline__marker">
                                        <div className={`timeline__dot timeline__dot--${item.type}`}>
                                            <Icon size={14} />
                                        </div>
                                    </div>
                                    <SpotlightCard className="timeline__card">
                                        <span className="timeline__year mono">{item.year}</span>
                                        <h4>{item.title}</h4>
                                        <span className="timeline__org">{item.org}</span>
                                        <p>{item.desc}</p>
                                    </SpotlightCard>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Interests */}
            <section className="section interests-section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Beyond Engineering
                    </motion.div>

                    <StaggeredText
                        text="More About Me"
                        tag="h2"
                        className="section__title"
                    />

                    <div className="bento-grid interests-grid">
                        {interests.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <SpotlightCard key={item.name} className="interest-card">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="interest-card__icon">
                                            <Icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <h4>{item.name}</h4>
                                        <p>{item.desc}</p>
                                    </motion.div>
                                </SpotlightCard>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
