import React from 'react'
import { motion } from 'framer-motion'

const KineticText = ({ text, direction = 'left', baseVelocity = -2, variant = 'outline' }) => {
    const repeatedText = `${text} • `.repeat(8)

    /* "lime" variant = solid lime BG + dark text (like the HTML marquee)
       "outline" variant = stroke text on transparent BG (original) */
    const isLime = variant === 'lime'

    /* Animate from 0% to -50% (or reverse) in a seamless loop.
       Because the text is repeated 8×, shifting by 50% creates a
       perfect wrap-around — the second half is identical to the first. */
    const from = direction === 'left' ? '0%' : '-50%'
    const to = direction === 'left' ? '-50%' : '0%'

    /* Speed: lower baseVelocity → faster. Default ≈ 30s per full cycle. */
    const duration = Math.abs(30 / (baseVelocity || -2))

    return (
        <div
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
                animate={{ x: [from, to] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration,
                        ease: 'linear',
                    },
                }}
                style={{ display: 'inline-block' }}
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
