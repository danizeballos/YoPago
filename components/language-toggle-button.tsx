"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { Language } from "@/lib/translations"

const languages: { code: Language, name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
]

export function LanguageToggleButton() {
    const { language, setLanguage } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="dark:text-white dark:border-zinc-700 dark:bg-zinc-800/50 hover:bg-accent hover:text-accent-foreground hover:border-accent dark:hover:bg-accent dark:hover:text-accent-foreground dark:hover:border-accent transition-all duration-300"
                >
                    <Globe className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => {
                            console.log("LanguageToggleButton: Clicked", lang.code)
                            setLanguage(lang.code)
                        }}
                        className={language === lang.code ? "bg-accent text-accent-foreground font-medium" : ""}
                    >
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
