import React from "react";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Building2,
  UtensilsCrossed,
  Compass,
  Lamp,
  Layers,
  Hammer,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import { services } from "@/data/services";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5 text-accent" />,
  Briefcase: <Briefcase className="w-5 h-5 text-accent" />,
  Building2: <Building2 className="w-5 h-5 text-accent" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-accent" />,
  Compass: <Compass className="w-5 h-5 text-accent" />,
  Lamp: <Lamp className="w-5 h-5 text-accent" />,
  Layers: <Layers className="w-5 h-5 text-accent" />,
  Hammer: <Hammer className="w-5 h-5 text-accent" />,
};

export default function ServicesOverview() {
  const displayServices = services.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-surface border-y border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="Disciplines &amp; Expertise"
            title="Comprehensive architectural and interior capabilities."
            description="From initial architectural space planning to bespoke furniture engineering and turnkey site handover."
            className="mb-0 md:mb-0"
          />
          <Button
            href="/services"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            All 8 Services
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-sand rounded-[4px] border border-line p-5 sm:p-7 flex flex-col justify-between hover:border-accent transition-colors duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-surface border border-line flex items-center justify-center mb-5">
                  {iconMap[service.iconName] || <Home className="w-5 h-5 text-accent" />}
                </div>

                <span className="text-[11px] text-ink-muted font-mono mb-2 block">
                  0{index + 1}
                </span>

                <h3 className="font-display text-lg text-ink font-normal mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line/60">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-deep transition-colors group"
                >
                  <span>View service details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
