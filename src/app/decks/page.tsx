import { ServicePage } from "@/components/services/service-page";
import { decksContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: decksContent.metaTitle,
  description: decksContent.metaDescription,
  path: decksContent.path,
});

export default function Page() {
  return <ServicePage content={decksContent} />;
}
