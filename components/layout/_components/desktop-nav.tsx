"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./nav-links";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors duration-200 relative py-1 ${
              isActive
                ? "text-ink font-semibold"
                : "text-ink-muted hover:text-ink font-normal"
            }`}
          >
            {link.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
