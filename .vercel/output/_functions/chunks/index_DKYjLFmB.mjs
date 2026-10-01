import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
import { n as $$Image } from "./_astro_assets_CWN26z1u.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { n as getExecutiveCommittee, r as getLeadershipMessages, t as getAssociateCommittee } from "./content_CNdbUv0G.mjs";
import { t as $$ChapterStory } from "./ChapterStory_CYnYNYMp.mjs";
import { t as formatBadgeDate } from "./date_B0MtY5m8.mjs";
import { t as getAllEvents } from "./events_BEEqhG_I.mjs";
import { t as $$Newsletter } from "./Newsletter_DEtmCIvw.mjs";
//#region src/assets/images/hero-bg.png
var hero_bg_default = new Proxy({
	"src": "/_astro/hero-bg.BxSNmbNX.png",
	"width": 2752,
	"height": 1536,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/assets/images/hero-bg.png";
	return target[name];
} });
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" data-astro-cid-ge2uvauf>${renderComponent($$result, "Image", $$Image, {
		"src": hero_bg_default,
		"alt": "",
		"class": "hero-bg",
		"widths": [
			640,
			1024,
			1440,
			1920
		],
		"sizes": "100vw",
		"quality": 70,
		"loading": "eager",
		"fetchpriority": "high",
		"data-astro-cid-ge2uvauf": true
	})}<div class="hero-overlay" data-astro-cid-ge2uvauf></div><div class="container hero-content" data-astro-cid-ge2uvauf><h1 data-astro-cid-ge2uvauf>Empowering Technology for Humanity at MIST</h1><p class="lede" data-astro-cid-ge2uvauf>IEEE MIST Student Branch is a hub for innovation, leadership, and technical excellence, fostering a global community of engineers.</p><div class="actions" data-astro-cid-ge2uvauf><a${addAttribute(withBase("/about"), "href")} class="btn btn-primary" data-astro-cid-ge2uvauf>Explore Hub<img${addAttribute(withBase("images/home/icon-arrow-right.svg"), "src")} alt="" data-astro-cid-ge2uvauf></a><a${addAttribute(withBase("/about#mission"), "href")} class="btn btn-glass" data-astro-cid-ge2uvauf>Our Mission</a></div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/LeadershipMessage.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$LeadershipMessage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LeadershipMessage;
	const { id, eyebrow, heading, message, personName, personRoles, image, imageAlt, reverse = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(id, "id")}${addAttribute(["leadership", { reverse }], "class:list")} data-astro-cid-lhiipsdg><div class="container" data-astro-cid-lhiipsdg><div class="section-head" data-astro-cid-lhiipsdg><p class="eyebrow" data-astro-cid-lhiipsdg>${eyebrow}</p><h2 data-astro-cid-lhiipsdg>${heading}</h2></div><div class="grid" data-astro-cid-lhiipsdg><div class="photo-col" data-astro-cid-lhiipsdg><div class="photo-frame" data-astro-cid-lhiipsdg><img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} data-astro-cid-lhiipsdg></div><div class="attribution" data-astro-cid-lhiipsdg><span class="divider" data-astro-cid-lhiipsdg></span><div data-astro-cid-lhiipsdg><p class="name" data-astro-cid-lhiipsdg>${personName}</p>${personRoles.map((role) => renderTemplate`<p class="role" data-astro-cid-lhiipsdg>${role}</p>`)}</div></div></div><div class="text-col" data-astro-cid-lhiipsdg><div class="message-card" data-astro-cid-lhiipsdg><span class="quote-mark" aria-hidden="true" data-astro-cid-lhiipsdg>&ldquo;</span>${message.map((paragraph) => renderTemplate`<p class="paragraph" data-astro-cid-lhiipsdg>${paragraph}</p>`)}</div></div></div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/LeadershipMessage.astro", void 0);
//#endregion
//#region src/components/SpecializedChapters.astro
var $$SpecializedChapters = createComponent(($$result, $$props, $$slots) => {
	const chapters = [
		{
			code: "EDS",
			name: ["ELECTRON", "DEVICES SOCIETY"],
			logo: withBase("images/home/logo-eds.png"),
			bg: "#e9fdff"
		},
		{
			code: "APS",
			name: [
				"ANTENNAS AND",
				"PROPAGATION",
				"SOCIETY"
			],
			logo: withBase("images/home/logo-aps.png"),
			bg: "rgba(102, 123, 255, 0.06)"
		},
		{
			code: "WIE",
			name: ["WOMEN IN", "ENGINEERING"],
			logo: withBase("images/home/logo-wie.png"),
			bg: "rgba(237, 230, 238, 0.4)"
		},
		{
			code: "MTT-S",
			name: [
				"MICROWAVE",
				"THEORY AND",
				"TECHNOLOGY",
				"SOCIETY"
			],
			logo: withBase("images/home/logo-mtts.png"),
			bg: "rgba(215, 212, 232, 0.4)"
		},
		{
			code: "SPS",
			name: [
				"SIGNAL",
				"PROCESSING",
				"SOCIETY"
			],
			logo: withBase("images/home/logo-sps.png"),
			bg: "rgba(202, 234, 211, 0.4)"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="chapters" data-astro-cid-gdaeegbl><div class="container" data-astro-cid-gdaeegbl><div class="heading" data-astro-cid-gdaeegbl><h2 data-astro-cid-gdaeegbl>Our Specialized Chapters</h2><p data-astro-cid-gdaeegbl>Connecting you to the specialized global technical societies of IEEE</p></div><div class="grid" data-astro-cid-gdaeegbl>${chapters.map((chapter) => renderTemplate`<div class="card"${addAttribute(`background:${chapter.bg}`, "style")} data-astro-cid-gdaeegbl><div class="logo" data-astro-cid-gdaeegbl><img${addAttribute(chapter.logo, "src")}${addAttribute(`${chapter.code} logo`, "alt")} data-astro-cid-gdaeegbl></div><p class="code" data-astro-cid-gdaeegbl>${chapter.code}</p><span class="code-underline" aria-hidden="true" data-astro-cid-gdaeegbl></span><p class="name" data-astro-cid-gdaeegbl>${chapter.name.map((line) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${line}<br data-astro-cid-gdaeegbl>` })}`)}</p></div>`)}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/SpecializedChapters.astro", void 0);
//#endregion
//#region src/components/ExecutiveCommittee.astro
var $$ExecutiveCommittee = createComponent(async ($$result, $$props, $$slots) => {
	const members = await getExecutiveCommittee();
	return renderTemplate`${maybeRenderHead($$result)}<section class="team" data-astro-cid-trrzgp7e><div class="container" data-astro-cid-trrzgp7e><div class="head" data-astro-cid-trrzgp7e><div data-astro-cid-trrzgp7e><h2 class="headline" data-astro-cid-trrzgp7e>Meet the minds behind this chapter</h2><h3 class="subhead" data-astro-cid-trrzgp7e>Executive Committee</h3><p class="tag" data-astro-cid-trrzgp7e>The visionaries leading our student branch towards a better future</p></div><a${addAttribute(withBase("/chapters"), "href")} class="directory-link" data-astro-cid-trrzgp7e>Full Member Directory<img${addAttribute(withBase("images/home/icon-external-link.svg"), "src")} alt="" data-astro-cid-trrzgp7e></a></div><div class="grid" id="executive-committee-live" data-astro-cid-trrzgp7e>${members.map((member) => renderTemplate`<div class="card" data-astro-cid-trrzgp7e><div class="avatar" data-astro-cid-trrzgp7e>${member.avatar ? renderTemplate`<img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} data-astro-cid-trrzgp7e>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" data-astro-cid-trrzgp7e>`}</div><p class="name" data-astro-cid-trrzgp7e>${member.name}</p><p class="role" data-astro-cid-trrzgp7e>${member.role}</p></div>`)}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/ExecutiveCommittee.astro", void 0);
//#endregion
//#region src/components/AssociateCommittee.astro
var $$AssociateCommittee = createComponent(async ($$result, $$props, $$slots) => {
	const members = await getAssociateCommittee();
	return renderTemplate`${maybeRenderHead($$result)}<section class="associate" data-astro-cid-6m6oo63c><div class="container" data-astro-cid-6m6oo63c><div class="head" data-astro-cid-6m6oo63c><h2 data-astro-cid-6m6oo63c>Associate Directors</h2><p data-astro-cid-6m6oo63c>The technical force behind every initiative</p><span class="underline" data-astro-cid-6m6oo63c></span></div><div class="grid" id="associate-directors-live" data-astro-cid-6m6oo63c>${members.map((member) => member.avatar ? renderTemplate`<div class="card photo-card" data-astro-cid-6m6oo63c><div class="avatar" data-astro-cid-6m6oo63c><img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} data-astro-cid-6m6oo63c></div><div data-astro-cid-6m6oo63c><p class="name" data-astro-cid-6m6oo63c>${member.name}</p><p class="role" data-astro-cid-6m6oo63c>${member.role}</p></div></div>` : renderTemplate`<div class="card" data-astro-cid-6m6oo63c><div class="icon" data-astro-cid-6m6oo63c><img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" data-astro-cid-6m6oo63c></div><div data-astro-cid-6m6oo63c><p class="name" data-astro-cid-6m6oo63c>${member.name}</p><p class="role" data-astro-cid-6m6oo63c>${member.role}</p></div></div>`)}</div></div></section>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/AssociateCommittee.astro", void 0);
//#endregion
//#region src/components/RecentActivities.astro
var $$RecentActivities = createComponent(async ($$result, $$props, $$slots) => {
	const initialEvents = (await getAllEvents()).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3).map((event) => ({
		month: formatBadgeDate(event.data.date).month,
		day: formatBadgeDate(event.data.date).day,
		title: event.data.title,
		description: event.data.description,
		href: withBase(`/events/${event.id}`)
	}));
	const fallbackSlides = [{
		image: withBase("images/home/event-techfest.png"),
		alt: "TechFest",
		tag: "ACTIVITY",
		title: "IEEE MIST Student Branch",
		description: "Explore our latest technical activities, workshops, seminars, and student initiatives.",
		date: "",
		href: withBase("/events")
	}, {
		image: withBase("images/home/event-design-thinking.png"),
		alt: "Design Thinking workshop",
		tag: "WORKSHOP",
		title: "Innovations in Robotics",
		description: "Bridge the gap between theory and practice with our hands-on robotics automation seminar.",
		date: "November 05, 2024",
		href: withBase("/events")
	}];
	return renderTemplate`${maybeRenderHead($$result)}<section class="activities"><div class="container"><div class="head"><h2>Recent Activities</h2><span class="underline"></span></div><div class="layout"><!-- =====================================================
			     FEATURED EVENT SLIDER
			     ===================================================== --><div class="slider" data-slider><div class="track" data-track style="transform: translateX(0%)">${fallbackSlides.map((slide) => renderTemplate`<div class="slide"><img${addAttribute(slide.image, "src")}${addAttribute(slide.alt, "alt")}><div class="gradient"></div><div class="slide-content">${slide.tag && renderTemplate`<span class="badge">${slide.tag}</span>`}<h3>${slide.title}</h3><p>${slide.description}</p><div class="meta">${slide.date && renderTemplate`<span class="date"><img${addAttribute(withBase("images/home/icon-calendar.svg"), "src")} alt="">${slide.date}</span>`}<a${addAttribute(slide.href, "href")} class="btn-register">View Events</a></div></div></div>`)}</div><button class="nav-btn prev" data-prev aria-label="Previous slide"><img${addAttribute(withBase("images/home/icon-chevron-left.svg"), "src")} alt=""></button><button class="nav-btn next" data-next aria-label="Next slide"><img${addAttribute(withBase("images/home/icon-chevron-right.svg"), "src")} alt=""></button><div class="dots" data-dots>${fallbackSlides.map((_, i) => renderTemplate`<span${addAttribute(["dot", { active: i === 0 }], "class:list")}${addAttribute(i, "data-dot")}></span>`)}</div></div><!-- =====================================================
			     RECENT EVENT LIST
			     ===================================================== --><div class="event-list" data-event-list>${initialEvents.map((event) => renderTemplate`<a class="event-card"${addAttribute(event.href, "href")}><div class="date-badge"><span class="month">${event.month}</span><span class="day">${event.day}</span></div><div><p class="title">${event.title}</p><p class="desc">${event.description}</p></div></a>`)}<a${addAttribute(withBase("/events"), "href")} class="browse-btn">Browse All Past Events</a></div></div></div></section>${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/RecentActivities.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/RecentActivities.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const leadership = await getLeadershipMessages();
	const chiefPatron = leadership.chief_patron;
	const counselor = leadership.counselor;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "ChapterStory", $$ChapterStory, {
		"accent": "#00629b",
		"paragraphs": ["IEEE MIST Student Branch is the premier technical organization at the Military Institute of Science and Technology, advancing technology for the benefit of humanity.", "We are a hub for innovation, leadership, and technical excellence, bringing together five specialized chapters and affinity groups to foster a global community of engineers through workshops, seminars, and hands-on projects."],
		"ctaHref": "/about#story",
		"ctaLabel": "Discover Our Story"
	})}<!-- Chief Patron -->${renderComponent($$result, "LeadershipMessage", $$LeadershipMessage, {
		"id": "chief-patron-message",
		"eyebrow": chiefPatron.eyebrow,
		"heading": chiefPatron.heading,
		"message": chiefPatron.message,
		"personName": chiefPatron.personName,
		"personRoles": chiefPatron.personRoles,
		"image": chiefPatron.image,
		"imageAlt": chiefPatron.imageAlt
	})}<!-- Counselor -->${renderComponent($$result, "LeadershipMessage", $$LeadershipMessage, {
		"id": "counselor-message",
		"eyebrow": counselor.eyebrow,
		"heading": counselor.heading,
		"message": counselor.message,
		"personName": counselor.personName,
		"personRoles": counselor.personRoles,
		"image": counselor.image,
		"imageAlt": counselor.imageAlt,
		"reverse": true
	})}${renderComponent($$result, "SpecializedChapters", $$SpecializedChapters, {})}${renderComponent($$result, "ExecutiveCommittee", $$ExecutiveCommittee, {})}${renderComponent($$result, "AssociateCommittee", $$AssociateCommittee, {})}${renderComponent($$result, "RecentActivities", $$RecentActivities, {})}${renderComponent($$result, "Newsletter", $$Newsletter, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/index.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
