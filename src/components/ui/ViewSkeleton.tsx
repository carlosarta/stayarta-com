import React from "react";
import { Skeleton } from "./skeleton";

export const ViewSkeleton = () => (
  <div className="space-y-6 p-6 w-full animate-in fade-in duration-500">
    {/* Header Skeleton */}
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px] bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="h-4 w-[300px] bg-slate-100 dark:bg-slate-800/50" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="h-10 w-32 bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>

    {/* Stats Grid Skeleton */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-[120px] rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50" />
      ))}
    </div>

    {/* Main Content Area Skeleton */}
    <div className="min-h-[400px] rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 p-6 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-6 w-40 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="h-9 w-64 bg-slate-100 dark:bg-slate-800/50" />
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4">
           <Skeleton className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800" />
           <div className="space-y-2 flex-1">
             <Skeleton className="h-4 w-full bg-slate-100 dark:bg-slate-800/50" />
             <Skeleton className="h-3 w-2/3 bg-slate-50 dark:bg-slate-900" />
           </div>
        </div>
      ))}
    </div>
  </div>
);
