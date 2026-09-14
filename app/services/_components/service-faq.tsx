"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const FAQS = [
  {
    question: "How do you structure design fees and project pricing?",
    answer:
      "Our design fee is structured on a per-square-foot basis for initial space planning, concept design, and 3D visualization. For turnkey execution, we provide an itemized Bill of Quantities (BOQ) with fixed material costs and transparent milestone billing.",
  },
  {
    question: "What is the typical timeline for an interior project?",
    answer:
      "A typical residential project (3,000–5,000 sq ft) takes 4–6 weeks for design development and 12–16 weeks for complete turnkey fabrication and on-site fit-out. Commercial projects can be expedited through modular joinery fabrication.",
  },
  {
    question: "Do you handle custom furniture and millwork fabrication?",
    answer:
      "Yes. We operate our own dedicated carpentry atelier with master craftsmen specializing in natural oak, walnut, fluted woodwork, and upholstered seating, ensuring superior quality control and exact fit.",
  },
  {
    question: "Can clients provide their own materials or contractors?",
    answer:
      "While we offer complete turnkey management, we also provide 'Design-Only' consultancy packages where we furnish complete architectural drawings, specifications, and provide site inspection oversight.",
  },
  {
    question: "Where are you located and what regions do you serve?",
    answer:
      "Our studio is located at House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka. We serve residential and commercial clients across Dhaka (Gulshan, Banani, Baridhara, Dhanmondi, Uttara) and select nationwide projects.",
  },
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Clarifying our engagement &amp; process."
        description="Everything you need to know about commissioning Neo Interior Studio for your home or commercial space."
        align="center"
      />

      <div className="space-y-3 mt-8">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-surface rounded-[4px] border border-line overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base sm:text-lg text-ink font-normal">
                  {faq.question}
                </span>
                <span className="p-1 rounded-[3px] bg-sand text-accent shrink-0">
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-line/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
