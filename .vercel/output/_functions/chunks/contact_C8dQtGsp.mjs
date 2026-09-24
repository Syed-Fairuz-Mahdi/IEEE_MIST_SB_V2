import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as $$HeroCircuitPattern } from "./HeroCircuitPattern_UzuDGfJD.mjs";
import { t as selectRows } from "./supabase_CaY0y9-v.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const fallbackSubjects = [
		"General Inquiry",
		"Membership",
		"Event or workshop",
		"Collaboration / sponsorship",
		"Chapter enquiry"
	];
	const fallbackSocials = [
		{
			label: "Facebook",
			href: "https://www.facebook.com"
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com"
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com"
		},
		{
			label: "YouTube",
			href: "https://www.youtube.com"
		}
	];
	const fallbackFaqs = [
		{
			question: "Who can join the IEEE MIST Student Branch?",
			answer: "Placeholder — describe eligibility: which departments, which years, and whether an IEEE membership number is required first."
		},
		{
			question: "How much does membership cost?",
			answer: "Placeholder — state the current IEEE student membership fee and any branch fee."
		},
		{
			question: "Can I join more than one chapter?",
			answer: "Placeholder — explain whether members can hold membership in multiple chapters."
		},
		{
			question: "How do I propose an event or collaboration?",
			answer: "Placeholder — describe the process and expected notice period for proposing an event with the branch."
		}
	];
	const dbContact = (await selectRows("contact_page", {
		select: "*",
		id: "eq.main",
		limit: "1"
	}))[0];
	const contactPage = {
		id: "main",
		hero_title: dbContact?.hero_title || "Connect with IEEE MIST",
		hero_description: dbContact?.hero_description || "Questions about membership, an event, or a collaboration? Send us a message and the right person on the committee will get back to you.",
		address_lines: Array.isArray(dbContact?.address_lines) && dbContact.address_lines.length ? dbContact.address_lines : [
			"IEEE MIST Student Branch",
			"Military Institute of Science and Technology",
			"Mirpur Cantonment, Dhaka-1216, Bangladesh"
		],
		email: dbContact?.email || "ieeemistsb@mist.ac.bd",
		office_hours: dbContact?.office_hours || "Sunday — Thursday, 10:00 AM to 4:00 PM",
		map_image_url: dbContact?.map_image_url || withBase("images/home/map-location.png"),
		socials: Array.isArray(dbContact?.socials) && dbContact.socials.length ? dbContact.socials : fallbackSocials,
		subjects: Array.isArray(dbContact?.subjects) && dbContact.subjects.length ? dbContact.subjects : fallbackSubjects,
		faqs: Array.isArray(dbContact?.faqs) && dbContact.faqs.length ? dbContact.faqs : fallbackFaqs
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Contact | IEEE MIST Student Branch",
		"description": "Connect with the IEEE MIST Student Branch — membership, collaborations, event proposals, and general enquiries.",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-6bfsojfh": true })}${maybeRenderHead($$result)}<main data-astro-cid-6bfsojfh><section class="hero" data-astro-cid-6bfsojfh>${renderComponent($$result, "HeroCircuitPattern", $$HeroCircuitPattern, { "data-astro-cid-6bfsojfh": true })}<div class="container hero-inner" data-astro-cid-6bfsojfh><h1 data-contact="hero_title" data-astro-cid-6bfsojfh>${contactPage.hero_title}</h1><p data-contact="hero_description" data-astro-cid-6bfsojfh>${contactPage.hero_description}</p></div></section><section class="main-grid-section" data-astro-cid-6bfsojfh><div class="container main-grid" data-astro-cid-6bfsojfh><div class="form-card" data-astro-cid-6bfsojfh><h2 data-astro-cid-6bfsojfh>Send us a message</h2><form class="contact-form" data-contact-form data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh><span data-astro-cid-6bfsojfh>Full name</span><input type="text" name="name" required maxlength="120" autocomplete="name" placeholder="John Doe" data-astro-cid-6bfsojfh></label><label data-astro-cid-6bfsojfh><span data-astro-cid-6bfsojfh>Email address</span><input type="email" name="email" required maxlength="254" autocomplete="email" placeholder="john@example.com" data-astro-cid-6bfsojfh></label><label data-astro-cid-6bfsojfh><span data-astro-cid-6bfsojfh>Subject</span><select name="subject" data-contact="subjects" data-astro-cid-6bfsojfh>${contactPage.subjects.map((subject) => renderTemplate`<option${addAttribute(subject, "value")} data-astro-cid-6bfsojfh>${subject}</option>`)}</select></label><label data-astro-cid-6bfsojfh><span data-astro-cid-6bfsojfh>Message</span><textarea name="message" rows="6" required maxlength="5000" placeholder="How can we help you today?" data-astro-cid-6bfsojfh></textarea></label><!-- Honeypot: hidden from people, irresistible to bots. --><div class="hp" aria-hidden="true" data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh>Website <input type="text" name="website" tabindex="-1" autocomplete="off" data-astro-cid-6bfsojfh></label></div><button type="submit" class="btn" data-astro-cid-6bfsojfh>Send message</button><p class="status" data-status role="status" aria-live="polite" data-astro-cid-6bfsojfh></p></form></div><aside class="info-card" data-astro-cid-6bfsojfh><h2 data-astro-cid-6bfsojfh>Contact Information</h2><dl class="info-list" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><dt data-astro-cid-6bfsojfh>Address</dt><dd data-contact="address" data-astro-cid-6bfsojfh>${contactPage.address_lines.map((line) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${line}<br data-astro-cid-6bfsojfh>` })}`)}</dd></div><div data-astro-cid-6bfsojfh><dt data-astro-cid-6bfsojfh>Email</dt><dd data-astro-cid-6bfsojfh><a data-contact="email"${addAttribute(`mailto:${contactPage.email}`, "href")} data-astro-cid-6bfsojfh>${contactPage.email}</a></dd></div><div data-astro-cid-6bfsojfh><dt data-astro-cid-6bfsojfh>Office hours</dt><dd data-contact="office_hours" data-astro-cid-6bfsojfh>${contactPage.office_hours}</dd></div></dl><div class="map" data-astro-cid-6bfsojfh><img${addAttribute(contactPage.map_image_url || withBase("images/home/map-location.png"), "src")} data-contact="map" alt="Map showing the IEEE MIST location" loading="lazy" data-astro-cid-6bfsojfh></div><p class="follow-label" data-astro-cid-6bfsojfh>Follow our updates</p><div class="socials" data-contact="socials" data-astro-cid-6bfsojfh>${contactPage.socials.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-6bfsojfh>${social.label}</a>`)}</div></aside></div></section><section class="faq" data-astro-cid-6bfsojfh><div class="container" data-astro-cid-6bfsojfh><h2 data-astro-cid-6bfsojfh>Frequently Asked Questions</h2><span class="rule" data-astro-cid-6bfsojfh></span><div class="faq-list" data-contact="faqs" data-astro-cid-6bfsojfh>${contactPage.faqs.map((faq) => renderTemplate`<details data-astro-cid-6bfsojfh><summary data-astro-cid-6bfsojfh>${faq.question}</summary><p data-astro-cid-6bfsojfh>${faq.answer}</p></details>`)}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-6bfsojfh": true })}` })}${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/contact.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
