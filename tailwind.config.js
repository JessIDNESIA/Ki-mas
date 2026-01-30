/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'ki-mas': {
					'aqua': '#7FD8BE',
					'green': '#2D8659',
					'light': '#A8E6CF',
					'dark': '#1A5D3A'
				}
			},
			backgroundImage: {
				'gradient-ki-mas': 'linear-gradient(to bottom, #7FD8BE, #2D8659)'
			}
		}
	},
	plugins: []
};
