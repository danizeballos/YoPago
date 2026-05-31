'use client';

import { CreditCard, Repeat, Globe, Code, Wallet, Shield, MousePointerClick, Link as LinkIcon, FileText, ShoppingCart, QrCode } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import { useLanguage } from '@/lib/language-context';

export default function SolutionsPage() {
    const { t } = useLanguage();

    const services = [
        {
            icon: CreditCard,
            title: t('solutionsPage.cardPayments'),
            description: t('solutionsPage.cardPaymentsDesc'),
            features: [t('solutionsPage.cardPaymentsFeat1'), t('solutionsPage.cardPaymentsFeat2'), t('solutionsPage.cardPaymentsFeat3')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: MousePointerClick,
            title: t('solutionsPage.paymentButton'),
            description: t('solutionsPage.paymentButtonDesc'),
            features: [t('solutionsPage.paymentButtonFeat1'), t('solutionsPage.paymentButtonFeat2'), t('solutionsPage.paymentButtonFeat3')],
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
        },
        {
            icon: LinkIcon,
            title: t('solutionsPage.customUrls'),
            description: t('solutionsPage.customUrlsDesc'),
            features: [t('solutionsPage.customUrlsFeat1'), t('solutionsPage.customUrlsFeat2'), t('solutionsPage.customUrlsFeat3')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: ShoppingCart,
            title: t('solutionsPage.ecommerce'),
            description: t('solutionsPage.ecommerceDesc'),
            features: [t('solutionsPage.ecommerceFeat1'), t('solutionsPage.ecommerceFeat2')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: Code,
            title: t('solutionsPage.integrationApi'),
            description: t('solutionsPage.integrationApiDesc'),
            features: [t('solutionsPage.integrationApiFeat1'), t('solutionsPage.integrationApiFeat2')],
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
        },
        {
            icon: Repeat,
            title: t('solutionsPage.recurringPayments'),
            description: t('solutionsPage.recurringPaymentsDesc'),
            features: [t('solutionsPage.recurringPaymentsFeat1'), t('solutionsPage.recurringPaymentsFeat2'), t('solutionsPage.recurringPaymentsFeat3')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: FileText,
            title: t('solutionsPage.electronicInvoicing'),
            description: t('solutionsPage.electronicInvoicingDesc'),
            features: [t('solutionsPage.electronicInvoicingFeat1'), t('solutionsPage.electronicInvoicingFeat2'), t('solutionsPage.electronicInvoicingFeat3')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
        {
            icon: Shield,
            title: t('solutionsPage.advancedSecurity'),
            description: t('solutionsPage.advancedSecurityDesc'),
            features: [t('solutionsPage.advancedSecurityFeat1'), t('solutionsPage.advancedSecurityFeat2'), t('solutionsPage.advancedSecurityFeat3')],
            color: 'turquoise',
            gradient: 'from-[#5fd6d6] to-[#a8f0f0]',
        },
        {
            icon: QrCode,
            title: t('solutionsPage.qrMethods'),
            description: t('solutionsPage.qrMethodsDesc'),
            features: [t('solutionsPage.qrMethodsFeat1'), t('solutionsPage.qrMethodsFeat2'), t('solutionsPage.qrMethodsFeat3')],
            color: 'orange',
            gradient: 'from-[#fb802b] to-[#ffb380]',
        },
    ];

    return (
        <main>
            <HeroHeader />
            <div className="pt-24 pb-12 bg-background">
                <div className="text-center px-6 mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {t('solutionsPage.titleAll')} <span className="text-primary">{t('solutionsPage.titleSolutions')}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('solutionsPage.subtitle')}
                    </p>
                </div>

                <section className="py-12 relative overflow-hidden bg-background">
                    <div className="mx-auto max-w-5xl px-6 relative z-10">
                        <AnimatedGroup
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                            preset="scale"
                        >
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className={cn(
                                        "group relative p-[2px] rounded-[1.2rem] h-full transition-all duration-500 hover:-translate-y-2 overflow-visible",
                                        "bg-gradient-to-br", service.gradient,
                                        // Center the last item if it's an orphan on a 3-column grid
                                        (index === services.length - 1 && services.length % 3 === 1) && "lg:col-start-2"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute inset-0 z-[-1] scale-90 blur-[25px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full",
                                        "bg-gradient-to-br", service.gradient
                                    )} />

                                    <div className="bg-card dark:bg-[#121212] rounded-[1rem] p-8 h-full relative z-10 flex flex-col items-start overflow-hidden">
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm",
                                            "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
                                            service.color === 'orange' ? "group-hover:bg-primary/10" : "group-hover:bg-secondary/10"
                                        )}>
                                            <service.icon className={cn(
                                                "w-6 h-6 transition-colors duration-500",
                                                service.color === 'orange' ? "text-primary" : "text-secondary"
                                            )} />
                                        </div>

                                        <h3 className={cn(
                                            "text-xl font-bold text-foreground mb-3 transition-colors duration-500",
                                            service.color === 'orange' ? "group-hover:text-primary" : "group-hover:text-secondary"
                                        )}>
                                            {service.title}
                                        </h3>

                                        <p className="text-muted-foreground text-[15px] mb-8 leading-relaxed flex-grow">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-3 mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-6 w-full">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors">
                                                    <div className={cn(
                                                        "w-1.5 h-1.5 rounded-full mr-3",
                                                        service.color === 'orange' ? "bg-primary" : "bg-secondary"
                                                    )}></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </AnimatedGroup>
                    </div>
                </section>
            </div>
            <FooterSection />
        </main>
    );
}
