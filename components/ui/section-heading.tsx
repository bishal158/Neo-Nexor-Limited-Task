import React from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {subtitle && <p>{subtitle}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
