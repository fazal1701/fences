import { ServicePage } from "@/components/services/service-page";
import { poolContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: poolContent.metaTitle,
  description: poolContent.metaDescription,
  path: poolContent.path,
});

export default function Page() {
  return <ServicePage content={poolContent} />;
}
