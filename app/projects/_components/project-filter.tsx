import React from "react";
import { ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return <div role="tablist"></div>;
}
