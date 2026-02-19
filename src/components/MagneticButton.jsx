import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const MagneticButton = ({ children, className = '', onClick, strength = 0.35, ...props }) => {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.5 })
    const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.5 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distX = e.clientX - centerX
        const distY = e.clientY - centerY
        x.set(distX * strength)
        y.set(distY * strength)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    return (
        <motion.button
            ref={ref}
            className={`btn-primary ${className}`}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
            {...props}
        >
            <motion.span
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.span>
        </motion.button>
    )
}

export default MagneticButton
