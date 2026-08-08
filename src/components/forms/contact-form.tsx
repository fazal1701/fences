"use client";

import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/phone-link";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const data = new FormData(e.currentTarget);
    if (String(data.get("companyWebsite") || "")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: "Not Sure",
          fenceTypes: [],
          priorities: [],
          streetAddress: "Contact form",
          city: String(data.get("city") || "Southern Ontario"),
          postalCode: "N2V1A2",
          name: String(data.get("name") || ""),
          phone: String(data.get("phone") || ""),
          email: String(data.get("email") || ""),
          preferredContact: "Email",
          notes: String(data.get("message") || ""),
          photoCount: 0,
          companyWebsite: "",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      track("contact_form_submit", { page: "/contact" });
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : `Something went wrong. Call us at ${siteConfig.phoneDisplay}.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[16px] border border-border bg-surface p-6 md:p-8">
        <h2 className="text-2xl font-bold">Message received</h2>
        <p className="mt-2 text-muted">
          Thanks — we&apos;ll be in touch. Need someone sooner?
        </p>
        <PhoneLink placement="contact_form_success" className="mt-4" />
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[16px] border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold">Send a message</h2>
      <input
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="mt-6 grid gap-4">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input name="phone" required className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          City
          <input name="city" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Message
          <textarea name="message" required className="field mt-2 min-h-[120px]" />
        </label>
        <p className="text-xs text-muted">
          We&apos;ll use your details to respond to this inquiry. See our{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>
      </form>
  );
}
