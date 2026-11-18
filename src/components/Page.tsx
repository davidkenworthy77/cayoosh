import type { ReactNode } from "react";
import type { NavHref } from "@/data/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  active?: NavHref | null;
  /** Match the first section: "dark" when the page opens on a dark hero. */
  headerTheme: "dark" | "light";
  children: ReactNode;
};

/** Shared page frame: overlaid header, main content, footer. */
export function Page({ active = null, headerTheme, children }: Props) {
  return (
    <>
      <Header active={active} theme={headerTheme} />
      <main id="page">{children}</main>
      <Footer />
    </>
  );
}
