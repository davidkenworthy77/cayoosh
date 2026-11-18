import { ProjectView, projectMetadata } from "@/components/ProjectView";

export const metadata = projectMetadata("wedgewoods");

export default function Page() {
  return <ProjectView slug="wedgewoods" />;
}
