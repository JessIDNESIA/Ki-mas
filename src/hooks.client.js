export async function handleError({ error, event }) {
	const errorId = crypto.randomUUID();
	/** @type {any} */
	const err = error;

	// Pastikan error dicetak ke console browser
	console.error(`[Error ID: ${errorId}]`, err);

	return {
		message: err?.message || 'Client Render Error',
		errorId,
		stack: err?.stack || 'No Stack Trace provided.',
		pathname: window.location.pathname,
	};
}
