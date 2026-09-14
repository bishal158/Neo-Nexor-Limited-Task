import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col mb-10 md:mb-14 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="text-accent text-sm font-medium mb-2 tracking-normal">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink font-normal leading-[1.15] max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-muted text-sm sm:text-base leading-relaxed max-w-[70ch]">
          {description}
        </p>
      )}
    </div>
  );
}
