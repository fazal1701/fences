import { NextRequest, NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";
import { siteConfig } from "@/lib/site-config";

const rateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 8;
  const entry = rateMap.get(ip);
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      return NextResponse.json(
        { error: "Please check the form and try again.", fieldErrors },
        { status: 400 },
      );
    }

    if (parsed.data.companyWebsite) {
      return NextResponse.json({ ok: true });
    }

    const lead = {
      ...parsed.data,
      name: sanitize(parsed.data.name),
      streetAddress: sanitize(parsed.data.streetAddress),
      city: sanitize(parsed.data.city),
      notes: sanitize(parsed.data.notes || ""),
      receivedAt: new Date().toISOString(),
    };

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Premier Website <onboarding@resend.dev>",
          to: [siteConfig.email],
          subject: `New quote request — ${lead.projectType} — ${lead.city}`,
          text: JSON.stringify(lead, null, 2),
        }),
      });

      if (!response.ok) {
        const detail = await response.text();
        console.error("[quote] Resend failed", detail);
        return NextResponse.json(
          {
            error: `Something went wrong while sending your request. Please try again or call us at ${siteConfig.phoneDisplay}.`,
          },
          { status: 502 },
        );
      }
    } else {
      console.info("[quote] RESEND_API_KEY not configured. Lead logged:", lead);
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            error: `Quote email is not configured yet. Please call us at ${siteConfig.phoneDisplay}.`,
          },
          { status: 503 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[quote] unexpected error", error);
    return NextResponse.json(
      {
        error: `Something went wrong while sending your request. Please try again or call us at ${siteConfig.phoneDisplay}.`,
      },
      { status: 500 },
    );
  }
}
