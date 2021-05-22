<template>
  <Nuxt />
</template>
<script>
export default {
  mounted () {
    if ($nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      var hash=$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    }
  }
}
</script>
