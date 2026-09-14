import React from "react";

export default function ProjectStatsBanner() {
  const stats = [
    { label: "Documented Case Studies", value: "9+" },
    { label: "Completed Projects", value: "140+" },
    { label: "Curated Floor Area", value: "32,000+ sq ft" },
    { label: "Client Recommendation", value: "99.4%" },
  ];

  return (
    <div className="bg-surface rounded-[4px] border border-line py-2.5 sm:py-5 px-3 sm:px-6 md:p-8 mt-4 sm:mt-8 md:mt-12 mb-1 sm:mb-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-0.5 sm:space-y-1">
            <span className="font-display text-lg sm:text-3xl text-ink font-normal">
              {stat.value}
            </span>
            <p className="text-[10px] sm:text-xs text-ink-muted leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
