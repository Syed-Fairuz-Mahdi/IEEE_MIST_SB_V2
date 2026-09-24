import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { _ as defineScriptVars, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, w as unescapeHTML } from "./server_rf2pK3z-.mjs";
import { t as withBase } from "./paths_igw4RKlg.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_BuE3G6X0.mjs";
import { t as $$HeroCircuitPattern } from "./HeroCircuitPattern_UzuDGfJD.mjs";
import { t as selectRows } from "./supabase_CaY0y9-v.mjs";
import { n as getExecutiveCommittee, t as getAssociateCommittee } from "./content_CNdbUv0G.mjs";
//#region src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$About = createComponent(async ($$result, $$props, $$slots) => {
	const executiveCommittee = await getExecutiveCommittee();
	const associateCommittee = await getAssociateCommittee();
	const fallbackStats = [
		{
			value: "100+",
			label: "Active Members"
		},
		{
			value: "5",
			label: "Technical Chapters"
		},
		{
			value: "42",
			label: "Associate Directors"
		},
		{
			value: "26",
			label: "Excomm Members"
		}
	];
	const fallbackChair = executiveCommittee.find((member) => member.role === "Chair");
	const fallbackStory = [
		"On 5 May 2015, IEEE MIST Student Branch opened its doors with just six members, marked by a small inauguration ceremony. No grand plan beyond that, just a handful of students who believed engineering education at MIST deserved something beyond the classroom. That belief turned out to be contagious.",
		"Today, the branch runs on the energy of over a hundred members organized across three levels. Forty-two Coordinators handle the ground work. Forty-two Associate Directors guide execution. Twenty-six Excomm members steer the direction. What started as six people with an idea is now a structure built to last, and to keep growing.",
		"IEEE MIST SB has also grown into something larger than a single branch. It now stands as the parent organization for five specialized chapters at MIST: Women in Engineering (WIE), Antennas and Propagation Society (APS), Electron Devices Society (EDS), Signal Processing Society (SPS), and Microwave Theory and Techniques Society (MTT-S). Each one carries forward the same spirit the founding six started with, just pointed at a different corner of engineering.",
		"If there is one thing IEEE MIST SB has always been known for, it is the International Conference on Electrical Engineering and Information & Communication Technology, ICEEICT. Hosted by the Department of EECE at MIST, with IEEE MIST SB playing a key role in organizing it, this conference has become the branch's signature event, the one that consistently put IEEE MIST SB on the map, year after year. The branch is now gearing up for its 7th edition, continuing a tradition that has brought researchers, academics, and industry voices to MIST from around the world.",
		"Beyond the conference, the branch has kept its members sharp through hands-on learning. Workshops like Pixel Pulse for graphic design, SolidWorks for modeling, and a MATLAB crash course have given students practical skills they don't always get in a lecture hall. Seminars run alongside these workshops nearly every year, quietly building a culture where members don't just attend IEEE MIST SB, they grow through it.",
		"Eleven years on, the branch that began with six members now shapes the experience of over a hundred, and stands as one of the most recognized student organizations at MIST."
	];
	const fallbackChairMessage = [
		"I took on the role of Chair at IEEE MIST SB knowing exactly what I was inheriting: a branch already in excellent shape, built patiently by the chairs before me. My job isn't to fix something broken. It's to take something strong and push it further.",
		"My goal, plainly, is this: every member of IEEE MIST SB should walk away having reached a little closer to their full potential. Not just attended events, but actually grown from them.",
		"To get there, we're expanding what the branch offers. Technical webinars are becoming a regular fixture, not an occasional add-on. We're bringing in international speakers and running alumni sessions, giving current members direct access to people who've already walked the path they're on. All of this comes together under our flagship webinar series, IEEE Elevate, which is exactly what it sounds like: a platform built to elevate our members, one session at a time.",
		"We're also introducing something new: the very first Ideathon that IEEE MIST SB has ever organized. It's a competition open to students across MIST, built around tackling real, complex problems facing Bangladesh's engineering sector. As an engineering institute, MIST is exactly the kind of place where ideas like these should be tested, challenged, and pushed toward something usable.",
		"On the chapter front, we're not stopping at five. Plans are already in motion to open IEEE Computer Society, IEEE EMBS, IEEE NPSS, IEEE RAS, and IEEE IAS student branches at MIST, giving even more students a specialized home within IEEE.",
		"And for our conference, ICEEICT, the goal is simple: I want it to be a name nobody forgets. Alongside the core conference, we're planning to host a Three Minute Thesis competition, a poster presentation, and a national idea competition, giving students more ways to showcase their work on a stage that already draws attention from across the region.",
		"None of this happens in isolation. I remain deeply grateful to our Chief Patron, Brigadier General K M Mustafizur Rahman, psc, and our counselor, Lt Col Md Aminul Islam, PhD, EME, for their continuous guidance. Their support gives this branch the direction it needs to keep moving forward.",
		"IEEE MIST SB is in a strong place today because of the people who led it before me. My job now is to take that foundation and elevate it, one member, one event, one idea at a time."
	];
	const fallbackJourney = [
		{
			year: "2015",
			title: "The Inception",
			description: "IEEE MIST Student Branch opened its doors on 5 May 2015 with just six members, marked by a small inauguration ceremony."
		},
		{
			title: "Building the Structure",
			description: "The branch grew into a three-tier structure of Coordinators, Associate Directors, and Excomm members — now running on the energy of over a hundred members."
		},
		{
			title: "Five Specialized Chapters",
			description: "IEEE MIST SB became the parent organization for five chapters — WIE, APS, EDS, SPS, and MTT-S — each carrying the founding spirit into a different corner of engineering."
		},
		{
			title: "ICEEICT, Our Signature Event",
			description: "The International Conference on Electrical Engineering and Information & Communication Technology became the branch's signature event, now heading into its 7th edition."
		},
		{
			year: "2026",
			title: "Eleven Years On",
			description: "The branch that began with six members now shapes the experience of over a hundred, and stands as one of the most recognized student organizations at MIST."
		}
	];
	const fallbackMission = "Every member of IEEE MIST SB should walk away having reached a little closer to their full potential — not just attended events, but actually grown from them.";
	const fallbackVision = "To grow from a six-member idea into a lasting structure — now the parent organization of five specialized chapters — that gives every engineering student at MIST a home to grow through, not just attend.";
	const fallbackContributors = [
		{
			name: "Nazifa Tasnim",
			role: "Executive Committee, Webmaster WIE and APS",
			avatar: withBase("images/chapters/wie/exec/nazifa-tasnim-face.jpg")
		},
		associateCommittee.find((member) => member.name === "Md. Abidur Rahman"),
		{
			name: "Mrittika Joya",
			role: ""
		}
	].filter(Boolean);
	const fallbackPrograms = [
		{
			title: "ICEEICT",
			description: "Our signature conference, hosted by the EECE department with IEEE MIST SB at the center of organizing it. Now heading into its 7th edition, bringing researchers, academics, and industry voices to MIST from around the world.",
			href: "https://iceeict.mist.ac.bd/",
			icon: "conference"
		},
		{
			title: "IEEE Elevate",
			description: "Our flagship webinar series — technical webinars, international speakers, and alumni sessions, giving members direct access to people who've already walked the path they're on.",
			icon: "webinar"
		},
		{
			title: "The Ideathon",
			description: "IEEE MIST SB's first-ever Ideathon: a competition open to students across MIST, built around tackling real, complex problems facing Bangladesh's engineering sector.",
			icon: "idea"
		},
		{
			title: "Hands-On Workshops",
			description: "Practical skills sessions like Pixel Pulse (graphic design), SolidWorks (modeling), and a MATLAB crash course — the kind of skills members don't always get in a lecture hall.",
			icon: "workshop"
		}
	];
	const programIcons = {
		conference: "<path d=\"M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z\"/><path d=\"M19 11a7 7 0 0 1-14 0\"/><path d=\"M12 18v3\"/><path d=\"M8 21h8\"/>",
		webinar: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/><path d=\"M10 8.5l6 3-6 3v-6z\"/>",
		idea: "<path d=\"M9 18h6M10 21h4\"/><path d=\"M12 3a6 6 0 0 0-6 6c0 2.2 1.3 3.6 2.3 4.6.8.8 1.2 1.4 1.2 2.4h5c0-1 .4-1.6 1.2-2.4C16.7 12.6 18 11.2 18 9a6 6 0 0 0-6-6z\"/>",
		workshop: "<path d=\"M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.3-2.3 2.1-2.1z\"/>"
	};
	const dbAbout = (await selectRows("about_page", {
		select: "*",
		id: "eq.main",
		limit: "1"
	}))[0];
	const about = {
		id: "main",
		hero_title: dbAbout?.hero_title || "Advancing Technology for the Betterment of Humanity",
		hero_description: dbAbout?.hero_description || "The IEEE MIST Student Branch is a hub of technical innovation and professional growth at the Military Institute of Science and Technology. We bridge the gap between academic theory and industry practice.",
		stats: Array.isArray(dbAbout?.stats) && dbAbout.stats.length ? dbAbout.stats : fallbackStats,
		story: Array.isArray(dbAbout?.story) && dbAbout.story.length ? dbAbout.story : fallbackStory,
		chair_name: dbAbout?.chair_name || fallbackChair?.name || "Munawar Arif Nitol",
		chair_role: dbAbout?.chair_role || "Chair, IEEE MIST Student Branch",
		chair_image_url: dbAbout?.chair_image_url || fallbackChair?.avatar || null,
		chair_message: Array.isArray(dbAbout?.chair_message) && dbAbout.chair_message.length ? dbAbout.chair_message : fallbackChairMessage,
		journey: Array.isArray(dbAbout?.journey) && dbAbout.journey.length ? dbAbout.journey : fallbackJourney,
		mission: dbAbout?.mission || fallbackMission,
		mission_source: dbAbout?.mission_source || "Munawar Arif Nitol, Chair",
		vision: dbAbout?.vision || fallbackVision,
		programs: Array.isArray(dbAbout?.programs) && dbAbout.programs.length ? dbAbout.programs : fallbackPrograms,
		contributors: Array.isArray(dbAbout?.contributors) && dbAbout.contributors.length ? dbAbout.contributors : fallbackContributors,
		cta_heading: dbAbout?.cta_heading || "Become part of IEEE MIST",
		cta_description: dbAbout?.cta_description || "Join a community of engineers building technical skill, leadership, and a professional network that reaches well beyond campus.",
		cta_button: dbAbout?.cta_button || "Get in touch",
		cta_link: dbAbout?.cta_link || "/contact"
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "About | IEEE MIST Student Branch",
		"description": "The story of IEEE MIST Student Branch — from six founding members in 2015 to the parent organization of five specialized technical chapters.",
		"data-astro-cid-ta2fbyqs": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ta2fbyqs": true })}${maybeRenderHead($$result)}<main data-astro-cid-ta2fbyqs><section class="hero" data-astro-cid-ta2fbyqs><div class="hero-gradient" data-astro-cid-ta2fbyqs></div>${renderComponent($$result, "HeroCircuitPattern", $$HeroCircuitPattern, { "data-astro-cid-ta2fbyqs": true })}<div class="container hero-inner" data-astro-cid-ta2fbyqs><h1 data-about="hero_title" data-astro-cid-ta2fbyqs>${about.hero_title}</h1><p data-about="hero_description" data-astro-cid-ta2fbyqs>${about.hero_description}</p></div></section><section class="stats-section" data-astro-cid-ta2fbyqs><div class="container stats" data-astro-cid-ta2fbyqs>${about.stats.map((stat) => renderTemplate`<div class="stat" data-astro-cid-ta2fbyqs><p class="value" data-about-stat-value data-astro-cid-ta2fbyqs>${stat.value}</p><p class="label" data-about-stat-label data-astro-cid-ta2fbyqs>${stat.label}</p></div>`)}</div></section><section class="story-section" id="story" data-astro-cid-ta2fbyqs><div class="container story-inner" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>The Story of IEEE MIST SB</h2><span class="rule" data-astro-cid-ta2fbyqs></span><div class="prose" data-astro-cid-ta2fbyqs>${about.story.map((paragraph) => renderTemplate`<p data-astro-cid-ta2fbyqs>${paragraph}</p>`)}</div></div></section><section class="chair-message" id="chair" data-astro-cid-ta2fbyqs><div class="container chair-inner" data-astro-cid-ta2fbyqs><div class="chair-photo-col" data-astro-cid-ta2fbyqs><div class="chair-photo" data-astro-cid-ta2fbyqs>${about.chair_image_url ? renderTemplate`<img${addAttribute(about.chair_image_url, "src")}${addAttribute(about.chair_name, "alt")} data-about-chair-image data-astro-cid-ta2fbyqs>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" data-about-chair-image data-astro-cid-ta2fbyqs>`}</div><div class="chair-caption" data-astro-cid-ta2fbyqs><span class="divider" data-astro-cid-ta2fbyqs></span><p class="name" data-about="chair_name" data-astro-cid-ta2fbyqs>${about.chair_name}</p><p class="role" data-about="chair_role" data-astro-cid-ta2fbyqs>${about.chair_role}</p></div></div><div class="chair-text" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Message from the Chair</h2><span class="rule" data-astro-cid-ta2fbyqs></span><div class="prose" data-astro-cid-ta2fbyqs>${about.chair_message.map((paragraph) => renderTemplate`<p data-astro-cid-ta2fbyqs>${paragraph}</p>`)}</div></div></div></section><section class="journey" data-astro-cid-ta2fbyqs><div class="container" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Our Journey</h2><span class="rule" data-astro-cid-ta2fbyqs></span><ol class="timeline" data-astro-cid-ta2fbyqs>${about.journey.map((item) => renderTemplate`<li data-astro-cid-ta2fbyqs><span class="marker" data-astro-cid-ta2fbyqs></span><div data-astro-cid-ta2fbyqs>${item.year && renderTemplate`<p class="year" data-astro-cid-ta2fbyqs>${item.year}</p>`}<p class="milestone-title" data-astro-cid-ta2fbyqs>${item.title}</p><p class="desc" data-astro-cid-ta2fbyqs>${item.description}</p></div></li>`)}</ol></div></section><section class="mv" id="mission" data-astro-cid-ta2fbyqs><div class="container mv-grid" data-astro-cid-ta2fbyqs><div class="mv-card" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Our Mission</h2><p data-about="mission" data-astro-cid-ta2fbyqs>${about.mission}</p><p class="mv-source" data-about="mission_source" data-astro-cid-ta2fbyqs>— ${about.mission_source}</p></div><div class="mv-card" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Our Vision</h2><p data-about="vision" data-astro-cid-ta2fbyqs>${about.vision}</p></div></div></section><section class="programs" data-astro-cid-ta2fbyqs><div class="container" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>What We Run</h2><span class="rule" data-astro-cid-ta2fbyqs></span><div class="program-grid" data-astro-cid-ta2fbyqs>${about.programs.map((program) => {
		const Tag = program.href ? "a" : "div";
		const linkProps = program.href ? {
			href: program.href,
			target: "_blank",
			rel: "noopener noreferrer"
		} : {};
		return renderTemplate`${renderComponent($$result, "Tag", Tag, {
			"class": "program-card",
			...linkProps,
			"data-astro-cid-ta2fbyqs": true
		}, { "default": ($$result) => renderTemplate`<div class="program-icon" data-astro-cid-ta2fbyqs><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ta2fbyqs>${unescapeHTML(programIcons[program.icon])}</svg></div><h3 data-astro-cid-ta2fbyqs>${program.title}${program.href && renderTemplate`<span class="external" aria-hidden="true" data-astro-cid-ta2fbyqs>↗</span>`}</h3><p data-astro-cid-ta2fbyqs>${program.description}</p>` })}`;
	})}</div></div></section><section class="contributors" data-astro-cid-ta2fbyqs><div class="container" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Our Contributors</h2><span class="rule" data-astro-cid-ta2fbyqs></span><p class="lede" data-astro-cid-ta2fbyqs>The people behind this website.</p><div class="contributor-grid" data-astro-cid-ta2fbyqs>${about.contributors.map((person) => renderTemplate`<div class="contributor" data-astro-cid-ta2fbyqs><div class="avatar" data-astro-cid-ta2fbyqs>${person.avatar ? renderTemplate`<img${addAttribute(person.avatar, "src")}${addAttribute(person.name, "alt")} loading="lazy" data-astro-cid-ta2fbyqs>` : renderTemplate`<img${addAttribute(withBase("images/home/icon-person.svg"), "src")} alt="" class="icon" loading="lazy" data-astro-cid-ta2fbyqs>`}</div><p class="c-name" data-astro-cid-ta2fbyqs>${person.name}</p><div class="c-roles" data-astro-cid-ta2fbyqs>${person.role && person.role.split(", ").map((line) => renderTemplate`<p class="c-role" data-astro-cid-ta2fbyqs>${line}</p>`)}</div></div>`)}</div></div></section><section class="cta" data-astro-cid-ta2fbyqs><div class="container cta-inner" data-astro-cid-ta2fbyqs><h2 data-about="cta_heading" data-astro-cid-ta2fbyqs>${about.cta_heading}</h2><p data-about="cta_description" data-astro-cid-ta2fbyqs>${about.cta_description}</p><a class="btn"${addAttribute(withBase(about.cta_link), "href")} data-about="cta_button" data-astro-cid-ta2fbyqs>${about.cta_button}</a></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ta2fbyqs": true })}` })}<script>(function(){${defineScriptVars({ about })}
	import { supabase } from '../lib/supabase-browser';

	const initialAbout = about;
	const fallbackPersonIcon = '/images/home/icon-person.svg';
	const programIcons = {
		conference: '<path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"/><path d="M19 11a7 7 0 0 1-14 0"/><path d="M12 18v3"/><path d="M8 21h8"/>',
		webinar: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M10 8.5l6 3-6 3v-6z"/>',
		idea: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-6 6c0 2.2 1.3 3.6 2.3 4.6.8.8 1.2 1.4 1.2 2.4h5c0-1 .4-1.6 1.2-2.4C16.7 12.6 18 11.2 18 9a6 6 0 0 0-6-6z"/>',
		workshop: '<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0-5.4-5.4l-2.1 2.1-2.3-2.3 2.1-2.1z"/>'
	};
	function text(sel,v){const n=document.querySelector(sel);if(n)n.textContent=v??'';}
	function paragraphs(sel,items){const h=document.querySelector(sel),t=h?.querySelector(':scope > p');if(!h||!t)return;h.replaceChildren();for(const x of items||[]){const n=t.cloneNode(false);n.textContent=x;h.append(n);}}
	function stats(items){const h=document.querySelector('.stats'),t=h?.firstElementChild;if(!h||!t)return;h.replaceChildren();for(const x of items||[]){const n=t.cloneNode(true);n.querySelector('[data-about-stat-value]').textContent=x.value??'';n.querySelector('[data-about-stat-label]').textContent=x.label??'';h.append(n);}}
	function journey(items){const h=document.querySelector('.timeline'),t=h?.firstElementChild;if(!h||!t)return;h.replaceChildren();for(const x of items||[]){const n=t.cloneNode(true),y=n.querySelector('.year');if(y){y.textContent=x.year||'';y.hidden=!x.year;}n.querySelector('.milestone-title').textContent=x.title??'';n.querySelector('.desc').textContent=x.description??'';h.append(n);}}
	function programs(items){const h=document.querySelector('.program-grid'),t=h?.firstElementChild;if(!h||!t)return;h.replaceChildren();for(const x of items||[]){const n=t.cloneNode(true),icon=n.querySelector('svg'),title=n.querySelector('h3'),desc=n.querySelector('p');if(icon)icon.innerHTML=programIcons[x.icon]||'';title.textContent=x.title??'';if(x.href){const e=document.createElement('span');e.className='external';e.setAttribute('aria-hidden','true');e.textContent='↗';title.append(e);n.href=x.href;n.target='_blank';n.rel='noopener noreferrer';}else{n.removeAttribute('href');n.removeAttribute('target');n.removeAttribute('rel');}desc.textContent=x.description??'';h.append(n);}}
	function contributors(items){const h=document.querySelector('.contributor-grid'),t=h?.firstElementChild;if(!h||!t)return;h.replaceChildren();for(const x of items||[]){const n=t.cloneNode(true),img=n.querySelector('.avatar img'),name=n.querySelector('.c-name'),roles=n.querySelector('.c-roles');img.src=x.avatar||fallbackPersonIcon;img.alt=x.avatar?(x.name||''):'';img.classList.toggle('icon',!x.avatar);name.textContent=x.name??'';roles.replaceChildren();for(const r of String(x.role||'').split(', ').filter(Boolean)){const p=document.createElement('p');p.className='c-role';p.textContent=r;roles.append(p);}h.append(n);}}
	function apply(a){text('[data-about="hero_title"]',a.hero_title);text('[data-about="hero_description"]',a.hero_description);text('[data-about="chair_name"]',a.chair_name);text('[data-about="chair_role"]',a.chair_role);text('[data-about="mission"]',a.mission);text('[data-about="mission_source"]',\`— \${a.mission_source||''}\`);text('[data-about="vision"]',a.vision);text('[data-about="cta_heading"]',a.cta_heading);text('[data-about="cta_description"]',a.cta_description);const c=document.querySelector('[data-about="cta_button"]');if(c){c.textContent=a.cta_button||'';c.href=a.cta_link||'/contact';}const im=document.querySelector('[data-about-chair-image]');if(im){im.src=a.chair_image_url||fallbackPersonIcon;im.alt=a.chair_image_url?(a.chair_name||''):'';im.classList.toggle('icon',!a.chair_image_url);}stats(a.stats);paragraphs('.story-section .prose',a.story);paragraphs('.chair-text .prose',a.chair_message);journey(a.journey);programs(a.programs);contributors(a.contributors);}
	apply(about);
	supabase.channel('about-page-live').on('postgres_changes',{event:'*',schema:'public',table:'about_page'},payload=>{if(payload.eventType!=='DELETE'&&payload.new?.id==='main')apply(payload.new);}).subscribe(status=>console.log('About Realtime status:',status));
})();<\/script>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/about.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/about.astro";
var $$url = "/about";
//#endregion
//#region \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
