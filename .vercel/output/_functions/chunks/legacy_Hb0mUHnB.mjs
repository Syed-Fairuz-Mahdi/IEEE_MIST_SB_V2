import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, r as chapters, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as $$HeroCircuitPattern } from "./HeroCircuitPattern_UzuDGfJD.mjs";
import { o as legacyPanels, r as chapterPanels } from "./committee_DPYfOyhu.mjs";
import { r as chapterExecAvatars } from "./chapterAvatars_D5GyL_rP.mjs";
//#region src/pages/legacy.astro
var legacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Legacy,
	file: () => $$file,
	url: () => $$url
});
var $$Legacy = createComponent(($$result, $$props, $$slots) => {
	const chapterOrder = [
		"eds",
		"wie",
		"aps",
		"mtt-s",
		"sps"
	];
	const yearTabs = legacyPanels.map((panel) => {
		const sections = panel.current ? [{
			heading: "Student Branch",
			code: "SB",
			accent: "var(--color-blue)",
			members: panel.members
		}, ...chapterOrder.map((slug) => {
			const chapter = chapters.find((c) => c.slug === slug);
			const execAvatars = chapterExecAvatars[slug] ?? {};
			const members = (chapterPanels[slug] ?? []).map((member) => ({
				...member,
				avatar: member.avatar ?? execAvatars[member.name]
			}));
			return {
				heading: chapter?.fullName ?? slug,
				code: chapter?.code ?? slug.toUpperCase(),
				accent: chapter?.accent ?? "var(--color-blue)",
				members
			};
		})] : [{
			heading: null,
			code: null,
			accent: null,
			members: panel.members
		}];
		return {
			key: panel.year,
			label: panel.year,
			heading: `${panel.year} Executive Panel`,
			current: panel.current,
			sections
		};
	});
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Legacy | IEEE MIST Student Branch",
		"description": "The executive panels that have led the IEEE MIST Student Branch, year by year.",
		"data-astro-cid-vxb2mzgm": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-vxb2mzgm": true })}${maybeRenderHead($$result)}<main data-astro-cid-vxb2mzgm><section class="hero" data-astro-cid-vxb2mzgm><div class="hero-bg" data-astro-cid-vxb2mzgm></div>${renderComponent($$result, "HeroCircuitPattern", $$HeroCircuitPattern, { "data-astro-cid-vxb2mzgm": true })}<div class="container hero-inner" data-astro-cid-vxb2mzgm><h1 data-astro-cid-vxb2mzgm>Branch Legacy</h1><p data-astro-cid-vxb2mzgm>Every executive panel that has led the IEEE MIST Student Branch. Select a term to see the officers who served that year.</p></div></section><section class="tabs-section" data-astro-cid-vxb2mzgm><div class="container" data-astro-cid-vxb2mzgm><div class="tabs" role="tablist" aria-label="Select a term" data-astro-cid-vxb2mzgm>${yearTabs.map((tab, index) => renderTemplate`<button type="button" role="tab"${addAttribute(["tab", { active: index === 0 }], "class:list")}${addAttribute(tab.key, "data-key")}${addAttribute(index === 0 ? "true" : "false", "aria-selected")} data-astro-cid-vxb2mzgm>${tab.label}${tab.current && renderTemplate`<span class="dot" aria-label="Current panel" data-astro-cid-vxb2mzgm></span>`}</button>`)}</div></div></section><section class="panel-display" data-astro-cid-vxb2mzgm><div class="container" data-astro-cid-vxb2mzgm>${yearTabs.map((tab, index) => renderTemplate`<div class="panel"${addAttribute(tab.key, "data-panel")}${addAttribute(index !== 0, "hidden")} data-astro-cid-vxb2mzgm><div class="panel-head" data-astro-cid-vxb2mzgm><h2 data-astro-cid-vxb2mzgm>${tab.heading}${tab.current && renderTemplate`<span class="badge" data-astro-cid-vxb2mzgm>Current</span>`}</h2><span class="rule" data-astro-cid-vxb2mzgm></span></div>${tab.sections.map((section) => renderTemplate`<div class="sub-section"${addAttribute(section.accent ? `--accent:${section.accent}` : void 0, "style")} data-astro-cid-vxb2mzgm>${section.heading && renderTemplate`<h3 class="sub-heading" data-astro-cid-vxb2mzgm>${section.heading}${section.code && renderTemplate`<span class="sub-code" data-astro-cid-vxb2mzgm>(${section.code})</span>`}</h3>`}<div class="grid" data-astro-cid-vxb2mzgm>${section.members.map((member) => renderTemplate`<article class="officer" data-astro-cid-vxb2mzgm><div class="photo" data-astro-cid-vxb2mzgm>${member.avatar ? renderTemplate`<img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} loading="lazy" data-astro-cid-vxb2mzgm>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" loading="lazy" data-astro-cid-vxb2mzgm>`}</div><p class="role" data-astro-cid-vxb2mzgm>${member.role}</p><p class="name" data-astro-cid-vxb2mzgm>${member.name}</p>${member.department && renderTemplate`<p class="dept" data-astro-cid-vxb2mzgm>${member.department}${member.major ? ` · ${member.major}` : ""}</p>`}</article>`)}</div></div>`)}</div>`)}</div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-vxb2mzgm": true })}` })}${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/legacy.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/legacy.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/legacy.astro";
var $$url = "/legacy";
//#endregion
//#region \0virtual:astro:page:src/pages/legacy@_@astro
var page = () => legacy_exports;
//#endregion
export { page };
