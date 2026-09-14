import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/button";

export default function ConsultationCTA() {
  return (
    <section className="bg-accent-deep text-sand py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs uppercase tracking-widest text-highlight font-semibold">
            Begin Your Project
          </span>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-sand font-light leading-tight">
            Ready to shape an interior of quiet elegance?
          </h2>

          <p className="text-sand/80 text-xs sm:text-base leading-relaxed max-w-[60ch] mx-auto">
            Whether you are acquiring a new residence, refurbishing an existing estate, or developing a flagship commercial space, our studio is ready to consult.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="highlight"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Design Consultation
            </Button>
            <a
              href="tel:+8801627277284"
              className="inline-flex items-center gap-2 text-sm text-sand hover:text-highlight transition-colors px-4 py-3"
            >
              <Phone className="w-4 h-4 text-highlight" />
              <span>+880 1627 277284</span>
            </a>
          </div>

          <p className="text-xs text-sand/60 pt-4">
            Studio Location: House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka
          </p>
        </div>
      </div>
    </section>
  );
}
