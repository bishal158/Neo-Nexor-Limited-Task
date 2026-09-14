import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="Curated spaces of quiet permanence."
            description="Explore our recent residential sanctuaries, contemporary workplaces, and luxury commercial interiors."
            className="mb-0 md:mb-0"
          />
          <Button
            href="/projects"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block bg-surface rounded-[4px] border border-line overflow-hidden transition-all duration-300"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded-[3px] border border-line/60">
                  <span className="text-[11px] font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta & Caption */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink font-normal group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-ink-muted mt-1">
                      {project.location} • {project.area} • {project.year}
                    </p>
                  </div>
                  <div className="p-2 rounded-[4px] border border-line text-ink-muted group-hover:text-accent group-hover:border-accent transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-ink-muted leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
