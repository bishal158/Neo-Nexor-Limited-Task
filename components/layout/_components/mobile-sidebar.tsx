"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";
import { NAV_LINKS } from "./nav-links";

/* -------------------------------------------------------------------------- */
/*  Animation constants                                                         */
/* -------------------------------------------------------------------------- */

/** Ease curve for slide — matches browser native sheet feel */
const EASE = "easeInOut" as const;

const SIDEBAR_ANIM = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { ease: EASE, duration: 0.25 } },
  exit:    { x: "100%", transition: { ease: EASE, duration: 0.2 } },
};

const BACKDROP_ANIM = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
};

/* -------------------------------------------------------------------------- */
/*  Sub-component: single nav item with staggered entrance                     */
/* -------------------------------------------------------------------------- */

function SidebarNavItem({
  href,
  label,
  index,
  onClose,
}: {
  href: string;
  label: string;
  index: number;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.06 + index * 0.05, duration: 0.2, ease: "easeOut" },
      }}
    >
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center justify-between px-3 py-3 rounded-sm text-sm font-medium transition-colors ${
          isActive
            ? "bg-accent/8 text-accent border border-accent/20"
            : "text-ink-muted hover:text-ink hover:bg-line/30"
        }`}
      >
        <span>{label}</span>
        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
      </Link>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main sidebar component                                                      */
/* -------------------------------------------------------------------------- */

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — plain opacity, NO backdrop-blur (perf killer on mobile) */}
          <motion.div
            key="backdrop"
            {...BACKDROP_ANIM}
            onClick={onClose}
            className="md:hidden fixed inset-0 z-40 bg-ink/40"
            aria-hidden="true"
          />

          {/* Sidebar panel — GPU-composited translateX only */}
          <motion.aside
            id="mobile-sidebar"
            key="sidebar"
            {...SIDEBAR_ANIM}
            style={{ willChange: "transform" }}
            className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-sand border-l border-line shadow-2xl flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <span className="font-display text-lg text-ink font-normal tracking-tight">
                NEO
                <span className="font-sans text-xs font-medium text-accent ml-2 uppercase tracking-widest">
                  Studio
                </span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="p-1.5 text-ink-muted hover:text-ink rounded-[4px] hover:bg-line/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 pt-6 space-y-1 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <SidebarNavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  index={i}
                  onClose={onClose}
                />
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 pb-8 pt-6 border-t border-line space-y-4">
              <a
                href="tel:+8801627277284"
                className="flex items-center gap-2 text-xs text-ink-muted hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>+880 1627 277284</span>
              </a>
              <p className="text-[11px] text-ink-muted leading-snug">
                House 252 (3rd Floor), Road 18 (Lake Road),
                <br />
                Mohakhali DOHS, Dhaka
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Book Consultation
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
