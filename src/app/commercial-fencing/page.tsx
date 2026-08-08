import { ServicePage } from "@/components/services/service-page";
import { commercialContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: commercialContent.metaTitle,
  description: commercialContent.metaDescription,
  path: commercialContent.path,
});

export default function Page() {
  return <ServicePage content={commercialContent} />;
}
