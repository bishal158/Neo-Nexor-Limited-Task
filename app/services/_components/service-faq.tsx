"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="py-6 sm:py-10 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Clarifying our engagement &amp; process."
        description="Everything you need to know about commissioning Neo Interior Studio for your home or commercial space."
        align="center"
      />

      <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
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
                className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm sm:text-base text-ink font-normal">
                  {faq.question}
                </span>
                <span className="p-1 rounded-[3px] bg-sand text-accent shrink-0 flex items-center justify-center transition-colors">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden border-t border-line/40"
                  >
                    <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
