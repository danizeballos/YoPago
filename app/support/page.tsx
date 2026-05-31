'use client';

import { useState } from 'react';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/language-context';

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function SupportPage() {
    const { t } = useLanguage();
    const [activeItem, setActiveItem] = useState("")
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'credit-card',
            question: t('supportPage.q1'),
            answer: t('supportPage.a1'),
        },
        {
            id: 'item-2',
            icon: 'shopping-cart',
            question: t('supportPage.q2'),
            answer: t('supportPage.a2'),
        },
        {
            id: 'item-3',
            icon: 'file-text',
            question: t('supportPage.q3'),
            answer: t('supportPage.a3'),
        },
        {
            id: 'item-4',
            icon: 'graduation-cap',
            question: t('supportPage.q4'),
            answer: t('supportPage.a4'),
        },
        {
            id: 'item-5',
            icon: 'activity',
            question: t('supportPage.q5'),
            answer: t('supportPage.a5'),
        },
        {
            id: 'item-6',
            icon: 'store',
            question: t('supportPage.q6'),
            answer: t('supportPage.a6'),
        },
        {
            id: 'item-7',
            icon: 'shield-check',
            question: t('supportPage.q7'),
            answer: t('supportPage.a7'),
        },
        {
            id: 'item-8',
            icon: 'banknote',
            question: t('supportPage.q8'),
            answer: t('supportPage.a8'),
        },
    ]

    return (
        <main className="min-h-screen bg-background">
            <HeroHeader />

            {/* Hero Section - Matched to Solutions page pt-24 pb-12 */}
            <div className="relative pt-24 pb-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-12"
                    >
                        {/* Title size h1 matched to Solutions (text-4xl md:text-5xl) */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            {t('supportPage.heroTitleStart')} <span className="text-primary">{t('supportPage.heroTitleEnd')}</span>
                        </h1>
                        {/* Paragraph size matched to Solutions (text-lg) */}
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t('supportPage.heroDesc')}
                        </p>
                    </motion.div>

                    {/* FAQs Section */}
                    <div className="max-w-4xl mx-auto pb-12 overflow-visible">
                        <Accordion
                            type="single"
                            collapsible
                            value={activeItem || hoveredItem || undefined}
                            onValueChange={() => { }}
                            className="w-full space-y-3 p-1 overflow-visible"
                        >
                            {faqItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="overflow-visible"
                                >
                                    <AccordionItem
                                        value={item.id}
                                        onMouseEnter={() => setHoveredItem(item.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        className="group bg-card shadow-sm rounded-xl border border-zinc-200 dark:border-zinc-800 px-6 transition-all duration-300 hover:border-primary/40 overflow-visible"
                                    >
                                        <AccordionTrigger
                                            onClick={() => setActiveItem((prev: string) => prev === item.id ? "" : item.id)}
                                            className="cursor-pointer items-center py-5 hover:no-underline"
                                        >
                                            <div className="flex items-center gap-4 text-left w-full">
                                                <div className="flex size-9 shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors group-hover:bg-primary/10">
                                                    <DynamicIcon
                                                        name={item.icon}
                                                        className="m-auto size-4 text-primary"
                                                    />
                                                </div>
                                                <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary leading-tight">
                                                    {item.question}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div className="pl-8 sm:pl-14">
                                                {/* Answer text size matched to Solutions description (text-[15px]) */}
                                                <p className="text-[15px] text-muted-foreground leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>

                    {/* Contact Call to Action - Keeping original but refining spacing */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 mb-20 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">{t('supportPage.ctaTitle')}</h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            {t('supportPage.ctaDesc')}
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95"
                        >
                            {t('supportPage.ctaButton')}
                        </a>
                    </motion.div>
                </div>
            </div>
            <FooterSection />
        </main>
    );
}
