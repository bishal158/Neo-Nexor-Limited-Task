import React from "react";

export default function ProjectsLoading() {
    return (
        <div className="py-3 sm:py-6 md:py-12 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8 space-y-1.5 sm:space-y-3">
                    <div className="h-3.5 sm:h-4 w-32 sm:w-44 bg-line/60 rounded-[3px]" />
                    <div className="h-7 sm:h-12 w-72 sm:w-96 max-w-full bg-line/60 rounded-[4px]" />
                    <div className="h-4 sm:h-5 w-full max-w-xl bg-line/40 rounded-[3px]" />
                    <div className="h-4 sm:h-5 w-4/5 max-w-lg bg-line/40 rounded-[3px]" />
                </div>

                {/* Filter Pills Skeleton */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 py-2 sm:py-3 border-b border-line">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="h-6 sm:h-7 w-20 sm:w-24 bg-surface border border-line rounded-[4px]" />
                    ))}
                </div>

                {/* Results Counter Skeleton */}
                <div className="py-2 sm:py-3.5 flex items-center justify-between">
                    <div className="h-3.5 sm:h-4 w-32 sm:w-40 bg-line/40 rounded-[3px]" />
                </div>

                {/* Projects Grid Skeleton (6 Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-surface rounded-[4px] border border-line overflow-hidden space-y-3 sm:space-y-4 pb-3 sm:pb-5"
                        >
                            <div className="aspect-[16/10] sm:aspect-[16/11] bg-line/40 relative">
                                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 h-4 sm:h-5 w-16 sm:w-20 bg-surface/80 rounded-[3px]" />
                            </div>
                            <div className="px-3 sm:px-6 space-y-2 sm:space-y-3">
                                <div className="h-5 sm:h-6 w-3/4 bg-line/60 rounded-[4px]" />
                                <div className="h-3 sm:h-3.5 w-full bg-line/40 rounded-[3px]" />
                                <div className="h-3 sm:h-3.5 w-4/5 bg-line/40 rounded-[3px]" />
                                <div className="pt-2.5 sm:pt-4 border-t border-line/60 flex justify-between">
                                    <div className="h-2.5 sm:h-3 w-16 sm:w-20 bg-line/40 rounded-[2px]" />
                                    <div className="h-2.5 sm:h-3 w-12 sm:w-16 bg-line/40 rounded-[2px]" />
                                    <div className="h-2.5 sm:h-3 w-10 sm:w-12 bg-line/40 rounded-[2px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Banner Skeleton */}
                <div className="bg-surface rounded-[4px] border border-line py-2.5 sm:py-5 px-3 sm:px-6 md:p-8 mt-4 sm:mt-8 md:mt-12 mb-1 sm:mb-3">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-1 sm:space-y-2 flex flex-col items-center">
                                <div className="h-6 sm:h-8 w-14 sm:w-16 bg-line/60 rounded-[4px]" />
                                <div className="h-2.5 sm:h-3 w-20 sm:w-24 bg-line/40 rounded-[3px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
