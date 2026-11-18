import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	// Pages are rendered on request so edits published in the CMS show up at once.
	output: "server",
	adapter: node({ mode: "standalone" }),
	integrations: [
		// React is only used by the EmDash admin panel; the public site ships none.
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "League Gothic",
			cssVariable: "--font-heading",
			weights: [400],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Lato",
			cssVariable: "--font-body",
			weights: [400, 700],
			styles: ["normal", "italic"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
