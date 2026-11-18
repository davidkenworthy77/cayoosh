import type { Metadata } from "next";
import { Lato, League_Gothic } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const leagueGothic = League_Gothic({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cayoosh.ca"),
  title: {
    default: "Cayoosh Construction",
    template: "%s — Cayoosh Construction",
  },
  description:
    "Cayoosh Construction Limited is a Whistler based family business specializing in custom homes and renovation, where conscious architecture meets high performance building technologies and processes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${lato.variable} ${leagueGothic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
