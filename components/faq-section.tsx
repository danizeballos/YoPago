'use client'
import { useState } from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'motion/react'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const { t } = useLanguage()
    const [activeItem, setActiveItem] = useState("")
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'credit-card',
            question: t('faq.q1'),
            answer: t('faq.a1'),
        },
        {
            id: 'item-2',
            icon: 'shopping-cart',
            question: t('faq.q2'),
            answer: t('faq.a2'),
        },
        {
            id: 'item-3',
            icon: 'file-text',
            question: t('faq.q3'),
            answer: t('faq.a3'),
        },
        {
            id: 'item-4',
            icon: 'shield-check',
            question: t('faq.q4'),
            answer: t('faq.a4'),
        },
    ]

    return (
        <section className="bg-background py-20 relative z-10 overflow-visible">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:w-1/3"
                    >
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">{t('faq.title')}</h2>
                            <p className="text-muted-foreground mt-4">
                                {t('faq.cantFind')}{' '}
                                <Link
                                    href="/support"
                                    className="text-primary font-medium hover:underline">
                                    {t('faq.supportTeam')}
                                </Link>
                            </p>
                            <div className="mt-8">
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:border-primary/50 hover:bg-primary/5">
                                    <Link href="/support" className="flex items-center gap-2 text-sm font-bold">
                                        {t('faq.viewAll')}
                                        <ArrowRight className="size-4 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                        className="md:w-2/3 pb-20 overflow-visible"
                    >
                        <Accordion
                            type="single"
                            collapsible
                            value={activeItem || hoveredItem || undefined}
                            onValueChange={() => { }}
                            className="w-full space-y-3 p-1 overflow-visible">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className="group bg-card shadow-sm rounded-xl border border-zinc-200 dark:border-zinc-800 px-6 transition-all duration-300 hover:border-primary/40 overflow-visible">
                                    <AccordionTrigger
                                        onClick={() => setActiveItem((prev: string) => prev === item.id ? "" : item.id)}
                                        className="cursor-pointer items-center py-5 hover:no-underline">
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
                                    <AccordionContent className="pb-5">
                                        <div className="pl-8 sm:pl-12">
                                            <p className="text-[15px] text-muted-foreground leading-relaxed">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
