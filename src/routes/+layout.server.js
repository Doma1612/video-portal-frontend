// Quelle: Login Projekt Svelte Prof. Dr Klaus Dallmöller
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user,
		session: locals.session
	};
}

// export function load({ locals }) {
// 	return {
// 		user: locals.user && {
// 			username: locals.user.username,
// 			token: locals.user.token
// 		}
// 	};
// }
