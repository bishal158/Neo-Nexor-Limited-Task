"use client";

import React from "react";
import { ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<string, number>;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 py-2 sm:py-3 border-b border-line">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = counts[cat] || 0;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-[4px] transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
              isActive
                ? "bg-accent text-surface border-accent font-semibold"
                : "bg-surface text-ink-muted border-line hover:border-accent hover:text-ink"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-[2px] ${
                isActive ? "bg-surface/20 text-surface" : "bg-sand text-ink-muted"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
