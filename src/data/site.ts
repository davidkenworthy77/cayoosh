export const nav = [
  { href: "/", label: "Home" },
  { href: "/our-process", label: "Our Process" },
  { href: "/high-performance-building", label: "High Performance Building" },
  { href: "/our-projects", label: "Our Latest Projects" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof nav)[number]["href"];

export const site = {
  name: "Cayoosh Construction",
  tagline: "Conscious Architecture Meets High Performance Building",
  location: "Whistler, British Columbia",
  phone: "(604) 967-1542",
  email: "seamus@cayoosh.ca",
  instagram: "http://instagram.com/cayooshconstructionltd",
  linkedin:
    "https://www.linkedin.com/in/seamus-quinn-a9b82742/?originalSubdomain=ca",
  dwellArticle:
    "https://www.dwell.com/article/how-they-pulled-it-off-moving-a-1970s-craftsman-to-a-new-location-5def78e9",
};
