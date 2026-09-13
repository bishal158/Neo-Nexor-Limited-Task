export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  client: string;
  location: string;
  year: number;
  area: string;
  image: string;
  gallery: string[];
  description: string;
  concept: string;
  scope: string[];
  materials: string[];
  featured?: boolean;
}

export type ProjectCategory =
  | "All"
  | "Residential"
  | "Living Room"
  | "Bedroom"
  | "Kitchen"
  | "Office"
  | "Restaurant"
  | "Commercial"
  | "Luxury Interior";
