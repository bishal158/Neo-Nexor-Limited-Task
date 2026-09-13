import { ProjectCategory } from "@/types/project";

export interface FilterOption {
  label: string;
  value: ProjectCategory;
  count?: number;
}
