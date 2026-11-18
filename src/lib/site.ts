import { getEmDashCollection, type MediaValue } from "emdash";

/** The single "Site details" entry: contact details, footer and the shared call to action. */
export async function getSiteDetails() {
	const { entries, cacheHint } = await getEmDashCollection("site_details", { limit: 1 });
	return { details: entries[0]?.data, cacheHint };
}

/** Published projects in the order set by each project's "Order" field. */
export async function getProjects() {
	const { entries, cacheHint, error } = await getEmDashCollection("projects", { limit: 200 });
	const projects = [...entries].sort(
		(a, b) => (a.data.sort_order ?? 0) - (b.data.sort_order ?? 0) || a.id.localeCompare(b.id),
	);
	return { projects, cacheHint, error };
}

/** A plain URL for the original file behind an image field (used by the gallery lightbox). */
export function mediaUrl(image: MediaValue | null | undefined): string | undefined {
	if (!image) return undefined;
	if (image.src) return image.src;
	if ((image.provider ?? "local") !== "local") return image.previewUrl ?? undefined;
	const key = typeof image.meta?.storageKey === "string" ? image.meta.storageKey : image.id;
	return `/_emdash/api/media/file/${key}`;
}

/** Split a plain-text field into paragraphs (blank line) and lines (single line break). */
export function toParagraphs(text: string | null | undefined): string[][] {
	return (text ?? "")
		.split(/\n\s*\n/)
		.map((paragraph) => paragraph.trim())
		.filter(Boolean)
		.map((paragraph) => paragraph.split("\n"));
}

const TRAILING_SLASHES = /\/+$/;
export const normalizePath = (path: string) => path.replace(TRAILING_SLASHES, "") || "/";
