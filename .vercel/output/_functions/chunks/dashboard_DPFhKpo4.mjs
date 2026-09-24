import { n as __exportAll, t as createComponent } from "./compiler_C47N11RJ.mjs";
import { g as addAttribute, h as renderHead, p as renderTemplate } from "./server_rf2pK3z-.mjs";
import { n as renderScript, t as withBase } from "./paths_igw4RKlg.mjs";
//#region src/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><title>Content Dashboard | IEEE MIST Student Branch</title><link rel="icon"${addAttribute(withBase("favicon.ico"), "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead($$result)}</head><body><div id="app"><div class="boot"><div class="boot-spinner"></div><p>Loading dashboard...</p></div></div>${renderScript($$result, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}<!-- ============================================================
        DASHBOARD CSS
        IMPORTANT:
        This must be global because the dashboard UI is generated
        dynamically by JavaScript.
        ============================================================ --></body></html>`;
}, "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/dashboard.astro", void 0);
var $$file = "C:/Users/DELL/Downloads/Compressed/ets2/1/IEEE_website-main_2/IEEE_website-main/src/pages/dashboard.astro";
var $$url = "/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
