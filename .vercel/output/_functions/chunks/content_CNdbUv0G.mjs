import { t as withBase } from "./paths_igw4RKlg.mjs";
import { t as selectRows } from "./supabase_CaY0y9-v.mjs";
import { a as leadership, i as executiveCommittee, t as associateCommittee } from "./committee_DPYfOyhu.mjs";
//#region src/lib/content.ts
/**
* Content that editors manage from `/dashboard` instead of code:
*   - Chief Patron's Message / Counselor's Message (`leadership_messages`)
*   - Executive Committee (`executive_committee`)
*   - Associate Directors, branch-level (`associate_directors`)
*
* Fetched from Supabase whenever the page is rendered.
* If a table is empty or Supabase can't be reached, the site falls back
* to the static copy in `src/data/committee.ts`.
*/
function staticLeadershipFallback(id) {
	const person = leadership.find((m) => id === "chief_patron" ? m.role === "Chief Patron" : m.role === "Counselor");
	return {
		eyebrow: id === "chief_patron" ? "Leadership Message" : "Guidance & Vision",
		heading: id === "chief_patron" ? "Chief Patron's Message" : "Counselor's Message",
		message: [],
		personName: person?.name ?? "",
		personRoles: person ? [person.department ?? "", person.role].filter(Boolean) : [],
		image: person?.avatar ?? "",
		imageAlt: person?.name ?? ""
	};
}
/**
* Leadership messages
*
* IMPORTANT:
* There is intentionally NO module-level cache here.
* Every render gets the current Supabase data.
*/
async function getLeadershipMessages() {
	const fallback = {
		chief_patron: staticLeadershipFallback("chief_patron"),
		counselor: staticLeadershipFallback("counselor")
	};
	try {
		const rows = await selectRows("leadership_messages", { select: "*" }, 8e3);
		for (const row of rows) {
			if (row.id !== "chief_patron" && row.id !== "counselor") continue;
			if (!row.person_name) continue;
			fallback[row.id] = {
				eyebrow: row.eyebrow || fallback[row.id].eyebrow,
				heading: row.heading || fallback[row.id].heading,
				message: row.message?.length ? row.message : fallback[row.id].message,
				personName: row.person_name,
				personRoles: row.person_roles?.length ? row.person_roles : fallback[row.id].personRoles,
				image: row.image_url ? withBase(row.image_url) : fallback[row.id].image,
				imageAlt: row.person_name
			};
		}
	} catch (error) {
		const reason = error instanceof Error ? error.message : String(error);
		console.warn(`[content] Leadership messages unavailable, using static copy. (${reason})`);
	}
	return fallback;
}
/**
* Executive Committee
*
* No cache — always retrieves the current database state.
*/
async function getExecutiveCommittee() {
	try {
		const rows = await selectRows("executive_committee", {
			select: "*",
			order: "sort_order.asc"
		}, 8e3);
		if (rows.length === 0) return executiveCommittee;
		return rows.map((row) => ({
			name: row.name,
			role: row.role,
			department: row.department ?? void 0,
			major: row.major ?? void 0,
			avatar: row.avatar_url ? withBase(row.avatar_url) : void 0
		}));
	} catch (error) {
		const reason = error instanceof Error ? error.message : String(error);
		console.warn(`[content] Executive committee unavailable, using static copy. (${reason})`);
		return executiveCommittee;
	}
}
/**
* Associate Directors
*
* No cache — always retrieves the current database state.
*/
async function getAssociateCommittee() {
	try {
		const rows = await selectRows("associate_directors", {
			select: "*",
			group_key: "eq.sb",
			order: "sort_order.asc"
		}, 8e3);
		if (rows.length === 0) return associateCommittee;
		return rows.map((row) => ({
			name: row.name,
			role: row.role,
			avatar: row.avatar_url ? withBase(row.avatar_url) : void 0
		}));
	} catch (error) {
		const reason = error instanceof Error ? error.message : String(error);
		console.warn(`[content] Associate directors unavailable, using static copy. (${reason})`);
		return associateCommittee;
	}
}
//#endregion
export { getExecutiveCommittee as n, getLeadershipMessages as r, getAssociateCommittee as t };
