import React from "react";

export default function AboutLoading() {
    return (
        <div className="py-12 md:py-20 bg-sand min-h-screen animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-12 space-y-3">
                    <div className="h-4 w-48 bg-line/60 rounded-[3px]" />
                    <div className="h-10 w-80 max-w-full bg-line/60 rounded-[4px]" />
                    <div className="h-4 w-full max-w-xl bg-line/40 rounded-[3px]" />
                </div>

                {/* Studio Story Split Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
                    <div className="lg:col-span-6 space-y-4">
                        <div className="h-4 w-36 bg-line/60 rounded-[3px]" />
                        <div className="h-8 w-5/6 bg-line/60 rounded-[4px]" />
                        <div className="space-y-2 pt-2">
                            <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                            <div className="h-4 w-full bg-line/40 rounded-[3px]" />
                            <div className="h-4 w-4/5 bg-line/40 rounded-[3px]" />
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="aspect-[4/3] rounded-[4px] bg-surface border border-line" />
                    </div>
                </div>

                {/* Vision & Mission Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                    {[1, 2].map((i) => (
                        <div key={i} className="p-8 bg-surface rounded-[4px] border border-line space-y-4">
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
