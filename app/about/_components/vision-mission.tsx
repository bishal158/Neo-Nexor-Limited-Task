import React from "react";
import Container from "@/components/ui/container";
import { Compass, Eye, HeartHandshake, Shield } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-16 bg-surface border-y border-line">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* Vision */}
          <div className="p-8 bg-base rounded-[4px] border border-line space-y-4">
            <div className="w-10 h-10 rounded-[4px] bg-surface border border-line flex items-center justify-center">
              <Eye className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-2xl text-ink font-normal">Our Vision</h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              To establish an enduring design language where modern South Asian interiors celebrate natural materials, architectural light sculpting, and restful simplicity—free from fleeting trends and visual noise.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 bg-base rounded-[4px] border border-line space-y-4">
            <div className="w-10 h-10 rounded-[4px] bg-surface border border-line flex items-center justify-center">
              <Compass className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-2xl text-ink font-normal">Our Mission</h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              To serve clients with absolute accountability—delivering bespoke spatial solutions through uncompromising architectural planning, master millwork craft, and transparent turnkey execution.
            </p>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="space-y-2 p-5 bg-base/50 rounded-[4px] border border-line/60">
            <span className="text-xs uppercase font-semibold text-accent tracking-wider">
              01. Spatial Proportion
            </span>
            <p className="text-xs text-ink-muted leading-relaxed">
              Before aesthetics, we resolve scale, circulation, and light distribution.
            </p>
          </div>
          <div className="space-y-2 p-5 bg-base/50 rounded-[4px] border border-line/60">
            <span className="text-xs uppercase font-semibold text-accent tracking-wider">
              02. Material Honesty
            </span>
            <p className="text-xs text-ink-muted leading-relaxed">
              We never fake materials; wood is real timber, stone is quarried rock.
            </p>
          </div>
          <div className="space-y-2 p-5 bg-base/50 rounded-[4px] border border-line/60">
            <span className="text-xs uppercase font-semibold text-accent tracking-wider">
              03. Acoustic Wellness
            </span>
            <p className="text-xs text-ink-muted leading-relaxed">
              We engineer sound damping into walls and ceilings for true tranquility.
            </p>
          </div>
          <div className="space-y-2 p-5 bg-base/50 rounded-[4px] border border-line/60">
            <span className="text-xs uppercase font-semibold text-accent tracking-wider">
              04. Turnkey Certainty
            </span>
            <p className="text-xs text-ink-muted leading-relaxed">
              Fixed budgets and reliable delivery schedules backed by in-house teams.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
