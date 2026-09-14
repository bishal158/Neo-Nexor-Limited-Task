"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/button";
import DesktopNav from "./_components/desktop-nav";
import MobileSidebar from "./_components/mobile-sidebar";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const close = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-sand/95 backdrop-blur-md border-b border-line shadow-xs py-3.5"
            : "bg-sand/80 backdrop-blur-xs border-b border-line/60 py-5"
        }`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col items-start transition-opacity hover:opacity-90"
          >
            <span className="font-display text-xl sm:text-2xl text-ink font-normal tracking-tight">
              NEO
              <span className="font-sans text-xs sm:text-sm font-medium text-accent ml-2 uppercase tracking-widest">
                Interior Studio
              </span>
            </span>
            <span className="text-[10px] text-ink-muted uppercase tracking-wider hidden sm:block">
              Architecture &amp; Spatial Design
            </span>
          </Link>

          {/* Desktop nav */}
          <DesktopNav />

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+8801627277284"
              className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+880 1627 277284</span>
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-sidebar"
            className="md:hidden p-2 text-ink hover:text-accent rounded-[4px] border border-line bg-surface/50 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile sidebar — rendered outside header so it can cover full viewport */}
      <MobileSidebar isOpen={mobileMenuOpen} onClose={close} />
    </>
  );
}
