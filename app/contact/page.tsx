import React, { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/container";
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
    <div className="py-12 md:py-20 bg-base min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
            Direct Atelier Engagement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-normal leading-tight">
            Schedule a Design Consultation
          </h1>
          <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed max-w-[65ch]">
            Connect directly with our principal architects to evaluate your property, review spatial layouts, or commission a complete turnkey renovation.
          </p>
        </div>

        {/* Contact Info & Form Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
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
      </Container>
    </div>
  );
}
