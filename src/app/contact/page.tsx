import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Img } from "@/components/Img";
import { Page } from "@/components/Page";
import { Hero } from "@/components/Sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cayoosh Construction to discuss your next project, from custom home builds to high-performance renovations in Whistler. Our team is ready to bring your vision to life with expert craftsmanship and energy-efficient solutions.",
};

export default function Contact() {
  return (
    <Page active="/contact" headerTheme="dark">
      <Hero
        image="cayooshconstruction-alpineestate-dual"
        overlay={0.28}
        className="hero--title hero--contact"
      >
        <h2>Contact us</h2>
      </Hero>

      <section className="section container--narrow contact-form">
        <h4>Ready for your next project?</h4>
        <h4>Get in touch</h4>
        <ContactForm />
      </section>

      <section className="section container--narrow contact-info">
        <p>{site.location}</p>
        <p>
          <strong>Hours</strong>
          <br />
          Monday–Friday
          <br />
          8 am–5 pm
          <br />
          <br />
          {site.phone}
          <br />
          {site.email}
        </p>
      </section>

      <section className="section container--medium contact-badges">
        <a href="http://www.red-seal.ca/" target="_blank" rel="noopener" className="badge badge--small">
          <Img name="red-seal-carpenter-badge" sizes="140px" />
        </a>
        <a href="https://www.bchousing.org/home" target="_blank" rel="noopener" className="badge badge--large">
          <Img name="licensed-residential-builder" fill sizes="310px" />
        </a>
        <a
          href="https://www.nrcan.gc.ca/energy-efficiency/energuide/12523"
          target="_blank"
          rel="noopener"
          className="badge badge--small badge--energuide"
        >
          <Img name="energuide-logo" fill sizes="140px" />
        </a>
      </section>
    </Page>
  );
}
