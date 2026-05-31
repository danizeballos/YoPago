"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TextEffect } from '@/components/ui/text-effect'
import { useLanguage } from '@/lib/language-context'

export function PensionsCarousel() {
    const { t } = useLanguage()
    const [currentStep, setCurrentStep] = React.useState(0)

    const steps = [
        {
            id: 1,
            title: t('pensions.step1Title'),
            description: t('pensions.step1Desc'),
            image: "/images/pensions1.png",
            label: `${t('pensions.step')} 01`
        },
        {
            id: 2,
            title: t('pensions.step2Title'),
            description: t('pensions.step2Desc'),
            image: "/images/pensions2.png",
            label: `${t('pensions.step')} 02`
        },
        {
            id: 3,
            title: t('pensions.step3Title'),
            description: t('pensions.step3Desc'),
            image: "/images/pensions3.png",
            label: `${t('pensions.step')} 03`
        }
    ]

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

    return (
        <section id="pensions" className="pb-24 pt-0 relative overflow-hidden">
            {/* Ambient Background Decorations (Matching Home vibes) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5fd6d6]/10 rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section - Centered & Animated */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto px-4"
                >
                    {/* Larger Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#5fd6d6]/10 text-[#25b0b0] font-semibold text-base mb-8 border border-[#5fd6d6]/20 shadow-sm backdrop-blur-sm">
                        <GraduationCap className="w-5 h-5" />
                        <span>{t('pensions.badge')}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                        <TextEffect as="span" preset="fade-in-blur">{t('pensions.titleStart')}</TextEffect> {' '}
                        <TextEffect as="span" preset="fade-in-blur" className="text-[#5fd6d6]">{t('pensions.titleEnd')}</TextEffect>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('pensions.description') }}>
                        {/* Content rendered safely via dangerouslySetInnerHTML to allow span tags */}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Interactive Steps with Glow Effect */}
                    <div className="flex flex-col gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                onClick={() => setCurrentStep(index)}
                                className="group relative cursor-pointer"
                            >
                                {/* 1. The Magic Glow (Behind) - Visible only when active */}
                                <div
                                    className={cn(
                                        "absolute inset-0 z-[-1] rounded-[16px] blur-[20px] transition-all duration-500",
                                        currentStep === index
                                            ? "opacity-60 scale-100 bg-gradient-to-r from-[#5fd6d6] to-[#a8f0f0]"
                                            : "opacity-0 scale-95"
                                    )}
                                />

                                {/* 2. Gradient Border Container (Parent Radius: 16px) */}
                                <div className={cn(
                                    "relative p-[2px] rounded-[16px] h-full transition-all duration-300",
                                    currentStep === index
                                        ? "bg-gradient-to-r from-[#5fd6d6] to-[#a8f0f0] shadow-xl" // Active Gradient Border
                                        : "bg-transparent border border-border hover:border-[#5fd6d6]/50" // Inactive state
                                )}>
                                    {/* 3. Inner Content Card (Child Radius: 14px) */}
                                    <div className={cn(
                                        "rounded-[14px] p-6 h-full flex flex-col justify-center transition-colors", // 16px Outer - 2px Padding = 14px Inner. Perfect Math.
                                        "bg-card dark:bg-card/95" // Solid background inside
                                    )}>
                                        <div className="flex items-start gap-5">
                                            <span className={cn(
                                                "text-3xl font-black transition-colors duration-300 mt-1",
                                                currentStep === index ? "text-[#5fd6d6]" : "text-muted-foreground/20"
                                            )}>
                                                {step.label.split(' ')[1]}
                                            </span>
                                            <div>
                                                <h3 className={cn(
                                                    "text-xl font-bold mb-2 transition-colors",
                                                    currentStep === index ? "text-foreground" : "text-muted-foreground"
                                                )}>
                                                    {step.title}
                                                </h3>
                                                <p className={cn(
                                                    "text-base text-muted-foreground leading-relaxed transition-opacity",
                                                    currentStep === index ? "opacity-100 font-medium" : "opacity-70"
                                                )}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Image Carousel */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[700px] lg:aspect-auto max-h-[520px] lg:max-h-none bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center group/carousel">

                        {/* Glow behind the carousel */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5fd6d6]/5 to-transparent pointer-events-none" />

                        {/* Controls */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity">
                            <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10" onClick={prevStep}>
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity">
                            <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10" onClick={nextStep}>
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Image Viewer - Reduced padding for larger images */}
                        <div className="relative w-full h-full p-4 md:p-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={steps[currentStep].image}
                                        alt={steps[currentStep].title}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Caption Overlay */}
                        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center z-10 pointer-events-none">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-5 py-2.5 bg-background/90 backdrop-blur-md rounded-full text-sm font-semibold shadow-lg border border-[#5fd6d6]/30 text-foreground"
                            >
                                <span className="text-[#5fd6d6] mr-2">{t('pensions.step')} 0{steps[currentStep].id}:</span>
                                {steps[currentStep].title}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
