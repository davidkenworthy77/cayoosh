import { ProjectView, projectMetadata } from "@/components/ProjectView";

export const metadata = projectMetadata("alpine-estate");

export default function Page() {
  return <ProjectView slug="alpine-estate" />;
}
