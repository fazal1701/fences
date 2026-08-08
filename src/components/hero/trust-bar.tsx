import { Building2, Home, MapPinned, PenTool, Wrench } from "lucide-react";

const items = [
  { label: "Residential", icon: Home },
  { label: "Commercial", icon: Building2 },
  { label: "Custom Design", icon: PenTool },
  { label: "Professional Installation", icon: Wrench },
  { label: "Southern Ontario", icon: MapPinned },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-site flex flex-wrap items-center justify-between gap-4 py-5 md:py-6">
        {items.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="inline-flex min-w-[140px] items-center gap-2.5 text-sm font-medium text-foreground/80"
          >
            <Icon className="h-4 w-4 text-forest" aria-hidden />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
