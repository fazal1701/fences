import { ServicePage } from "@/components/services/service-page";
import { vinylContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: vinylContent.metaTitle,
  description: vinylContent.metaDescription,
  path: vinylContent.path,
});

export default function Page() {
  return <ServicePage content={vinylContent} />;
}
