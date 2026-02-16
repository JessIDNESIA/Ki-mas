export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["google447852690f1cd7fc (1).html","images/WhatsApp Image 2026-01-31 at 11.13.33.jpeg","images/kacang-disco.jpeg","images/kacang-panggang.jpeg","images/kacang-telor.jpeg","images/sacha-inchi-banner.png"]),
	mimeTypes: {".html":"text/html",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BnMsQS8r.js",app:"_app/immutable/entry/app.lfeRRchO.js",imports:["_app/immutable/entry/start.BnMsQS8r.js","_app/immutable/chunks/BuX7WXSH.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/entry/app.lfeRRchO.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/chunks/DPVsqABC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
