import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const CustomCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)
    const cursorSize = useMotionValue(20)
    const cursorSizeSpring = useSpring(cursorSize, { damping: 20, stiffness: 300 })
    const [visible, setVisible] = useState(false)
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        const touch = isTouchDevice()
        setIsTouch(touch)

        if (!touch) {
            // Desktop: always visible once mouse moves
            setVisible(true)
        }

        // --- Mouse (desktop) ---
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseDown = () => cursorSize.set(14)
        const handleMouseUp = () => cursorSize.set(20)

        const handleMouseEnter = (e) => {
            const target = e.target
            if (target.closest('h1, h2')) {
                cursorSize.set(80)
            } else if (target.closest('h3, h4')) {
                cursorSize.set(60)
            } else if (target.closest('a, button, [data-cursor-hover]')) {
                cursorSize.set(50)
            }
        }
        const handleMouseLeave = (e) => {
            const target = e.target
            if (target.closest('a, button, [data-cursor-hover], h1, h2, h3, h4')) {
                cursorSize.set(20)
            }
        }

        // --- Touch (mobile) ---
        const handleTouchStart = (e) => {
            const t = e.touches[0]
            cursorX.set(t.clientX)
            cursorY.set(t.clientY)
            setVisible(true)
            cursorSize.set(14)
        }
        const handleTouchMove = (e) => {
            const t = e.touches[0]
            cursorX.set(t.clientX)
            cursorY.set(t.clientY)
        }
        const handleTouchEnd = () => {
            setVisible(false)
            cursorSize.set(20)
        }

        if (touch) {
            window.addEventListener('touchstart', handleTouchStart, { passive: true })
            window.addEventListener('touchmove', handleTouchMove, { passive: true })
            window.addEventListener('touchend', handleTouchEnd)
        } else {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mousedown', handleMouseDown)
            window.addEventListener('mouseup', handleMouseUp)
            document.addEventListener('mouseenter', handleMouseEnter, true)
            document.addEventListener('mouseleave', handleMouseLeave, true)
        }

        return () => {
            if (touch) {
                window.removeEventListener('touchstart', handleTouchStart)
                window.removeEventListener('touchmove', handleTouchMove)
                window.removeEventListener('touchend', handleTouchEnd)
            } else {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mousedown', handleMouseDown)
                window.removeEventListener('mouseup', handleMouseUp)
                document.removeEventListener('mouseenter', handleMouseEnter, true)
                document.removeEventListener('mouseleave', handleMouseLeave, true)
            }
        }
    }, [])

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: cursorXSpring,
                y: cursorYSpring,
                width: cursorSizeSpring,
                height: cursorSizeSpring,
                translateX: '-50%',
                translateY: '-50%',
                borderRadius: '50%',
                background: '#CCFF00',
                pointerEvents: 'none',
                zIndex: 99999,
                mixBlendMode: 'difference',
                opacity: visible ? 0.9 : 0,
                transition: 'opacity 0.2s ease',
            }}
        />
    )
}

export default CustomCursor
