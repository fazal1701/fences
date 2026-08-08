import { z } from "zod";

export const quoteSchema = z.object({
  projectType: z.enum([
    "Fence",
    "Deck",
    "Gate",
    "Commercial Project",
    "Pergola / Outdoor Living",
    "Not Sure",
  ]),
  fenceTypes: z.array(z.string()).optional().default([]),
  priorities: z.array(z.string()).max(3).optional().default([]),
  streetAddress: z.string().min(2, "Address is required").max(200),
  city: z.string().min(2, "City is required").max(100),
  postalCode: z
    .string()
    .min(3, "Postal code is required")
    .max(10)
    .regex(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "Enter a valid postal code"),
  linearFootage: z
    .enum(["Under 50 ft", "50-100 ft", "100-200 ft", "200+ ft", "Not sure"])
    .optional(),
  timeline: z
    .enum(["ASAP", "1-3 months", "3-6 months", "Planning ahead"])
    .optional(),
  existingFence: z.enum(["Yes", "No"]).optional(),
  name: z.string().min(2, "Name is required").max(100),
  phone: z
    .string()
    .min(7, "Phone is required")
    .max(30)
    .regex(/^[0-9+().\-\s]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  preferredContact: z.enum(["Phone", "Text", "Email"]),
  notes: z.string().max(2000).optional().default(""),
  photoCount: z.number().int().min(0).max(5).optional().default(0),
  /** honeypot — must stay empty */
  companyWebsite: z.string().max(0).optional().default(""),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
