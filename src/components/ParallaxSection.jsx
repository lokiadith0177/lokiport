import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxSection = ({ children, speed = 0.3, className = '' }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

    return (
        <div ref={ref} style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.div style={{ y }} className={className}>
                {children}
            </motion.div>
        </div>
    )
}

export default ParallaxSection
