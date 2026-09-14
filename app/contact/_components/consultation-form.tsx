"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import Button from "@/components/ui/button";
import CommonFieldset from "@/components/ui/common-fieldset";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                   */
/* -------------------------------------------------------------------------- */

const PROJECT_TYPES = [
  "Residential Interior",
  "Luxury Penthouse",
  "Commercial / Retail Space",
  "Office & Workplace",
  "Restaurant & Café",
  "Full Turnkey Renovation",
  "Space Planning Consultation",
  "Other Spatial Commission",
] as const;

/* -------------------------------------------------------------------------- */
/*  Types                                                                       */
/* -------------------------------------------------------------------------- */

interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  approxArea: string;
  projectType: string;
  message: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const prefilledProject = searchParams.get("project");
  const prefilledService = searchParams.get("service");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ConsultationFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      approxArea: "",
      projectType: PROJECT_TYPES[0],
      message: "",
    },
  });

  // Prefill message from URL query params
  useEffect(() => {
    if (prefilledProject) {
      setValue(
        "message",
        `I am interested in commissioning a project similar to: ${prefilledProject}.`
      );
    } else if (prefilledService) {
      setValue(
        "message",
        `I would like to schedule a consultation regarding: ${prefilledService}.`
      );
    }
  }, [prefilledProject, prefilledService, setValue]);

  const submittedName = watch("name");
  const submittedContact = watch("phone") || watch("email");

  const onSubmit: SubmitHandler<ConsultationFormData> = async (_data) => {
    // Simulate professional async submission
    await new Promise((resolve) => setTimeout(resolve, 900));
  };

  const handleReset = () => {
    reset();
  };

  /* ---- Success state ---------------------------------------------------- */
  if (isSubmitSuccessful) {
    return (
      <div className="bg-surface rounded-[4px] border border-line p-8 sm:p-12 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="font-display text-2xl text-ink font-normal">
            Consultation Request Received
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Thank you,{" "}
            <strong className="text-ink">{submittedName}</strong>. Our principal
            architectural team at Mohakhali DOHS has received your inquiry and
            will reach out via{" "}
            <strong className="text-ink">{submittedContact}</strong> within 24
            business hours.
          </p>
        </div>

        <div className="p-4 bg-sand rounded-[4px] border border-line text-xs text-ink-muted max-w-sm mx-auto">
          <p>Direct Studio Phone: +880 1627 277284</p>
          <p className="mt-1">Email: md@neonexor.com</p>
        </div>

        <Button onClick={handleReset} variant="outline" size="sm">
          Submit Another Request
        </Button>
      </div>
    );
  }

  /* ---- Form ------------------------------------------------------------- */
  return (
    <div className="bg-surface rounded-[4px] border border-line p-6 sm:p-8 lg:p-10">
      <div className="mb-6 space-y-1">
        <h3 className="font-display text-2xl text-ink font-normal">
          Request a Design Consultation
        </h3>
        <p className="text-xs sm:text-sm text-ink-muted">
          Fill in the details below to schedule an on-site or studio diagnostic
          consultation.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Row 1 — Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <CommonFieldset
            label="Full Name"
            required
            error={errors.name?.message}
          >
            {({ id, inputClassName }) => (
              <input
                id={id}
                type="text"
                placeholder="e.g. Tariqul Islam"
                className={inputClassName}
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
            )}
          </CommonFieldset>

          <CommonFieldset
            label="Phone Number"
            required
            error={errors.phone?.message}
          >
            {({ id, inputClassName }) => (
              <input
                id={id}
                type="tel"
                placeholder="e.g. +880 1711 XXXXXX"
                className={inputClassName}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[\d\s\-().]{7,20}$/,
                    message: "Enter a valid phone number",
                  },
                })}
              />
            )}
          </CommonFieldset>
        </div>

        {/* Row 2 — Email + Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <CommonFieldset
            label="Email Address"
            required
            error={errors.email?.message}
          >
            {({ id, inputClassName }) => (
              <input
                id={id}
                type="email"
                placeholder="e.g. client@domain.com"
                className={inputClassName}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            )}
          </CommonFieldset>

          <CommonFieldset
            label="Approximate Area / Location"
            hint="Optional — helps us prepare"
            error={errors.approxArea?.message}
          >
            {({ id, inputClassName }) => (
              <input
                id={id}
                type="text"
                placeholder="e.g. 4,200 sq ft, Gulshan 2"
                className={inputClassName}
                {...register("approxArea")}
              />
            )}
          </CommonFieldset>
        </div>

        {/* Project Type */}
        <CommonFieldset
          label="Project Typology"
          required
          error={errors.projectType?.message}
        >
          {({ id, inputClassName }) => (
            <select
              id={id}
              className={`${inputClassName} cursor-pointer`}
              {...register("projectType", {
                required: "Please select a project type",
              })}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          )}
        </CommonFieldset>

        {/* Message */}
        <CommonFieldset
          label="Project Scope & Special Requirements"
          required
          error={errors.message?.message}
        >
          {({ id, inputClassName }) => (
            <textarea
              id={id}
              rows={4}
              placeholder="Tell us about the property, your anticipated timeline, preferred materials, and spatial aspirations..."
              className={`${inputClassName} resize-y`}
              {...register("message", {
                required: "Please describe your project scope",
                minLength: {
                  value: 20,
                  message: "Please provide at least 20 characters",
                },
              })}
            />
          )}
        </CommonFieldset>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            icon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Transmitting..." : "Submit Consultation Request"}
          </Button>
        </div>
      </form>
    </div>
  );
}
