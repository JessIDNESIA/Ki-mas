export async function handleError({ error, event }) {
	const errorId = crypto.randomUUID();
	/** @type {any} */
	const err = error;

    // Pastikan error dicetak ke terminal backend agar tidak tertutupi Vercel Serverless Function logs
	console.error(`[Error ID: ${errorId}]`, err);

	return {
		message: err?.message || 'Internal Error',
		errorId,
		// Melepas proteksi SvelteKit `stack` trace di browser
		stack: err?.stack || 'No Stack Trace provided by standard Error instance.',
		pathname: event.url.pathname,
	};
}
