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
			transitionProperty: {
				'animated-cover': 'margin-right 0.4s cubic-bezier(0.44, 0.21, 0, 1.1)',
                'animated-box': 'width 0.4s cubic-bezier(0.44, 0.21, 0, 1)',
				'header-opacity': 'opacity .2s cubic-bezier(.97, .01, .83, .67)',
			},
			boxShadow: {
                'menu-inset': 'inset 2px 4px 10px hsl(0, 0%, 25%), 0 0 0 10px #ffffff88',
				'menu-inset-new': 'inset 2px 4px 10px hsl(0, 0%, 25%)',
			},
			pointerEvents: {
                'all': 'all',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
