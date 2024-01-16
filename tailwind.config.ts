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
				'15xl': '17rem',
				'100p': '18.9vw',
			},
			colors: {
				'frost': '#ffffff88',
			},
			transitionProperty: {
				'animated-cover': 'margin-right 0.4s cubic-bezier(0.44, 0.21, 0, 1.1)',
                'animated-box': 'width 0.4s cubic-bezier(0.44, 0.21, 0, 1)',
				'header-opacity': 'opacity 0.2s cubic-bezier(.97, .01, .83, .67)',
				'hamburger-width': 'width 0.4s cubic-bezier(0.44, 0.21, 0, 1.1)'
			},
			boxShadow: {
				'menu-inset-desk': 'inset 2px 4px 10px #4654BB',
				'menu-inset': 'inset 2px 4px 10px #5C6AC4',

			},
			width: {
				'ultrawide': '1400px',
				'150': '150%',
				'220': '220%',
			},
			animation: {
                'pool': 'poolAnimation 20s infinite',
				'poolRev': 'poolAnimationRev 15s infinite',
			},
			zIndex: {
				'60': 60,
				'70': 70,
				'80': 80,
				'100': 100,
			},
			maxWidth: {
				'300':'300%',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}


// hsl(0, 0%, 25%)