<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0" id="home">
    <div class="w-full container mx-auto flex flex-wrap items-left justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <logo :isStickable="false" :isSticky="this.isSticky" :withText="true" />
      </div>
      <!-- Hamburger menu -->
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 focus:outline-none focus:text-gray-700" :class="navHamburger"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6 hover:text-blue-700"
            :class="navHamburger"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <!-- Top bar navigation menu -->
      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-white-500 p-3 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <nuxt-link
              class="inline-block py-2 px-2 font-bold hover:text-blue-800 no-underline"
              to="#"
              v-scroll-to="{ element: '#behandelingen', duration: 1000, offset: -35 }"
              :class="navHamburger"
            >
              Behandelingen
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              class="inline-block no-underline font-bold hover:text-blue-800 hover:text-underline py-2 px-2"
              to="/producten"
              :class="navHamburger"
            >
              Producten
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              class="inline-block no-underline font-bold hover:text-blue-800 hover:text-underline py-2 px-2"
              to="/informatie"
              :class="navHamburger"
            >
              Informatie
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              class="inline-block no-underline font-bold hover:text-blue-800 hover:text-underline py-2 px-2"
              to="#"
              v-scroll-to="{ element: '#contact', duration: 1000, offset: -30 }"
              :class="navHamburger">
              Contact
            </nuxt-link>
          </li>
        </ul>
        <button
          :class="navActionClassList"
          class="mx-auto lg:mx-2 hover:no-underline hover:text-white-500 hover:bg-blue-600 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 mr-4 shadow"
        >
          Actie
        </button>
      </div>
    </div>
    <hr class="border-t-0 border-blue-500 border-opacity-100 my-0 py-0" :class="navHeaderShadow" />
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-white-500 shadow' : ''
    },
    navActionClassList() {
      return this.isSticky ? 'bg-orange-500 text-white-500' : 'bg-white-500 text-orange-500'
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white-500' : 'bg-orange-500'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    },
    navHamburger() {
      return this.isSticky ? 'text-orange-600' : 'text-white-500'
    },
    navHeaderShadow() {
      return this.isSticky ? 'filter border-b-4 drop-shadow-xl' : 'border-b-0 drop-shadow-none'
    },
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>
