import React from 'react'
import { motion } from 'framer-motion'

const StaggeredText = ({ text, tag = 'h2', className = '', delay = 0, splitBy = 'word' }) => {
    const Tag = tag
    const items = splitBy === 'char' ? text.split('') : text.split(' ')

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: splitBy === 'char' ? 0.02 : 0.08,
                delayChildren: delay,
            },
        },
    }

    const child = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
            },
        },
    }

    return (
        <Tag className={className} style={{ perspective: '1000px', overflow: 'hidden' }}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: splitBy === 'word' ? '0.3em' : '0' }}
            >
                {items.map((item, i) => (
                    <motion.span
                        key={i}
                        variants={child}
                        style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                    >
                        {item === ' ' ? '\u00A0' : item}
                    </motion.span>
                ))}
            </motion.span>
        </Tag>
    )
}

export default StaggeredText
