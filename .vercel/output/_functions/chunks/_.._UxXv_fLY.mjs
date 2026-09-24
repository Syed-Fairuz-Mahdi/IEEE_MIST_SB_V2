import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, r as chapters, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as selectRows } from "./supabase_CaY0y9-v.mjs";
import { n as formatLongDate, r as isPast } from "./date_B0MtY5m8.mjs";
import { t as $$EventCard } from "./EventCard_BTTJe6w4.mjs";
import { n as renderEntry, t as getAllEvents } from "./events_MzLjt4GD.mjs";
import { t as $$Newsletter } from "./Newsletter_DEtmCIvw.mjs";
//#region src/components/EventRegistration.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$EventRegistration = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$EventRegistration;
	const { slug } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<form class="registration" data-event-registration data-astro-cid-wtatf5tg><input type="hidden" name="event_slug"${addAttribute(slug, "value")} data-astro-cid-wtatf5tg><label data-astro-cid-wtatf5tg><span data-astro-cid-wtatf5tg>Full name</span><input type="text" name="name" required maxlength="120" autocomplete="name" placeholder="Your name" data-astro-cid-wtatf5tg></label><label data-astro-cid-wtatf5tg><span data-astro-cid-wtatf5tg>Email address</span><input type="email" name="email" required maxlength="254" autocomplete="email" placeholder="you@example.com" data-astro-cid-wtatf5tg></label><label data-astro-cid-wtatf5tg><span data-astro-cid-wtatf5tg>Student ID <em data-astro-cid-wtatf5tg>(optional)</em></span><input type="text" name="student_id" maxlength="40" data-astro-cid-wtatf5tg></label><label data-astro-cid-wtatf5tg><span data-astro-cid-wtatf5tg>Department <em data-astro-cid-wtatf5tg>(optional)</em></span><input type="text" name="department" maxlength="120" autocomplete="organization-title" data-astro-cid-wtatf5tg></label><!-- Honeypot: hidden from people, irresistible to bots. --><div class="hp" aria-hidden="true" data-astro-cid-wtatf5tg><label data-astro-cid-wtatf5tg>Website <input type="text" name="website" tabindex="-1" autocomplete="off" data-astro-cid-wtatf5tg></label></div><button type="submit" class="btn" data-astro-cid-wtatf5tg>Register now</button><p class="status" data-status role="status" aria-live="polite" data-astro-cid-wtatf5tg></p></form>${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/EventRegistration.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/EventRegistration.astro", void 0);
//#endregion
//#region src/pages/events/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ieee-mist-sb.vercel.app");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const slug = Astro.params.slug;
	if (!slug) {
		Astro.response.status = 404;
		throw new Error("Event slug is missing.");
	}
	const row = (await selectRows("events", {
		select: "*",
		slug: `eq.${slug}`,
		published: "eq.true",
		limit: "1"
	}))[0];
	if (!row) {
		Astro.response.status = 404;
		throw new Error(`Event "${slug}" not found.`);
	}
	const event = {
		id: row.slug,
		data: {
			title: row.title,
			date: /* @__PURE__ */ new Date(`${row.event_date}T00:00:00`),
			chapter: row.chapter,
			description: row.description,
			body: row.body ?? "",
			image: row.image_url ?? void 0,
			location: row.location ?? void 0,
			time: row.event_time ?? void 0,
			registrationLink: row.registration_link ?? void 0,
			registrationOpen: Boolean(row.registration_open),
			tags: Array.isArray(row.tags) ? row.tags : []
		}
	};
	const eventId = event.id;
	const eventSlug = event.id;
	const Content = event.entry ? (await renderEntry(event.entry)).Content : null;
	const paragraphs = (event.body ?? "").split(/\n{2,}/).map((text) => text.trim()).filter(Boolean);
	const chapter = chapters.find((item) => item.shortName === event.data.chapter);
	const past = isPast(event.data.date);
	const related = (await getAllEvents()).filter((item) => item.id !== event.id && item.data.chapter === event.data.chapter).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${event.data.title} | IEEE MIST`,
		"description": event.data.description,
		"data-astro-cid-s2t5j4ih": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-s2t5j4ih": true })}${maybeRenderHead($$result)}<main data-event-page${addAttribute(eventId, "data-event-id")}${addAttribute(eventSlug, "data-event-slug")} data-astro-cid-s2t5j4ih><section class="event-hero" data-astro-cid-s2t5j4ih><div class="hero-circuit hero-circuit-left" aria-hidden="true" data-astro-cid-s2t5j4ih></div><div class="hero-circuit hero-circuit-right" aria-hidden="true" data-astro-cid-s2t5j4ih><span data-astro-cid-s2t5j4ih></span><span data-astro-cid-s2t5j4ih></span><span data-astro-cid-s2t5j4ih></span><span data-astro-cid-s2t5j4ih></span><i data-astro-cid-s2t5j4ih></i><i data-astro-cid-s2t5j4ih></i><i data-astro-cid-s2t5j4ih></i><i data-astro-cid-s2t5j4ih></i></div><div class="container hero-inner" data-astro-cid-s2t5j4ih><nav class="breadcrumbs" aria-label="Breadcrumb" data-astro-cid-s2t5j4ih><a${addAttribute(withBase("/"), "href")} data-astro-cid-s2t5j4ih>Home</a><span data-astro-cid-s2t5j4ih>/</span><a${addAttribute(withBase("/events"), "href")} data-astro-cid-s2t5j4ih>Events</a><span data-astro-cid-s2t5j4ih>/</span><span data-event-breadcrumb data-astro-cid-s2t5j4ih>${event.data.title}</span></nav><div class="hero-copy" data-astro-cid-s2t5j4ih><p class="hero-eyebrow" data-event-eyebrow data-astro-cid-s2t5j4ih>${chapter ? `${chapter.code} · ${chapter.fullName}` : "IEEE MIST Student Branch"}</p><h1 data-event-title data-astro-cid-s2t5j4ih>${event.data.title}</h1><p class="hero-description" data-event-description data-astro-cid-s2t5j4ih>${event.data.description}</p></div></div></section><section class="detail" data-astro-cid-s2t5j4ih><div class="container detail-grid" data-astro-cid-s2t5j4ih><article class="content" data-astro-cid-s2t5j4ih>${event.data.image && renderTemplate`<div class="cover" data-event-cover data-astro-cid-s2t5j4ih><img${addAttribute(withBase(event.data.image), "src")}${addAttribute(event.data.title, "alt")} data-event-image data-astro-cid-s2t5j4ih></div>`}<ul class="tags" data-event-tags${addAttribute(event.data.tags.length === 0, "hidden")} data-astro-cid-s2t5j4ih>${event.data.tags.map((tag) => renderTemplate`<li data-astro-cid-s2t5j4ih>${tag}</li>`)}</ul><div class="prose" data-event-body data-astro-cid-s2t5j4ih>${Content ? renderTemplate`${renderComponent($$result, "Content", Content, { "data-astro-cid-s2t5j4ih": true })}` : paragraphs.map((text) => renderTemplate`<p class="plain" data-astro-cid-s2t5j4ih>${text}</p>`)}</div></article><aside class="sidebar" data-astro-cid-s2t5j4ih><div class="registration-card" data-astro-cid-s2t5j4ih><p class="card-title" data-event-card-title data-astro-cid-s2t5j4ih>${past ? "Event Details" : "Registration"}</p><dl class="event-meta" data-astro-cid-s2t5j4ih><div data-astro-cid-s2t5j4ih><dt data-astro-cid-s2t5j4ih>Date</dt><dd data-event-date data-astro-cid-s2t5j4ih>${formatLongDate(event.data.date)}</dd></div><div data-event-time-row${addAttribute(!event.data.time, "hidden")} data-astro-cid-s2t5j4ih><dt data-astro-cid-s2t5j4ih>Time</dt><dd data-event-time data-astro-cid-s2t5j4ih>${event.data.time}</dd></div><div data-event-location-row${addAttribute(!event.data.location, "hidden")} data-astro-cid-s2t5j4ih><dt data-astro-cid-s2t5j4ih>Venue</dt><dd data-event-location data-astro-cid-s2t5j4ih>${event.data.location}</dd></div><div data-astro-cid-s2t5j4ih><dt data-astro-cid-s2t5j4ih>Organised by</dt><dd data-event-organiser data-astro-cid-s2t5j4ih>${chapter ? chapter.fullName : "IEEE MIST Student Branch"}</dd></div></dl><div data-event-registration data-astro-cid-s2t5j4ih>${past ? renderTemplate`<p class="closed" data-astro-cid-s2t5j4ih>This event has already taken place.</p>` : event.data.registrationOpen ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "EventRegistration", $$EventRegistration, {
		"slug": event.id,
		"data-astro-cid-s2t5j4ih": true
	})}${event.data.registrationLink && renderTemplate`<p class="alt" data-astro-cid-s2t5j4ih>Prefer an external form?${" "}<a${addAttribute(event.data.registrationLink, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-s2t5j4ih>Register there instead</a></p>`}` })}` : renderTemplate`<p class="closed" data-astro-cid-s2t5j4ih>Registration for this event is closed.</p>`}</div></div>${chapter && renderTemplate`<a class="chapter-card"${addAttribute(withBase(`/chapters/${chapter.slug}`), "href")}${addAttribute(`--accent:${chapter.accent}`, "style")} data-astro-cid-s2t5j4ih><span class="card-logo" data-astro-cid-s2t5j4ih><img${addAttribute(chapter.logoWhite, "src")} alt="" loading="lazy" data-astro-cid-s2t5j4ih></span><span class="card-text" data-astro-cid-s2t5j4ih><strong data-astro-cid-s2t5j4ih>${chapter.code}</strong><span data-astro-cid-s2t5j4ih>${chapter.fullName}</span></span></a>`}<a class="back"${addAttribute(withBase("/events"), "href")} data-astro-cid-s2t5j4ih>← Back to all events</a></aside></div></section>${related.length > 0 && renderTemplate`<section class="related" data-astro-cid-s2t5j4ih><div class="container" data-astro-cid-s2t5j4ih><div class="section-heading" data-astro-cid-s2t5j4ih><p data-astro-cid-s2t5j4ih>EXPLORE MORE</p><h2 data-astro-cid-s2t5j4ih>More from ${chapter ? chapter.code : "the branch"}</h2></div><div class="event-grid" data-astro-cid-s2t5j4ih>${related.map((item) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, {
		"title": item.data.title,
		"date": item.data.date,
		"chapter": item.data.chapter,
		"description": item.data.description,
		"image": item.data.image,
		"location": item.data.location,
		"href": withBase(`/events/${item.id}`),
		"past": isPast(item.data.date),
		"data-astro-cid-s2t5j4ih": true
	})}`)}</div></div></section>`}${renderComponent($$result, "Newsletter", $$Newsletter, { "data-astro-cid-s2t5j4ih": true })}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-s2t5j4ih": true })}` })}${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/[...slug].astro?astro&type=script&index=0&lang.ts")}

\`\`\``;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/[...slug].astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/events/[...slug].astro";
var $$url = "/events/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/events/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
