import { t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
import { n as formatLongDate, t as formatBadgeDate } from "./date_B0MtY5m8.mjs";
//#region src/components/EventCard.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$EventCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$EventCard;
	const { title, date, chapter, description, image, location, href, past = false } = Astro.props;
	const badge = formatBadgeDate(date);
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(["event-card", { past }], "class:list")} data-astro-cid-j3v25qam><a${addAttribute(href, "href")} class="media"${addAttribute(title, "aria-label")} data-astro-cid-j3v25qam>${image ? renderTemplate`<img${addAttribute(withBase(image), "src")} alt="" loading="lazy" data-astro-cid-j3v25qam>` : renderTemplate`<div class="placeholder" data-astro-cid-j3v25qam></div>`}<span class="chapter-tag" data-astro-cid-j3v25qam>${chapter}</span><span class="date-badge" data-astro-cid-j3v25qam><span class="month" data-astro-cid-j3v25qam>${badge.month}</span><span class="day" data-astro-cid-j3v25qam>${badge.day}</span></span></a><div class="body" data-astro-cid-j3v25qam><h3 data-astro-cid-j3v25qam><a${addAttribute(href, "href")} data-astro-cid-j3v25qam>${title}</a></h3><p class="description" data-astro-cid-j3v25qam>${description}</p><div class="meta" data-astro-cid-j3v25qam><span class="date" data-astro-cid-j3v25qam><img${addAttribute(withBase("images/home/icon-calendar.svg"), "src")} alt="" data-astro-cid-j3v25qam>${formatLongDate(date)}</span>${location && renderTemplate`<span class="location" data-astro-cid-j3v25qam>${location}</span>`}</div><a${addAttribute(href, "href")} class="more" data-astro-cid-j3v25qam>${past ? "View recap" : "View details"}<img${addAttribute(withBase("images/home/icon-arrow-right.svg"), "src")} alt="" data-astro-cid-j3v25qam></a></div></article>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/EventCard.astro", void 0);
//#endregion
export { $$EventCard as t };
