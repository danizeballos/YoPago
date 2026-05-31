'use client';

import React from 'react';
import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import { PensionsCarousel } from '@/components/industries/pensions-carousel';
import { POSSection } from '@/components/industries/pos-section';

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <HeroHeader />

            <main className="flex-grow pt-20 pb-20">


                {/* Modules */}
                <PensionsCarousel />
                <POSSection />
            </main>

            <Footer />
        </div>
    );
}
