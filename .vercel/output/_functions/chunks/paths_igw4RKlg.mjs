import { v as createRenderInstruction } from "./server_rf2pK3z-.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/utils/paths.ts
var base = "/".replace(/\/$/, "");
function withBase(path) {
	if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path;
	return `${base}/${path.replace(/^\//, "")}`;
}
//#endregion
export { renderScript as n, withBase as t };
