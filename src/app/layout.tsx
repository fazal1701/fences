import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileConversionBar } from "@/components/layout/mobile-conversion-bar";
import { UtilityBar } from "@/components/layout/utility-bar";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: "Fence & Deck Contractors Toronto | Premier Fencing",
  description:
    "Premier Fencing installs residential and commercial fencing, decks, gates and outdoor living across Toronto. Call (647) 564-7656 or request a free quote.",
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${manrope.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <UtilityBar />
        <Header />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <MobileConversionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
