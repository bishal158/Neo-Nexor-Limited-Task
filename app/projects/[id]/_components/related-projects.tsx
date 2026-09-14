import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";

interface RelatedProjectsProps {
  currentProjectId: string;
  category: string;
}

export default function RelatedProjects({
  currentProjectId,
  category,
}: RelatedProjectsProps) {
  // Find projects with same category or other projects excluding current
  const related = projects
    .filter((p) => p.id !== currentProjectId)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="pt-16 mt-16 border-t border-line space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
            Continue Exploring
          </span>
          <h2 className="font-display text-2xl text-ink font-normal">
            Related Architectural Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-xs font-medium text-accent hover:underline hidden sm:block"
        >
          View all projects →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((item) => (
          <Link
            key={item.id}
            href={`/projects/${item.id}`}
            className="group block bg-surface rounded-[4px] border border-line overflow-hidden hover:border-accent transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-surface/90 px-2 py-0.5 rounded-[2px] text-[10px] font-medium text-accent uppercase">
                {item.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base text-ink font-normal group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent shrink-0" />
              </div>
              <p className="text-xs text-ink-muted mt-1">
                {item.location} • {item.area}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
