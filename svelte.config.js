import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	
	vitePlugin: {
		inspector: true,   
	},
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/nameleon-save-the-namaqua-chameleon.github.io/Nameleon-save-the-Namaqua-Chameleon/' : ''
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			ssr: true
		}),
		prerender: {
            handleHttpError: ({ status, path, referrer, referenceType }) => {
                if (
                    path.startsWith('/backend/') ||
                    path.startsWith('/static/') ||
                    path.startsWith('/search/')
                ) {
                    //do nothing as it links to backend
                } else {
                    throw new Error(
                        path +
                            ' Missing link.' +
                            `${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
                    );
                }
                console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
            }
        }
	}
};
export default config;
