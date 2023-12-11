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
				'light': '#ffffff',
				'dark': '#27272a',
				'primary': '#34D399',
				'secondary': '#9ca3af',
				'success': '#22c55e',
				'danger': '#e05263',
				'danger-light': '#fb7185',
				'warning': '#f97316',
				'info': '#0284c7',
				'gray-dark': '#3f3f46',
				'gray': '#52525b',
				'gray-light': '#e4e4e7'
			  }
		}
	},
	darkMode: 'class',
	plugins: []
};
