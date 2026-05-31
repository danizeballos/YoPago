'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { LanguageToggleButton } from '@/components/language-toggle-button'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/lib/language-context'

export const HeroHeader = () => {
    const { t } = useLanguage()
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
    const pathname = usePathname()

    const menuItems = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.solutions'), href: '/solutions' },
        { name: t('nav.industries'), href: '/industries' },
        { name: t('nav.contact'), href: '/contact' },
        { name: t('nav.support'), href: '/support' },
    ]

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className={cn(
                    'mx-auto transition-all duration-500 ease-in-out px-6',
                    isScrolled
                        ? 'mt-4 w-[95%] max-w-6xl rounded-2xl border border-white/10 bg-background/20 shadow-lg backdrop-blur-md py-2'
                        : 'w-full border-b border-white/5 bg-background/80 backdrop-blur-sm py-4'
                )}>
                <div className="mx-auto max-w-6xl relative">
                    <div className="flex items-center justify-between gap-6 relative">
                        {/* Logo Area */}
                        <div className="flex items-center flex-1 lg:flex-none">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105 active:scale-95">
                                <Logo className="h-10" />
                            </Link>
                        </div>

                        {/* Centered Desktop Navigation */}
                        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <ul
                                className="flex items-center gap-1 text-sm font-medium relative px-1 py-1 rounded-full"
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href
                                    const isHome = item.href === '/'
                                    // Show underline if hovering THIS item OR (no hover anywhere AND this item is active AND not home)
                                    const showUnderline = hoveredIndex === index || (hoveredIndex === null && isActive && !isHome)

                                    return (
                                        <li key={index} className="relative">
                                            <Link
                                                href={item.href}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                className={cn(
                                                    "relative px-4 py-2 rounded-full transition-all duration-300 block",
                                                    "text-foreground/90 hover:text-foreground",
                                                    "dark:text-white/80 dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
                                                    isActive && !isHome ? "text-foreground font-bold dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" : ""
                                                )}
                                            >
                                                <span className="relative z-10 transition-transform duration-300 inline-block font-semibold">
                                                    {item.name}
                                                </span>
                                                <AnimatePresence>
                                                    {showUnderline && (
                                                        <motion.div
                                                            layoutId="nav-underline"
                                                            className="absolute -bottom-1 left-2 right-2 h-[2.5px] bg-primary shadow-[0_0_10px_rgba(251,128,43,0.7)] rounded-full"
                                                            initial={{ opacity: 0, scaleX: 0.5 }}
                                                            animate={{ opacity: 1, scaleX: 1 }}
                                                            exit={{ opacity: 0, scaleX: 0.5 }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 380,
                                                                damping: 28
                                                            }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* Right Area Content */}
                        <div className="flex items-center gap-3">
                            <div className="hidden lg:flex items-center gap-3">
                                <Button
                                    asChild
                                    size="sm"
                                    className="font-semibold transition-all duration-300 hover:scale-105">
                                    <Link href="https://yopago.com.bo/index.php?r=enterprise/login">
                                        <span>{t('nav.login')}</span>
                                    </Link>
                                </Button>
                                <LanguageToggleButton />
                                <ThemeToggleButton />
                            </div>

                            {/* Mobile: language + theme + hamburger (hamburger always last/rightmost) */}
                            <div className="flex lg:hidden items-center gap-2 text-foreground">
                                <LanguageToggleButton />
                                <ThemeToggleButton />
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-1 cursor-pointer p-2.5 text-foreground">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {menuState && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden overflow-hidden"
                            >
                                <div className="pt-4 pb-6 space-y-4 sm:pt-6 sm:pb-8 sm:space-y-6">
                                    <ul className="space-y-4 font-semibold text-foreground">
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className="text-lg hover:text-primary transition-colors block px-4 py-2 border-l-2 border-transparent hover:border-primary"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="px-4 pt-4 border-t border-border">
                                        <Button asChild className="w-full bg-primary font-semibold hover:bg-primary/90 text-white">
                                            <Link href="https://yopago.com.bo/index.php?r=enterprise/login">Login</Link>
                                        </Button>
                                    </div>
                                    <div className="text-center text-xs text-muted-foreground pt-4">
                                        © {new Date().getFullYear()} YoPago AI.
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </header>
    )
}