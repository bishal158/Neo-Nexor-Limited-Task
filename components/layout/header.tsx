"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import Button from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/95 backdrop-blur-md border-b border-line shadow-xs py-3.5"
          : "bg-base/80 backdrop-blur-xs border-b border-line/60 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex flex-col items-start transition-opacity hover:opacity-90"
        >
          <span className="font-display text-xl sm:text-2xl text-ink font-normal tracking-tight">
            NEO
            <span className="font-sans text-xs sm:text-sm font-medium text-accent ml-2 uppercase tracking-widest">
              Interior Studio
            </span>
          </span>
          <span className="text-[10px] text-ink-muted uppercase tracking-wider hidden sm:block">
            Architecture & Spatial Design
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

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

        {/* Action Button & Quick Contact */}
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-ink hover:text-accent rounded-[4px] border border-line bg-surface/50 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-base/98 border-b border-line shadow-lg backdrop-blur-md px-6 py-8 animate-in slide-in-from-top-2 duration-200 z-40">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg py-2 flex items-center justify-between border-b border-line/40 ${
                    isActive
                      ? "text-ink font-medium text-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-line flex flex-col gap-4">
            <div className="text-xs text-ink-muted flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+880 1627 277284</span>
            </div>
            <p className="text-xs text-ink-muted">
              House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center mt-2"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
