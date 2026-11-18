import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/Img";
import { Page } from "@/components/Page";
import { GetInTouch } from "@/components/Sections";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Latest projects",
  description:
    "Take a look at some of our recent work at Cayoosh Construction. From custom homes to renovations, each project reflects our commitment to quality and craftsmanship. We’re proud of the relationships we build with clients and the lasting results we create together.",
};

export default function OurProjects() {
  return (
    <Page active="/our-projects" headerTheme="light">
      <section className="section projects-intro">
        <h3>
          Take a look at some of our recent work at Cayoosh Construction. From
          custom homes to renovations, each project reflects our commitment to
          quality and craftsmanship. We’re proud of the relationships we build
          with clients and the lasting results we create together.
        </h3>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/our-projects/${project.slug}`}
            className="projects-grid-item"
          >
            <Img
              name={project.cover}
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
              preload={index < 2}
            />
            <div className="projects-grid-overlay">
              <h3>{project.name}</h3>
            </div>
          </Link>
        ))}
      </section>

      <GetInTouch />
    </Page>
  );
}
