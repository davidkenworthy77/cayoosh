import { ProjectView, projectMetadata } from "@/components/ProjectView";

export const metadata = projectMetadata("emerald-lakehouse");

export default function Page() {
  return <ProjectView slug="emerald-lakehouse" />;
}
