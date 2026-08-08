import { ServicePage } from "@/components/services/service-page";
import { ornamentalContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ornamentalContent.metaTitle,
  description: ornamentalContent.metaDescription,
  path: ornamentalContent.path,
});

export default function Page() {
  return <ServicePage content={ornamentalContent} />;
}
