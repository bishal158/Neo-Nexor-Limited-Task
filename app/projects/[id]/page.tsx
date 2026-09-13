import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <main>
      <h1>Project Details: {id}</h1>
    </main>
  );
}
