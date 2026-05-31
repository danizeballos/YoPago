'use client';

import { MousePointerClick, Link as LinkIcon, FileText, ShoppingCart, ArrowRight } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'motion/react';

export default function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        {
            icon: MousePointerClick,
            title: t('services.paymentButton'),
            description: t('services.paymentButtonDesc'),
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: LinkIcon,
            title: t('services.customUrls'),
            description: t('services.customUrlsDesc'),
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
        },
        {
            icon: FileText,
            title: t('services.electronicInvoicing'),
            description: t('services.electronicInvoicingDesc'),
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: ShoppingCart,
            title: t('services.ecommerce'),
            description: t('services.ecommerceDesc'),
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
        },
    ];

    return (
        <section id="solutions" className="py-20 relative overflow-hidden bg-background">
            {/* Ambient Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] opacity-30 dark:opacity-20"></div>
                <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[120px] opacity-30 dark:opacity-20"></div>
            </div>

            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16 px-4"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                        <TextEffect as="span" preset="fade-in-blur">{t('services.our')}</TextEffect>{' '}
                        <TextEffect as="span" preset="fade-in-blur" className="font-bold text-primary">{t('services.solutions')}</TextEffect>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg">
                        {t('services.description')}
                    </p>
                </motion.div>

                <AnimatedGroup
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    preset="scale"
                    viewport={{ once: false, margin: '-60px' }}
                >
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={cn(
                                "group relative p-[2px] rounded-[1.2rem] h-full transition-all duration-500 hover:-translate-y-2 overflow-visible",
                                "bg-gradient-to-br", service.gradient
                            )}
                        >
                            {/* The "Magic" Glow After Effect */}
                            <div className={cn(
                                "absolute inset-0 z-[-1] scale-90 blur-[25px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                                "bg-gradient-to-br", service.gradient
                            )} />

                            {/* Internal Content (card-info) */}
                            <div className="bg-card dark:bg-[#121212] rounded-[1rem] p-6 h-full relative z-10 flex flex-col items-center text-center overflow-hidden">
                                {/* Icon Container */}
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 shadow-sm",
                                    "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
                                    service.color === 'orange' ? "group-hover:bg-primary/10" : "group-hover:bg-secondary/10"
                                )}>
                                    <service.icon className={cn(
                                        "w-6 h-6 transition-colors duration-500",
                                        service.color === 'orange' ? "text-primary" : "text-secondary"
                                    )} />
                                </div>

                                <h3 className={cn(
                                    "text-lg font-bold text-foreground mb-2 transition-colors duration-500",
                                    service.color === 'orange' ? "group-hover:text-primary" : "group-hover:text-secondary"
                                )}>
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </AnimatedGroup>

                <div className="mt-12 flex justify-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:border-primary/50 hover:bg-primary/5">
                        <Link href="/solutions" className="flex items-center gap-2">
                            {t('services.viewAll')}
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
