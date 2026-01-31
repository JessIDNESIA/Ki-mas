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
		client: {start:"_app/immutable/entry/start.BGM0YuvW.js",app:"_app/immutable/entry/app.D1GCc64c.js",imports:["_app/immutable/entry/start.BGM0YuvW.js","_app/immutable/chunks/DuDU6Ob5.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/entry/app.D1GCc64c.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/chunks/CfhA0-CL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
