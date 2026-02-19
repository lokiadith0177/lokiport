import React from 'react'
import { motion } from 'framer-motion'
import {
    Cpu, Wifi, Radio, CircuitBoard, Code2, Wrench, Database, Terminal,
    Binary, GitBranch, Layers, Gauge, Shield, Bluetooth, Cable, Plug,
    Award
} from 'lucide-react'
import StaggeredText from '../components/StaggeredText'
import SpotlightCard from '../components/SpotlightCard'
import KineticText from '../components/KineticText'
import './Skills.css'

const skillCategories = [
    {
        title: 'Programming',
        icon: Code2,
        color: '#00f0ff',
        skills: [
            { name: 'Python', level: 85 },
            { name: 'C Programming', level: 82 },
            { name: 'Embedded C', level: 80 },
            { name: 'VHDL Programming', level: 78 },
            { name: 'MATLAB', level: 80 },
        ],
    },
    {
        title: 'Hardware & Design',
        icon: CircuitBoard,
        color: '#b400ff',
        skills: [
            { name: 'Analog Circuit Design', level: 78 },
            { name: 'Digital Circuit Design', level: 82 },
            { name: 'PCB Design', level: 75 },
            { name: 'VLSI / SoC Design', level: 72 },
            { name: 'FPGA Development', level: 70 },
        ],
    },
    {
        title: 'Communication & IoT',
        icon: Wifi,
        color: '#ff00e5',
        skills: [
            { name: 'Wireless Communication', level: 82 },
            { name: 'RF Module (433 MHz ASK)', level: 78 },
            { name: 'GSM (SIM800L)', level: 75 },
            { name: 'Bluetooth (HC-05)', level: 78 },
            { name: 'IoT Architecture', level: 76 },
        ],
    },
    {
        title: 'Data & ML',
        icon: Database,
        color: '#00ff88',
        skills: [
            { name: 'Machine Learning', level: 72 },
            { name: 'Regression Models', level: 75 },
            { name: 'Data Analysis', level: 70 },
            { name: 'Sensor Data Processing', level: 78 },
            { name: 'NumPy / Pandas', level: 70 },
        ],
    },
]

const certifications = [
    { name: 'VLSI System On Chip Design', org: 'Maven Silicon', icon: CircuitBoard },
    { name: 'Python Essentials', org: 'Cisco Networking Academy', icon: Code2 },
    { name: 'Learning FPGA Development', org: 'Online Program', icon: Layers },
    { name: 'Nano Satellite & IoT Sensors', org: 'Skill Development Program', icon: Wifi },
    { name: 'PCB Design', org: 'Certification Program', icon: Wrench },
    { name: 'Digital Marketing Basics', org: 'Online Program', icon: Award },
]

const Skills = () => {
    return (
        <div className="page skills-page">
            <section className="section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Capabilities
                    </motion.div>

                    <StaggeredText
                        text="Skills & Expertise"
                        tag="h1"
                        className="skills__title"
                        delay={0.3}
                    />

                    <motion.p
                        className="skills__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        A versatile toolkit spanning embedded systems, hardware design, wireless communication, and data science.
                    </motion.p>

                    {/* Skills Bento Grid */}
                    <div className="bento-grid skills-bento">
                        {skillCategories.map((category, catIndex) => {
                            const Icon = category.icon
                            return (
                                <SpotlightCard
                                    key={category.title}
                                    className="skill-category-card span-2"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 }}
                                    >
                                        <div className="skill-category__header">
                                            <div
                                                className="skill-category__icon"
                                                style={{ color: category.color, background: `${category.color}11` }}
                                            >
                                                <Icon size={22} strokeWidth={1.5} />
                                            </div>
                                            <h3>{category.title}</h3>
                                        </div>

                                        <div className="skill-category__list">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skill.name}
                                                    className="skill-bar"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                                >
                                                    <div className="skill-bar__info">
                                                        <span className="skill-bar__name">{skill.name}</span>
                                                        <span className="skill-bar__level mono">{skill.level}%</span>
                                                    </div>
                                                    <div className="skill-bar__track">
                                                        <motion.div
                                                            className="skill-bar__fill"
                                                            style={{ background: category.color }}
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </SpotlightCard>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <section className="tools-marquee">
                <KineticText text="PYTHON • C • MATLAB • VHDL • EMBEDDED C • PCB DESIGN • VLSI • FPGA • IoT • RF" />
            </section>

            {/* Certifications Grid */}
            <section className="section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Certifications
                    </motion.div>

                    <StaggeredText
                        text="Credentials & Learning"
                        tag="h2"
                        className="section__title"
                    />

                    <div className="tools-grid">
                        {certifications.map((cert, i) => {
                            const Icon = cert.icon
                            return (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <SpotlightCard className="tool-card cert-card">
                                        <Icon size={24} strokeWidth={1.5} />
                                        <span className="cert-name">{cert.name}</span>
                                        <span className="cert-org mono">{cert.org}</span>
                                    </SpotlightCard>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
