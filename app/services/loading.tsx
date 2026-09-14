import React from "react";

export default function ServicesLoading() {
  return (
    <div className="py-12 md:py-20 bg-base min-h-screen animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="h-4 w-52 bg-line/60 rounded-[3px]" />
          <div className="h-10 w-80 max-w-full bg-line/60 rounded-[4px]" />
          <div className="h-4 w-full max-w-xl bg-line/40 rounded-[3px]" />
          <div className="h-4 w-3/4 max-w-lg bg-line/40 rounded-[3px]" />
        </div>

        {/* Alternating Service Cards Skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => {
            const isReversed = i % 2 === 0;

            return (
              <div
                key={i}
                className="bg-surface rounded-[4px] border border-line p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? "lg:col-start-6" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[4px] bg-base border border-line" />
                      <div className="h-3 w-20 bg-line/40 rounded-[2px]" />
                    </div>

                    <div className="space-y-2">
                      <div className="h-7 w-3/4 bg-line/60 rounded-[4px]" />
                      <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                      <div className="h-4 w-5/6 bg-line/40 rounded-[3px]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="h-4 w-40 bg-line/40 rounded-[2px]" />
                      ))}
                    </div>

                    <div className="h-4 w-32 bg-line/60 rounded-[3px] pt-2" />
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-[4px] bg-base border border-line" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
