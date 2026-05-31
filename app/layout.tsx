import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import NextTopLoader from "nextjs-toploader";
import { LanguageProvider } from "@/lib/language-context"
import { PageIntro } from "@/components/page-intro"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YoPago - Modern Payment Solutions",
  description: "Advanced payment processing for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ El viewport va AQUÍ, dentro de <head> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <PageIntro />
            <NextTopLoader color="#fb802b" showSpinner={false} shadow="0 0 10px #fb802b,0 0 5px #fb802b" />
            {children}
            <WhatsAppWidget />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}