'use client';

import { GraduationCap, Store } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'motion/react';

export default function IndustriesSection() {
    const { t } = useLanguage();

    const industries = [
        {
            icon: GraduationCap,
            title: t('industries.pensions'),
            subtitle: t('industries.pensionsDesc'),
            description: t('industries.pensionsLongDesc'),
            buttonText: t('industries.learnMore'),
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
            bgIcon: 'bg-[#5fd6d6]',
            link: '/industries#pensions', // Link to the new page
            bgHoverButton: "hover:bg-[#25b0b0]/90 bg-[#25b0b0]",
            iconBgColor: "bg-[#25b0b0]",
            titleHoverColor: "group-hover:text-[#25b0b0]"
        },
        {
            icon: Store,
            title: t('industries.pos'),
            subtitle: t('industries.posDesc'),
            description: t('industries.posLongDesc'),
            buttonText: t('industries.explorePos'),
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
            bgIcon: 'bg-[#fb802b]',
            link: '/industries#pos', // Link to the new page
            bgHoverButton: "hover:bg-primary/90 bg-primary",
            iconBgColor: "bg-primary",
            titleHoverColor: "group-hover:text-primary"
        },
    ];

    return (
        <section id="industries" className="py-20 relative overflow-hidden bg-muted/30 dark:bg-background/50">

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16 px-4"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                        <TextEffect as="span" preset="fade-in-blur">{t('industries.designedFor')}</TextEffect>{' '}
                        <TextEffect as="span" preset="fade-in-blur" className="text-primary font-bold">{t('industries.industry')}</TextEffect>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                        {t('industries.description')}
                    </p>
                </motion.div>

                <AnimatedGroup
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    preset="scale"
                    viewport={{ once: false, margin: '-60px' }}
                >
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className={cn(
                                "group relative p-[2px] rounded-[1.6rem] h-full transition-all duration-500 hover:-translate-y-2",
                                "bg-gradient-to-br", industry.gradient
                            )}
                        >
                            <div className={cn(
                                "absolute inset-0 z-[-1] scale-90 blur-[25px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                                "bg-gradient-to-br", industry.gradient
                            )} />

                            <div className="bg-card dark:bg-[#121212] rounded-[1.5rem] p-8 h-full flex flex-col items-start text-left relative z-10 overflow-hidden">
                                <div className="flex items-start gap-4 mb-6 w-full">
                                    <div className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white shadow-md transition-transform duration-500 group-hover:scale-110",
                                        industry.iconBgColor
                                    )}>
                                        <industry.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className={cn(
                                            "text-xl font-bold text-foreground leading-tight transition-colors duration-300",
                                            industry.titleHoverColor
                                        )}>
                                            {industry.title}
                                        </h3>
                                        <span className="text-sm text-muted-foreground mt-1">
                                            {industry.subtitle}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-8 flex-grow w-full">
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {industry.description}
                                    </p>
                                </div>

                                <div className="mt-auto w-full">
                                    <Button
                                        asChild
                                        className={cn(
                                            "w-full rounded-xl h-12 font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:scale-[1.02]",
                                            industry.bgHoverButton
                                        )}
                                    >
                                        <Link href={industry.link}>
                                            {industry.buttonText}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </AnimatedGroup>
            </div>
        </section>
    );
}
