'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Logo } from '@/components/logo'

export function PageIntro() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const shown = sessionStorage.getItem('yp-intro')
        if (!shown) {
            sessionStorage.setItem('yp-intro', '1')
            const showTimer = setTimeout(() => setShow(true), 10)
            const hideTimer = setTimeout(() => setShow(false), 1700)
            return () => {
                clearTimeout(showTimer)
                clearTimeout(hideTimer)
            }
        }
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
                >
                    {/* Ambient orange glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/8 rounded-full blur-[40px]" />
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, filter: 'blur(14px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <Logo className="h-12 sm:h-16" />
                    </motion.div>

                    {/* Accent bar that grows from center */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: '50%' }}
                        className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-primary to-[#ffb380] relative z-10"
                    />

                    {/* Subtle loading dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.45, duration: 0.3 }}
                        className="flex gap-1.5 mt-6 relative z-10"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.2,
                                    delay: i * 0.2,
                                    ease: 'easeInOut',
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-primary/60"
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
