'use client';

import { Gemini, MagicUI, VSCodium, GooglePaLM } from '@/components/logos'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { useLanguage } from '@/lib/language-context'

export default function IntegrationsSection() {
    const { t } = useLanguage()
    return (
        <section>
            <div className="bg-muted dark:bg-background py-16 md:py-32 overflow-x-hidden">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2 gap-10 sm:gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: '-80px' }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="dark:bg-muted/50 relative mx-auto w-fit"
                        >
                            <div
                                aria-hidden
                                className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
                            />
                            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] flex items-center justify-center">
                                {/* Central Logo */}
                                <div className="absolute z-10 p-2 rounded-full bg-background/50 backdrop-blur-md border border-border/50 shadow-2xl">
                                    <IntegrationCard
                                        gradient="from-primary to-secondary"
                                        className="relative z-20">
                                        <Image
                                            src="/logos/yoconecto.png"
                                            alt="Yoconecto"
                                            width={128}
                                            height={128}
                                            className="!size-16 object-contain"
                                        />
                                    </IntegrationCard>
                                </div>

                                {/* Orbiting Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                                >
                                    {[
                                        { component: <Image src="/logos/Shopify-Logo-PNG.webp" alt="Shopify" width={64} height={64} className="!size-16 object-contain" />, angle: 0, gradient: 'from-[#fb802b] to-[#ffb380]' },
                                        { component: <Image src="/logos/woocommerce.webp" alt="WooCommerce" width={56} height={56} className="!size-14 object-contain" />, angle: 60, gradient: 'from-[#5fd6d6] to-[#a8f0f0]' },
                                        { component: <Image src="/logos/Shopify-Logo-PNG.webp" alt="Shopify" width={64} height={64} className="!size-16 object-contain" />, angle: 120, gradient: 'from-[#fb802b] to-[#ffb380]' },
                                        { component: <Image src="/logos/woocommerce.webp" alt="WooCommerce" width={56} height={56} className="!size-14 object-contain" />, angle: 180, gradient: 'from-[#5fd6d6] to-[#a8f0f0]' },
                                        { component: <Image src="/logos/Shopify-Logo-PNG.webp" alt="Shopify" width={64} height={64} className="!size-16 object-contain" />, angle: 240, gradient: 'from-[#fb802b] to-[#ffb380]' },
                                        { component: <Image src="/logos/woocommerce.webp" alt="WooCommerce" width={56} height={56} className="!size-14 object-contain" />, angle: 300, gradient: 'from-[#5fd6d6] to-[#a8f0f0]' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="absolute"
                                            style={{
                                                transform: `rotate(${item.angle}deg) translate(130px)`,
                                            }}
                                        >
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                                            >
                                                <IntegrationCard
                                                    gradient={item.gradient}
                                                    className="pointer-events-auto shadow-sm size-[78px]"
                                                >
                                                    {item.component}
                                                </IntegrationCard>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: '-80px' }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                            className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left"
                        >
                            <h2 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                {t('integrations.titleStart')} <span className="text-primary whitespace-nowrap">{t('integrations.ecommerce')}</span> {t('integrations.platforms')} <span className="text-primary">{t('integrations.website')}</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {t('integrations.description')}
                            </p>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

const IntegrationCard = ({ children, className, gradient = "from-zinc-200 to-zinc-200 dark:from-zinc-800 dark:to-zinc-800" }: { children: React.ReactNode; className?: string; gradient?: string }) => {
    return (
        <div className={cn(
            "group relative p-[2px] rounded-[1.2rem] transition-all duration-500 hover:scale-105 overflow-visible",
            "bg-gradient-to-br", gradient,
            "size-24", // Enforcing square shape
            className
        )}>
            {/* The "Magic" Glow After Effect - Matching ServicesSection */}
            <div className={cn(
                "absolute inset-0 z-[-1] scale-90 blur-[25px] opacity-[0.93] transition-opacity duration-500 rounded-[1.2rem]",
                "bg-gradient-to-br", gradient
            )} />

            <div className="bg-white dark:bg-[#121212] rounded-[1rem] size-full flex items-center justify-center relative z-10 shadow-sm">
                {children}
            </div>
        </div>
    )
}
