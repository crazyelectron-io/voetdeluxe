/*
 ** TailwindCSS Configuration File
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',      // New experimental JIT engine in tailwindcss 2.1
  darkMode: false,  // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '800px',
      'lg': '920px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        100: '#ffffff',
        200: '#fffaef',
        300: '#fbf6ed',
        400: '#f9f3e6',
        500: '#f7efde',
        600: '#f3ecd7',
        700: '#f2e8cf',
        800: '#f0e4c7',
        900: '#ede0bf',
      },
      orange: {
        100: '#ffcc99',
        200: '#ffc285',
        300: '#ffb870',
        400: '#ffad5c',
        500: '#ff9c3b',
        600: '#ff8f1f',
        700: '#ff850a',
        800: '#f57a00',
        900: '#e07000',
      },
      blue: {
        100: '#47c2ff',
        200: '#33bbff',
        300: '#1fb4ff',
        400: '#0bacfc',
        500: '#00a2ea',
        600: '#0096e0',
        700: '#0088cc',
        800: '#007ab8',
        900: '#006ca4',
      },
      gray: {
        100: '#82899b',
        200: '#757d95',
        300: '#646b7d',
        400: '#535965',
        500: '#494f5a',
        600: '#40454f',
        700: '#363b44',
        800: '#272a31',
        900: '#18191e',
      },
      red: {
        DEFAULT: '#ff2c55',
      },
    },
    fontFamily: {
      sans: ['Aleo', ...defaultTheme.fontFamily.sans],
      serif: ['Aleo'],
      display: ["Aleo"],
      body: ["Aleo"]
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    // Disable if these features are not used
    // filter: false,
    // backdropFilter: false,
    // mixBlendMode: false,
    // isolation: false,
  },
  purge: {
    content: [  // See nuxt.config.js
      // './components/**/*.{vue,js}',
      // './layouts/**/*.vue',
      // './pages/**/*.vue',
      // './plugins/**/*.{js,ts}',
      // './nuxt.config.{js,ts}',
    ],
    options: {
      keyframes: true,
    },
  },
}
