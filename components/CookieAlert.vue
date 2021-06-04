<template>
<div class="shadow-md">
  <client-only>
    <div v-if="isOpen" class="fixed bottom-0 left-0 z-50 items-center justify-center w-full p-2 bg-gray-200 lg:flex">
      <div class="flex flex-row justify-center">
        <div class="pb-0 text-4xl leading-none">
          🍪
        </div>
        <div class="pt-2 pl-2 text-sm lg:mx-8">
          Staat u Cookies for website analyse toe? Lees
          <nuxt-link to="#" v-scroll-to="{ element: '#informatie', duration: 800, offset: -35 }" class="hover:text-orange">
            het privacybeleid
          </nuxt-link>
          voor meer informatie.
        </div>
      </div>
      <div class="flex flex-row justify-center mb-1 lg:mt-0">
        <div class="px-4 my-1">
          <button @click="accept" class="px-8 mx-auto mt-1 font-semibold bg-white rounded-full shadow-lg lg:mx-0 hover:no-underline hover:bg-blue hover:text-white focus:outline-none text-orange">
            Ja
          </button>
        </div>
        <div class="px-4 my-1">
          <button @click="deny" class="px-8 mx-auto mt-1 font-semibold bg-white rounded-full shadow-lg lg:mx-0 hover:no-underline hover:bg-blue hover:text-white focus:outline-none text-orange">
            Nee
          </button>
        </div>
      </div>
    </div>
  </client-only>
</div>
</template>

<script>
  import {bootstrap} from 'vue-gtag'

  export default {
    name: 'CookieAlert',
    data() {
      return {
          isOpen: false
      }
    },
    created() {
      if (!this.getGDPR() === true) {
        this.isOpen = true;
      }
    },
    methods: {
      getGDPR() {
        if (process.browser) {
          return localStorage.getItem('GDPR:accepted', true)
        }
      },
      accept() {
        if (process.browser) {
          bootstrap().then(gtag => {
            this.isOpen = false
            localStorage.setItem('GDPR:accepted', true)
            location.reload()
          })
        }
      },
      deny() {
        if (process.browser) {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', false)
        }
      }
    }
  }
</script>
