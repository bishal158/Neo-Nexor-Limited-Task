import React from "react";

export default function ContactLoading() {
    return (
        <div className="py-3 sm:py-6 md:py-12 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-3 sm:mb-5 md:mb-8 space-y-1.5 sm:space-y-3">
                    <div className="h-3.5 sm:h-4 w-48 bg-line/60 rounded-[3px]" />
                    <div className="h-7 sm:h-12 w-96 max-w-full bg-line/60 rounded-[4px]" />
                    <div className="h-4 sm:h-5 w-full max-w-xl bg-line/40 rounded-[3px]" />
                </div>

                {/* 2-Column Form & Info Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
                    {/* Left Info Card Skeleton */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                        <div className="bg-surface p-4 sm:p-7 rounded-[4px] border border-line space-y-4 sm:space-y-6">
                            <div className="space-y-2">
                                <div className="h-3 w-36 bg-line/60 rounded-[2px]" />
                                <div className="h-6 sm:h-7 w-48 bg-line/60 rounded-[4px]" />
                                <div className="h-3 w-56 bg-line/40 rounded-[2px]" />
                            </div>

                            <div className="space-y-3 sm:space-y-4 pt-3.5 sm:pt-4 border-t border-line/60">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-[4px] bg-sand border border-line shrink-0" />
                                        <div className="space-y-1.5 flex-1">
                                            <div className="h-3.5 w-24 bg-line/60 rounded-[2px]" />
                                            <div className="h-3 w-full bg-line/40 rounded-[2px]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card Skeleton */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface rounded-[4px] border border-line p-4 sm:p-8 lg:p-10 space-y-3.5 sm:space-y-5">
                            <div className="space-y-2 mb-6">
                                <div className="h-6 w-64 bg-line/60 rounded-[4px]" />
                                <div className="h-3.5 w-80 max-w-full bg-line/40 rounded-[3px]" />
                            </div>

                            {/* Form Input Skeletons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <div className="h-3 w-20 bg-line/60 rounded-[2px]" />
                                    <div className="h-10 w-full bg-sand border border-line rounded-[4px]" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-24 bg-line/60 rounded-[2px]" />
                                    <div className="h-10 w-full bg-sand border border-line rounded-[4px]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <div className="h-3 w-24 bg-line/60 rounded-[2px]" />
                                    <div className="h-10 w-full bg-sand border border-line rounded-[4px]" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-32 bg-line/60 rounded-[2px]" />
                                    <div className="h-10 w-full bg-sand border border-line rounded-[4px]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="h-3 w-28 bg-line/60 rounded-[2px]" />
                                <div className="h-10 w-full bg-sand border border-line rounded-[4px]" />
                            </div>

                            <div className="space-y-2">
                                <div className="h-3 w-36 bg-line/60 rounded-[2px]" />
                                <div className="h-28 w-full bg-sand border border-line rounded-[4px]" />
                            </div>

                            <div className="h-11 w-52 bg-line/60 rounded-[4px] pt-2" />
                        </div>
                    </div>
                </div>

                {/* Map Box Skeleton */}
                <div className="bg-surface rounded-[4px] border border-line overflow-hidden">
                    <div className="p-6 border-b border-line flex justify-between items-center">
                        <div className="space-y-1">
                            <div className="h-3 w-28 bg-line/60 rounded-[2px]" />
                            <div className="h-6 w-48 bg-line/60 rounded-[4px]" />
                        </div>
                        <div className="h-8 w-32 bg-sand border border-line rounded-[4px]" />
                    </div>
                    <div className="aspect-[16/9] sm:aspect-[21/9] bg-line/30" />
                </div>
            </div>
        </div>
    );
}
