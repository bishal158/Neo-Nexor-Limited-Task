import React from "react";

export default function ProjectStatsBanner() {
  const stats = [
    { label: "Documented Case Studies", value: "9+" },
    { label: "Completed Projects", value: "140+" },
    { label: "Curated Floor Area", value: "32,000+ sq ft" },
    { label: "Client Recommendation", value: "99.4%" },
  ];

  return (
    <div className="bg-surface rounded-[4px] border border-line p-6 sm:p-8 mt-16 mb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <span className="font-display text-2xl sm:text-3xl text-ink font-light">
              {stat.value}
            </span>
            <p className="text-xs text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
