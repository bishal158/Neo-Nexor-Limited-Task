import React from "react";
import type { Metadata } from "next";
import StudioStory from "./_components/studio-story";
import VisionMission from "./_components/vision-mission";
import Achievements from "./_components/achievements";
import TeamSection from "./_components/team-section";
import ConsultationCTA from "../(home)/_components/consultation-cta";

export const metadata: Metadata = {
  title: "About Us | Neo Interior Studio",
  description:
    "Learn about Neo Interior Studio (Neo Nexor Ltd)—our architectural philosophy, leadership team, spatial vision, and completed milestones across Dhaka, Bangladesh.",
};

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12 bg-sand min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1 sm:mb-2">
            The Studio Story &amp; Philosophy
          </span>
          <h1 className="font-display text-2xl sm:text-5xl text-ink font-normal leading-tight">
            About Neo Interior Studio
          </h1>
          <p className="mt-2.5 text-ink-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            An architectural practice founded on the belief that spaces should be restful, tactile, and built to outlive fleeting aesthetic trends.
          </p>
        </div>
      </div>

      {/* Origin & Philosophy */}
      <StudioStory />

      {/* Vision, Mission & Values */}
      <VisionMission />

      {/* Milestones & Achievements */}
      <Achievements />

      {/* Leadership Team */}
      <TeamSection />

      {/* Consultation Banner */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ConsultationCTA />
      </div>
    </div>
  );
}
