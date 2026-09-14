import React from "react";

export default function ProjectDetailLoading() {
    return (
        <div className="py-12 md:py-20 bg-base min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {/* Hero Header Skeleton */}
                    <div className="space-y-6">
                        <div className="h-4 w-32 bg-line/60 rounded-[3px]" />
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-24 bg-surface border border-line rounded-[3px]" />
                            <div className="h-4 w-36 bg-line/40 rounded-[3px]" />
                        </div>

                        <div className="space-y-3">
                            <div className="h-10 w-3/4 max-w-2xl bg-line/60 rounded-[4px]" />
                            <div className="h-5 w-full max-w-xl bg-line/40 rounded-[3px]" />
                        </div>

                        {/* Meta Specifications Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-surface rounded-[4px] border border-line">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-3 w-16 bg-line/40 rounded-[2px]" />
                                    <div className="h-4 w-28 bg-line/60 rounded-[3px]" />
                                </div>
                            ))}
                        </div>

                        <div className="h-10 w-64 bg-line/60 rounded-[4px]" />
                    </div>

                    {/* Mosaic Gallery Skeleton */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="h-6 w-48 bg-line/60 rounded-[4px]" />
                            <div className="h-4 w-32 bg-line/40 rounded-[3px]" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                            <div className="lg:col-span-8 aspect-[16/10] bg-surface rounded-[4px] border border-line" />
                            <div className="lg:col-span-4 aspect-[4/5] bg-surface rounded-[4px] border border-line" />
                            <div className="lg:col-span-4 aspect-[4/5] bg-surface rounded-[4px] border border-line" />
                            <div className="lg:col-span-4 aspect-[4/5] bg-surface rounded-[4px] border border-line" />
                            <div className="lg:col-span-4 aspect-[4/5] bg-surface rounded-[4px] border border-line" />
                        </div>
                    </div>

                    {/* Specs & Scope Skeleton */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-line">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="h-4 w-32 bg-line/60 rounded-[3px]" />
                            <div className="h-7 w-60 bg-line/60 rounded-[4px]" />
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                                <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                                <div className="h-4 w-4/5 bg-line/40 rounded-[3px]" />
                            </div>
                            <div className="h-28 bg-surface rounded-[4px] border border-line" />
                        </div>

                        <div className="lg:col-span-5 space-y-6">
                            <div className="h-44 bg-surface rounded-[4px] border border-line" />
                            <div className="h-32 bg-surface rounded-[4px] border border-line" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
