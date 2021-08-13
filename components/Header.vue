<template>
  <nav
    class="fixed z-40 flex items-center justify-between w-full px-4 h-26"
    :class="[isSticky ? 'bg-white shadow-lg' : 'bg-orange']"
    id="home"
  >
    <div class="flex items-center">
      <!-- Hamburger menu -->
      <button
        class="mr-2 md:hidden focus:outline-none focus:text-gray hover:text-blue"
        :class="navTextColor"
        aria-label="Open Menu"
        @click="drawer"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-10 h-10"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <!-- Header Logo -->
      <div class="pl-1 my-0 md:pl-2">
        <logo :isSticky="this.isSticky" :withText="true" />
      </div>
    </div>

    <div class="hidden md:flex md:justify-between md-bg-transparent">
      <nuxt-link
        class="flex items-center p-3 mr-2 text-lg font-semibold text-center hover:text-blue focus:outline-none focus:text-gray-400"
        :class="navTextColor"
        to="#"
        v-scroll-to="{ element: '#behandelingen', duration: 800, offset: -35 }"
      >
        <span>Behandelingen</span>
      </nuxt-link>
      <nuxt-link
        class="flex items-center p-3 mr-2 text-lg font-semibold text-center hover:text-blue focus:outline-none focus:text-gray-400"
        :class="navTextColor"
        to="#"
        v-scroll-to="{ element: '#producten', duration: 800, offset: -60 }"
      >
        <span>Producten</span>
      </nuxt-link>
      <nuxt-link
        class="flex items-center p-3 mr-2 text-lg font-semibold text-center hover:text-blue focus:outline-none focus:text-gray-400"
        :class="navTextColor"
        to="#"
        v-scroll-to="{ element: '#informatie', duration: 800, offset: -35 }"
      >
        <span>Informatie</span>
      </nuxt-link>
      <nuxt-link
        class="flex items-center p-3 mr-2 text-lg font-semibold text-center hover:text-blue focus:outline-none focus:text-gray-400"
        :class="navTextColor"
        to="#"
        v-scroll-to="{ element: '#contact', duration: 800, offset: -10 }"
      >
        <span>Contact</span>
      </nuxt-link>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-gray-900 opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <aside
      class="fixed top-0 left-0 z-30 h-full overflow-auto transition-all duration-500 ease-in-out transform bg-white w-72"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <button
        @click="drawer"
        class="flex justify-between w-full h-16 pl-2 pr-4 my-1 text-orange focus:outline-none hover:text-blue focus:text-gray"
      >
        <svg
          class="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
        <logo :isSticky=true :withText="true" />
      </button>
      <span
        @click="isOpen = false"
        class="flex items-center p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
      >
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </span>
        <nuxt-link
          to="#"
          v-scroll-to="{ element: '#home', duration: 800, offset: -35 }"
        >
          Home
        </nuxt-link>
      </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
      >
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <nuxt-link
          to="#"
          v-scroll-to="{ element: '#behandelingen', duration: 800, offset: -35 }"
        >
          Behandelingen
        </nuxt-link>
      </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
      >
        <span class="mr-2">
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </span>
        <nuxt-link
          to="#"
          v-scroll-to="{ element: '#producten', duration: 800, offset: -35 }"
        >
          Producten
        </nuxt-link>
      </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
      >
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <nuxt-link
          to="#"
          v-scroll-to="{ element: '#informatie', duration: 800, offset: -35 }"
        >
          Informatie
        </nuxt-link>
      </span>
      <span
        @click="isOpen = false"
        class="flex items-center w-full p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
      >
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
          </svg>
        </span>
        <nuxt-link
          to="#"
          v-scroll-to="{ element: '#contact', duration: 800, offset: -10 }"
        >
          Contact
        </nuxt-link>
      </span>

      <div class="fixed bottom-0 w-full">
        <span
          @click="isOpen = false"
          class="flex items-center w-full p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
        >
              <svg
                class="mr-2 h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
          <a
            href="https://facebook.com/voetdeluxe"
            class="focus:no-underline focus:font-semibold"
          >
            Facebook
          </a>
        </span>
        <span
          @click="isOpen = false"
          class="flex items-center w-full p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
        >
              <svg class="mr-2 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
          <span>Instagram</span>
        </span>
        <span
          @click="isOpen = false"
          class="flex items-center w-full p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
        >
              <svg class="mr-2 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
          <span>Twitter</span>
        </span>
        <span
          @click="isOpen = false"
          class="flex items-center w-full p-2 pl-6 text-lg font-semibold text-orange hover:bg-orange hover:text-white"
        >
              <svg
                class="w-6 h-6 mr-2"
                viewBox="0 0 511 511"
                fill="currentColor"
                style="enable-background:new 0 0 511 511;"
              >
                <path
                  d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39 c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651 c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353 c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434 c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121 c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122 c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092 c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713 c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189 c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"
                  clip-rule="evenodd"
                />
              </svg>
          <span>Pinterest</span>
        </span>

      </div>
    </aside>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    logo: Logo,
  },
  data() {
    return {
      isOpen: false,
      scrollY: 0
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    navTextColor() {
      return this.isSticky ? 'text-orange' : 'text-white'
    },
    navActionClassList() {
      return this.isSticky ? 'bg-orange text-white' : 'bg-white text-orange'
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)

    this.$toast.show({
      type: 'danger',
      message: 'Ik ben vanaf 28 augustus op vakantie en verwen uw voeten graag weer na 19 september',
      title: 'LET OP:',
      classClose: 'text-orange-300 mx-auto shadow-3xl text-lg font-black',
      classTitle: 'text-orange-300 mx-auto shadow-3xl text-lg font-black',
      classToast: 'bg-blue z-50 mx-auto shadow-3xl',
      classMessage: 'text-white font-semibold text-lg',
      classTimeout: 'bg-white',
      timeout: 30,
    })
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }

};
</script>
