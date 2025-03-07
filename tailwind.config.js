/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			fontSize: '1.6rem',
			container: {
				center: true,
			},
			fontWeight: {
				w700: '700',
			},
			colors: {
				primary: {
					ffrom: 'hsl(236, 72%, 79%)',
					tto: 'hsl(237, 63%, 64%)',
				},
				neutral: {
					blue: {
						100: 'hsl(240, 78%, 98%)',
						200: 'hsl(234, 14%, 74%)',
						300: 'hsl(233, 13%, 49%)',
						400: 'hsl(232, 13%, 33%)',
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
}
