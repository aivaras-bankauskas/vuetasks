/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		screens: {
			'xxs': '350px',
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				'body-light': '#e4e4e7',
				'body-dark': '#000000',
				'divider-light': '#d4d4d8',
				'divider-dark': '#27272a',
				'color-light': '#000000',
				'color-dark': '#ffffff',
				'link-light': '#000000',
				'link-dark': '#ffffff',
				'light': '#ffffff',
				'dark': '#18181b',
				'primary': '#34D399',
				'secondary': '#a1a1aa',
				'success': '#22c55e',
				'danger': '#e05263',
				'danger-light': '#fb7185',
				'warning': '#f97316',
				'info': '#0284c7'
			  }
		}
	},
	darkMode: 'class',
	plugins: []
};
