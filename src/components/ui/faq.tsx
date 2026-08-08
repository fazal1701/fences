"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type FaqItem = { question: string; answer: string };

export function FAQ({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map((item) => (
        <FAQItem key={item.question} item={item} />
      ))}
    </div>
  );
}

function FAQItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-base font-semibold md:text-lg">{item.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        id={id}
        hidden={!open}
        className="pb-5 text-[16px] leading-relaxed text-muted md:text-[17px]"
      >
        {item.answer}
      </div>
    </div>
  );
}
