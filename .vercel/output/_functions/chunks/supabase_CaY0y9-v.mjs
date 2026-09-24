//#region src/lib/supabase.ts
var DEFAULT_URL = "https://czxhvlqhfqhovuslglpe.supabase.co";
var DEFAULT_KEY = "sb_publishable__C3FKDsT53MA-0siZYUbKw_Q26ZkV_H";
var SUPABASE_URL = String(DEFAULT_URL).replace(/\/+$/, "");
var SUPABASE_KEY = String(DEFAULT_KEY);
var DEFAULT_TIMEOUT_MS = 1e4;
var SupabaseError = class extends Error {
	/** Postgres / PostgREST error code, e.g. `23505` (unique violation). */
	code;
	/** HTTP status, or 0 when the request never reached the server. */
	status;
	constructor(message, status, code) {
		super(message);
		this.name = "SupabaseError";
		this.status = status;
		this.code = code;
	}
	get isDuplicate() {
		return this.code === "23505";
	}
	get isNetwork() {
		return this.status === 0;
	}
};
async function request(path, init, timeoutMs = DEFAULT_TIMEOUT_MS) {
	let response;
	try {
		response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
			...init,
			headers: {
				apikey: SUPABASE_KEY,
				"Content-Type": "application/json",
				...init.headers
			},
			signal: AbortSignal.timeout(timeoutMs)
		});
	} catch (cause) {
		throw new SupabaseError(`Could not reach Supabase: ${cause instanceof Error ? cause.message : String(cause)}`, 0);
	}
	if (response.ok) return response;
	let code;
	let message = response.statusText || `HTTP ${response.status}`;
	try {
		const body = await response.json();
		code = body?.code;
		message = body?.message ?? message;
	} catch {}
	throw new SupabaseError(message, response.status, code);
}
async function selectRows(table, params = {}, timeoutMs) {
	const query = new URLSearchParams(params).toString();
	return await (await request(`${encodeURIComponent(table)}${query ? `?${query}` : ""}`, { method: "GET" }, timeoutMs)).json();
}
//#endregion
export { selectRows as t };
