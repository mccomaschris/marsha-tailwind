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
			sans: ["Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
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
		function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
					// inline-flex items-center justify-center bg-green stroke-white text-white text-xl font-bold uppercase rounded py-2 px-4 text-center transition-all duration-150 ease-in-out no-underline
					fontFamily: theme('fontFamily.sans'),
					fontSize: theme('fontSize.xl'),
					fontWeight: 'bold',
					padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
					textTransform: 'uppercase',
					letterSpacing: theme('letterSpacing.wide'),
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					textDecoration: 'none !important',
					textAlign: 'center',
					borderRadius: theme('borderRadius.DEFAULT'),
					transitionProperty: 'all',
					transitionDuration: '150ms',
					transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					'&::after': {
						display: 'inline-block',
						height: theme('spacing.8'),
						width: theme('spacing.8'),
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right',
						backgroundSize: '1.5rem 1.5rem',
						content: '""',
					}
        },
				'.btn-green': {
					backgroundColor: theme('colors.green'),
					color: theme('colors.white'),
					textDecoration: 'none !important',
					'@media (prefers-contrast: more)': {
						color: theme('colors.green-darkest'),
					},
					'&:hover': {
						backgroundColor: theme('colors.green-dark'),
						color: theme('colors.white'),
					},
					'&::after': {
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /%3E%3C/svg%3E")`,
					}
				},

				'.btn-white': {
					backgroundColor: theme('colors.white'),
					color: theme('colors.green'),
					textDecoration: 'none !important',
					'@media (prefers-contrast: more)': {
						color: theme('colors.green-darkest'),
					},
					'&:hover': {
						backgroundColor: theme('colors.gray.50'),
						color: theme('colors.green'),
					},
					'&::after': {
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%2300AC3E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /%3E%3C/svg%3E")`,
					}
				},

				'.btn-clear': {
					backgroundColor: 'transparent',
					color: theme('colors.white'),
					textDecoration: 'none !important',
					'&:hover': {
						backgroundColor: 'rgba(0,172,62,.8)',
						color: theme('colors.white'),
					},
					'&::after': {
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /%3E%3C/svg%3E")`,
					}
				},

				'.btn-brown': {
					backgroundColor: theme('colors.white'),
					color: theme('colors.brown'),
					textDecoration: 'none !important',
					'&:hover': {
						backgroundColor: theme('colors.white'),
						color: theme('colors.brown-dark'),
					},
					'&::after': {
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23402d20'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /%3E%3C/svg%3E")`,
					}
				},

				'.btn-black': {
					backgroundColor: theme('colors.white'),
					color: theme('colors.gray.500'),
					'&:hover': {
						backgroundColor: theme('colors.gray.50'),
						color: theme('colors.gray.900'),
						textDecoration: 'underline',
					},
					'&::after': {
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /%3E%3C/svg%3E")`,
					}
				}
      })
    }
  ]
}
