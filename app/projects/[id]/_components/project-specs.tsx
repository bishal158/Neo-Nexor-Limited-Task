import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectSpecsProps {
  project: Project;
}

export default function ProjectSpecs({ project }: ProjectSpecsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 border-t border-line">
      {/* Narrative & Concept */}
      <div className="lg:col-span-7 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
            The Design Narrative
          </span>
          <h2 className="font-display text-2xl text-ink font-normal mb-4">
            Context &amp; Spatial Strategy
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="p-6 bg-surface rounded-[4px] border border-line">
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Design Concept</span>
          </div>
          <p className="font-display text-base text-ink italic leading-relaxed">
            “{project.concept}”
          </p>
        </div>
      </div>

      {/* Scope Checklist & Material Palette */}
      <div className="lg:col-span-5 space-y-8">
        {/* Scope of Work */}
        <div className="p-6 bg-surface rounded-[4px] border border-line space-y-4">
          <h3 className="font-display text-lg text-ink font-normal">
            Scope of Services Delivered
          </h3>
          <ul className="space-y-2.5">
            {project.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-muted">
                <span className="p-0.5 rounded-[2px] bg-sand text-accent border border-line mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Noble Materials Palette */}
        <div className="p-6 bg-surface rounded-[4px] border border-line space-y-4">
          <h3 className="font-display text-lg text-ink font-normal">
            Curated Material Palette
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.materials.map((mat, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-[3px] bg-sand text-ink border border-line font-medium"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
