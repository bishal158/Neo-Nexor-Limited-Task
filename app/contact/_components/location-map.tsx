import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function LocationMap() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=House+252+Road+18+Mohakhali+DOHS+Dhaka";

  return (
    <div className="bg-surface rounded-[4px] border border-line overflow-hidden">
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4" />
            <span>Atelier Location</span>
          </div>
          <h3 className="font-display text-xl text-ink font-normal">
            Mohakhali DOHS, Lake Road
          </h3>
          <p className="text-xs text-ink-muted mt-0.5">
            House 252 (3rd Floor), Road 18 (Lake Road), Dhaka
          </p>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 bg-sand border border-line rounded-[4px] text-ink hover:text-accent hover:border-accent transition-colors self-start sm:self-auto shrink-0"
        >
          <Navigation className="w-3.5 h-3.5 text-accent" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>

      {/* Map Embed Container */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-sand overflow-hidden">
        <iframe
          title="Neo Interior Studio Office Location in Mohakhali DOHS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.104257123999!2d90.39201487593678!3d23.779294978650383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76ecf5b9d33%3A0xe54ef5a242f2aa2c!2sMohakhali%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
