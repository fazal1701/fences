"use client";

import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, Phone, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const projectTypes = [
  "Fence",
  "Deck",
  "Gate",
  "Commercial Project",
  "Pergola / Outdoor Living",
  "Not Sure",
] as const;

const fenceTypes = [
  "Wood",
  "Vinyl",
  "Ornamental",
  "Chain Link",
  "Pool Fence",
  "Not Sure",
] as const;

const priorities = [
  "Privacy",
  "Security",
  "Low maintenance",
  "Price",
  "Curb appeal",
  "Pool safety",
  "Pet safety",
  "Replacing damaged fence",
] as const;

const footage = [
  "Under 50 ft",
  "50-100 ft",
  "100-200 ft",
  "200+ ft",
  "Not sure",
] as const;

const timelines = ["ASAP", "1-3 months", "3-6 months", "Planning ahead"] as const;

type FormState = {
  projectType: (typeof projectTypes)[number] | "";
  fenceTypes: string[];
  priorities: string[];
  streetAddress: string;
  city: string;
  postalCode: string;
  linearFootage: string;
  timeline: string;
  existingFence: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: "Phone" | "Text" | "Email";
  notes: string;
  companyWebsite: string;
};

const initial: FormState = {
  projectType: "",
  fenceTypes: [],
  priorities: [],
  streetAddress: "",
  city: "",
  postalCode: "",
  linearFootage: "",
  timeline: "",
  existingFence: "",
  name: "",
  phone: "",
  email: "",
  preferredContact: "Phone",
  notes: "",
  companyWebsite: "",
};

export function QuoteWizard() {
  const params = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(() => ({
    ...initial,
    projectType: (params.get("type") as FormState["projectType"]) || "",
    fenceTypes: params.get("fence") ? [params.get("fence")!] : [],
  }));
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successName, setSuccessName] = useState<string | null>(null);

  const stepMap = useMemo(() => {
    if (form.projectType === "Fence") {
      return [1, 2, 3, 4, 5, 6, 7];
    }
    return [1, 3, 4, 5, 6, 7];
  }, [form.projectType]);

  const visualStep = stepMap[step - 1] ?? 1;

  function next() {
    track("quote_step_completed", { step, visualStep });
    setStep((s) => Math.min(stepMap.length, s + 1));
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function toggleArray(key: "fenceTypes" | "priorities", value: string, max?: number) {
    setForm((prev) => {
      const exists = prev[key].includes(value);
      let nextVals = exists
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value];
      if (max && nextVals.length > max) nextVals = nextVals.slice(-max);
      return { ...prev, [key]: nextVals };
    });
  }

  async function submit() {
    setSubmitting(true);
    setSubmitError(null);
    setErrors({});

    try {
      const payload = {
        ...form,
        photoCount: files.length,
      };
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        throw new Error(data.error || "Unable to send quote request.");
      }
      track("quote_submitted", { projectType: form.projectType });
      setSuccessName(form.name.split(" ")[0] || form.name);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : `Something went wrong while sending your request. Please try again or call us at ${siteConfig.phoneDisplay}.`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (successName) {
    return (
      <div className="rounded-[16px] border border-border bg-surface p-8 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
          <Check className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-3xl font-bold">Your project request is in.</h2>
        <p className="mt-3 text-muted">
          Thanks, {successName}. We&apos;ve received your project information.
        </p>
        <p className="mt-8 font-semibold">Need to speak with someone sooner?</p>
        <PhoneLink
          placement="quote_success"
          className="mt-3 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-primary px-6 text-white hover:text-white"
        >
          <Phone className="h-4 w-4" />
          Call Premier · {siteConfig.phoneDisplay}
        </PhoneLink>
        <div className="mt-4">
          <ButtonLink href="/gallery" variant="secondary">
            View Our Projects
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] border border-border bg-surface p-5 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-muted">
            Step {step} of {stepMap.length}
          </p>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-forest transition-all duration-300"
              style={{ width: `${(step / stepMap.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {visualStep === 1 && (
        <StepShell
          title="What can we help you build?"
          onBack={null}
          onNext={() => {
            track("quote_started", {});
            if (!form.projectType) return;
            next();
          }}
          nextDisabled={!form.projectType}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <ChoiceCard
                key={type}
                label={type}
                selected={form.projectType === type}
                onClick={() => setForm((f) => ({ ...f, projectType: type }))}
              />
            ))}
          </div>
        </StepShell>
      )}

      {visualStep === 2 && (
        <StepShell
          title="What type of fence are you considering?"
          onBack={back}
          onNext={next}
          nextDisabled={form.fenceTypes.length === 0}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {fenceTypes.map((type) => (
              <ChoiceCard
                key={type}
                label={type}
                selected={form.fenceTypes.includes(type)}
                onClick={() => toggleArray("fenceTypes", type)}
              />
            ))}
          </div>
        </StepShell>
      )}

      {visualStep === 3 && (
        <StepShell
          title="What's most important?"
          subtitle="Select up to three."
          onBack={back}
          onNext={next}
          nextDisabled={form.priorities.length === 0}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {priorities.map((p) => (
              <ChoiceCard
                key={p}
                label={p}
                selected={form.priorities.includes(p)}
                onClick={() => toggleArray("priorities", p, 3)}
              />
            ))}
          </div>
        </StepShell>
      )}

      {visualStep === 4 && (
        <StepShell
          title="Where is the project?"
          onBack={back}
          onNext={() => {
            const nextErrors: Record<string, string> = {};
            if (form.streetAddress.trim().length < 2)
              nextErrors.streetAddress = "Address is required";
            if (form.city.trim().length < 2) nextErrors.city = "City is required";
            if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(form.postalCode.trim()))
              nextErrors.postalCode = "Enter a valid postal code";
            setErrors(nextErrors);
            if (Object.keys(nextErrors).length === 0) next();
          }}
        >
          <Field label="Street Address" error={errors.streetAddress}>
            <input
              className="field"
              value={form.streetAddress}
              onChange={(e) =>
                setForm((f) => ({ ...f, streetAddress: e.target.value }))
              }
              autoComplete="street-address"
            />
          </Field>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="City" error={errors.city}>
              <input
                className="field"
                value={form.city}
                onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                autoComplete="address-level2"
              />
            </Field>
            <Field label="Postal Code" error={errors.postalCode}>
              <input
                className="field"
                value={form.postalCode}
                onChange={(e) =>
                  setForm((f) => ({ ...f, postalCode: e.target.value.toUpperCase() }))
                }
                autoComplete="postal-code"
              />
            </Field>
          </div>
        </StepShell>
      )}

      {visualStep === 5 && (
        <StepShell title="Optional project details" onBack={back} onNext={next}>
          <p className="mb-3 text-sm font-medium">Approximate linear footage</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {footage.map((f) => (
              <ChoiceCard
                key={f}
                label={f}
                selected={form.linearFootage === f}
                onClick={() => setForm((prev) => ({ ...prev, linearFootage: f }))}
              />
            ))}
          </div>
          <p className="mb-3 mt-6 text-sm font-medium">Timeline</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {timelines.map((t) => (
              <ChoiceCard
                key={t}
                label={t}
                selected={form.timeline === t}
                onClick={() => setForm((prev) => ({ ...prev, timeline: t }))}
              />
            ))}
          </div>
          <p className="mb-3 mt-6 text-sm font-medium">Existing fence?</p>
          <div className="grid grid-cols-2 gap-2">
            {["Yes", "No"].map((v) => (
              <ChoiceCard
                key={v}
                label={v}
                selected={form.existingFence === v}
                onClick={() => setForm((prev) => ({ ...prev, existingFence: v }))}
              />
            ))}
          </div>
        </StepShell>
      )}

      {visualStep === 6 && (
        <StepShell title="Upload photos (optional)" onBack={back} onNext={next}>
          <p className="text-sm text-muted">
            Upload photos of your yard or current fence. JPG, PNG, or WEBP. Up to 5
            photos.
          </p>
          <label className="mt-4 flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-[16px] border border-dashed border-border bg-background px-4 text-center">
            <Upload className="h-6 w-6 text-muted" />
            <span className="mt-2 text-sm font-semibold">Add photos</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="sr-only"
              onChange={(e) => {
                const incoming = Array.from(e.target.files || []).slice(0, 5);
                setFiles((prev) => [...prev, ...incoming].slice(0, 5));
              }}
            />
          </label>
          {files.length ? (
            <ul className="mt-4 space-y-2">
              {files.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </StepShell>
      )}

      {visualStep === 7 && (
        <StepShell
          title="How should we reach you?"
          onBack={back}
          onNext={submit}
          nextLabel={submitting ? "Sending..." : "Request My Free Quote"}
          nextDisabled={submitting}
        >
          {/* honeypot */}
          <input
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            value={form.companyWebsite}
            onChange={(e) =>
              setForm((f) => ({ ...f, companyWebsite: e.target.value }))
            }
            aria-hidden
          />
          <div className="grid gap-4">
            <Field label="Name" error={errors.name}>
              <input
                className="field"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                autoComplete="name"
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                className="field"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                autoComplete="tel"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className="field"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                autoComplete="email"
              />
            </Field>
            <div>
              <p className="mb-2 text-sm font-medium">Preferred contact</p>
              <div className="grid grid-cols-3 gap-2">
                {(["Phone", "Text", "Email"] as const).map((v) => (
                  <ChoiceCard
                    key={v}
                    label={v}
                    selected={form.preferredContact === v}
                    onClick={() => setForm((f) => ({ ...f, preferredContact: v }))}
                  />
                ))}
              </div>
            </div>
            <Field label="Notes (optional)">
              <textarea
                className="field min-h-[110px] resize-y"
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              />
            </Field>
            <p className="text-xs text-muted">
              By submitting, you agree we may use your contact information to respond
              to this quote request. See our{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
            {submitError ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                {submitError}{" "}
                <PhoneLink placement="quote_error" className="underline">
                  {siteConfig.phoneDisplay}
                </PhoneLink>
              </p>
            ) : null}
          </div>
        </StepShell>
      )}

      </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  nextDisabled,
  nextLabel = "Continue",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack: (() => void) | null;
  onNext: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
      <div className="mt-8 flex items-center justify-between gap-3">
        {onBack ? (
          <Button type="button" variant="ghost" onClick={onBack}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        ) : (
          <span />
        )}
        <Button type="button" onClick={onNext} disabled={nextDisabled}>
          {nextLabel}
        </Button>
      </div>
    </div>
  );
}

function ChoiceCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-[64px] rounded-[12px] border px-4 py-3 text-left text-sm font-semibold transition-colors",
        selected
          ? "border-foreground bg-foreground text-white"
          : "border-border bg-background hover:border-foreground/30",
      )}
    >
      {label}
    </button>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
