import React from "react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Spatial Diagnostics & Brief",
    summary:
      "We begin on-site, assessing solar orientation, natural cross-ventilation, structural possibilities, and your daily lifestyle rituals.",
    details:
      "Initial feasibility review, budget calibration, and establishing the foundational spatial strategy.",
  },
  {
    step: "02",
    title: "Conceptual 3D & Materiality",
    summary:
      "Translating architectural ideas into photorealistic renders and tactile physical sample boards (limewash, timber, marble).",
    details:
      "Reviewing lighting temperature, acoustic comfort, and circulation flows before finalizing the visual narrative.",
  },
  {
    step: "03",
    title: "Technical Detailing & FF&E",
    summary:
      "Drafting millimeter-precise joinery drawings, MEP coordination layouts, and curating furniture and luminaire specifications.",
    details:
      "Ensuring structural compliance, vendor bidding, and creating detailed procurement schedules.",
  },
  {
    step: "04",
    title: "Turnkey Execution & Handover",
    summary:
      "Our in-house master carpenters and site engineers manage construction under daily architectural supervision.",
    details:
      "Defect-free white-glove handover with full documentation, warranties, and maintenance protocols.",
  },
];

export default function DesignProcess() {
  return (
    <section className="py-20 md:py-28 bg-base">
      <Container>
        <SectionHeading
          eyebrow="Our Methodology"
          title="A rigorous, transparent journey from sketch to key handover."
          description="We eliminate ambiguity through systematic diagnostic planning, tactile material sampling, and daily site oversight."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-surface rounded-[4px] border border-line p-7 flex flex-col justify-between relative group hover:border-accent transition-colors"
            >
              <div>
                <span className="font-display text-3xl font-light text-accent/80 mb-4 block">
                  {item.step}
                </span>

                <h3 className="font-display text-lg text-ink font-normal mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60">
                <p className="text-[11px] text-ink-muted/80 leading-normal">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
