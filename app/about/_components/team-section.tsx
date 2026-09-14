import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-surface border-y border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Studio Leadership"
          title="The architects and makers behind Neo."
          description="A multidisciplinary team united by an obsession with tectonic craft, natural illumination, and tactile finishes."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-sand rounded-[4px] border border-line overflow-hidden flex flex-col justify-between group hover:border-accent transition-colors"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-3.5 sm:p-5">
                  <h3 className="font-display text-base sm:text-lg text-ink font-normal">
                    {member.name}
                  </h3>
                  <p className="text-xs text-accent font-medium mt-0.5 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
