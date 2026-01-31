

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DL-FgBCq.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/chunks/CfhA0-CL.js","_app/immutable/chunks/DuDU6Ob5.js"];
export const stylesheets = [];
export const fonts = [];
