// Shared nav links data — imported by both desktop nav and mobile sidebar
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
