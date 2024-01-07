/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sloth-extrabold': 'Sloth Extrabold',
				'sloth-bold': 'Sloth Bold',
				'sloth-semibold': 'Sloth Semibold',
				'sloth-normal': 'Sloth Regular',
				'sloth-light': 'Sloth Light',

			},
			fontSize: {
				'15xl': '14rem',
			},
			colors: {
				'frost': '#ffffff88',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
