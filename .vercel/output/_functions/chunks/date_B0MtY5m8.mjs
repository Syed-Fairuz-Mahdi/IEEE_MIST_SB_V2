//#region src/utils/date.ts
var monthFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	timeZone: "UTC"
});
/** "November 05, 2024" */
function formatLongDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		timeZone: "UTC"
	}).format(date);
}
/** { month: "NOV", day: "05" } for the square date badge. */
function formatBadgeDate(date) {
	return {
		month: monthFormatter.format(date).toUpperCase(),
		day: String(date.getUTCDate()).padStart(2, "0")
	};
}
/** True when the event date has already passed (compared at day granularity). */
function isPast(date) {
	const today = /* @__PURE__ */ new Date();
	const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
	return date.getTime() < todayUtc;
}
//#endregion
export { formatLongDate as n, isPast as r, formatBadgeDate as t };
