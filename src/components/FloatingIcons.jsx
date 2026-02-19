import { useEffect, useRef } from 'react'

// SVG paths for each icon (Lucide-style, viewBox 0 0 24 24)
const ICON_PATHS = [
    // Code2
    '<path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />',
    // Cpu
    '<rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" />',
    // Wifi
    '<path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />',
    // Zap
    '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />',
    // Radio
    '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />',
    // Database
    '<ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />',
    // Layers
    '<polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />',
    // Binary
    '<rect x="14" y="14" width="4" height="6" rx="2" /><rect x="6" y="4" width="4" height="6" rx="2" /><path d="M6 20h4" /><path d="M14 10h4" /><path d="M6 14h2v6" /><path d="M14 4h2v6" />',
    // Terminal
    '<polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />',
    // Gauge
    '<path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />',
    // Bluetooth
    '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />',
    // CircuitBoard
    '<rect x="2" y="2" width="20" height="20" rx="2" /><path d="M6.5 6h.01" /><path d="M6.5 12h.01" /><path d="M6.5 18h.01" /><path d="M12 6h.01" /><path d="M12 12h.01" /><path d="M12 18h.01" />',
]

const ORBIT_RADIUS = 100

const FloatingIcons = ({ heroRef }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const hero = heroRef?.current
        if (!container || !hero) return

        const iconEls = []
        const heroRect = hero.getBoundingClientRect()
        const mouse = { x: heroRect.width / 2, y: heroRect.height / 2 }
        let isHover = false
        let time = 0

        // Create icon DOM elements
        ICON_PATHS.forEach((paths, index) => {
            const el = document.createElement('div')
            el.className = 'levitate-icon'
            el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`
            container.appendChild(el)

            iconEls.push({
                el,
                // Physics position (where it "wants" to be, used for drift)
                driftX: Math.random() * heroRect.width,
                driftY: Math.random() * heroRect.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                // Visual position (what we actually render — lerps towards target)
                visualX: Math.random() * heroRect.width,
                visualY: Math.random() * heroRect.height,
                // Orbit offset
                angleOffset: (index / ICON_PATHS.length) * Math.PI * 2,
            })
        })

        // Listeners
        const onMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        const onEnter = () => { isHover = true }
        const onLeave = () => { isHover = false }

        window.addEventListener('mousemove', onMouseMove)
        hero.addEventListener('mouseenter', onEnter)
        hero.addEventListener('mouseleave', onLeave)

        // Animation loop
        let raf
        const animate = () => {
            time += 0.008
            const rect = hero.getBoundingClientRect()
            const w = rect.width
            const h = rect.height

            iconEls.forEach((icon) => {
                let targetX, targetY

                if (isHover) {
                    // ---- ORBIT MODE: circle around cursor ----
                    const relMouseX = mouse.x - rect.left
                    const relMouseY = mouse.y - rect.top

                    targetX = relMouseX + Math.cos(icon.angleOffset + time * 2) * ORBIT_RADIUS
                    targetY = relMouseY + Math.sin(icon.angleOffset + time * 2) * ORBIT_RADIUS

                    icon.el.style.opacity = '0.7'
                    icon.el.style.color = '#CCFF00'

                    // Keep drift position synced so transition back is smooth
                    icon.driftX = icon.visualX
                    icon.driftY = icon.visualY
                } else {
                    // ---- DRIFT MODE: random float with bounce ----
                    icon.driftX += icon.vx
                    icon.driftY += icon.vy

                    // Bounce off edges
                    if (icon.driftX < 0 || icon.driftX > w - 32) {
                        icon.vx *= -1
                        icon.driftX = Math.max(0, Math.min(w - 32, icon.driftX))
                    }
                    if (icon.driftY < 0 || icon.driftY > h - 32) {
                        icon.vy *= -1
                        icon.driftY = Math.max(0, Math.min(h - 32, icon.driftY))
                    }

                    targetX = icon.driftX
                    targetY = icon.driftY

                    icon.el.style.opacity = '0.12'
                    icon.el.style.color = '#94a3b8'
                }

                // Lerp visual position towards target
                const ease = isHover ? 0.12 : 0.05
                icon.visualX += (targetX - icon.visualX) * ease
                icon.visualY += (targetY - icon.visualY) * ease

                icon.el.style.transform = `translate(${icon.visualX}px, ${icon.visualY}px)`
            })

            raf = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('mousemove', onMouseMove)
            hero.removeEventListener('mouseenter', onEnter)
            hero.removeEventListener('mouseleave', onLeave)
            iconEls.forEach(i => i.el.remove())
        }
    }, [heroRef])

    return <div ref={containerRef} className="levitate-icons-container" />
}

export default FloatingIcons
