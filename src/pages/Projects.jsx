import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Wifi, Trash2, BarChart3 } from 'lucide-react'
import StaggeredText from '../components/StaggeredText'
import SpotlightCard from '../components/SpotlightCard'
import MagneticButton from '../components/MagneticButton'
import './Projects.css'

const categories = ['All', 'Embedded', 'IoT', 'Machine Learning']

const projects = [
    {
        id: 1,
        title: 'Smart Garbage Bin',
        desc: 'Built an automated smart bin using Tiva C Series microcontroller with rain, proximity, and gas sensors to classify wet/dry and metal/non-metal waste, and detect hazardous gases for real-time alerts.',
        category: 'Embedded',
        tags: ['Tiva C Series', 'Sensors', 'Embedded C', 'Automation'],
        icon: Trash2,
        color: '#CCFF00',
        featured: true,
    },
    {
        id: 2,
        title: 'Wireless Data Transmission System',
        desc: 'Designed a wireless sensor data transmission setup using 433 MHz ASK module, SIM800L GSM module, and HC-05 Bluetooth for RF, GSM, and Bluetooth communication channels.',
        category: 'IoT',
        tags: ['433MHz RF', 'SIM800L', 'HC-05', 'Wireless'],
        icon: Wifi,
        color: '#4C00FF',
        featured: true,
    },
    {
        id: 3,
        title: 'House Price Prediction',
        desc: 'Developed a regression model using machine learning to predict house prices based on area, location, and amenities, achieving high accuracy on real-world datasets.',
        category: 'Machine Learning',
        tags: ['Python', 'Scikit-learn', 'Regression', 'Data Analysis'],
        icon: BarChart3,
        color: '#CCFF00',
        featured: true,
    },
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <div className="page projects-page">
            <section className="section">
                <div className="page-content">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Portfolio
                    </motion.div>

                    <StaggeredText
                        text="Projects & Experiments"
                        tag="h1"
                        className="projects__title"
                        delay={0.3}
                    />

                    <motion.p
                        className="projects__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        A collection of embedded systems, IoT, and machine learning projects built during my engineering journey.
                    </motion.p>

                    {/* Filter Bar */}
                    <motion.div
                        className="projects__filters"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        {categories.map((cat) => (
                            <MagneticButton
                                key={cat}
                                className={`filter-pill ${activeFilter === cat ? 'filter-pill--active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                                strength={0.2}
                            >
                                {cat}
                            </MagneticButton>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div className="projects-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, i) => {
                                const Icon = project.icon
                                return (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className={project.featured ? 'project-item--featured' : ''}
                                    >
                                        <SpotlightCard className="project-card">
                                            <div className="project-card__header">
                                                <div
                                                    className="project-card__icon"
                                                    style={{ color: project.color, background: `${project.color}11` }}
                                                >
                                                    <Icon size={22} strokeWidth={1.5} />
                                                </div>
                                                <div className="project-card__links">
                                                    <a
                                                        href="https://github.com/lokiadith0177"
                                                        className="project-card__link"
                                                        data-cursor-hover
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github size={16} />
                                                    </a>
                                                    <a
                                                        href="https://github.com/lokiadith0177"
                                                        className="project-card__link"
                                                        data-cursor-hover
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink size={16} />
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="project-card__title">{project.title}</h3>
                                            <p className="project-card__desc">{project.desc}</p>

                                            <div className="project-card__tags">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="tag">{tag}</span>
                                                ))}
                                            </div>

                                            <div
                                                className="project-card__glow"
                                                style={{
                                                    background: `radial-gradient(circle at 50% 100%, ${project.color}08, transparent 70%)`,
                                                }}
                                            />
                                        </SpotlightCard>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Projects
