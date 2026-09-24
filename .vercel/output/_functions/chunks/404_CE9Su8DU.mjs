import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	const links = [
		{
			label: "Home",
			href: withBase("/")
		},
		{
			label: "Chapters",
			href: withBase("/chapters")
		},
		{
			label: "Events",
			href: withBase("/events")
		},
		{
			label: "About",
			href: withBase("/about")
		},
		{
			label: "Contact",
			href: withBase("/contact")
		},
		{
			label: "Legacy",
			href: withBase("/legacy")
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Page not found | IEEE MIST Student Branch",
		"description": "The page you were looking for does not exist.",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ibpinaeu": true })}${maybeRenderHead($$result)}<main class="not-found" data-astro-cid-ibpinaeu><div class="container inner" data-astro-cid-ibpinaeu><p class="code" data-astro-cid-ibpinaeu>404</p><h1 data-astro-cid-ibpinaeu>This page could not be found</h1><p class="lede" data-astro-cid-ibpinaeu>The link may be out of date, or the page may have been moved. Try one of the sections below.</p><div class="links" data-astro-cid-ibpinaeu>${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} data-astro-cid-ibpinaeu>${link.label}</a>`)}</div></div></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ibpinaeu": true })}` })}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/404.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
