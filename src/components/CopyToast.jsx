import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './CopyToast.css'

const CopyToast = ({ show, onHide }) => {
    const [checkVisible, setCheckVisible] = useState(false)

    return (
        <AnimatePresence onExitComplete={() => setCheckVisible(false)}>
            {show && (
                <motion.div
                    className="copy-toast"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="copy-toast__icon">
                        <svg viewBox="0 0 36 36" width="24" height="24">
                            {/* Background circle */}
                            <circle
                                cx="18" cy="18" r="16"
                                fill="none"
                                stroke="rgba(204, 255, 0, 0.15)"
                                strokeWidth="2"
                            />
                            {/* Animated closing circle */}
                            <motion.circle
                                cx="18" cy="18" r="16"
                                fill="none"
                                stroke="#CCFF00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={100.53}
                                strokeDashoffset={100.53}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.8, ease: 'linear' }}
                                onAnimationComplete={() => setCheckVisible(true)}
                                style={{ transformOrigin: '18px 18px', transform: 'rotate(-90deg)' }}
                            />
                            {/* Checkmark inside circle — centered */}
                            <AnimatePresence>
                                {checkVisible && (
                                    <motion.path
                                        d="M11 18l4 4 10-10"
                                        fill="none"
                                        stroke="#CCFF00"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                )}
                            </AnimatePresence>
                        </svg>
                    </div>
                    <span>Copied!</span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { CopyToast }

// Hook for easy reuse
export const useCopyToast = () => {
    const [showCopied, setShowCopied] = useState(false)

    const copyEmail = (e) => {
        if (e) e.preventDefault()
        navigator.clipboard.writeText('lokeshadith01@gmail.com').then(() => {
            setShowCopied(true)
            setTimeout(() => setShowCopied(false), 2500)
        })
    }

    return { showCopied, setShowCopied, copyEmail }
}

export default CopyToast
