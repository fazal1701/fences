import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none",
        light ? "text-white" : "text-foreground",
        className,
      )}
      aria-label="Premier Fencing & Backyard Solutions home"
    >
      <span className="text-[15px] font-bold tracking-[0.08em] uppercase sm:text-[16px]">
        Premier
      </span>
      <span
        className={cn(
          "mt-0.5 text-[11px] font-medium tracking-[0.16em] uppercase",
          light ? "text-white/70" : "text-muted",
        )}
      >
        Fencing & Backyard
      </span>
    </Link>
  );
}
