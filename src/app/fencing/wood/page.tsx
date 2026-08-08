import { ServicePage } from "@/components/services/service-page";
import { woodContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: woodContent.metaTitle,
  description: woodContent.metaDescription,
  path: woodContent.path,
});

export default function Page() {
  return <ServicePage content={woodContent} />;
}
