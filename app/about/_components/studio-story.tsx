import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

export default function StudioStory() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block">
              Origins &amp; Purpose
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal leading-tight">
              Crafting spatial calm in an era of sensory excess.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              <p>
                Neo Interior Studio was established under <strong>Neo Nexor Ltd</strong> in Mohakhali DOHS, Dhaka, with a focused architectural objective: to replace disposable interior decorations with enduring, material-led physical spaces.
              </p>
              <p>
                Too often, interior design is treated as mere surface dressing. We approach each commission as an architectural whole—studying the orientation of sunlight, acoustic damping, tactile temperature, and the daily rituals of the people who inhabit our rooms.
              </p>
              <p>
                Our team blends licensed architects, interior designers, master cabinetmakers, and site engineers, ensuring that what is drawn on paper is executed on site to sub-millimeter tolerances.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-line bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Neo Interior Studio design atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
