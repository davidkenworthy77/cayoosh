import type { Metadata } from "next";
import { Img } from "@/components/Img";
import { Page } from "@/components/Page";
import { Hero, ImageCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Cayoosh Construction streamlines the building process with expert craftsmanship and transparency. From concept to completion, we deliver high-quality, on-time results for Whistler’s residential and commercial projects. Start building with us today.",
};

export default function OurProcess() {
  return (
    <Page active="/our-process" headerTheme="light">
      <section className="section container--wide process">
        <h3 className="process-title">Our Process</h3>

        <div className="process-number process-number--one">
          <Img name="copy-of-cc-team-website-banner" sizes="50vw" preload />
        </div>
        <ImageCard image="cayooshconstruction-communication" title="Communication">
          <p>
            The management team members at Cayoosh Construction have many
            communication tools at our disposal to ensure that our clients are
            well informed and empowered to make decisions, big or small.&nbsp;
            Regular email communication of details including cost and schedule
            specifics are critical to an efficient project, with follow up
            meetings taking place on site or virtually by Zoom or
            FaceTime.&nbsp; We also work with design firms who have the
            capability to generate photo rendered 3D images that are accurate to
            the finest detail. In any case we are flexible, and can tailor our
            process to suit your needs.
          </p>
        </ImageCard>

        <div className="process-number process-number--two">
          <Img name="copy-of-cc-team-website-banner-1" sizes="55vw" />
        </div>
        <ImageCard
          image="cayoosh-custom-built-staircase-whistler-home"
          title="Attention to Detail"
          reverse
        >
          <p>
            Modern, highly designed architectural homes often bring many
            materials and systems together in one space. These systems and
            materials need to work seamlessly together to create the clean lines
            in spaces which often rely on minimalist design.&nbsp; Although
            these spaces seem simple, the details behind the scenes can be
            complex.&nbsp; At Cayoosh Construction we embrace the challenge and
            are well qualified to work with architects and designers at a high
            level.&nbsp; Cayoosh Construction has an experienced team of
            employees and extensive field of sub-contractors and suppliers who
            are not only capable, but are excited to execute the details of
            highly designed architectural homes.
          </p>
        </ImageCard>

        <div className="process-number process-number--three">
          <Img name="cc-team-website-banner-2" sizes="42vw" />
        </div>
        <ImageCard image="cayoosh-construction-building-site" title="Start to Finish">
          <p>
            Well versed in the challenges of developing a mountain property, we
            prefer to be involved in your construction process from the day you
            start looking at properties and options.&nbsp; With no obligation to
            engage us, we are happy to be involved in the evaluation of any
            potential building site or renovation.&nbsp; As you move into the
            planning and design phase of your project, we can help to identify
            the different aspects of your build and how they relate to your
            schedule and budget.
          </p>
        </ImageCard>
      </section>

      <Hero image="cc-team-website-banner-1" overlay={0.15} className="hero--quote">
        <blockquote>
          <h4>
            “We were pleased to recently represent the buyer on the sale of a
            magnificently built home by Cayoosh Construction.”
          </h4>
        </blockquote>
        <p>- Dani O’Neil, Whistler Real Estate Company</p>
      </Hero>
    </Page>
  );
}
