import { ServicePage } from "@/components/services/service-page";
import { gatesContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: gatesContent.metaTitle,
  description: gatesContent.metaDescription,
  path: gatesContent.path,
});

export default function Page() {
  return <ServicePage content={gatesContent} />;
}
