import type { Metadata } from "next";
import { Img } from "@/components/Img";
import { Page } from "@/components/Page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Cayoosh Construction is powered by a skilled and motivated team of experienced carpenters and apprentices in Whistler. Our dedicated professionals bring top-quality craftsmanship to every project, ensuring superior results for residential and commercial builds.",
};

export default function OurTeam() {
  return (
    <Page active="/our-team" headerTheme="light">
      <section className="section team">
        <div className="team-col">
          <h3>The Cayoosh Team</h3>
          <p>
            At Cayoosh Construction we have a team of experienced, motivated
            carpenters and apprentices and many on our team have worked with the
            company for years.&nbsp; We are proud to offer a comprehensive
            benefits package to our employees and their families. In a town
            where staff turnover is common, we have maintained a stable
            workforce of great people, many of whom are putting down permanent
            roots in the community.
          </p>
          <p>
            We value our employees and strive to create a work environment that
            is safe and encourages learning. We are a member of the I.T.A.
            apprenticeship program for employees who choose to pursue a red seal
            designation, and encourage and support employees who endeavour to
            further their training and expertise in home building.
          </p>
          <Img
            name="cayoosh-construction-team-lead-seamus-quinn"
            sizes="(max-width: 767px) 100vw, 46vw"
            preload
          />
        </div>
        <div className="team-col team-col--offset">
          <Img
            name="cayoosh-crew-team-shot"
            sizes="(max-width: 767px) 100vw, 46vw"
            preload
          />
        </div>
      </section>

      <section className="section team-join">
        <hr className="rule" />
        <h4>Interested in joining us?</h4>
        <p>
          We are always on the look out for new talent to join our team.&nbsp;
          At Cayoosh Construction, we offer competitive wages, apprentice
          opportunities under a Red Seal carpenter, comprehensive benefits
          package and the 20 cm rule - whenever possible.
        </p>
        <a
          href={`mailto:${site.email}?subject=Employment%20Opportunities%20with%20Cayoosh`}
          className="button button--medium"
        >
          Contact Us
        </a>
      </section>
    </Page>
  );
}
