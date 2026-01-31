export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BeqLKEoZ.js",app:"_app/immutable/entry/app.Dei1GL1A.js",imports:["_app/immutable/entry/start.BeqLKEoZ.js","_app/immutable/chunks/D3xGICFX.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/entry/app.Dei1GL1A.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/chunks/WKnkN22h.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
