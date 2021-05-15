<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1 class="w-full my-2 text-4xl md:text-5xl font-bold leading-tight text-center text-white">
      Ervaar het ook
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto bg-blue w-1/6 my-0 py-0 rounded-t"></div>
    </div>
    <h3 class="my-4 text-2xl md:text-3xl leading-tight">
      Volledige voetverzorging, comfortable bij U thuis
    </h3>
    <button
      class="mx-auto lg:mx-0 hover:no-underline hover:bg-blue hover:text-white focus:outline-none bg-white text-orange font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      @click.prevent.stop="afspraakButton"
    >
      Afspraak
    </button>
  </section>
</template>

<script>
export default {
  name: 'CallToActionContent',
  methods: {
    afspraakButton() {
      var vueScrollTo = require('vue-scrollto')
      var options = {
        // container: '#container',
        easing: 'ease-in',
        lazy: true,
        offset: -30,
        force: true,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
        },
        onDone: function(element) {
          // scrolling is done
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }

      var cancelScroll = this.$scrollTo("#contact", 1000, options)
    }
  }
}
</script>
