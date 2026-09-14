"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import Button from "@/components/ui/button";

const PROJECT_TYPES = [
  "Residential Interior",
  "Luxury Penthouse",
  "Commercial / Retail Space",
  "Office & Workplace",
  "Restaurant & Café",
  "Full Turnkey Renovation",
  "Space Planning Consultation",
  "Other Spatial Commission",
];

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const prefilledProject = searchParams.get("project");
  const prefilledService = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    approxArea: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in commissioning a project similar to: ${prefilledProject}.`,
      }));
    } else if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to schedule a consultation regarding: ${prefilledService}.`,
      }));
    }
  }, [prefilledProject, prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate professional async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: PROJECT_TYPES[0],
      approxArea: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
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
            Thank you, <strong className="text-ink">{formData.name}</strong>. Our principal architectural team at Mohakhali DOHS has received your inquiry and will reach out via <strong className="text-ink">{formData.phone || formData.email}</strong> within 24 business hours.
          </p>
        </div>

        <div className="p-4 bg-base rounded-[4px] border border-line text-xs text-ink-muted max-w-sm mx-auto">
          <p>Direct Studio Phone: +880 1627 277284</p>
          <p className="mt-1">Email: md@neonexor.com</p>
        </div>

        <Button onClick={handleReset} variant="outline" size="sm">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-[4px] border border-line p-6 sm:p-8 lg:p-10">
      <div className="mb-6 space-y-1">
        <h3 className="font-display text-2xl text-ink font-normal">
          Request a Design Consultation
        </h3>
        <p className="text-xs sm:text-sm text-ink-muted">
          Fill in the details below to schedule an on-site or studio diagnostic consultation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-medium text-ink">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Tariqul Islam"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted/60 transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-medium text-ink">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="e.g. +880 1711 XXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted/60 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-medium text-ink">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. client@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted/60 transition-colors"
            />
          </div>

          {/* Approx Area / Location */}
          <div className="space-y-1.5">
            <label htmlFor="approxArea" className="block text-xs font-medium text-ink">
              Approximate Area / Location
            </label>
            <input
              type="text"
              id="approxArea"
              name="approxArea"
              placeholder="e.g. 4,200 sq ft, Gulshan 2"
              value={formData.approxArea}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted/60 transition-colors"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-1.5">
          <label htmlFor="projectType" className="block text-xs font-medium text-ink">
            Project Typology <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink transition-colors cursor-pointer"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-medium text-ink">
            Project Scope &amp; Special Requirements <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about the property, your anticipated timeline, preferred materials, and spatial aspirations..."
            value={formData.message}
            onChange={handleChange}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-base border border-line rounded-[4px] focus:outline-hidden focus:border-accent text-ink placeholder:text-ink-muted/60 transition-colors resize-y"
          />
        </div>

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
