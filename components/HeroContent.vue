<template>
  <div class="pt-20">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-no-repeat bg-hero-pattern bg-contain bg-opacity-10">
      <!-- <img class="absolute bg-fixed object-scale-down top-20 left-0 opacity-25 z-0" src="~assets/img/logo-background.png" alt="" > -->
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p class="uppercase tracking-wide mt-0 mb-6 w-full">Uw voeten zijn in goede handen maar de website is nog in aanbouw</p>
        <h1 class="my-4 text-3xl md:text-4xl font-bold leading-snug lg:tracking-wide z-10">
          Ervaar het gemak van een pedicure aan huis
        </h1>
        <p class="leading-normal text-xl md:text-2xl mb-8 z-10">
          Ik breng en houd uw voeten in conditie, gewoon comfortabel bij U thuis in de regio Voorne.
        </p>
        <div class="font-bold z-30">
          <button
            class="mx-auto lg:mx-0 bg-white text-orange-700 hover:text-white hover:bg-blue focus:outline-none font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            @click.prevent.stop="afspraakButton"
          >
            Afspraak
          </button>
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center z-20">
        <img class="invisible md:visible w-16 md:w-4/5 z-50" src="~/assets/img/hero-picture.png" alt="pedicure" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
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
