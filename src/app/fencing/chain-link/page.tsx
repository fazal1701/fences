import { ServicePage } from "@/components/services/service-page";
import { chainLinkContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: chainLinkContent.metaTitle,
  description: chainLinkContent.metaDescription,
  path: chainLinkContent.path,
});

export default function Page() {
  return <ServicePage content={chainLinkContent} />;
}
