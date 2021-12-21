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
				100: "#fdf7f7",
				500: "#de0d0d",
				900: "#742a2a"
			},
		},
		container: {
			center: true
		},
		fontFamily: {
			sans: ["Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
			serif: ["Sentinel A", "Sentinel B", "Bookman Old Style Regular", "serif"],
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
			// sm: '640px',
			// md: '768px',
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
		require('@tailwindcss/aspect-ratio')
	]
}
