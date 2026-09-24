import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, r as chapters, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { n as associatesForChapter, r as chapterPanels } from "./committee_DPYfOyhu.mjs";
import { a as chapterHeroPhoto, i as chapterHeroPattern, n as chapterAssociateAvatars, r as chapterExecAvatars, t as chapterAccent2 } from "./chapterAvatars_D5GyL_rP.mjs";
import { t as $$ChapterStory } from "./ChapterStory_CYnYNYMp.mjs";
import { t as $$SectionHeading } from "./SectionHeading_BusCmr6x.mjs";
import { n as chapterCta, t as chapterCopy } from "./chapterCopy_etaX1JrK.mjs";
import { t as $$EventCard } from "./EventCard_BTTJe6w4.mjs";
import { t as getAllEvents } from "./events_MzLjt4GD.mjs";
//#region src/components/ChapterHero.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterHero;
	const { slug, code, fullName, title, headline, badge, subtitle, accent, accent2 = accent, logo, exploreLabel = "Explore Our Impact", eventsLabel = "Upcoming Events", variant = "dark" } = Astro.props;
	const patternExt = chapterHeroPattern[slug];
	const pattern = patternExt ? withBase(`images/chapters/${slug}/bg-pattern.${patternExt}`) : null;
	const photo = chapterHeroPhoto[slug] ? withBase(chapterHeroPhoto[slug]) : null;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(["chapter-hero", [variant]], "class:list")}${addAttribute(`--accent:${accent}; --accent2:${accent2}`, "style")} data-astro-cid-su3jiqtu><div class="bg-layer" data-astro-cid-su3jiqtu>${photo && renderTemplate`<img${addAttribute(photo, "src")} alt="" class="photo" data-astro-cid-su3jiqtu>`}${pattern && renderTemplate`<img${addAttribute(pattern, "src")} alt="" class="pattern" data-astro-cid-su3jiqtu>`}</div><div class="overlay" data-astro-cid-su3jiqtu></div><div class="container content" data-astro-cid-su3jiqtu><img${addAttribute(logo, "src")}${addAttribute(`${code} logo`, "alt")} class="logo" data-astro-cid-su3jiqtu>${badge && renderTemplate`<span class="badge" data-astro-cid-su3jiqtu>${badge}</span>`}<h1 data-astro-cid-su3jiqtu>${title ? title : headline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${headline.before}${headline.before && " "}<span class="highlight" data-astro-cid-su3jiqtu>${headline.highlight}</span>${headline.after && " "}${headline.after}` })}` : fullName}</h1><p class="subtitle" data-astro-cid-su3jiqtu>${subtitle}</p><div class="actions" data-astro-cid-su3jiqtu><a href="#about" class="btn btn-primary" data-astro-cid-su3jiqtu>${exploreLabel}</a><a href="#events" class="btn btn-outline" data-astro-cid-su3jiqtu>${eventsLabel}</a></div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterHero.astro", void 0);
//#endregion
//#region src/components/ChapterAbout.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterAbout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterAbout;
	const { slug, code, about, mission, missionItems, missionHeading = "Our Mission", vision, stats, accent, accent2 = accent } = Astro.props;
	const hasMission = mission.length > 0 || missionItems && missionItems.length > 0 || vision;
	const iconColors = [accent, accent2];
	return renderTemplate`${maybeRenderHead($$result)}<section class="about" id="about"${addAttribute(`--accent:${accent}; --accent2:${accent2}`, "style")} data-astro-cid-2kbxvzpr><div class="container grid" data-astro-cid-2kbxvzpr><div class="col" data-astro-cid-2kbxvzpr><h2 data-astro-cid-2kbxvzpr>About IEEE ${code} MIST</h2><div class="quote" data-astro-cid-2kbxvzpr>${about.map((paragraph) => renderTemplate`<p data-astro-cid-2kbxvzpr>${paragraph}</p>`)}</div>${stats && stats.length > 0 && renderTemplate`<div class="stats" data-astro-cid-2kbxvzpr>${stats.map((stat, i) => renderTemplate`<div class="stat"${addAttribute(`--stat-color:${iconColors[i % iconColors.length]}`, "style")} data-astro-cid-2kbxvzpr><div class="value" data-astro-cid-2kbxvzpr>${stat.value}</div><div class="label" data-astro-cid-2kbxvzpr>${stat.label}</div></div>`)}</div>`}</div>${hasMission && renderTemplate`<div class="col" data-astro-cid-2kbxvzpr><h2 data-astro-cid-2kbxvzpr>${missionHeading}</h2>${missionItems && missionItems.length > 0 && renderTemplate`<ul class="mission-items" data-astro-cid-2kbxvzpr>${missionItems.map((item, i) => renderTemplate`<li${addAttribute(`--item-color:${iconColors[i % iconColors.length]}`, "style")} data-astro-cid-2kbxvzpr><span class="icon-chip" data-astro-cid-2kbxvzpr><span class="icon"${addAttribute(`--icon-url:url(${JSON.stringify(withBase(`images/chapters/${slug}/icon-mission-${item.icon}.svg`))})`, "style")} data-astro-cid-2kbxvzpr></span></span><div data-astro-cid-2kbxvzpr><h4 data-astro-cid-2kbxvzpr>${item.title}</h4><p data-astro-cid-2kbxvzpr>${item.description}</p></div></li>`)}</ul>`}${mission.length > 0 && renderTemplate`<ul class="points" data-astro-cid-2kbxvzpr>${mission.map((point) => renderTemplate`<li data-astro-cid-2kbxvzpr>${point}</li>`)}</ul>`}${vision && renderTemplate`<div class="vision" data-astro-cid-2kbxvzpr><h3 data-astro-cid-2kbxvzpr>Our Vision</h3><p data-astro-cid-2kbxvzpr>${vision}</p></div>`}</div>`}</div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterAbout.astro", void 0);
//#endregion
//#region src/components/ChapterExecutiveCommittee.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterExecutiveCommittee = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterExecutiveCommittee;
	const { code, members, accent } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="exec"${addAttribute(`--accent:${accent}`, "style")} data-astro-cid-jv2kasvu><div class="container" data-astro-cid-jv2kasvu>${renderComponent($$result, "SectionHeading", $$SectionHeading, {
		"title": "Executive Committee",
		"description": `Visionaries leading the ${code} Affinity Group at MIST`,
		"data-astro-cid-jv2kasvu": true
	})}<span class="underline" data-astro-cid-jv2kasvu></span><div class="grid" data-astro-cid-jv2kasvu>${members.map((member) => renderTemplate`<div class="card" data-astro-cid-jv2kasvu><div class="photo" data-astro-cid-jv2kasvu>${member.avatar ? renderTemplate`<img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} loading="lazy" data-astro-cid-jv2kasvu>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" data-astro-cid-jv2kasvu>`}</div><p class="name" data-astro-cid-jv2kasvu>${member.name}</p><p class="role" data-astro-cid-jv2kasvu>${member.role}</p></div>`)}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterExecutiveCommittee.astro", void 0);
//#endregion
//#region src/components/ChapterAssociateCommittee.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterAssociateCommittee = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterAssociateCommittee;
	const { members, accent } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="associate"${addAttribute(`--accent:${accent}`, "style")} data-astro-cid-6xon4cjp><div class="container" data-astro-cid-6xon4cjp><div class="head" data-astro-cid-6xon4cjp><h2 data-astro-cid-6xon4cjp>Associate Directors</h2><span class="rule" data-astro-cid-6xon4cjp></span></div><div class="grid" data-astro-cid-6xon4cjp>${members.map((member) => renderTemplate`<div class="card" data-astro-cid-6xon4cjp><div class="avatar" data-astro-cid-6xon4cjp>${member.avatar ? renderTemplate`<img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} loading="lazy" data-astro-cid-6xon4cjp>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" data-astro-cid-6xon4cjp>`}</div><div data-astro-cid-6xon4cjp><p class="name" data-astro-cid-6xon4cjp>${member.name}</p><p class="role" data-astro-cid-6xon4cjp>${member.role}</p></div></div>`)}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterAssociateCommittee.astro", void 0);
//#endregion
//#region src/components/ChapterCTA.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$ChapterCTA = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterCTA;
	const { slug } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="cta-wrap" data-astro-cid-vfkjkmaa><div class="container" data-astro-cid-vfkjkmaa><div class="cta" data-astro-cid-vfkjkmaa><img${addAttribute(withBase(`images/chapters/${slug}/cta-pattern.png`), "src")} alt="" class="pattern" data-astro-cid-vfkjkmaa><div class="content" data-astro-cid-vfkjkmaa><h2 data-astro-cid-vfkjkmaa>${chapterCta.heading}</h2><p data-astro-cid-vfkjkmaa>${chapterCta.body}</p><a${addAttribute(chapterCta.href, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-vfkjkmaa>${chapterCta.button}</a></div></div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ChapterCTA.astro", void 0);
//#endregion
//#region src/pages/chapters/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ieee-mist-sb.vercel.app");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const slug = Astro.params.slug;
	const chapter = chapters.find((item) => item.slug === slug);
	if (!chapter) return new Response("Chapter not found", { status: 404 });
	const copy = chapterCopy[chapter.slug];
	if (!copy) return new Response(`No chapter content found for "${chapter.slug}"`, { status: 404 });
	const accent2 = chapterAccent2[chapter.slug] ?? chapter.accent;
	const chapterEvents = (await getAllEvents()).filter((event) => event.data.chapter === chapter.shortName).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
	const execAvatars = chapterExecAvatars[chapter.slug] ?? {};
	const panel = (chapterPanels[chapter.slug] ?? []).map((member) => ({
		...member,
		avatar: member.avatar ?? execAvatars[member.name]
	}));
	const associateAvatars = chapterAssociateAvatars[chapter.slug] ?? {};
	const associates = associatesForChapter(chapter.slug).map((member) => ({
		...member,
		avatar: member.avatar ?? associateAvatars[member.name]
	}));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${chapter.code} — ${chapter.fullName} | IEEE MIST`,
		"description": copy.heroSubtitle,
		"data-astro-cid-o433y54k": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-o433y54k": true })}${maybeRenderHead($$result)}<main data-astro-cid-o433y54k>${renderComponent($$result, "ChapterHero", $$ChapterHero, {
		"slug": chapter.slug,
		"code": chapter.code,
		"fullName": chapter.fullName,
		"title": copy.heroTitle,
		"headline": copy.heroHeadline,
		"badge": copy.heroBadge,
		"subtitle": copy.heroSubtitle,
		"accent": chapter.accent,
		"accent2": accent2,
		"logo": chapter.logoWhite,
		"variant": chapter.slug === "mtt-s" ? "light" : "dark",
		"data-astro-cid-o433y54k": true
	})}${renderComponent($$result, "ChapterStory", $$ChapterStory, {
		"paragraphs": copy.story,
		"accent": chapter.accent,
		"attribution": copy.storyAttribution,
		"align": "left",
		"data-astro-cid-o433y54k": true
	})}${renderComponent($$result, "ChapterAbout", $$ChapterAbout, {
		"slug": chapter.slug,
		"code": chapter.code,
		"about": copy.about,
		"mission": copy.mission,
		"missionItems": copy.missionItems,
		"missionHeading": copy.missionHeading,
		"vision": copy.vision,
		"stats": copy.stats,
		"accent": chapter.accent,
		"accent2": accent2,
		"data-astro-cid-o433y54k": true
	})}${renderComponent($$result, "ChapterExecutiveCommittee", $$ChapterExecutiveCommittee, {
		"code": chapter.code,
		"members": panel,
		"accent": chapter.accent,
		"data-astro-cid-o433y54k": true
	})}${associates.length > 0 && renderTemplate`${renderComponent($$result, "ChapterAssociateCommittee", $$ChapterAssociateCommittee, {
		"members": associates,
		"accent": chapter.accent,
		"data-astro-cid-o433y54k": true
	})}`}<section class="events" id="events" data-astro-cid-o433y54k><div class="container" data-astro-cid-o433y54k>${renderComponent($$result, "SectionHeading", $$SectionHeading, {
		"title": `${chapter.code} Events`,
		"description": "Recent and upcoming activities from this chapter.",
		"data-astro-cid-o433y54k": true
	})}${chapterEvents.length > 0 ? renderTemplate`<div class="event-grid" data-astro-cid-o433y54k>${chapterEvents.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, {
		"title": event.data.title,
		"date": event.data.date,
		"chapter": event.data.chapter,
		"description": event.data.description,
		"image": event.data.image,
		"location": event.data.location,
		"href": withBase(`/events/${event.id}`),
		"data-astro-cid-o433y54k": true
	})}`)}</div>` : renderTemplate`<p class="empty" data-astro-cid-o433y54k>No events have been published for this chapter yet.</p>`}</div></section>${renderComponent($$result, "ChapterCTA", $$ChapterCTA, {
		"slug": chapter.slug,
		"data-astro-cid-o433y54k": true
	})}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-o433y54k": true })}` })}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/chapters/[slug].astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/chapters/[slug].astro";
var $$url = "/chapters/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/chapters/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
