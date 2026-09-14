import React from "react";
import SectionHeading from "@/components/ui/section-heading";

const PHASES = [
  {
    phase: "Phase 1",
    title: "Diagnostic Intake & Survey",
    description:
      "Comprehensive spatial measurement, solar path study, existing MEP analysis, and in-depth lifestyle brief formulation.",
  },
  {
    phase: "Phase 2",
    title: "Schematic Concept & 3D",
    description:
      "Photorealistic rendering sets, mood boards, physical material samples, and preliminary structural layout options.",
  },
  {
    phase: "Phase 3",
    title: "Technical Drafting & BOQ",
    description:
      "Bill of Quantities (BOQ), millimeter-level joinery drawings, fixture schedules, and vendor procurement bidding.",
  },
  {
    phase: "Phase 4",
    title: "Turnkey Site Delivery",
    description:
      "Daily on-site architectural management, material quality control, joinery installation, and final handover.",
  },
];

export default function ServiceProcess() {
  return (
    <div className="py-16 md:py-20 bg-surface rounded-[4px] border border-line p-6 sm:p-10 my-16">
      <SectionHeading
        eyebrow="Engagement Roadmap"
        title="Predictable milestones from concept to keys."
        description="We structure every interior commission into clearly defined deliverables and transparent approval stages."
        align="left"
        className="mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PHASES.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-sand rounded-[4px] border border-line flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                {item.phase}
              </span>
              <h3 className="font-display text-base text-ink font-normal mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
