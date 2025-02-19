// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.connorpartington.com',
	integrations: [
		starlight({
			title: 'Connor Partington',
			social: {
				github: 'https://github.com/Connor-Partington',
				linkedin: 'https://www.linkedin.com/in/connor-partington/',
			},
			sidebar: [
				{
					label: 'Examples',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Recommendations',
					autogenerate: { directory: 'recommendations' },
				},
			],
		}),
	],
});
