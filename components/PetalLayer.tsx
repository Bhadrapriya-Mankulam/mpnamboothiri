"use client";

import { useEffect, useState } from "react";

export default function PetalLayer() {
  const [petals, setPetals] = useState<Array<{ id: number; delay: number }>>(
    []
  );

  useEffect(() => {
    // Create 2-3 petals with different delays
    const petalArray = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: i * 5,
    }));
    setPetals(petalArray);
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-2 h-2 bg-lotus-rose-400/30 rounded-full"
          style={{
            left: `${20 + petal.id * 30}%`,
            animation: `petal-float 15s ease-in-out infinite`,
            animationDelay: `${petal.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

