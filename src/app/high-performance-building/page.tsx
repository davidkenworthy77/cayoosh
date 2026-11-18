import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/Page";
import { Hero, ImageCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "High Performance Building",
  description:
    "Cayoosh Construction leads in modern building technology and energy-efficient construction in Whistler. Our expert team stays at the forefront of innovation, delivering high-performance homes that reduce energy costs and environmental impact. Trust us for cutting-edge solutions in sustainable building.",
};

export default function HighPerformanceBuilding() {
  return (
    <Page active="/high-performance-building" headerTheme="dark">
      <Hero image="fva-whistler-0010" overlay={0.16} className="hero--title">
        <h2>High Performance Building</h2>
      </Hero>

      <section className="section container--medium hpb">
        <ImageCard
          image="cayooshconstruction-alpine-living"
          title="Leading Edge Technologies"
        >
          <p>
            Cayoosh Construction is well versed in modern building technology
            and energy efficient building. The management team at Cayoosh
            Construction takes pride in being at the cutting edge of a
            constantly evolving construction landscape. We live in an exciting,
            transformational time in the building industry where energy
            efficiency and sustainability are driving significant change.
          </p>
        </ImageCard>
        <hr className="rule rule--half-left" />
        <ImageCard
          image="cayoosh-construction-drafting-plans"
          title="Integrative Approach"
          reverse
        >
          <p>
            This transformational time requires an integrative approach to
            building assemblies and Cayoosh Construction employs this approach
            in everything we do.&nbsp; Whether building to the current
            provincial step code requirements or going above and beyond net zero
            construction, we have the experience and knowledge to optimize the
            assemblies for any building project.
          </p>
        </ImageCard>
        <hr className="rule rule--half-right" />
        <ImageCard
          image="cayoosh-construction-building-site-highlighting-modern-techn"
          title="Exceeding Industry Standards"
        >
          <p>
            In addition to many hours of continued professional development
            focused on new building techniques and technologies, we have also
            recently completed a British Columbia step code 4 duplex build with
            excellent performance results including a 0.64 ACH air tightness
            rating.
          </p>
        </ImageCard>
      </section>

      <section className="section quote-section">
        <hr className="rule" />
        <figure className="quote">
          <blockquote>
            <span>“</span>If you are looking for a High Performance Builder,
            Seamus and the team at Cayoosh is the right builder for you.&nbsp;
            We’ve really enjoyed working with Cayoosh over the years, as they
            understand Building Science, attention to detail and are strong
            believers in the Integrated design process right from the start of
            the project.&nbsp; Cayoosh truly are professionals, they build
            quality homes that are not only extremely energy efficient, but
            comfortable, healthy, and durable to live in.<span>”</span>
          </blockquote>
          <figcaption>— Luke Dolan, Principal.&nbsp; Capital Home Energy Inc.</figcaption>
        </figure>
        <hr className="rule" />
      </section>

      <section className="section container--medium hpb hpb--last">
        <ImageCard
          image="cayoosh-fall-2022-10-of-16"
          title="High Performance Renovations"
          titleTag="h3"
          portrait
        >
          <p>
            As British Columbia transitions to renewable energy and more
            efficient building techniques, we have the expertise, resources, and
            professional consultants available to renovate your home from its
            current state to a modern net zero home.
          </p>
          <Link href="/contact" className="button button--medium">
            Learn More
          </Link>
        </ImageCard>
      </section>
    </Page>
  );
}
