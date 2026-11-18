import Link from "next/link";
import { Img } from "@/components/Img";
import { Page } from "@/components/Page";
import { GetInTouch, Hero, Marquee } from "@/components/Sections";

export default function Home() {
  return (
    <Page active="/" headerTheme="dark">
      <Hero image="fva-whistler-1371" overlay={0.15} className="hero--home">
        <h4>Conscious Architecture Meets High Performance Building.</h4>
      </Hero>

      <Marquee />

      <section className="section home-intro">
        <div className="home-intro-image">
          <Img
            name="cayooshconstruction-wedgewood-stair"
            fill
            sizes="(max-width: 767px) 100vw, 34vw"
          />
        </div>
        <div className="home-intro-text">
          <h3>Innovation.&nbsp; Quality Craftsmanship.</h3>
          <p>
            Cayoosh Construction Limited is a Whistler based family business
            specializing in custom homes and renovations. We value good
            communication and efficiency. Although there is considerable
            opportunity within the construction industry in the Sea to Sky
            corridor, we prioritize quality control and management continuity
            over exponential growth. In a quickly changing construction
            industry, we continue to focus on staying ahead of the curve on
            building code changes, new technologies, and new building techniques
            and processes.
          </p>
        </div>
      </section>

      <section className="section container--medium home-collage">
        <div className="home-collage-col">
          <Link href="/our-projects">
            <Img
              name="cayooshconstruction-lakehouse-outdoor"
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </Link>
          <Link href="/our-projects">
            <Img
              name="cayooshconstruction-kitchenisland"
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </Link>
        </div>
        <div className="home-collage-col">
          <Link href="/our-projects">
            <Img
              name="cayooshconstruction-wedgewood-bathroom"
              sizes="(max-width: 767px) 100vw, 28vw"
            />
          </Link>
        </div>
      </section>

      <section className="section container--medium home-testimonial">
        <div className="home-testimonial-text">
          <h4>
            “We did a very technical build with Seamus and his crew, which
            involved many unique building techniques and unusual materials.
            Seamus approached every detail methodically while always keeping us
            involved in every aspect of the decision making. We always felt a
            great sense of control &amp; understanding which comes only from
            this level of involvement and partnership.”
          </h4>
          <p>- Sean &amp; Stephanie Crozier</p>
        </div>
        <div className="home-testimonial-image">
          <Img
            name="whistler-custom-home-interior-space-kitchen-bar-opening-to-l"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </div>
      </section>

      <GetInTouch />
    </Page>
  );
}
