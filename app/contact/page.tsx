import React, { Suspense } from "react";
import type { Metadata } from "next";
import ContactInfoCard from "./_components/contact-info-card";
import ConsultationForm from "./_components/consultation-form";
import LocationMap from "./_components/location-map";

export const metadata: Metadata = {
  title: "Contact & Consultation | Neo Interior Studio",
  description:
    "Schedule an architectural interior design consultation with Neo Interior Studio (Neo Nexor Ltd). Located in Mohakhali DOHS, Dhaka. Phone: +880 1627 277284.",
};

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12 bg-sand min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1 sm:mb-2">
            Direct Atelier Engagement
          </span>
          <h1 className="font-display text-2xl sm:text-5xl text-ink font-normal leading-tight">
            Schedule a Design Consultation
          </h1>
          <p className="mt-2.5 text-ink-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            Connect directly with our principal architects to evaluate your property, review spatial layouts, or commission a complete turnkey renovation.
          </p>
        </div>

        {/* Contact Info & Form Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ContactInfoCard />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Suspense fallback={<div className="p-10 text-center bg-surface border border-line">Loading consultation form...</div>}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>

        {/* Map Section */}
        <LocationMap />
      </div>
    </div>
  );
}
