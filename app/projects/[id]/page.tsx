import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/container";
import ProjectHero from "./_components/project-hero";
import ProjectGallery from "./_components/project-gallery";
import ProjectSpecs from "./_components/project-specs";
import RelatedProjects from "./_components/related-projects";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Neo Interior Studio",
    };
  }

  return {
    title: `${project.title} | Neo Interior Studio`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} - Neo Interior Studio`,
      description: project.subtitle,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-base min-h-screen">
      <Container>
        <div className="space-y-12">
          {/* Project Hero Header & Metadata */}
          <ProjectHero project={project} />

          {/* Image Gallery */}
          <ProjectGallery gallery={project.gallery} title={project.title} />

          {/* Specifications, Narrative & Scope */}
          <ProjectSpecs project={project} />

          {/* Related Projects */}
          <RelatedProjects
            currentProjectId={project.id}
            category={project.category}
          />
        </div>
      </Container>
    </div>
  );
}
