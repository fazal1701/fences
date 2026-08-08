import { ServicePage } from "@/components/services/service-page";
import { pergolaContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: pergolaContent.metaTitle,
  description: pergolaContent.metaDescription,
  path: pergolaContent.path,
});

export default function Page() {
  return <ServicePage content={pergolaContent} />;
}
