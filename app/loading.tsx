import React from "react";

export default function Loading() {
    return (
        <div className="py-12 md:py-20 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Text Column */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Eyebrow */}
                        <div className="h-4 w-48 bg-line/60 rounded-[3px]" />

                        {/* Title Display */}
                        <div className="space-y-3">
                            <div className="h-12 w-11/12 bg-line/60 rounded-sm" />
                            <div className="h-12 w-4/5 bg-line/60 rounded-sm" />
                        </div>

                        {/* Paragraph lines */}
                        <div className="space-y-2 pt-2 max-w-lg">
                            <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                            <div className="h-4 w-5/6 bg-line/40 rounded-[3px]" />
                        </div>

                        {/* CTAs */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="h-11 w-40 bg-line/60 rounded-sm" />
                            <div className="h-11 w-44 bg-line/40 rounded-sm" />
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-line/60 max-w-lg">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-8 w-16 bg-line/60 rounded-sm" />
                                    <div className="h-3 w-20 bg-line/40 rounded-[3px]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Offset Skeleton */}
                    <div className="lg:col-span-5">
                        <div className="aspect-4/5 rounded-sm bg-surface border border-line p-4 flex flex-col justify-end">
                            <div className="h-16 w-full bg-line/40 rounded-sm" />
                        </div>
                    </div>
                </div>

                {/* Featured Projects Grid Skeleton Preview */}
                <div className="mt-24 pt-16 border-t border-line/60 space-y-8">
                    <div className="flex items-end justify-between">
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-line/60 rounded-[3px]" />
                            <div className="h-8 w-64 bg-line/60 rounded-sm" />
                        </div>
                        <div className="h-9 w-28 bg-line/40 rounded-sm" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className="bg-surface rounded-sm border border-line overflow-hidden"
                            >
                                <div className="aspect-16/10 bg-line/40" />
                                <div className="p-6 space-y-3">
                                    <div className="h-6 w-1/2 bg-line/60 rounded-sm" />
                                    <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
