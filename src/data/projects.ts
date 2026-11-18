import type { ImageName } from "./images";

export type Project = {
  slug: string;
  /** Name shown on the projects grid and in prev/next links. */
  name: string;
  /** Small heading at the top of the project page. */
  heading: string;
  /** Browser tab title (before the " — Cayoosh Construction" suffix). */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  cover: ImageName;
  layout: "masonry" | "grid";
  gallery: ImageName[];
};

/** Order matters: it drives the grid and the previous/next links. */
export const projects: Project[] = [
  {
    slug: "alpine-estate",
    name: "Alpine Estate",
    heading: "Alpine Estate",
    metaTitle: "Alpine Estate",
    metaDescription:
      "Alpine Estate by Cayoosh Construction is a family-focused home that combines luxury and comfort, ideal for Whistler living. This residence features expansive indoor-outdoor spaces and meticulous attention to detail in both interior and exterior design. Reflecting exceptional craftsmanship and execution, Alpine Estate is a prime example of Cayoosh Construction's commitment to quality and modern living in the Whistler area.",
    intro:
      "Alpine Estate is a family-focused home designed to blend luxury with comfort, offering an expansive indoor-outdoor living experience. This house showcases exceptional attention to detail in both its interior and exterior spaces, reflecting a masterful blend of design, craftsmanship, and execution.",
    cover: "cayooshconstruction-alpineestate-exterior1",
    layout: "masonry",
    gallery: [
      "cayooshconstruction-alpineestate-bathroom",
      "cayooshconstruction-alpineestate-exterior1-2",
      "cayooshconstruction-mountainview-kitchen",
      "cayooshconstruction-alpineestate-walldetails",
      "cayooshconstruction-alpineestate-livingroom",
      "cayooshconstruction-alpineestate-dual-2",
      "cayooshconstruction-alpineestate-staircase",
      "cayooshconstruction-alpineestate-kitchen4",
      "cayooshconstruction-alpineestate-kitchen2",
      "cayooshconstruction-alpineestate-patio",
      "cayooshconstruction-alpineestate-kitchen3",
      "cayooshconstruction-alpineestate-mediaroomdetail",
      "cayooshconstruction-alpineestate-bunk1",
      "cayooshconstruction-alpineestate-entrance2",
      "cayooshconstruction-alpineestate-bedroom",
      "cayooshconstruction-alpineestate-mediaroom",
    ],
  },
  {
    slug: "emerald-lakehouse",
    name: "Emerald Lakehouse",
    heading: "The Emerald Lakehouse",
    metaTitle: "Emerald Lakehouse",
    metaDescription:
      "The Emerald Lakehouse by Cayoosh Construction is a custom-designed home located on Whistler's iconic Green Lake. Offering stunning views of the lake and the Whistler mountain range, this elegant lakehouse is crafted to maximize its natural surroundings. The chic architecture provides serene vistas from every corner, allowing you to fully enjoy the calming beauty of the lake and mountains",
    intro:
      "Nestled on Whistler's iconic Green Lake, this custom-designed lakehouse offers unparalleled views of both the lake and the Whistler mountain range. The home is crafted to maximize the breathtaking vistas and enjoy the calming presence of the lake from every corner of the house.",
    cover: "cayooshconstruction-emarallakehouse",
    layout: "grid",
    gallery: [
      "cayooshconstruction-contact-us",
      "cayooshconstruction-lakehouse-bath",
      "cayooshconstruction-lakehouse-outdoor-2",
      "cayooshconstruction-lakehouse-build",
      "cayooshconstruction-lakehouse-entrance",
      "cayooshconstruction-lakehouse-kitchen2",
      "cayooshconstruction-lakehouse-details",
      "cayooshconstruction-lakehouse-garage",
      "cayooshconstruction-lakehouse-living2",
      "cayooshconstruction-lakehouse-livingoutdoor",
    ],
  },
  {
    slug: "wedgewoods",
    name: "Wedgewoods",
    heading: "Wedgewoods",
    metaTitle: "Wedgewoods Project",
    metaDescription:
      "The Wedgewoods project by Cayoosh Construction is a modern build featuring an expansive living room and open-concept design that maximizes communal spaces and panoramic views. Designed for comfort and connectivity, this home is perfect for both relaxation and social gatherings, offering a seamless blend of style and functionality.",
    intro:
      "This modern build features an expansive living room and an open-concept design that maximizes communal spaces and panoramic views. The architecture is crafted for connectivity and comfort, making it an ideal setting for relaxation and social gatherings.",
    cover: "cayooshconstruction-wedgewoods",
    layout: "grid",
    gallery: [
      "cayooshconstruction-wedgewood-space",
      "cayooshconstruction-wedgewood-kitchen",
      "cayooshconstruction-wedgewood-detail",
      "cayooshconstruction-wedgewood-stairprofile",
      "cayooshconstruction-wedgewood-golf",
      "cayooshconstruction-whistlercustom-build",
    ],
  },
  {
    slug: "alpine",
    name: "Alpine Modern",
    heading: "The Alpine Modern",
    metaTitle: "Alpine Project",
    metaDescription:
      "The Alpine Project by Cayoosh Construction is a custom-built home that showcases stunning modern architecture. Seamlessly integrated into Whistler's mountain landscape, the home’s design harmonizes with its natural surroundings, creating a strong connection between architecture and the environment. This project highlights our expertise in delivering both aesthetic appeal and functionality in mountain homes",
    intro:
      "This custom-built home showcases stunning architecture with its modern aesthetic. Beautifully and seamlessly integrated into the mountain landscape, the home's design harmonizes with its natural surroundings, enhancing the connection between architecture and environment.",
    cover: "cayooshconstruction-whistleralpine2",
    layout: "grid",
    gallery: [
      "cayooshconstruction-outdoor",
      "cayooshconstruction-alpineexterior",
      "cayooshconstruction-kitchen2",
      "cayooshconstruction-alpine-dinning",
      "cayooshconstruction-kitchenisland",
      "cayooshconstruction-alpine-living",
      "cayooshconstruction-alpinekitchen",
    ],
  },
];
