"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-surface border-t border-line text-ink transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand & Studio Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl text-ink tracking-tight">
                NEO
                <span className="font-sans text-xs font-medium text-accent ml-2 uppercase tracking-widest">
                  Interior Studio
                </span>
              </span>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              Neo Interior Studio is an architectural interior practice by Neo Nexor Ltd. We craft calm, tactile sanctuaries and elevated commercial environments defined by noble materials, spatial proportion, and timeless simplicity.
            </p>
            <div className="pt-2 text-xs text-ink-muted flex flex-col gap-1">
              <span className="font-medium text-ink">A brand of Neo Nexor Ltd</span>
              <span>Mohakhali DOHS, Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-accent font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Portfolio & Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Design Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  About the Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Categories */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-accent font-semibold">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projects?category=Residential"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Residential Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Commercial"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Office"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Workplace Studios
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Restaurant"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Hospitality & Cafés
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Luxury%20Interior"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Luxury Penthouses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-accent font-semibold">
              Studio Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+8801627277284"
                  className="hover:text-ink transition-colors"
                >
                  +880 1627 277284
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:md@neonexor.com"
                  className="hover:text-ink transition-colors"
                >
                  md@neonexor.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-ink-muted mb-2">
                Receive our curated journal on spatial aesthetics and materials.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-accent bg-base p-2.5 rounded-[4px] border border-line">
                  <Check className="w-4 h-4" />
                  <span>Thank you for subscribing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-base border border-line rounded-l-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-accent text-surface px-3 py-2 rounded-r-[4px] hover:bg-accent-deep transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>
            © {new Date().getFullYear()} Neo Interior Studio (Neo Nexor Ltd). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Website: <a href="https://www.neonexor.com" target="_blank" rel="noreferrer" className="underline hover:text-ink">neonexor.com</a></span>
            <span className="hidden sm:inline">•</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
