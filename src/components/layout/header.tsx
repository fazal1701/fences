"use client";

import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const mainNav = [
  { label: "Decks", href: "/decks" },
  { label: "Gates & Automation", href: "/gates-automation" },
  { label: "Commercial", href: "/commercial-fencing" },
  { label: "Projects", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
];

const mobileNav = [
  { label: "Fencing", href: "/fencing" },
  { label: "Decks", href: "/decks" },
  { label: "Gates", href: "/gates-automation" },
  { label: "Commercial", href: "/commercial-fencing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuGroups = [
  "Residential Fencing",
  "Commercial",
  "Outdoor Living",
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[84px]">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-semibold text-foreground/90 hover:text-foreground"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
            >
              Fencing
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  megaOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {megaOpen ? (
              <div className="absolute left-1/2 top-full z-50 w-[820px] -translate-x-[28%] pt-3">
                <div className="rounded-[16px] border border-border bg-surface p-5 shadow-[0_20px_50px_rgba(23,26,24,0.08)]">
                  <div className="grid grid-cols-3 gap-6">
                    {menuGroups.map((group) => (
                      <div key={group}>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
                          {group}
                        </p>
                        <ul className="space-y-2">
                          {services
                            .filter((s) => s.menuGroup === group)
                            .map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={s.href}
                                  className="group flex items-center gap-3 rounded-lg p-1.5 hover:bg-background"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                                    <MediaPlaceholder
                                      src={s.image}
                                      title={s.shortName}
                                      tone={s.imageTone}
                                      aspect="aspect-square"
                                      className="h-full w-full"
                                      sizes="48px"
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground group-hover:text-forest">
                                    {s.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[14px] font-semibold text-foreground/90 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <PhoneLink
            placement="header"
            className="hidden items-center gap-2 text-sm lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phoneDisplay}
          </PhoneLink>
          <ButtonLink
            href="/quote"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get a Free Quote
          </ButtonLink>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
            aria-label={`Call Premier at ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[72px] z-50 bg-background xl:hidden">
          <div className="flex h-full flex-col px-5 pb-28 pt-4">
            <nav className="flex-1 space-y-1 overflow-y-auto" aria-label="Mobile">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-4 text-lg font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="grid gap-3 border-t border-border pt-4">
              <ButtonLink
                href="/quote"
                onClick={() => setMobileOpen(false)}
                fullWidth
              >
                Get Free Quote
              </ButtonLink>
              <PhoneLink
                placement="mobile_menu"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[12px] border border-border bg-surface text-base font-semibold"
              >
                Call {siteConfig.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
