import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const SpotlightCard = ({ children, className = '', padding = true, ...props }) => {
    const cardRef = useRef(null)
    const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setSpotlightPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <motion.div
            ref={cardRef}
            className={`card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: padding ? undefined : 0,
            }}
            {...props}
        >
            {/* Lime spotlight gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    background: `radial-gradient(500px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(204, 255, 0, 0.04), transparent 40%)`,
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
            {/* Lime border glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    borderRadius: 'inherit',
                    background: `radial-gradient(600px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(204, 255, 0, 0.1), transparent 40%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                }}
            />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </motion.div>
    )
}

export default SpotlightCard
