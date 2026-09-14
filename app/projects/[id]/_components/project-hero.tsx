import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Maximize2, UserCheck, MessageSquare } from "lucide-react";
import { Project } from "@/types/project";
import Button from "@/components/ui/button";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted hover:text-ink transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all projects</span>
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold px-2.5 py-1 bg-surface rounded-[3px] border border-line">
          {project.category}
        </span>
        <span className="text-xs text-ink-muted">Case Study #{project.id.slice(0, 8)}</span>
      </div>

      <div className="space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[70ch]">
          {project.subtitle}
        </p>
      </div>

      {/* Project Meta Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-surface rounded-[4px] border border-line">
        <div className="space-y-1">
          <span className="text-[11px] text-ink-muted uppercase tracking-wider flex items-center gap-1">
            <UserCheck className="w-3 h-3 text-accent" />
            <span>Client</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-ink">{project.client}</p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] text-ink-muted uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-accent" />
            <span>Location</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-ink">{project.location}</p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] text-ink-muted uppercase tracking-wider flex items-center gap-1">
            <Maximize2 className="w-3 h-3 text-accent" />
            <span>Area</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-ink">{project.area}</p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] text-ink-muted uppercase tracking-wider flex items-center gap-1">
            <Calendar className="w-3 h-3 text-accent" />
            <span>Completed</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-ink">{project.year}</p>
        </div>
      </div>

      {/* Consultation Action Button */}
      <div className="pt-2 flex flex-wrap items-center gap-4">
        <Button
          href={`/contact?project=${encodeURIComponent(project.title)}`}
          variant="primary"
          size="md"
          icon={<MessageSquare className="w-4 h-4" />}
        >
          Request Consultation for Similar Project
        </Button>
      </div>
    </div>
  );
}
