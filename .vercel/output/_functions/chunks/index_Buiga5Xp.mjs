import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, w as unescapeHTML } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, r as chapters, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as $$HeroCircuitPattern } from "./HeroCircuitPattern_UzuDGfJD.mjs";
import { t as selectRows } from "./supabase_CaY0y9-v.mjs";
import { n as chapterCta } from "./chapterCopy_etaX1JrK.mjs";
import { n as formatLongDate, r as isPast } from "./date_B0MtY5m8.mjs";
//#region src/pages/events/index.astro
var events_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const CHAPTERS = [
		"SB",
		"EDS",
		"APS",
		"WIE",
		"MTT-S",
		"SPS"
	];
	function fromRow(row) {
		const date = new Date(row.event_date);
		const chapter = CHAPTERS.find((code) => code === row.chapter);
		if (!row.slug || !row.title || !row.description || !chapter || Number.isNaN(date.getTime())) return null;
		return {
			id: row.slug,
			source: "supabase",
			body: row.body ?? void 0,
			data: {
				title: row.title,
				date,
				chapter,
				description: row.description,
				image: row.image_url ?? void 0,
				location: row.location ?? void 0,
				time: row.event_time ?? void 0,
				registrationLink: row.registration_link ?? void 0,
				registrationOpen: row.registration_open ?? true,
				featured: row.featured ?? false,
				tags: row.tags ?? []
			}
		};
	}
	let rows = [];
	try {
		rows = await selectRows("events", {
			select: "*",
			published: "eq.true",
			order: "event_date.desc"
		}, 8e3);
	} catch (error) {
		console.warn("[events] Could not load published Supabase events:", error);
	}
	const all = rows.flatMap((row) => {
		const event = fromRow(row);
		return event ? [event] : [];
	}).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
	const upcoming = all.filter((e) => !isPast(e.data.date)).sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
	const featured = all.find((e) => e.data.featured) ?? upcoming[0] ?? all[0];
	const secondary = all.find((e) => e.id !== featured?.id);
	const feed = all.filter((e) => e.id !== featured?.id && e.id !== secondary?.id);
	const INITIAL = 6;
	const filters = [
		{
			code: "all",
			label: "All"
		},
		{
			code: "SB",
			label: "Student Branch"
		},
		...chapters.map((c) => ({
			code: c.shortName,
			label: c.code
		}))
	];
	function eyebrow(date, location) {
		const d = formatLongDate(date).toUpperCase();
		return location ? `${d} • ${location.toUpperCase()}` : d;
	}
	const initialEvents = all.map((event) => ({
		id: event.id,
		title: event.data.title,
		date: event.data.date.toISOString(),
		chapter: event.data.chapter,
		description: event.data.description,
		image: event.data.image ?? null,
		location: event.data.location ?? null,
		time: event.data.time ?? null,
		registrationLink: event.data.registrationLink ?? null,
		registrationOpen: event.data.registrationOpen ?? true,
		featured: event.data.featured ?? false,
		tags: event.data.tags ?? []
	}));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Events | IEEE MIST Student Branch",
		"description": "Activities and insights from the IEEE MIST Student Branch — workshops, seminars, symposiums and competitions."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main><section class="hero">${renderComponent($$result, "HeroCircuitPattern", $$HeroCircuitPattern, {})}<div class="container hero-inner"><h1>Activities &amp; Insights</h1><p>Workshops, seminars, symposiums and competitions from the IEEE MIST Student Branch and its five technical chapters.</p></div></section><section class="filter-bar"><div class="container filter-inner"><div class="chips" role="group" aria-label="Filter by chapter">${filters.map((f, i) => renderTemplate`<button type="button"${addAttribute(["chip", { active: i === 0 }], "class:list")}${addAttribute(f.code, "data-filter")}>${f.label}</button>`)}</div><div class="search"><img${addAttribute(withBase("images/home/icon-search.svg"), "src")} alt=""><input type="search" placeholder="Search events..." aria-label="Search events" data-search></div></div></section><section class="spotlight" data-spotlight><div class="container spotlight-grid" data-spotlight-grid>${featured && renderTemplate`<a class="large-card" data-featured-card${addAttribute(withBase(`/events/${featured.id}`), "href")}><div class="large-media">${featured.data.image ? renderTemplate`<img${addAttribute(withBase(featured.data.image), "src")} alt="" data-featured-image>` : renderTemplate`<div class="ph" data-featured-placeholder></div>`}</div><div class="large-body"><span class="eyebrow" data-featured-eyebrow>${eyebrow(featured.data.date, featured.data.location)}</span><h2 data-featured-title>${featured.data.title}</h2><p data-featured-description>${featured.data.description}</p><span class="more">Read more →</span></div></a>`}${secondary && renderTemplate`<a class="secondary-card" data-secondary-card${addAttribute(withBase(`/events/${secondary.id}`), "href")}><span class="tag">Chapter News</span><h3 data-secondary-title>${secondary.data.title}</h3><p data-secondary-description>${secondary.data.description}</p><span class="eyebrow dark" data-secondary-eyebrow>${eyebrow(secondary.data.date, secondary.data.location)}</span></a>`}</div></section><section class="feed"><div class="container"><div class="feed-grid" data-feed>${feed.map((event, i) => renderTemplate`<article class="card"${addAttribute(event.id, "data-event-id")}${addAttribute(event.data.chapter, "data-chapter")}${addAttribute(event.data.title.toLowerCase(), "data-title")}${addAttribute(i, "data-index")}${addAttribute(i >= INITIAL, "hidden")}><a class="card-media"${addAttribute(withBase(`/events/${event.id}`), "href")}>${event.data.image ? renderTemplate`<img${addAttribute(withBase(event.data.image), "src")} alt="" loading="lazy">` : renderTemplate`<div class="ph"></div>`}<span class="card-chapter">${event.data.chapter}</span></a><div class="card-body"><span class="eyebrow dark">${eyebrow(event.data.date, event.data.location)}</span><h3><a${addAttribute(withBase(`/events/${event.id}`), "href")}>${event.data.title}</a></h3><p>${event.data.description}</p></div></article>`)}<article class="callout"><img${addAttribute(withBase("images/chapters/mtt-s/cta-pattern.png"), "src")} alt="" class="callout-pattern"><div class="callout-content"><h3>${chapterCta.heading}</h3><p>${chapterCta.body}</p><a class="btn"${addAttribute(chapterCta.href, "href")} target="_blank" rel="noopener noreferrer">${chapterCta.button}</a></div></article></div><p class="no-match" data-no-match hidden>No events match your filter.</p><div class="load-more-wrap"><button type="button" class="load-more" data-load-more${addAttribute(feed.length <= INITIAL, "hidden")}>Load more</button></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}<script type="application/json" id="initial-events-data">${unescapeHTML(JSON.stringify(initialEvents).replace(/</g, "\\u003c"))}<\/script>${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/index.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/index.astro";
var $$url = "/events";
//#endregion
//#region \0virtual:astro:page:src/pages/events/index@_@astro
var page = () => events_exports;
//#endregion
export { page };
