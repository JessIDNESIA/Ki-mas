/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#5af127',
					dark: '#1a3a14',
					gold: '#FFD700'
				},
				'ki-mas': {
					'aqua': '#7FD8BE',
					'green': '#2D8659',
					'light': '#A8E6CF',
					'dark': '#1A5D3A'
				},
				'deep-forest': '#062c21',
				'charcoal-green': '#0a1a16',
				'sacha-green': '#84cc16',
				'sacha-teal': '#14b8a6',
				'sacha-yellow': '#fde047',
				saccha: {
					green: '#4ade80',
					yellow: '#fde047',
					gold: '#c5a021',
					forest: '#166534',
					background: '#f0f9ed',
					primary: '#176a21',
					secondary: '#266829',
					tertiary: '#39653f',
					'on-primary': '#d1ffc8',
					'on-secondary': '#d1ffc8',
					'on-tertiary': '#cfffcf',
					'on-surface': '#283129',
					'on-surface-variant': '#555e55',
					'primary-container': '#9df197',
					'on-primary-container': '#005c15',
					'secondary-container': '#acf4a4',
					'on-secondary-container': '#1b5e20',
					'tertiary-container': '#cbfecc',
					'on-tertiary-container': '#38643e',
					'surface-container': '#e0ebde',
					'surface-container-high': '#d9e6d7',
					'surface-container-low': '#e9f4e7',
					'surface-container-lowest': '#ffffff',
					'surface-container-highest': '#d3e1d1',
					'on-surface-variant': '#555e55',
				}
			},
			fontFamily: {
				sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				headline: ['Epilogue', 'sans-serif'],
				fredoka: ['Fredoka', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-ki-mas': 'linear-gradient(to bottom, #7FD8BE, #2D8659)'
			},
			animation: {
				'float': 'float 8s ease-in-out infinite',
				'float-delayed': 'float 10s ease-in-out 2s infinite',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
				'spin-slow': 'spin 20s linear infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulseGlow: {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' },
				}
			}
		}
	},
	plugins: []
};
