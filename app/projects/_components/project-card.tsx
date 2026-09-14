import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, Maximize2 } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block bg-surface rounded-[4px] border border-line overflow-hidden transition-all duration-300 hover:border-accent"
    >
      {/* Visual Header */}
      <div className="relative aspect-[16/11] overflow-hidden bg-sand">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded-[3px] border border-line/60">
          <span className="text-[11px] font-medium text-accent uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Hover Action Preview Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-[4px] bg-surface/90 backdrop-blur-xs border border-line/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-4 h-4 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-ink font-normal group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="mt-2 text-xs text-ink-muted leading-relaxed line-clamp-2">
          {project.subtitle}
        </p>

        {/* Meta Info */}
        <div className="mt-5 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between text-[11px] text-ink-muted gap-2">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-accent" />
            <span>{project.location}</span>
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3 h-3 text-accent" />
            <span>{project.area}</span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-accent" />
            <span>{project.year}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
