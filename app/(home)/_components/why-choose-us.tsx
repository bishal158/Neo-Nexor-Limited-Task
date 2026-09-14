import React from "react";
import { ShieldCheck, Sparkles, Clock, Trees } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const PILLARS = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    title: "Architect-Led Spatial Logic",
    description:
      "Every layout is engineered by licensed architects. We resolve circulation, ergonomics, and structural loads before selecting decorative elements.",
  },
  {
    icon: <Trees className="w-5 h-5 text-accent" />,
    title: "Tactile & Noble Materials",
    description:
      "We source natural lime plaster, solid walnut, honed limestone, and unlacquered brass—materials that acquire depth and patina rather than wear out.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    title: "Turnkey Accountability",
    description:
      "From municipal permits to final carpentry adjustment, our in-house site engineers guarantee fixed milestone timelines and transparent cost accounting.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    title: "Acoustic & Luminous Comfort",
    description:
      "We engineer custom acoustic wall linings and circadian lighting temperatures, ensuring your space feels emotionally restorative at any hour.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-surface border-y border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              eyebrow="The Studio Distinction"
              title="Why discerning clients entrust their spaces to Neo."
              description="In an era of fleeting fast-furniture trends, we create enduring physical environments that elevate wellbeing and retain architectural value."
              className="mb-0"
            />
            <div className="p-6 bg-sand rounded-[4px] border border-line space-y-3">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Our Guarantee
              </span>
              <p className="text-sm text-ink-muted leading-relaxed">
                Zero surprise costs. Dedicated on-site project management. Direct access to the principal architects throughout every construction phase.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-sand p-5 sm:p-6 rounded-[4px] border border-line flex flex-col justify-between hover:border-accent transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-surface border border-line flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-sm sm:text-base text-ink font-normal mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
