import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "./Gallery";
import { Page } from "./Page";
import { GetInTouch } from "./Sections";
import { projects } from "@/data/projects";

export function projectMetadata(slug: string): Metadata {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.metaTitle, description: project.metaDescription };
}

/** Full project page; each route under /our-projects renders this with its slug. */
export function ProjectView({ slug }: { slug: string }) {
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <Page active={null} headerTheme="light">
      <section className={`section project-intro project-intro--${project.layout}`}>
        <h4>{project.heading}</h4>
        <h3>{project.intro}</h3>
      </section>

      <Gallery items={project.gallery} layout={project.layout} />

      <GetInTouch buttonLabel={index === 0 || index === 3 ? "Contact us" : "Contact Us"} />

      <nav className="pagination" aria-label="Projects">
        {previous ? (
          <Link href={`/our-projects/${previous.slug}`} className="pagination-link pagination-link--prev">
            <svg viewBox="0 0 23 48" width="23" height="48" aria-hidden="true">
              <path d="M21.5 1.5l-20 22.500 20 22.500" stroke="currentColor" fill="none" />
            </svg>
            <span className="visually-hidden">Previous</span>
            <h2>{previous.name}</h2>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/our-projects/${next.slug}`} className="pagination-link pagination-link--next">
            <span className="visually-hidden">Next</span>
            <h2>{next.name}</h2>
            <svg viewBox="0 0 23 48" width="23" height="48" aria-hidden="true">
              <path d="M1.5 1.5l20 22.500-20 22.500" stroke="currentColor" fill="none" />
            </svg>
          </Link>
        )}
      </nav>
    </Page>
  );
}
