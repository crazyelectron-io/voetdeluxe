<template>
  <nuxt-link
    class="flex no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    to="#"
    v-scroll-to="{ element: '#home', duration: 1000, offset: -100 }"
  >
    <img class="h-12" :src="require(`../assets/img/${myLogo.toLowerCase()}`)" alt="VoetDeluxe">
    <p
      v-if="withText"
      :class="classList"
      class="text-2xl md:text-3xl font-bold p-2"
    >
      VoetDeluxe
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isSticky: {
      type: Boolean,
      default: false
    },
    withText: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isSticky) {
        classList = this.isSticky ? 'text-orange' : 'text-white'
      } else {
        classList = 'text-white'
      }
      return classList
    },
    myLogo() {
      let myLogo = ''
      if (this.isSticky) {
        myLogo = "logo.png"
      }
      else {
        myLogo = "logo-inverted.png"
      }
      return myLogo
    }
  },
}
</script>
