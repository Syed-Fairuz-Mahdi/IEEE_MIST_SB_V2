import { t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_rf2pK3z-.mjs";
//#region src/components/SectionHeading.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHeading;
	const { eyebrow, title, description, align = "center", id } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["section-heading", align], "class:list")}${addAttribute(id, "id")} data-astro-cid-ypavld2q>${eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-ypavld2q>${eyebrow}</p>`}<h2 data-astro-cid-ypavld2q>${title}</h2>${description && renderTemplate`<p class="description" data-astro-cid-ypavld2q>${description}</p>`}</div>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/SectionHeading.astro", void 0);
//#endregion
export { $$SectionHeading as t };
