import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			edge: true,
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	vite: {
		ssr: {
			external: ['@xstate/svelte']
		}
	},
	preprocess: vitePreprocess(),
	static: {
		directory: 'public'
	}
};
