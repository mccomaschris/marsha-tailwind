const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
		colors: {
			transparent: "transparent",
			inherit: "inherit",
			black: "#131716",
			"green-darkest": "#003314",
			"green-darker": "#007129",
			"green-dark": "#028833",
			green: "#00AC3E",
			"green-bright": "#08cd4f",
			"green-light": "#fafffc",
			white: "#ffffff",
			brown: "#925D49",
			"brown-dark": "#402d20",
			gray: {
				50: "#fafafa",
				100: "#edeeee",
				200: "#cbcece",
				300: "#a9adad",
				400: "#868c8c",
				500: "#535c5c",
				600: "#3a4040",
				700: "#313737",
				800: "#212424",
				900: "#131716"
			},
			red: {
				50: "#fef2f2",
				100: "#fee2e2",
				200: "#fecaca",
				300: "#fca5a5",
				400: "#f87171",
				500: "#ef4444",
				600: "#dc2626",
				700: "#b91c1c",
				800: "#991b1b",
				900: "#7f1d1d"
			},
			yellow: {
				50: '#fefce8',
				100: '#fef9c3',
				200: '#fef08a',
				300: '#fde047',
				400: '#facc15',
				500: '#eab308',
				600: '#ca8a04',
				700: '#a16207',
				800: '#854d0e',
				900: '#713f12',
			},
			orange: {
				50: '#fff7ed',
				100: '#ffedd5',
				200: '#fed7aa',
				300: '#fdba74',
				400: '#fb923c',
				500: '#f97316',
				600: '#ea580c',
				700: '#c2410c',
				800: '#9a3412',
				900: '#7c2d12',
			},
		},
		container: {
			center: true
		},
		fontFamily: {
			mont: ['Montserrat', "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
			sans: ['Nunito Sans', "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
			holiday: ['Snowburst One', "cursive"]
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			"7xl": "5rem",
			"9xl": "7rem",
			safe: '1.16625rem',
			massive: "10rem" // 160px for BE PROUD
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: "1024px",
			xl: "1440px"
		},
		extend: {
			backgroundSize: {
				'125%': '125%',
				'135%': '135%'
			},
			borderWidth: {
				'12': '12px'
			},
			height: {
				'112': '28rem',
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
			},
			maxHeight: {
				'96': '24rem',
			},
			minHeight: {
				'24': '6rem',
				'36': '9rem',
				'48': '12rem',
				'64': '16rem',
				'80': '20rem',
				'96': '24rem',
				'104': '26rem',
				'112': '28rem',
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
				'176': '44rem',
				'184': '46rem',
				'200': '50rem',
			},
			transitionProperty: {
				visibility: 'visibility',
			},
			zIndex: {
				"60": 60,
				"70": 70,
				"80": 80,
				"90": 90,
				"100": 100
			}
		}
	},
	plugins: [
    plugin(function({ addVariant }) {
			addVariant('prefers-contrast', '@media (prefers-contrast: more)')
    }),
  ]
}
