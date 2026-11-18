import { site } from "@/data/site";
import { Img } from "./Img";

export function Footer() {
  return (
    <footer className="footer section--dark">
      <div className="footer-inner">
        <p className="small">
          <em>
            Cayoosh Construction acknowledges that we operate on the traditional
            territory of the Skwxwú7mesh (Squamish) Nation and the Lil̓wat7úl
            (Lil’wat) Nation.
          </em>
        </p>
        <h4>{site.tagline}</h4>
        <Img
          name="cayoosh-construction-logo"
          sizes="150px"
          className="footer-logo"
        />
        <p>
          {site.location}
          <br />
          {site.phone}
        </p>
        <nav className="footer-social" aria-label="Social">
          <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <circle cx="5" cy="5" r="2.3" fill="currentColor" />
              <rect x="3" y="9" width="4" height="12" fill="currentColor" />
              <path
                fill="currentColor"
                d="M10 9h3.8v1.7c.6-1.1 2-2 4-2 3.2 0 4.2 2 4.2 5.2V21h-4v-6.2c0-1.500-.5-2.500-1.900-2.500-1.500 0-2.100 1-2.100 2.500V21h-4z"
              />
            </svg>
          </a>
        </nav>
        <p className="small">Copyright © 2024&nbsp; Cayoosh Construction Limited</p>
      </div>
    </footer>
  );
}
