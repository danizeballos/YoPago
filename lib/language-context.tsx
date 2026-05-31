"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language } from './translations'

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language
        if (saved && (saved === 'en' || saved === 'es')) {
            setLanguage(saved)
        }
        setIsLoaded(true)
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const t = (path: string) => {
        const keys = path.split('.')
        let current: any = translations[language]
        for (const key of keys) {
            if (current === undefined || current[key] === undefined) {
                console.warn(`Translation missing for key: ${path}`)
                return path
            }
            current = current[key]
        }
        return current as string
    }

    // Avoid hydration mismatch by rendering children only after checking localStorage
    // Or just render with default 'en' and update (causing a flicker? maybe better to just render)
    // For 'easiest way', we might accept a small flicker or just render.
    // Actually, usually we render immediately to avoid SEO impact if it was server side, but this is client.
    // Let's just return children. the useEffect will update state.

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            <div key={language}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
    return context
}
