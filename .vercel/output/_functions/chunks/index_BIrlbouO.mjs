import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, r as chapters, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as $$HeroCircuitPattern } from "./HeroCircuitPattern_UzuDGfJD.mjs";
import { t as $$SectionHeading } from "./SectionHeading_BusCmr6x.mjs";
import { t as $$Newsletter } from "./Newsletter_DEtmCIvw.mjs";
//#region src/components/PageHero.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { eyebrow, title, subtitle, crumbs = [], accent } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="page-hero"${addAttribute(accent ? `--accent:${accent}` : void 0, "style")} data-astro-cid-75ysl5lo>${renderComponent($$result, "HeroCircuitPattern", $$HeroCircuitPattern, { "data-astro-cid-75ysl5lo": true })}<div class="container inner" data-astro-cid-75ysl5lo>${crumbs.length > 0 && renderTemplate`<nav class="crumbs" aria-label="Breadcrumb" data-astro-cid-75ysl5lo><a${addAttribute(withBase("/"), "href")} data-astro-cid-75ysl5lo>Home</a>${crumbs.map((crumb) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="sep" data-astro-cid-75ysl5lo>/</span>${crumb.href ? renderTemplate`<a${addAttribute(crumb.href, "href")} data-astro-cid-75ysl5lo>${crumb.label}</a>` : renderTemplate`<span aria-current="page" data-astro-cid-75ysl5lo>${crumb.label}</span>`}` })}`)}</nav>`}${eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-75ysl5lo>${eyebrow}</p>`}<h1 data-astro-cid-75ysl5lo>${title}</h1>${subtitle && renderTemplate`<p class="subtitle" data-astro-cid-75ysl5lo>${subtitle}</p>`}${renderSlot($$result, $$slots["default"])}</div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/PageHero.astro", void 0);
//#endregion
//#region src/pages/chapters/index.astro
var chapters_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Chapters | IEEE MIST Student Branch",
		"description": "Explore the specialized technical chapters and affinity groups of the IEEE MIST Student Branch — EDS, APS, WIE, MTT-S and SPS.",
		"data-astro-cid-eh6el2uw": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-eh6el2uw": true })}${maybeRenderHead($$result)}<main data-astro-cid-eh6el2uw>${renderComponent($$result, "PageHero", $$PageHero, {
		"eyebrow": "Chapters",
		"title": "Our Specialized Chapters",
		"subtitle": "Each chapter connects members at MIST to one of IEEE's global technical societies, with its own events, leadership, and community.",
		"crumbs": [{ label: "Chapters" }],
		"data-astro-cid-eh6el2uw": true
	})}<section class="listing" data-astro-cid-eh6el2uw><div class="container" data-astro-cid-eh6el2uw>${renderComponent($$result, "SectionHeading", $$SectionHeading, {
		"eyebrow": "Five Chapters",
		"title": "Find the community that fits your field",
		"description": "Each chapter runs its own workshops, competitions, and mentorship programmes — pick the one closest to what you want to build.",
		"data-astro-cid-eh6el2uw": true
	})}<div class="grid" data-astro-cid-eh6el2uw>${chapters.map((chapter) => renderTemplate`<a${addAttribute(withBase(`/chapters/${chapter.slug}`), "href")} class="card"${addAttribute(`--accent:${chapter.accent}`, "style")} data-astro-cid-eh6el2uw><div class="logo"${addAttribute(`background:${chapter.bg}`, "style")} data-astro-cid-eh6el2uw><img${addAttribute(chapter.logo, "src")}${addAttribute(`${chapter.code} logo`, "alt")} loading="lazy" data-astro-cid-eh6el2uw></div><div class="body" data-astro-cid-eh6el2uw><p class="code" data-astro-cid-eh6el2uw>${chapter.code}</p><h3 data-astro-cid-eh6el2uw>${chapter.fullName}</h3><p class="tagline" data-astro-cid-eh6el2uw>${chapter.tagline}</p><ul class="focus" data-astro-cid-eh6el2uw>${chapter.focusAreas.slice(0, 3).map((area) => renderTemplate`<li data-astro-cid-eh6el2uw>${area}</li>`)}</ul><span class="more" data-astro-cid-eh6el2uw>Visit chapter<img${addAttribute(withBase("images/home/icon-arrow-right.svg"), "src")} alt="" data-astro-cid-eh6el2uw></span></div></a>`)}</div></div></section><section class="start" data-astro-cid-eh6el2uw><div class="container start-inner" data-astro-cid-eh6el2uw><div data-astro-cid-eh6el2uw><h2 data-astro-cid-eh6el2uw>Want to start a new chapter?</h2><p data-astro-cid-eh6el2uw>Reach out to the branch's executive committee with a proposal — who you're organising, which IEEE society it maps to, and the events you're planning for the first term.</p></div><a class="btn"${addAttribute(withBase("/contact"), "href")} data-astro-cid-eh6el2uw>Talk to the branch</a></div></section>${renderComponent($$result, "Newsletter", $$Newsletter, { "data-astro-cid-eh6el2uw": true })}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-eh6el2uw": true })}` })}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/chapters/index.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/chapters/index.astro";
var $$url = "/chapters";
//#endregion
//#region \0virtual:astro:page:src/pages/chapters/index@_@astro
var page = () => chapters_exports;
//#endregion
export { page };
