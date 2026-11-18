import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageName } from "@/data/images";
import { site } from "@/data/site";
import { Img } from "./Img";

/** Full-bleed dark hero with a background photo and overlay. */
export function Hero({
  image,
  overlay,
  className = "",
  children,
}: {
  image: ImageName;
  /** Black overlay opacity, 0–1. */
  overlay: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`hero section--dark ${className}`}>
      <Img name={image} fill sizes="100vw" className="hero-image" preload />
      <div className="hero-overlay" style={{ opacity: overlay }} />
      <div className="hero-content">{children}</div>
    </section>
  );
}

/** "Get in touch." call-to-action used on the home and project pages. */
export function GetInTouch({ buttonLabel = "Contact Us" }: { buttonLabel?: string }) {
  return (
    <section className="section cta">
      <h3>Get in touch.</h3>
      <p>
        Whether it&apos;s an energy upgrade or renovation on your current house,
        or building a custom home from start to finish, we look forward to
        working with you on your next project.
      </p>
      <Link href="/contact" className="button button--large">
        {buttonLabel}
      </Link>
    </section>
  );
}

/** Photo with an overlapping text card beside it (Squarespace "collage" image block). */
export function ImageCard({
  image,
  title,
  titleTag: Title = "h4",
  reverse = false,
  portrait = false,
  children,
}: {
  image: ImageName;
  title: string;
  titleTag?: "h3" | "h4";
  /** Put the photo on the right. */
  reverse?: boolean;
  /** Narrower photo column for portrait images. */
  portrait?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`image-card${reverse ? " image-card--reverse" : ""}${
        portrait ? " image-card--portrait" : ""
      }`}
    >
      <div className="image-card-media">
        <Img name={image} sizes="(max-width: 767px) 100vw, 45vw" />
      </div>
      <div className="image-card-text">
        <Title>{title}</Title>
        {children}
      </div>
    </div>
  );
}

/** Scrolling news ticker that links to the Dwell feature. */
export function Marquee() {
  const items = [
    "News",
    "Featured in Dwell Magazine",
    "How They Pulled It Off: Moving a 1970s Craftsman to a New Location",
  ];
  const run = (hidden: boolean) => (
    <span className="marquee-run" aria-hidden={hidden || undefined}>
      {[0, 1, 2].flatMap((repeat) =>
        items.map((item) => (
          <span key={`${repeat}-${item}`} className="marquee-item">
            {item}
            <span className="marquee-dot">•</span>
          </span>
        )),
      )}
    </span>
  );
  return (
    <section className="marquee section--dark">
      <a
        href={site.dwellArticle}
        target="_blank"
        rel="noopener"
        className="marquee-track"
        aria-label={`${items.join(" • ")} •`}
      >
        {run(true)}
        {run(true)}
      </a>
    </section>
  );
}
