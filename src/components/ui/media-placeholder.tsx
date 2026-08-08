import { cn } from "@/lib/utils";

type Props = {
  title: string;
  tone?: string;
  className?: string;
  aspect?: string;
  label?: string;
};

/**
 * Premium visual placeholder until Premier photography is swapped in.
 * Keeps aspect ratio and never collapses layout.
 */
export function MediaPlaceholder({
  title,
  tone = "from-[#3a3f3c] to-[#1a1d1b]",
  className,
  aspect = "aspect-[4/3]",
  label,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#d9d4c8]",
        aspect,
        className,
      )}
      role="img"
      aria-label={label ?? title}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-95",
          tone,
        )}
      />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
          Premier Fencing
        </p>
        <p className="mt-1 text-sm font-semibold text-white sm:text-base">
          {title}
        </p>
      </div>
    </div>
  );
}
