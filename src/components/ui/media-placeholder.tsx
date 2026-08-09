import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string | null;
  title: string;
  tone?: string;
  className?: string;
  aspect?: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
};

/**
 * Real image when available; warm fallback otherwise.
 * Swap JPGs in /public/images anytime.
 */
export function MediaPlaceholder({
  src,
  title,
  tone = "from-[#3a3f3c] to-[#1a1d1b]",
  className,
  aspect = "aspect-[4/3]",
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#d9d4c8]",
        aspect,
        className,
      )}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label ?? title}
    >
      {src ? (
        <Image
          src={src}
          alt={label ?? title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <>
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-95", tone)} />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
      {showCaption ? (
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            Premier Fencing
          </p>
          <p className="mt-1 text-sm font-semibold text-white sm:text-base">
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}
