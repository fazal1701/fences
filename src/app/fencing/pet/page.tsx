import { ServicePage } from "@/components/services/service-page";
import { petContent } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: petContent.metaTitle,
  description: petContent.metaDescription,
  path: petContent.path,
});

export default function Page() {
  return <ServicePage content={petContent} />;
}
