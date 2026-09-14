import React from "react";
import HeroSection from "./_components/hero-section";
import AboutPreview from "./_components/about-preview";
import FeaturedProjects from "./_components/featured-projects";
import ServicesOverview from "./_components/services-overview";
import DesignProcess from "./_components/design-process";
import WhyChooseUs from "./_components/why-choose-us";
import Testimonials from "./_components/testimonials";
import ConsultationCTA from "./_components/consultation-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesOverview />
      <DesignProcess />
      <WhyChooseUs />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
