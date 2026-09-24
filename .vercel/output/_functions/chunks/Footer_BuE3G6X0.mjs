import { t as createComponent } from "./compiler_C47N11RJ.mjs";
import { E as createAstro, g as addAttribute, h as renderHead, m as maybeRenderHead, p as renderTemplate, u as renderSlot } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
//#region src/layouts/Layout.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "IEEE MIST Student Branch", description = "IEEE MIST Student Branch is a hub for innovation, leadership, and technical excellence, fostering a global community of engineers." } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml"${addAttribute(withBase("favicon.svg"), "href")}><link rel="icon"${addAttribute(withBase("favicon.ico"), "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet"><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/data/chapters.ts
var chapters = [
	{
		slug: "eds",
		code: "EDS",
		shortName: "EDS",
		fullName: "Electron Devices Society",
		nameLines: ["ELECTRON", "DEVICES SOCIETY"],
		logo: withBase("images/home/logo-eds.png"),
		logoWhite: withBase("images/logos/logo-eds-white.png"),
		bg: "#e9fdff",
		accent: "#00629b",
		tagline: "Advancing semiconductor and electron device technology.",
		description: "Placeholder — a short paragraph describing the IEEE MIST Electron Devices Society Student Branch Chapter, its purpose, and what members can expect.",
		focusAreas: [
			"Semiconductor Devices",
			"VLSI Design",
			"Nanotechnology",
			"Device Modelling"
		],
		established: "2023",
		chair: "Hafsa Khan",
		email: "eds@ieeemist.org"
	},
	{
		slug: "aps",
		code: "APS",
		shortName: "APS",
		fullName: "Antennas and Propagation Society",
		nameLines: [
			"ANTENNAS AND",
			"PROPAGATION",
			"SOCIETY"
		],
		logo: withBase("images/home/logo-aps.png"),
		logoWhite: withBase("images/logos/logo-aps-white.png"),
		bg: "rgba(102, 123, 255, 0.06)",
		accent: "#2a8a94",
		tagline: "Exploring antennas, wave propagation, and wireless systems.",
		description: "Placeholder — a short paragraph describing the IEEE MIST Antennas and Propagation Society Student Branch Chapter, its purpose, and what members can expect.",
		focusAreas: [
			"Antenna Design",
			"RF Engineering",
			"Wave Propagation",
			"Wireless Systems"
		],
		established: "2023",
		chair: "Md. Mehedi Hasan Bhuiyan",
		email: "aps@ieeemist.org"
	},
	{
		slug: "wie",
		code: "WIE",
		shortName: "WIE",
		fullName: "Women in Engineering",
		nameLines: ["WOMEN IN", "ENGINEERING"],
		logo: withBase("images/home/logo-wie.png"),
		logoWhite: withBase("images/logos/logo-wie-white.png"),
		bg: "rgba(237, 230, 238, 0.4)",
		accent: "#702082",
		tagline: "Inspiring, engaging, and advancing women in engineering.",
		description: "Placeholder — a short paragraph describing the IEEE MIST Women in Engineering Affinity Group, its purpose, and what members can expect.",
		focusAreas: [
			"Mentorship",
			"Leadership Development",
			"STEM Outreach",
			"Networking"
		],
		established: "2022",
		chair: "Sarah Zahin",
		email: "wie@ieeemist.org"
	},
	{
		slug: "mtt-s",
		code: "MTT-S",
		shortName: "MTT-S",
		fullName: "Microwave Theory and Technology Society",
		nameLines: [
			"MICROWAVE",
			"THEORY AND",
			"TECHNOLOGY",
			"SOCIETY"
		],
		logo: withBase("images/home/logo-mtts.png"),
		logoWhite: withBase("images/logos/logo-mtts-white.png"),
		bg: "rgba(215, 212, 232, 0.4)",
		accent: "#00558f",
		tagline: "Microwave theory, techniques, and high-frequency applications.",
		description: "Placeholder — a short paragraph describing the IEEE MIST Microwave Theory and Technology Society Student Branch Chapter, its purpose, and what members can expect.",
		focusAreas: [
			"Microwave Circuits",
			"Radar Systems",
			"Millimeter Wave",
			"Measurement"
		],
		established: "2023",
		chair: "Md. Nazmul Islam Zisan",
		email: "mtts@ieeemist.org"
	},
	{
		slug: "sps",
		code: "SPS",
		shortName: "SPS",
		fullName: "Signal Processing Society",
		nameLines: [
			"SIGNAL",
			"PROCESSING",
			"SOCIETY"
		],
		logo: withBase("images/home/logo-sps.png"),
		logoWhite: withBase("images/logos/logo-sps-white.png"),
		bg: "rgba(202, 234, 211, 0.4)",
		accent: "#2e7d32",
		tagline: "Signal, image, and information processing for a smarter world.",
		description: "Placeholder — a short paragraph describing the IEEE MIST Signal Processing Society Student Branch Chapter, its purpose, and what members can expect.",
		focusAreas: [
			"Machine Learning",
			"Image Processing",
			"Speech & Audio",
			"Biomedical Signals"
		],
		established: "2023",
		chair: "Mahdia Binte Maksud",
		email: "sps@ieeemist.org"
	}
];
//#endregion
//#region src/components/Header.astro
createAstro("https://ieee-mist-sb.vercel.app");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const navLinks = [
		{
			label: "Home",
			href: withBase("/")
		},
		{
			label: "Chapters",
			href: withBase("/chapters"),
			children: chapters.map((chapter) => ({
				label: `${chapter.code} — ${chapter.fullName}`,
				href: withBase(`/chapters/${chapter.slug}`)
			}))
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
	const normalize = (path) => path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
	const current = normalize(Astro.url.pathname);
	const home = normalize(withBase("/"));
	function isActive(href) {
		const target = normalize(href);
		if (target === home) return current === home;
		return current === target || current.startsWith(`${target}/`);
	}
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header" data-astro-cid-nen7h5rs><div class="container bar" data-astro-cid-nen7h5rs><a${addAttribute(withBase("/"), "href")} class="logo" data-astro-cid-nen7h5rs><img${addAttribute(withBase("images/logos/logo-ieee-mist-white.png"), "src")} alt="IEEE MIST Student Branch" data-astro-cid-nen7h5rs></a><nav class="nav" id="primary-nav" data-astro-cid-nen7h5rs>${navLinks.map((link) => link.children ? renderTemplate`<div class="has-dropdown" data-astro-cid-nen7h5rs><a${addAttribute(link.href, "href")}${addAttribute([
		"nav-link",
		"dropdown",
		{ active: isActive(link.href) }
	], "class:list")} data-astro-cid-nen7h5rs>${link.label}<img${addAttribute(withBase("images/home/icon-chevron-down.svg"), "src")} alt="" class="chevron" data-astro-cid-nen7h5rs></a><div class="dropdown-menu" data-astro-cid-nen7h5rs>${link.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} data-astro-cid-nen7h5rs>${child.label}</a>`)}<a${addAttribute(link.href, "href")} class="all" data-astro-cid-nen7h5rs>All chapters</a></div></div>` : renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(["nav-link", { active: isActive(link.href) }], "class:list")} data-astro-cid-nen7h5rs>${link.label}</a>`)}</nav><div class="right" data-astro-cid-nen7h5rs><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span></button></div></div></header>${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="container top" data-astro-cid-jo6i4kqk><div class="brand" data-astro-cid-jo6i4kqk><img class="brand-logo"${addAttribute(withBase("images/logos/logo-ieee-mist-white.png"), "src")} alt="IEEE MIST Student Branch" loading="lazy" data-astro-cid-jo6i4kqk><p class="blurb" data-astro-cid-jo6i4kqk>Advancing Technology for the Benefit of Humanity. IEEE MIST Student Branch is the premier technical organization at Military Institute of Science and Technology.</p><div class="socials" data-astro-cid-jo6i4kqk><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-astro-cid-jo6i4kqk><img${addAttribute(withBase("images/home/icon-social-1.svg"), "src")} alt="" data-astro-cid-jo6i4kqk></a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-astro-cid-jo6i4kqk><img${addAttribute(withBase("images/home/icon-social-2.svg"), "src")} alt="" data-astro-cid-jo6i4kqk></a></div></div><div class="links" data-astro-cid-jo6i4kqk><div data-astro-cid-jo6i4kqk><p class="col-title" data-astro-cid-jo6i4kqk>Resources</p><ul data-astro-cid-jo6i4kqk>${[
		"IEEE.org",
		"IEEE Xplore",
		"IEEE Spectrum"
	].map((item) => renderTemplate`<li data-astro-cid-jo6i4kqk><a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" data-astro-cid-jo6i4kqk>${item}</a></li>`)}</ul></div><div data-astro-cid-jo6i4kqk><p class="col-title" data-astro-cid-jo6i4kqk>Support</p><ul data-astro-cid-jo6i4kqk>${[
		"Contact Support",
		"Privacy Policy",
		"Terms of Service"
	].map((item) => renderTemplate`<li data-astro-cid-jo6i4kqk><a${addAttribute(withBase("/contact"), "href")} data-astro-cid-jo6i4kqk>${item}</a></li>`)}</ul></div></div><div class="location" data-astro-cid-jo6i4kqk><p class="col-title right" data-astro-cid-jo6i4kqk>Location</p><p class="address" data-astro-cid-jo6i4kqk>Mirpur Cantonment, Dhaka-1216<br data-astro-cid-jo6i4kqk>Bangladesh</p><div class="map" data-astro-cid-jo6i4kqk><img${addAttribute(withBase("images/home/map-location.png"), "src")} alt="Map of IEEE MIST location" data-astro-cid-jo6i4kqk></div></div></div><div class="bottom" data-astro-cid-jo6i4kqk><div class="container bottom-inner" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>© 2024 IEEE MIST Student Branch. Empowering Global Innovation.</p><p class="credit" data-astro-cid-jo6i4kqk>Developed by Nazifa Tasnim</p></div></div></footer>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/components/Footer.astro", void 0);
//#endregion
export { $$Layout as i, $$Header as n, chapters as r, $$Footer as t };
