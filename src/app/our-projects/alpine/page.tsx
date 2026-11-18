import { ProjectView, projectMetadata } from "@/components/ProjectView";

export const metadata = projectMetadata("alpine");

export default function Page() {
  return <ProjectView slug="alpine" />;
}
