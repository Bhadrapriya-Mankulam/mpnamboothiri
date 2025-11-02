"use client";

import { cn } from "@/lib/utils";

interface StoneDividerProps {
  className?: string;
}

export default function StoneDivider({ className }: StoneDividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-gilded-gold-500 to-transparent hover:bg-gradient-to-r hover:from-transparent hover:via-gilded-gold-500/80 hover:to-transparent transition-all duration-1000",
        className
      )}
      aria-hidden="true"
    />
  );
}

