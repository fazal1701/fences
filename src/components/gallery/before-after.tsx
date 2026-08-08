"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Reusable before/after slider.
 * Only use with genuine project photo pairs when available.
 */
export function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeTone = "from-[#6a6258] to-[#3a3530]",
  afterTone = "from-[#4a5a44] to-[#2a332c]",
  beforeTitle = "Existing fence line",
  afterTitle = "Completed Premier installation",
  className,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeTone?: string;
  afterTone?: string;
  beforeTitle?: string;
  afterTitle?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [update]);

  return (
    <section className={cn("section-y bg-surface", className)}>
      <div className="container-site">
        <h2 className="max-w-2xl text-[32px] font-bold tracking-tight md:text-[48px]">
          See the difference good workmanship makes.
        </h2>
        <div
          ref={ref}
          className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[16px] select-none"
          onPointerDown={(e) => {
            dragging.current = true;
            update(e.clientX);
          }}
        >
          <div
            className={cn("absolute inset-0 bg-gradient-to-br", afterTone)}
            aria-hidden
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
            {afterLabel}: {afterTitle}
          </div>

          <div
            className={cn("absolute inset-0 overflow-hidden bg-gradient-to-br", beforeTone)}
            style={{ width: `${pos}%` }}
            aria-hidden
          >
            <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
              {beforeLabel}: {beforeTitle}
            </div>
          </div>

          <div
            className="absolute inset-y-0 z-10 w-1 bg-white"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow"
              aria-label="Adjust before and after comparison"
              aria-valuemin={8}
              aria-valuemax={92}
              aria-valuenow={Math.round(pos)}
              role="slider"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(8, p - 4));
                if (e.key === "ArrowRight") setPos((p) => Math.min(92, p + 4));
              }}
            >
              ↔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
