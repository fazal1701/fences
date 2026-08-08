import { Logo } from "@/components/layout/logo";
import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const fencing = [
  { label: "Wood", href: "/fencing/wood" },
  { label: "Vinyl", href: "/fencing/vinyl" },
  { label: "Ornamental", href: "/fencing/ornamental" },
  { label: "Chain Link", href: "/fencing/chain-link" },
  { label: "Pool", href: "/fencing/pool" },
  { label: "Commercial", href: "/commercial-fencing" },
];

const outdoor = [
  { label: "Decks", href: "/decks" },
  { label: "Gates", href: "/gates-automation" },
  { label: "Pergolas", href: "/pergolas" },
  { label: "Railings", href: "/decks" },
  { label: "Gallery", href: "/gallery" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="container-site section-y">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}
            </p>
            <GoogleBusinessLink
              placement="footer"
              className="mt-5 inline-flex text-sm text-white hover:text-white/80"
            >
              Read Google Reviews
            </GoogleBusinessLink>
          </div>

          <FooterCol title="Fencing" links={fencing} />
          <FooterCol title="Outdoor Living" links={outdoor} />
          <FooterCol title="Company" links={company} />

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <PhoneLink
                  placement="footer"
                  className="text-white hover:text-white/80"
                />
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {siteConfig.waterlooAddress.full}
              </li>
              {siteConfig.londonAddress.verified ? (
                <li className="leading-relaxed">
                  {siteConfig.londonAddress.full}
                </li>
              ) : (
                <li className="leading-relaxed text-white/55">
                  London, Ontario service available
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
