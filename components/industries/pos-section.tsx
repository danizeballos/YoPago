"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Store } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TextEffect } from '@/components/ui/text-effect'
import { useLanguage } from '@/lib/language-context'

export function POSSection() {
    const { t } = useLanguage()
    const [currentStep, setCurrentStep] = React.useState(0)

    const posSteps = [
        {
            id: 1,
            title: t('pos.step1Title'),
            description: t('pos.step1Desc'),
            image: "/images/posretail1.jpeg",
            label: `${t('pensions.step')} 01`
        },
        {
            id: 2,
            title: t('pos.step2Title'),
            description: t('pos.step2Desc'),
            image: "/images/posretail2.png",
            label: `${t('pensions.step')} 02`
        },
        {
            id: 3,
            title: t('pos.step3Title'),
            description: t('pos.step3Desc'),
            image: "/images/posretail3.png",
            label: `${t('pensions.step')} 03`
        },
        // New Section: Self-Service
        {
            id: 4,
            title: t('pos.step4Title'),
            description: t('pos.step4Desc'),
            image: "/images/posretail4.jpeg",
            label: `${t('pensions.step')} 01`, // Reset numbering for new section
            isNewSection: true // Flag for divider
        },
        {
            id: 5,
            title: t('pos.step5Title'),
            description: t('pos.step5Desc'),
            image: "/images/posretail5.png",
            label: `${t('pensions.step')} 02`
        }
    ]

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % posSteps.length)
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + posSteps.length) % posSteps.length)

    return (
        <section id="pos" className="py-24 relative overflow-hidden bg-background">
            {/* Ambient Background Decorations (Orange Theme) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#fb802b]/10 rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffb380]/5 rounded-full blur-[100px] opacity-20"></div>
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

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#fb802b]/10 text-[#fb802b] font-semibold text-base mb-8 border border-[#fb802b]/20 shadow-sm backdrop-blur-sm">
                        <Store className="w-5 h-5" />
                        <span>{t('pos.badge')}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                        <TextEffect as="span" preset="fade-in-blur">{t('pos.titleStart')}</TextEffect> {' '}
                        <TextEffect as="span" preset="fade-in-blur" className="text-[#fb802b]">{t('pos.titleEnd')}</TextEffect>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                        {t('pos.description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Interactive Steps with Glow Effect */}
                    <div className="flex flex-col gap-6">
                        {posSteps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                {/* Aesthetic Divider for New Section */}
                                {step.isNewSection && (
                                    <div className="py-6 flex items-center gap-4 opacity-80">
                                        <div className="h-px bg-gradient-to-r from-transparent via-[#fb802b]/40 to-transparent flex-1" />
                                        <span className="text-xs uppercase tracking-widest text-[#fb802b] font-bold">{t('pos.sectionSelfService')}</span>
                                        <div className="h-px bg-gradient-to-r from-transparent via-[#fb802b]/40 to-transparent flex-1" />
                                    </div>
                                )}

                                <div
                                    onClick={() => setCurrentStep(index)}
                                    className="group relative cursor-pointer"
                                >
                                    {/* 1. The Magic Glow (Behind) */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 z-[-1] rounded-[16px] blur-[20px] transition-all duration-500",
                                            currentStep === index
                                                ? "opacity-50 scale-100 bg-gradient-to-r from-[#fb802b] to-[#ffb380]"
                                                : "opacity-0 scale-95"
                                        )}
                                    />

                                    {/* 2. Gradient Border Container */}
                                    <div className={cn(
                                        "relative p-[2px] rounded-[16px] h-full transition-all duration-300",
                                        currentStep === index
                                            ? "bg-gradient-to-r from-[#fb802b] to-[#ffb380] shadow-xl" // Active Orange Gradient
                                            : "bg-transparent border border-border hover:border-[#fb802b]/50"
                                    )}>
                                        {/* 3. Inner Content Card */}
                                        <div className={cn(
                                            "rounded-[14px] p-6 h-full flex flex-col justify-center transition-colors",
                                            "bg-card dark:bg-card/95"
                                        )}>
                                            <div className="flex items-start gap-5">
                                                <span className={cn(
                                                    "text-3xl font-black transition-colors duration-300 mt-1",
                                                    currentStep === index ? "text-[#fb802b]" : "text-muted-foreground/20"
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
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Right Column: Image Carousel */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[700px] lg:aspect-auto max-h-[520px] lg:max-h-none bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center group/carousel">

                        {/* Glow behind the carousel */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#fb802b]/10 to-transparent pointer-events-none" />

                        {/* Controls */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity">
                            <Button size="icon" variant="ghost" className="rounded-full shadow-lg h-10 w-10 bg-[#fb802b] text-foreground hover:bg-[#fb802b]/90 border-none" onClick={prevStep}>
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity">
                            <Button size="icon" variant="ghost" className="rounded-full shadow-lg h-10 w-10 bg-[#fb802b] text-foreground hover:bg-[#fb802b]/90 border-none" onClick={nextStep}>
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Image Viewer - Larger Images */}
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
                                        src={posSteps[currentStep].image}
                                        alt={posSteps[currentStep].title}
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
                                className="inline-block px-5 py-2.5 bg-background/90 backdrop-blur-md rounded-full text-sm font-semibold shadow-lg border border-[#fb802b]/30 text-foreground"
                            >
                                <span className="text-[#fb802b] mr-2">{posSteps[currentStep].label}:</span>
                                {posSteps[currentStep].title}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
