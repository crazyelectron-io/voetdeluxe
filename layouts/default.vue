<template>
  <div class="leading-normal tracking-normal text-white bg-orange">
    <the-header />
    <hero />
    <nuxt />
        <div v-if="isOpen"
         class="fixed bottom-0 left-0 items-center justify-center w-full p-4 bg-gray-100 shadow-sm lg:flex">
        <div class="pb-2 text-5xl leading-none">
            🍪
        </div>
        <div class="lg:mx-8">
            <p>
                Can I use cookies for analytics? Read
                <nuxt-link class="text-link" to="/privacy-policy">the privacy policy</nuxt-link>
                for more information.
            </p>
        </div>
        <div class="flex justify-center mt-4 lg:mt-0">
            <div class="ml-2 button md:ml-0" @click="accept">Yes, sure</div>
            <div class="button md:ml-2" @click="deny">&times;</div>
        </div>
    </div>

    <the-footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
require('css.escape')

export default {
  components: {
    'the-header': Header,
    'the-footer': Footer
  },
  data() {
    return {
      isOpen: false
  }
}
}
</script>

<style>
html {
  font-family: 'Aleo', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
