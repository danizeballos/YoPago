import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className="relative group flex items-center">
            {/* Soft background aura - dynamic color based on theme */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 blur-2xl rounded-full scale-150 transition-colors duration-500" />

            {/* Light Mode Logo */}
            <Image
                src="/logos/logo-yopago-ai.png"
                alt="YoPago AI Logo"
                width={120}
                height={40}
                className={cn(
                    'h-8 w-auto object-contain relative z-10 transition-all duration-500 block dark:hidden',
                    'filter drop-shadow-[0_0_5px_rgba(0,0,0,0.1)]',
                    'group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.2)] group-hover:scale-105',
                    className
                )}
                priority
            />

            {/* Dark Mode Logo */}
            <Image
                src="/logos/logo-yopago-ai2.png"
                alt="YoPago AI Logo"
                width={120}
                height={40}
                className={cn(
                    'h-8 w-auto object-contain relative z-10 transition-all duration-500 hidden dark:block',
                    'filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]',
                    'group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:scale-105',
                    className
                )}
                priority
            />
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <>
            <Image
                src="/logos/logo-yopago-ai.png"
                alt="YoPago AI Logo Icon"
                width={128}
                height={128}
                className={cn(
                    'size-8 object-contain filter drop-shadow-[0_0_5px_rgba(0,0,0,0.1)] block dark:hidden',
                    className
                )}
            />
            <Image
                src="/logos/logo-yopago-ai2.png"
                alt="YoPago AI Logo Icon"
                width={128}
                height={128}
                className={cn(
                    'size-8 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hidden dark:block',
                    className
                )}
            />
        </>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <>
            <Image
                src="/logos/logo-yopago-ai.png"
                alt="YoPago AI Logo Stroke"
                width={32}
                height={32}
                className={cn(
                    'size-8 object-contain filter drop-shadow-[0_0_5px_rgba(0,0,0,0.1)] block dark:hidden',
                    className
                )}
            />
            <Image
                src="/logos/logo-yopago-ai2.png"
                alt="YoPago AI Logo Stroke"
                width={32}
                height={32}
                className={cn(
                    'size-8 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hidden dark:block',
                    className
                )}
            />
        </>
    )
}
