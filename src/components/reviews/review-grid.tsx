import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { testimonials } from "@/lib/testimonials";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReviewGrid() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const others = testimonials.filter((t) => t.id !== featured.id).slice(0, 2);

  return (
    <section className="section-y bg-surface">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-[32px] font-bold tracking-tight md:text-[48px]">
            Homeowners remember the workmanship.
          </h2>
          <GoogleBusinessLink
            placement="testimonials"
            className="text-sm"
            showIcon
          >
            Read More Reviews on Google
          </GoogleBusinessLink>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          <ReviewCard review={featured} className="lg:col-span-3 lg:min-h-[320px]" large />
          <div className="grid gap-4 lg:col-span-2">
            {others.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  className,
  large,
}: {
  review: (typeof testimonials)[number];
  className?: string;
  large?: boolean;
}) {
  return (
    <figure
      className={cn(
        "rounded-[16px] border border-border bg-background p-6 md:p-8",
        className,
      )}
    >
      <div className="flex gap-1 text-cedar" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote
        className={cn(
          "mt-4 text-foreground",
          large ? "text-xl leading-relaxed md:text-2xl" : "text-base leading-relaxed",
        )}
      >
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm font-medium text-muted">
        {review.name} · {review.city}
      </figcaption>
    </figure>
  );
}
