import { redirect } from "next/navigation";

/** Quote forms removed — send people to call via contact. */
export default function QuotePage() {
  redirect("/contact");
}
