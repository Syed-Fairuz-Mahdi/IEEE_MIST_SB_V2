import { t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
//#region src/components/ChapterStory.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterStory = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterStory;
	const { paragraphs, accent, image, attribution, ctaHref, ctaLabel, align = "center" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="story"${addAttribute(`--accent:${accent}`, "style")} data-astro-cid-kmu75ocd><div${addAttribute(["container grid", {
		"no-image": !image,
		"align-left": align === "left"
	}], "class:list")} data-astro-cid-kmu75ocd>${image && renderTemplate`<div class="photo" data-astro-cid-kmu75ocd><img${addAttribute(withBase(image), "src")} alt="" data-astro-cid-kmu75ocd></div>`}<div class="text" data-astro-cid-kmu75ocd><h2 data-astro-cid-kmu75ocd>Our Story</h2><span class="underline" data-astro-cid-kmu75ocd></span>${paragraphs.map((paragraph) => renderTemplate`<p data-astro-cid-kmu75ocd>${paragraph}</p>`)}${attribution && renderTemplate`<p class="attribution" data-astro-cid-kmu75ocd>— ${attribution}</p>`}${ctaHref && renderTemplate`<a${addAttribute(withBase(ctaHref), "href")} class="cta" data-astro-cid-kmu75ocd>${ctaLabel ?? "Discover Our Story"} <span aria-hidden="true" data-astro-cid-kmu75ocd>→</span></a>`}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterStory.astro", void 0);
//#endregion
export { $$ChapterStory as t };
