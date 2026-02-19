import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const KineticText = ({ text, direction = 'left', baseVelocity = -2, variant = 'outline' }) => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll()

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
    )

    const springX = useSpring(x, { damping: 50, stiffness: 100 })

    const repeatedText = `${text} • `.repeat(8)

    /* "lime" variant = solid lime BG + dark text (like the HTML marquee)
       "outline" variant = stroke text on transparent BG (original) */
    const isLime = variant === 'lime'

    return (
        <div
            ref={containerRef}
            style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                padding: isLime ? '1rem 0' : '2rem 0',
                background: isLime ? '#CCFF00' : 'transparent',
                transform: isLime ? 'rotate(-1deg) scale(1.05)' : 'none',
                borderTop: isLime ? '2px solid #050505' : 'none',
                borderBottom: isLime ? '2px solid #050505' : 'none',
            }}
        >
            <motion.div
                style={{ x: springX, display: 'inline-block' }}
            >
                <span
                    style={{
                        fontSize: isLime ? 'clamp(1rem, 2vw, 1.3rem)' : 'clamp(3rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: isLime ? '#050505' : 'transparent',
                        WebkitTextStroke: isLime ? 'none' : '1px rgba(204, 255, 0, 0.2)',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        userSelect: 'none',
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {repeatedText}
                </span>
            </motion.div>
        </div>
    )
}

export default KineticText
