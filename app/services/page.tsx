import React from "react";
import type { Metadata } from "next";
import ServiceCard from "./_components/service-card";
import ServiceProcess from "./_components/service-process";
import ServiceFAQ from "./_components/service-faq";
import ConsultationCTA from "../(home)/_components/consultation-cta";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Interior Design Services | Neo Interior Studio",
  description:
    "Explore our 8 core disciplines: residential interior design, commercial & office spaces, space planning, 3D visualization, furniture selection, and turnkey renovations.",
};

export default function ServicesPage() {
  return (
    <div className="py-8 md:py-12 bg-sand min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1 sm:mb-2">
            Integrated Architectural &amp; Interior Services
          </span>
          <h1 className="font-display text-2xl sm:text-5xl text-ink font-normal leading-tight">
            Our Design Capabilities
          </h1>
          <p className="mt-2.5 text-ink-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            From concept sketches and spatial diagnosis to turnkey fabrication and white-glove site delivery, we offer an end-to-end architectural interior practice.
          </p>
        </div>

        {/* 8 Core Services Cards */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Engagement Methodology */}
        <ServiceProcess />

        {/* FAQ Accordion */}
        <ServiceFAQ />
      </div>

      {/* Consultation Banner */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ConsultationCTA />
      </div>
    </div>
  );
}
