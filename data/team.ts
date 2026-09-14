export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ar. Rafiul Ahsan",
    role: "Principal Architect & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "With over 14 years of architectural leadership across South Asia and Europe, Rafiul directs the studio's spatial philosophy, focusing on tectonic honesty, natural light sculpting, and noble materials.",
  },
  {
    name: "Maliha Karim",
    role: "Lead Interior Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Specializing in luxury residential and boutique hospitality, Maliha weaves tactile textiles, bespoke cabinetry, and custom color harmonies to create spaces that comfort the human spirit.",
  },
  {
    name: "Tanvir Shahrin",
    role: "Senior Lighting & Spatial Strategist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "An expert in architectural lighting automation and circadian engineering, Tanvir crafts the nocturnal mood and concealed luminous details that define every Neo interior.",
  },
  {
    name: "Samira Chowdhury",
    role: "Head of Project Execution & Millwork",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Samira manages the studio's master carpenters, stone masons, and site engineers, enforcing millimeters-level precision, stringent budget control, and seamless turnkey handovers.",
  },
];
