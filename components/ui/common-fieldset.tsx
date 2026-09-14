"use client";

import React, { useId } from "react";

/** Base input class — shared across all native form controls. */
export const inputClass =
  "w-full text-xs sm:text-sm px-3.5 py-2.5 bg-sand border rounded-[4px] " +
  "focus:outline-hidden transition-colors text-ink placeholder:text-ink-muted/60 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

/** Resolved border colour: red when error, default border-line otherwise. */
export function resolveInputBorder(hasError: boolean) {
  return hasError
    ? "border-red-400 focus:border-red-500"
    : "border-line focus:border-accent";
}

interface CommonFieldsetProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: (props: {
    id: string;
    inputClassName: string;
    hasError: boolean;
  }) => React.ReactNode;
  className?: string;
}

export default function CommonFieldset({
  label,
  required = false,
  error,
  hint,
  children,
  className = "",
}: CommonFieldsetProps) {
  const uid = useId();
  const hasError = Boolean(error);
  const inputClassName = `${inputClass} ${resolveInputBorder(hasError)}`;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={uid}
        className="flex items-center gap-0.5 text-xs font-medium text-ink select-none"
      >
        {label}
        {required && (
          <span className="text-accent ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children({ id: uid, inputClassName, hasError })}

      {hasError && (
        <p
          className="text-[11px] text-red-500 leading-snug"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}

      {!hasError && hint && (
        <p className="text-[11px] text-ink-muted/70 leading-snug">{hint}</p>
      )}
    </div>
  );
}
