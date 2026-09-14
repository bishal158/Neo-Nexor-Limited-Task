import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Award, Building, Users2, ShieldCheck } from "lucide-react";

export default function Achievements() {
  const stats = [
    {
      icon: <Building className="w-5 h-5 text-accent" />,
      value: "140+",
      label: "Executed Commissions",
      desc: "Residential estates, commercial flagships, and corporate studios.",
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      value: "12",
      label: "Design Accolades",
      desc: "Recognized for sustainable materiality and residential excellence.",
    },
    {
      icon: <Users2 className="w-5 h-5 text-accent" />,
      value: "99.4%",
      label: "Client Retention & Referrals",
      desc: "9 out of 10 clients return for their next property or recommend us.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      value: "14 yrs",
      label: "Architectural Practice",
      desc: "Consistent leadership in Dhaka's premier neighborhoods.",
    },
  ];

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones &amp; Impact"
          title="A track record of architectural consistency."
          description="Over a decade of transforming Dhaka's built environments with restraint, precision, and craft."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-7 bg-surface rounded-[4px] border border-line flex flex-col justify-between hover:border-accent transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-sand border border-line flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <span className="font-display text-3xl sm:text-4xl text-ink font-light block mb-1">
                  {stat.value}
                </span>
                <p className="text-sm font-medium text-ink mb-2">{stat.label}</p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
