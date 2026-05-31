'use client';

import { useState } from 'react';
import {
    Phone,
    Mail,
    Building2,
    Code2,
    Users,
    Copy,
    Check,
} from 'lucide-react';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language-context';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <HeroHeader />

            <div className="pt-24 pb-20 relative overflow-hidden">
                {/* Ambient Background Decorations */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] opacity-30 dark:opacity-20"></div>
                    <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[120px] opacity-30 dark:opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    {/* Centered Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mx-auto mb-16"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            {t('contact.heroTitleStart')} <span className="text-primary">{t('contact.heroTitleEnd')}</span> {t('contact.heroTitleTogether')}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            {t('contact.heroDesc')}
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {/* Who We Are Section - With Premium Gradient Border */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group p-[2px] rounded-[2.2rem] bg-gradient-to-br from-[#fb802b] to-[#ffb380] transition-all duration-500 overflow-visible"
                        >
                            {/* Magic Glow */}
                            <div className="absolute inset-0 z-[-1] scale-95 blur-[35px] opacity-60 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-br from-[#fb802b] to-[#ffb380] rounded-full" />

                            <div className="bg-card dark:bg-[#121212] p-8 md:p-12 rounded-[2.1rem] text-center relative z-10 overflow-hidden">
                                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto shadow-sm">
                                    <Users className="size-7" />
                                </div>
                                <h2 className="text-3xl font-bold mb-6">{t('contact.whoWeAreTitle')}</h2>

                                <div className="max-w-3xl mx-auto space-y-6">
                                    <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground" dangerouslySetInnerHTML={{ __html: t('contact.whoWeAreDesc1') }} />
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {t('contact.whoWeAreDesc2')}
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Contact Channels */}
                        <section className="space-y-10">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight">{t('contact.getInTouchTitle')}</h2>
                                <p className="text-muted-foreground text-lg">{t('contact.getInTouchDesc')}</p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                {/* Phone Card - Orange Gradient */}
                                <ContactGridCard
                                    icon={Phone}
                                    title={t('contact.phoneTitle')}
                                    gradient="from-[#fb802b] to-[#ffb380]"
                                    color="orange"
                                >
                                    <div className="flex flex-col text-lg font-bold">
                                        <a
                                            href="https://wa.me/59178454160?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20YoPago"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            +591 78454160
                                        </a>
                                        <a
                                            href="https://wa.me/59170711598?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20YoPago"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            +591 70711598
                                        </a>
                                    </div>
                                </ContactGridCard>

                                {/* Email Card - Turquoise Gradient */}
                                <ContactGridCard
                                    icon={Mail}
                                    title={t('contact.emailTitle')}
                                    gradient="from-[#5fd6d6] to-[#a8f0f0]"
                                    color="turquoise"
                                >
                                    <CopyEmail email="soporte@yopago.com.bo" />
                                </ContactGridCard>
                            </div>
                        </section>

                        {/* Presence / Offices */}
                        <section className="space-y-10">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight">{t('contact.presenceTitle')}</h2>
                                <p className="text-muted-foreground text-lg">{t('contact.presenceDesc')}</p>
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {/* La Paz - Orange */}
                                <OfficeCard
                                    city={t('contact.laPaz')}
                                    gradient="from-[#fb802b] to-[#ffb380]"
                                    icon={Building2}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: t('contact.laPazAddress') }} />
                                </OfficeCard>

                                {/* Cochabamba - Turquoise */}
                                <OfficeCard
                                    city={t('contact.cochabamba')}
                                    gradient="from-[#5fd6d6] to-[#a8f0f0]"
                                    icon={Building2}
                                    isSecondary
                                >
                                    <span dangerouslySetInnerHTML={{ __html: t('contact.cochabambaAddress') }} />
                                </OfficeCard>

                                {/* Development Center - Orange */}
                                <OfficeCard
                                    city={t('contact.devCenter')}
                                    gradient="from-[#fb802b] to-[#ffb380]"
                                    icon={Code2}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: t('contact.devCenterAddress') }} />
                                </OfficeCard>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <FooterSection />
        </main>
    );
}

function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <a
                href={`mailto:${email}`}
                className="text-lg font-bold hover:text-secondary transition-colors break-all"
            >
                {email}
            </a>
            <button
                onClick={handleCopy}
                aria-label="Copiar email"
                className={cn(
                    "relative flex items-center justify-center size-8 rounded-lg border transition-all duration-300 shrink-0",
                    "hover:scale-110 active:scale-95",
                    copied
                        ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-500"
                        : "border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10"
                )}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                        <motion.span
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
                            <Check className="size-3.5" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
                            <Copy className="size-3.5" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    )
}

function ContactGridCard({ icon: Icon, title, children, gradient, color }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "group relative p-[2px] rounded-[1.8rem] transition-all duration-500 hover:-translate-y-2 overflow-visible",
                "bg-gradient-to-br", gradient
            )}
        >
            <div className={cn(
                "absolute inset-0 z-[-1] scale-90 blur-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                "bg-gradient-to-br", gradient
            )} />

            <div className="bg-card dark:bg-[#121212] rounded-[1.7rem] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10 overflow-hidden h-full">
                <div className={cn(
                    "size-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm border border-zinc-200 dark:border-zinc-800",
                    color === 'orange' ? "bg-primary/5 text-primary group-hover:bg-primary/10" : "bg-secondary/5 text-secondary group-hover:bg-secondary/10"
                )}>
                    <Icon className="size-7" />
                </div>
                <div className="text-left">
                    <p className={cn(
                        "text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-500",
                        color === 'orange' ? "text-primary" : "text-secondary"
                    )}>{title}</p>
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

function OfficeCard({ city, children, gradient, icon: Icon, isSecondary }: any) {
    return (
        <div className={cn(
            "group relative p-[2px] rounded-[1.6rem] transition-all duration-500 hover:-translate-y-2 overflow-visible",
            "bg-gradient-to-br", gradient
        )}>
            <div className={cn(
                "absolute inset-0 z-[-1] scale-90 blur-[20px] opacity-80 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                "bg-gradient-to-br", gradient
            )} />

            <div className="bg-card dark:bg-[#121212] rounded-[1.5rem] p-8 text-center space-y-4 relative z-10 overflow-hidden h-full flex flex-col items-center">
                <div className={cn(
                    "size-12 rounded-full flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors duration-500",
                    isSecondary ? "bg-secondary/10 text-secondary group-hover:bg-secondary/20" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                )}>
                    <Icon className="size-6" />
                </div>
                <div>
                    <h3 className={cn(
                        "font-bold text-lg transition-colors duration-500",
                        isSecondary ? "group-hover:text-secondary" : "group-hover:text-primary"
                    )}>{city}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
}
