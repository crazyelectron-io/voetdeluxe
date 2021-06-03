<template>
  <nuxt-link
    class="flex text-2xl font-bold no-underline hover:no-underline lg:text-4xl"
    to="#"
    v-scroll-to="{ element: '#home', duration: 1000, offset: -100 }"
  >
    <img class="h-12" :src="require(`../assets/img/${myLogo.toLowerCase()}`)" alt="VoetDeluxe">
    <div
      v-if="withText"
      :class="classList"
      class="p-2 text-2xl font-bold md:text-3xl"
    >
      VoetDeluxe
    </div>
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
