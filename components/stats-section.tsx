"use client"
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react'

function AnimatedCounter({ target, prefix = '' }: { target: number; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: false, margin: '-40px' })
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        return rounded.on('change', (v) => setDisplay(v))
    }, [rounded])

    useEffect(() => {
        if (isInView) {
            animate(count, target, { duration: 2.4, ease: [0.16, 1, 0.3, 1] })
        } else {
            animate(count, 0, { duration: 0 })
        }
    }, [isInView, count, target])

    return (
        <span ref={ref}>
            {prefix}{display >= 1000 ? `${Math.floor(display / 1000)}k` : display}
        </span>
    )
}

export default function StatsSection() {
    const { t } = useLanguage()

    const stats = [
        {
            numericValue: 12000,
            prefix: '+',
            label: t('stats.paymentsPerDay'),
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
            textGradient: 'from-[#fb802b] to-[#ff9a50]',
        },
        {
            numericValue: 5000,
            prefix: '+',
            label: t('stats.newUsersPerMonth'),
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
            textGradient: 'from-[#5fd6d6] to-[#25b0b0]',
        },
        {
            numericValue: 100,
            prefix: '+',
            label: t('stats.integratedApps'),
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
            textGradient: 'from-[#fb802b] to-[#ff9a50]',
        },
    ]

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(251,128,43,0.04)_0%,transparent_65%)]" />

            <div className="mx-auto max-w-5xl space-y-14 px-6 md:space-y-20 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-2xl space-y-5 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('stats.yopagoIn')} <span className="text-primary">{t('stats.numbers')}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        {t('stats.description')}
                    </p>
                </motion.div>

                {/* Stat cards */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 48 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: '-60px' }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                                delay: index * 0.13,
                            }}
                            className={cn(
                                "group relative p-[2px] rounded-[1.4rem] transition-all duration-500 hover:-translate-y-3 overflow-visible cursor-default",
                                "bg-gradient-to-br", stat.gradient
                            )}
                        >
                            {/* Magic Glow — same pattern as Services / Industries / Solutions */}
                            <div className={cn(
                                "absolute inset-0 z-[-1] scale-90 blur-[25px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                                "bg-gradient-to-br", stat.gradient
                            )} />

                            {/* Inner card */}
                            <div className="relative bg-card dark:bg-[#121212] rounded-[1.3rem] px-6 py-10 h-full flex flex-col items-center justify-center text-center overflow-hidden gap-1">

                                {/* Faint watermark number in background */}
                                <span
                                    aria-hidden
                                    className={cn(
                                        "absolute -top-3 -right-2 text-[7rem] font-black leading-none select-none opacity-[0.04] pointer-events-none",
                                        stat.color === 'orange' ? "text-primary" : "text-[#5fd6d6]"
                                    )}
                                >
                                    {stat.prefix}{stat.numericValue >= 1000 ? `${stat.numericValue / 1000}k` : stat.numericValue}
                                </span>

                                {/* Top accent bar */}
                                <div className={cn(
                                    "w-8 h-[3px] rounded-full mb-6 bg-gradient-to-r",
                                    stat.gradient
                                )} />

                                {/* Animated number */}
                                <div className={cn(
                                    "text-5xl sm:text-6xl font-black tabular-nums leading-none bg-gradient-to-br bg-clip-text text-transparent",
                                    stat.textGradient
                                )}>
                                    <AnimatedCounter target={stat.numericValue} prefix={stat.prefix} />
                                </div>

                                {/* Thin separator */}
                                <div className="w-10 h-px bg-border mt-5 mb-4" />

                                {/* Label */}
                                <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wide leading-snug">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
