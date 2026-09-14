import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Image Pairing */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden border border-line bg-base">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                alt="Architectural detailing by Neo Interior Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Small floating architectural quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 bg-base border border-line rounded-[4px] max-w-xs shadow-xs">
              <p className="font-display text-sm text-ink italic leading-snug">
                “Simplicity is not the lack of clutter; it is the presence of purpose.”
              </p>
              <span className="block mt-2 text-[11px] text-accent uppercase font-medium">
                Design Manifesto
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              The Studio Philosophy
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-tight">
              An architectural practice committed to the quiet art of spatial harmony.
            </h2>

            <div className="space-y-4 text-ink-muted text-base leading-relaxed max-w-[65ch]">
              <p>
                Founded by <strong>Neo Nexor Ltd</strong>, Neo Interior Studio operates at the intersection of architectural discipline and tactile interior design. We believe great spaces should not shout; they should envelop you in serene proportions and natural textures.
              </p>
              <p>
                Every project begins with deep spatial diagnostics—analyzing the path of natural light, prevailing cross-ventilation, and daily habits. We reject superficial trends in favor of materials that endure: hand-worked lime plaster, solid timbers with honest joinery, and custom architectural lighting.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep transition-colors group"
              >
                <span>Read our full story &amp; meet the team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
