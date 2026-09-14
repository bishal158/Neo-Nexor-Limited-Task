import React from "react";

export default function AboutLoading() {
    return (
        <div className="py-3 sm:py-6 md:py-12 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8 space-y-1.5 sm:space-y-3">
                    <div className="h-3.5 sm:h-4 w-48 bg-line/60 rounded-[3px]" />
                    <div className="h-7 sm:h-12 w-80 max-w-full bg-line/60 rounded-[4px]" />
                    <div className="h-4 sm:h-5 w-full max-w-xl bg-line/40 rounded-[3px]" />
                </div>

                {/* Studio Story Split Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center py-6 sm:py-10">
                    <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                        <div className="h-3.5 sm:h-4 w-36 bg-line/60 rounded-[3px]" />
                        <div className="h-6 sm:h-8 w-5/6 bg-line/60 rounded-[4px]" />
                        <div className="space-y-2 pt-1 sm:pt-2">
                            <div className="h-3.5 sm:h-4 w-full bg-line/40 rounded-[3px]" />
                            <div className="h-3.5 sm:h-4 w-full bg-line/40 rounded-[3px]" />
                            <div className="h-3.5 sm:h-4 w-4/5 bg-line/40 rounded-[3px]" />
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="aspect-[16/10] sm:aspect-[4/3] rounded-[4px] bg-surface border border-line" />
                    </div>
                </div>

                {/* Vision & Mission Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 py-6 sm:py-10">
                    {[1, 2].map((i) => (
                        <div key={i} className="p-4 sm:p-7 md:p-8 bg-surface rounded-[4px] border border-line space-y-3 sm:space-y-4">
                            <div className="w-10 h-10 rounded-[4px] bg-sand border border-line" />
                            <div className="h-6 w-36 bg-line/60 rounded-[4px]" />
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                                <div className="h-4 w-5/6 bg-line/40 rounded-[3px]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Grid Skeleton (4 Members) */}
                <div className="py-12 space-y-8">
                    <div className="text-center space-y-2 max-w-md mx-auto">
                        <div className="h-4 w-32 bg-line/60 rounded-[3px] mx-auto" />
                        <div className="h-8 w-64 bg-line/60 rounded-[4px] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-surface rounded-[4px] border border-line overflow-hidden space-y-3 pb-5"
                            >
                                <div className="aspect-[3/4] bg-line/40" />
                                <div className="px-5 space-y-2">
                                    <div className="h-5 w-3/4 bg-line/60 rounded-[3px]" />
                                    <div className="h-3 w-1/2 bg-line/40 rounded-[2px]" />
                                    <div className="h-3 w-full bg-line/40 rounded-[2px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
