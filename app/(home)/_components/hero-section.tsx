import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold">
              Interior Architecture & Design Atelier • Dhaka
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-light leading-[1.08] tracking-tight">
              Crafting spaces of <br className="hidden sm:inline" />
              <span className="font-normal italic text-accent">tactile calm</span> &amp; timeless presence.
            </h1>

            <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[58ch]">
              We translate raw spatial volumes into refined, restorative environments. Rooted in honest materiality—limewash, fluted stone, walnut, and warm unlacquered metals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Portfolio
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-line max-w-lg">
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-ink font-normal">
                  140+
                </span>
                <span className="text-xs text-ink-muted">Completed Spaces</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-ink font-normal">
                  14 yrs
                </span>
                <span className="text-xs text-ink-muted">Design Mastery</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-ink font-normal">
                  100%
                </span>
                <span className="text-xs text-ink-muted">Turnkey Execution</span>
              </div>
            </div>
          </div>

          {/* Hero Offset Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-line bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="The Lakeside Penthouse by Neo Interior Studio"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-surface/90 backdrop-blur-md rounded-[4px] border border-line/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-ink">The Lakeside Penthouse</p>
                  <p className="text-[11px] text-ink-muted">Gulshan 2 • Private Residence</p>
                </div>
                <Link
                  href="/projects/lakeside-penthouse-gulshan"
                  className="text-accent hover:text-accent-deep transition-colors p-1"
                  aria-label="View Project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
