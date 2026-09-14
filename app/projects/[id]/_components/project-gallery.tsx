"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const nextImage = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        (activeModalIndex - 1 + gallery.length) % gallery.length
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-ink font-normal">
          Visual Documentation
        </h2>
        <span className="text-xs text-ink-muted">
          {gallery.length} High-Resolution Photographs
        </span>
      </div>

      {/* Mosaic Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {gallery.map((imgUrl, index) => {
          // Span variations for mosaic effect
          const spanClass =
            index === 0
              ? "lg:col-span-8 aspect-[16/10]"
              : index === 1
                ? "lg:col-span-4 aspect-[4/5]"
                : index === 2
                  ? "lg:col-span-4 aspect-[4/5]"
                  : index === 3
                    ? "lg:col-span-4 aspect-[4/5]"
                    : "lg:col-span-4 aspect-[4/5]";

          return (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative rounded-[4px] overflow-hidden border border-line bg-surface cursor-pointer w-full text-left ${spanClass}`}
            >
              <Image
                src={imgUrl}
                alt={`${title} - view ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2 bg-surface/90 rounded-[4px] text-ink flex items-center gap-1.5 text-xs font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-[4px] bg-surface text-ink hover:text-accent transition-colors z-50"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-[4px] bg-surface/80 hover:bg-surface text-ink hover:text-accent transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-[4px] bg-surface/80 hover:bg-surface text-ink hover:text-accent transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={gallery[activeModalIndex]}
                alt={`${title} - enlarged view`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs text-sand/80">
              {title} • {activeModalIndex + 1} of {gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
