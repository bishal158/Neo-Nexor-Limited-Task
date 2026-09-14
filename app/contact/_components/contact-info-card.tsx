import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <div className="space-y-6">
      <div className="bg-surface p-7 rounded-[4px] border border-line space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
            Official Studio Atelier
          </span>
          <h2 className="font-display text-2xl text-ink font-normal">
            Neo Nexor Ltd
          </h2>
          <p className="text-xs text-ink-muted mt-1">
            Interior Architecture &amp; Spatial Design Division
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-ink-muted border-t border-line/60 pt-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-[4px] bg-base text-accent border border-line shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-ink block font-medium">Studio Address:</strong>
              <p className="mt-0.5">
                House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-[4px] bg-base text-accent border border-line shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-ink block font-medium">Direct Telephone:</strong>
              <a
                href="tel:+8801627277284"
                className="mt-0.5 block hover:text-accent transition-colors"
              >
                +880 1627 277284
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-[4px] bg-base text-accent border border-line shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-ink block font-medium">Email Enquiries:</strong>
              <a
                href="mailto:md@neonexor.com"
                className="mt-0.5 block hover:text-accent transition-colors"
              >
                md@neonexor.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-[4px] bg-base text-accent border border-line shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-ink block font-medium">Visiting Hours:</strong>
              <p className="mt-0.5">Saturday – Thursday: 9:00 AM – 7:00 PM</p>
              <p className="text-[11px] text-ink-muted/80">Friday: By Prior Appointment Only</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-base rounded-[4px] border border-line flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
        <p className="text-xs text-ink-muted">
          All client consultations include a preliminary 30-minute spatial diagnostic review at no obligation.
        </p>
      </div>
    </div>
  );
}
