"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SectionHeading from "@/components/ui/section-heading";
import ProjectFilter from "./_components/project-filter";
import ProjectCard from "./_components/project-card";
import ProjectStatsBanner from "./_components/project-stats-banner";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Residential",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Office",
  "Restaurant",
  "Commercial",
  "Luxury Interior",
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProjectCategory) || "All";

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  );

  // Compute counts per category
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        map[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return map;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-3 sm:py-6 md:py-12 bg-sand min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1 sm:mb-2">
            Selected Works &amp; Spatial Case Studies
          </span>
          <h1 className="font-display text-2xl sm:text-5xl text-ink font-normal leading-tight">
            Portfolio of Architecture &amp; Interiors
          </h1>
          <p className="mt-2.5 text-ink-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            Browse our documented interior architecture projects across residential, workplace, and commercial domains. Filter by typology or explore detailed case studies.
          </p>
        </div>

        {/* Filter Controls */}
        <ProjectFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />

        {/* Results Counter */}
        <div className="py-2.5 sm:py-3.5 flex items-center justify-between text-xs text-ink-muted">
          <span>
            Showing <strong className="text-ink">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? "project" : "projects"} in <strong className="text-accent">{activeCategory}</strong>
          </span>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="text-accent hover:underline cursor-pointer font-medium text-xs"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-6 sm:py-12 bg-surface rounded-[4px] border border-line p-4 sm:p-8">
            <p className="font-display text-lg sm:text-xl text-ink">No projects found in this category.</p>
            <p className="text-[11px] sm:text-xs text-ink-muted mt-1.5">Try selecting another filter or viewing all projects.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-3 inline-block text-xs text-accent font-medium hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* Portfolio Stats Banner */}
        <ProjectStatsBanner />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-ink-muted">Loading portfolio...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
