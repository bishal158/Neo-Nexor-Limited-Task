import React from "react";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Perspectives"
          title="Endorsements from owners, developers, and founders."
          description="Read firsthand reflections on our spatial methodology, project management discipline, and material longevity."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-[4px] border border-line p-7 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-highlight text-highlight"
                    />
                  ))}
                </div>

                {/* Quote in Fraunces */}
                <p className="font-display text-sm sm:text-base text-ink italic font-normal leading-relaxed mb-6">
                  “{item.comment}”
                </p>
              </div>

              <div className="pt-5 border-t border-line/60">
                <p className="text-sm font-medium text-ink">{item.name}</p>
                <p className="text-xs text-ink-muted">{item.role}</p>
                <p className="text-[11px] text-accent mt-1">{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
