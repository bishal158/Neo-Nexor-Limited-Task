import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Home,
  Briefcase,
  Building2,
  UtensilsCrossed,
  Compass,
  Lamp,
  Layers,
  Hammer,
} from "lucide-react";
import { Service } from "@/types/service";

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

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div
      id={service.id}
      className="bg-surface rounded-[4px] border border-line overflow-hidden p-6 sm:p-8 lg:p-10 transition-colors"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Content Column */}
        <div
          className={`lg:col-span-7 space-y-6 ${
            isReversed ? "lg:col-start-6" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[4px] bg-base border border-line flex items-center justify-center">
              {iconMap[service.iconName] || <Home className="w-5 h-5 text-accent" />}
            </div>
            <span className="font-mono text-xs text-ink-muted">
              Service 0{index + 1}
            </span>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-normal mb-3">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-wider text-accent font-semibold">
              Deliverables &amp; Inclusions:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-ink-muted">
                  <span className="p-0.5 rounded-[2px] bg-base text-accent border border-line mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Link */}
          <div className="pt-2">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-accent hover:text-accent-deep transition-colors group"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`lg:col-span-5 ${
            isReversed ? "lg:col-start-1" : ""
          }`}
        >
          <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-line bg-base">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
