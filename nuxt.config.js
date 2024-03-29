// nuxt.config.js
import nuxtConfig from './nuxt.config'

export default {
  /*
   ** SSR or Static
   */
  target: 'server',

  /*
   ** Global page headers:  https://go.nuxtjs.dev/config-head
   */
  head: {
    title: 'VoetDeluxe - pedicure aan huis in Brielle, Oostvoorne en Rockanje',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Uw voeten in goede handen bij VoetDeluxe, voor eelt, kalknagels, kloven, likdoorns, nagels knippen en voetmassage',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'apple-mobile-web-app-title', content: 'VoetDeluxe' },
      { name: 'theme-color', content: '#ff8f1f' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '57x57', href: '/favicon-apple-touch-114.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '72x72', href: '/favicon-apple-touch-144.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '114x114', href: '/favicon-apple-touch-114.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '144x144', href: '/favicon-apple-touch-144.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/vnd.mirosoft.icon', sizes: '32x32 48x48', href: '/favicon.ico' },
      { rel: 'icon', sizes: '128x128', href: '/favicon.icns' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '192x192', href: '/favicon-192.jpg' },
      { rel: 'icon', type: 'image/x-icon', sizes: '512x512', href: '/favicon-512.jpg' },
    ],
  },

  /*
   ** Setup port and address
   */
  server: {
    port: 3000,
  },

  /*
   ** Global CSS: https://go.nuxtjs.dev/config-css
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Router configuration
   */
  router: {
    fallback: true, // fallback to refresh on old browsers
    linkActiveClass: 'active-link',
    mode: 'history',
  },

  /*
   ** Plugins to load before mounting the App: https://go.nuxtjs.dev/config-plugins
   */
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    '@/plugins/vee-validate',
    { src: './plugins/vue-gtag', mode: 'client' }
  ],

  /*
   ** Auto import components: https://go.nuxtjs.dev/config-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'css.escape',
    ['vue-scrollto/nuxt', { duration: 700 }],
    '@nuxtjs/axios',
    ['nuxt-tailvue', { toast: true }],
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV != 'production', // Enable GA only in production site
    checkDuplicatedScript: true,
  },

  /*
   ** Axios cfg
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/send/': 'https://api.voetdeluxe.nl',
    '/aanmelden/': 'https://api.voetdeluxe.nl',
  },

  /*
   ** Build configuration
   */
  build: {
    // The following fixes an issue with Babel having contradicting 'loose' settings [2021-05-08].
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: ['vee-validate/dist/rules'],
    // You can extend webpack config here
    extend(config, ctx) {},
  },

  purge: {
    content(defaultContents) {
      return defaultContents.map((path) => join(nuxtConfig.srcDir, path)).map((file) => file.replace('.js', '.ts'))
    },
  },

  purgeCSS: {
    enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
    whitelist: ['hidden', 'aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in'],
    whitelistPatterns: [/md:w-[1-6]/],
  },

  /*
   ** Manifest configuration
   */
  manifest: {
    name: 'VoetDeluxe',
    start_url: 'https://voetdeluxe/nl?standalone=true',
    short_name: 'VoetDeluxe',
    display: 'standalone',
    prefer_related_application: false,
    description:
      'Uw pedicure aan huis in de regio Voorne. Met de beste zorg voor uw voeten, of het nu nagels knippen, eelt verwijderen, schimmelnagels behandelen, kloven behandelen, verdikte nagels afvlakken of een voetmassage betreft, VoetDeluxe komt Uw voeten in het comfort van uw eigen huis verzorgen en verwennen.',
  },
}
