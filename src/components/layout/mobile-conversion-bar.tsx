"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { cn } from "@/lib/utils";
import { Phone, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileConversionBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.tagName === "SELECT" ||
          t.isContentEditable)
      ) {
        setHidden(true);
      }
    };
    const onFocusOut = () => setHidden(false);
    window.addEventListener("focusin", onFocusIn);
    window.addEventListener("focusout", onFocusOut);
    return () => {
      window.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md lg:hidden safe-pb transition-transform duration-200",
        hidden && "translate-y-full",
      )}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <PhoneLink
          placement="mobile_sticky"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-forest px-3 text-sm font-semibold text-white hover:text-white"
          label="Call Now"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </PhoneLink>
        <ButtonLink
          href="/quote"
          variant="primary"
          className="min-h-[52px] rounded-[12px] text-sm"
        >
          <FileText className="h-4 w-4" aria-hidden />
          Free Quote
        </ButtonLink>
      </div>
    </div>
  );
}
