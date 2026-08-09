export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  city: string;
  featured?: boolean;
  source?: "google" | "curated";
};

/**
 * Curated placeholder testimonials for layout.
 * Replace with confirmed customer quotes before launch.
 * Never invent Google ratings or review counts.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The installation was clean, the crew was professional, and the finished fence completely changed how we use the backyard.",
    name: "Sarah M.",
    city: "Toronto",
    featured: true,
    source: "curated",
  },
  {
    id: "2",
    quote:
      "We needed something low-maintenance and still private. Premier helped us compare options and install the right vinyl solution.",
    name: "James T.",
    city: "Toronto",
    source: "curated",
  },
  {
    id: "3",
    quote:
      "Clear communication from quote to install. The gate and fence line look sharp and suit the property well.",
    name: "Priya K.",
    city: "Toronto",
    source: "curated",
  },
];
