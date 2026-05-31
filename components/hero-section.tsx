'use client';

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Variants, motion, AnimatePresence } from 'motion/react'
import { HeroHeader } from './header'
import { LogoLoop } from '@/components/ui/logo-loop'
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/language-context'

const heroSlides = [
    { src: '/images/imagenofpaganding.jpeg', alt: 'Hero Banner 1' },
    { src: '/images/imagen2.png', alt: 'Hero Banner 2' },
]

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center opacity-50">Loading 3D Model...</div>
});

const companyLogos = [
    {
        node: (
            <>
                <img src="/logos/COLEGIO-ALEMAN-FF.png" alt="Colegio Alemán" className="dark:hidden h-12 sm:h-16 md:h-20 w-auto object-contain" />
                <img src="/logos/froebel_dark.png" alt="Colegio Alemán" className="hidden dark:block h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </>
        ),
        alt: "Colegio Alemán"
    },
    {
        node: (
            <>
                <img src="/logos/comteco.png" alt="Comteco" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </>
        ),
        alt: "Comteco"
    },
    {
        node: (
            <>
                <img src="/logos/stanley-logo.png" alt="Stanley" className="dark:hidden h-12 sm:h-16 md:h-20 w-auto object-contain" />
                <img src="/logos/stanley_dark.png" alt="Stanley" className="hidden dark:block h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </>
        ),
        alt: "Stanley"
    },
    {
        node: (
            <>
                <img src="/logos/mia.png" alt="Mia" className="dark:hidden h-12 sm:h-16 md:h-20 w-auto object-contain" />
                <img src="/logos/mia_dark.png" alt="Mia" className="hidden dark:block h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </>
        ),
        alt: "Mia"
    },
    {
        node: (
            <>
                <img src="/logos/sargentos.png" alt="Los Sargentos" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </>
        ),
        alt: "Los Sargentos"
    },
];

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const { t } = useLanguage()
    const [currentSlide, setCurrentSlide] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative w-full min-h-screen overflow-hidden group">
                        {/* Carousel background images */}
                        <AnimatePresence mode="sync">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={heroSlides[currentSlide].src}
                                    alt={heroSlides[currentSlide].alt}
                                    fill
                                    className="object-cover blur-[2px] scale-110"
                                    priority={currentSlide === 0}
                                />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                        {/* Content Overlay */}
                        <div className="relative z-10 flex items-center justify-center pt-24 pb-20 min-h-screen">
                            <div className="max-w-6xl mx-auto w-full px-6 flex flex-col items-center text-center">
                                {/* Text Area */}
                                <div className="relative flex flex-col justify-center items-center p-4 z-20 max-w-3xl">
                                    {/* Contrast Backing */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 bg-[radial-gradient(closest-side,rgba(0,0,0,0.5),transparent)] blur-xl" />

                                    {/* Brand Accent Line — grows from center */}
                                    <motion.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        whileInView={{ scaleX: 1, opacity: 1 }}
                                        viewport={{ once: false, amount: 0 }}
                                        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ originX: '50%' }}
                                        className="h-1.5 w-24 bg-primary rounded-full mb-8 shadow-[0_0_15px_rgba(251,128,43,0.5)]"
                                    />

                                    {/* Title — blur reveal from below */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 28, filter: 'blur(14px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: false, amount: 0 }}
                                        transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-lg leading-tight"
                                    >
                                        {t('hero.titleStart')}<br className="hidden lg:block" />
                                        <span className="whitespace-nowrap">
                                            {t('hero.titleConnector')}{' '}
                                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffab70] filter drop-shadow-sm pb-3 pr-2">
                                                {t('hero.titleEnd')}
                                            </span>
                                        </span>
                                    </motion.h2>

                                    {/* Subtitle — fades in slightly after title */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: false, amount: 0 }}
                                        transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed drop-shadow-md max-w-xl mb-10"
                                    >
                                        {t('hero.subtitle')}
                                    </motion.p>

                                    {/* CTA — pops in with spring */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.82, y: 14 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0 }}
                                        transition={{ duration: 0.6, delay: 0.52, ease: [0.34, 1.5, 0.64, 1] }}
                                    >
                                        <Link
                                            href="https://wa.me/59170711598?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                buttonVariants({ variant: "animated" }),
                                                "rounded-full h-10 px-6 text-sm font-semibold shadow-xl hover:scale-105 transition-all duration-300 hover:no-underline"
                                            )}
                                        >
                                            <span className="btn-animated-label px-6 flex items-center">
                                                {t('hero.cta')}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </span>
                                            <span className="btn-animated-container">
                                                <span className="btn-animated-gradient" />
                                            </span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Slide indicators — fade in last */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0 }}
                                    transition={{ duration: 0.45, delay: 0.65, ease: 'easeOut' }}
                                    className="flex gap-2 mt-10"
                                >
                                    {heroSlides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={cn(
                                                'h-1.5 rounded-full transition-all duration-500',
                                                i === currentSlide
                                                    ? 'w-8 bg-primary shadow-[0_0_8px_rgba(251,128,43,0.7)]'
                                                    : 'w-4 bg-white/40 hover:bg-white/60'
                                            )}
                                            aria-label={`Slide ${i + 1}`}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-12 md:pt-20">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-40 -z-20 lg:top-10">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block scale-125"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.15,
                                                    delayChildren: 0.1,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                filter: 'blur(0px)',
                                                transition: {
                                                    type: 'spring',
                                                    bounce: 0.3,
                                                    duration: 1
                                                }
                                            },
                                        },
                                    }}
                                    viewport={{ once: false, margin: '-80px' }}
                                    className="flex flex-col items-center"
                                >
                                    {/* <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Introducing Support for AI Models</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link> */}

                                    <h1 className="mx-auto max-w-4xl text-balance leading-[1.1] drop-shadow-sm text-center">
                                        <span className="block opacity-90 text-foreground">{t('hero.modernSolutions')}</span>
                                        <span className="font-bold mx-2 text-primary">{t('hero.customer')}</span>
                                        <span className="bg-gradient-to-b from-zinc-900 to-zinc-700 dark:from-white dark:to-white/70 bg-clip-text text-transparent">{t('hero.payments')}</span>
                                    </h1>

                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg opacity-80 font-medium text-foreground text-center">
                                        {t('hero.description')}
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.3,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    viewport={{ once: false, margin: '-80px' }}
                                    className="mt-12 flex items-center justify-center">
                                    <div className="bg-foreground/5 rounded-[calc(var(--radius-xl)+0.125rem)] border border-border/50 p-0.5">
                                        <Link
                                            href="https://wa.me/59170711598"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] btn-animated h-10 rounded-xl px-8 text-nowrap font-bold"
                                        >
                                            <span className="btn-animated-label px-6">
                                                <span className="text-nowrap">{t('hero.getStarted')}</span>
                                            </span>
                                            <span className="btn-animated-container">
                                                <span className="btn-animated-gradient" />
                                            </span>
                                        </Link>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="group relative m-auto max-w-5xl px-6"
                    >
                        <div className="absolute inset-0 z-20 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100 bg-background/50 backdrop-blur-sm rounded-2xl pointer-events-none group-hover:pointer-events-auto">
                            <Link
                                href="/"
                                className="block text-sm font-medium duration-150 hover:text-primary px-6 py-3 bg-background border rounded-full shadow-lg">
                                <span> {t('hero.meetCustomers')}</span>
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>

                        <div className="transition-all duration-500 group-hover:blur-sm group-hover:opacity-30">
                            <LogoLoop
                                logos={companyLogos}
                                speed={60}
                                gap={80}
                                logoHeight={80}
                                fadeOut
                                className=""
                            />
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    )
}
