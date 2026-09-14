import React from "react";

export default function ProjectsLoading() {
    return (
        <div className="py-12 md:py-20 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-10 space-y-3">
                    <div className="h-4 w-44 bg-line/60 rounded-[3px]" />
                    <div className="h-10 w-96 max-w-full bg-line/60 rounded-[4px]" />
                    <div className="h-4 w-full max-w-xl bg-line/40 rounded-[3px]" />
                    <div className="h-4 w-4/5 max-w-lg bg-line/40 rounded-[3px]" />
                </div>

                {/* Filter Pills Skeleton */}
                <div className="flex flex-wrap items-center gap-2 py-4 border-b border-line">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="h-7 w-24 bg-surface border border-line rounded-[4px]" />
                    ))}
                </div>

                {/* Results Counter Skeleton */}
                <div className="py-6 flex items-center justify-between">
                    <div className="h-4 w-40 bg-line/40 rounded-[3px]" />
                </div>

                {/* Projects Grid Skeleton (6 Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-surface rounded-[4px] border border-line overflow-hidden space-y-4 pb-6"
                        >
                            <div className="aspect-[16/11] bg-line/40 relative">
                                <div className="absolute top-4 left-4 h-5 w-20 bg-surface/80 rounded-[3px]" />
                            </div>
                            <div className="px-6 space-y-3">
                                <div className="h-6 w-3/4 bg-line/60 rounded-[4px]" />
                                <div className="h-3.5 w-full bg-line/40 rounded-[3px]" />
                                <div className="h-3.5 w-4/5 bg-line/40 rounded-[3px]" />
                                <div className="pt-4 border-t border-line/60 flex justify-between">
                                    <div className="h-3 w-20 bg-line/40 rounded-[2px]" />
                                    <div className="h-3 w-16 bg-line/40 rounded-[2px]" />
                                    <div className="h-3 w-12 bg-line/40 rounded-[2px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Banner Skeleton */}
                <div className="bg-surface rounded-[4px] border border-line p-8 mt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-2 flex flex-col items-center">
                                <div className="h-8 w-16 bg-line/60 rounded-[4px]" />
                                <div className="h-3 w-24 bg-line/40 rounded-[3px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
