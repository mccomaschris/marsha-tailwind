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
		gradientColorStops: theme => ({
			"black-10": "rgba(19, 23, 22, 0.1)",
			"black-20": "rgba(19, 23, 22, 0.2)",
			"black-30": "rgba(19, 23, 22, 0.3)",
			"black-40": "rgba(19, 23, 22, 0.4)",
			"black-50": "rgba(19, 23, 22, 0.5)",
			"black-60": "rgba(19, 23, 22, 0.6)",
			"black-70": "rgba(19, 23, 22, 0.7)",
			"black-80": "rgba(19, 23, 22, 0.8)",
			"black-90": "rgba(19, 23, 22, 0.9)",
			"green-10": "rgba(0, 172, 62, 0.1)",
			"green-20": "rgba(0, 172, 62, 0.2)",
			"green-30": "rgba(0, 172, 62, 0.3)",
			"green-40": "rgba(0, 172, 62, 0.4)",
			"green-50": "rgba(0, 172, 62, 0.5)",
			"green-60": "rgba(0, 172, 62, 0.6)",
			"green-70": "rgba(0, 172, 62, 0.7)",
			"green-80": "rgba(0, 172, 62, 0.8)",
			"green-90": "rgba(0, 172, 62, 0.9)",
			"white": "#fff",
			"green": "#00AC3E",
			"green-dark": "#029F3B",
			"green-darker": "#007129",
			"transparent": "transparent"
		}),
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
		require('@tailwindcss/aspect-ratio'),

		plugin(function ({ addUtilities, theme }) {

			function hexToRGB(h) {
				let r = 0, g = 0, b = 0;

				if (h.length == 4) {
					r = "0x" + h[1] + h[1];
					g = "0x" + h[2] + h[2];
					b = "0x" + h[3] + h[3];

				} else if (h.length == 7) {
					r = "0x" + h[1] + h[2];
					g = "0x" + h[3] + h[4];
					b = "0x" + h[5] + h[6];
				}

				return +r + "," + +g + "," + +b
			}

			const defaultColors = {
				'black': theme('colors.gray.900'),
				'green': theme('colors.green'),
				'green-bright': theme('colors.green-bright'),
				'brown': theme('colors.brown'),
				'brown-dark': theme('colors.brown-dark'),
				'white': theme('colors.white'),
			}

			const generators = [
				(color, name) => ({
					[`.bg-${name}-overlay-10`] : { backgroundColor: `rgba(${hexToRGB(color)},0.1)`},
					[`.bg-${name}-overlay-20`] : { backgroundColor: `rgba(${hexToRGB(color)},0.2)`},
					[`.bg-${name}-overlay-30`] : { backgroundColor: `rgba(${hexToRGB(color)},0.3)`},
					[`.bg-${name}-overlay-40`] : { backgroundColor: `rgba(${hexToRGB(color)},0.4)`},
					[`.bg-${name}-overlay-50`] : { backgroundColor: `rgba(${hexToRGB(color)},0.5)`},
					[`.bg-${name}-overlay-60`] : { backgroundColor: `rgba(${hexToRGB(color)},0.6)`},
					[`.bg-${name}-overlay-70`] : { backgroundColor: `rgba(${hexToRGB(color)},0.7)`},
					[`.bg-${name}-overlay-80`] : { backgroundColor: `rgba(${hexToRGB(color)},0.8)`},
					[`.bg-${name}-overlay-90`] : { backgroundColor: `rgba(${hexToRGB(color)},0.9)`},
					// [`.underline-${name}`] : { textDecorationColor: color },
				}),
			]

			const utilities = _.flatMap(generators, generator => {
				return _.flatMap(defaultColors, generator)
			})

			addUtilities(utilities, ['responsive', 'hover', 'group-hover'])

			// const underlineUtilities = {
			// 	'.underline-2': { textDecorationThickness: '2px' },
			// 	'.underline-4': { textDecorationThickness: '4px' },
			// 	'.underline-8': { textDecorationThickness: '8px' },
      // }

			// addUtilities(underlineUtilities, ['responsive', 'hover', 'group-hover'])
		})
	]
}
