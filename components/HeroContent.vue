<template>
  <div class="pt-20">
    <div class="container flex flex-col flex-wrap items-center px-3 mx-auto bg-no-repeat bg-contain md:flex-row bg-hero-pattern bg-opacity-10">
      <!-- <img class="absolute left-0 z-0 object-scale-down bg-fixed opacity-25 top-20" src="~assets/img/logo-background.png" alt="" > -->
      <!--Left Col-->
      <div class="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left">
        <p class="w-full mt-0 mb-6 tracking-wide uppercase">
          Uw voeten zijn in goede handen maar de website is nog in aanbouw
        </p>
        <h1 class="z-10 my-4 text-3xl font-bold leading-snug md:text-4xl lg:tracking-wide">
          Ervaar het gemak van een pedicure aan huis
        </h1>
        <p class="z-10 mb-8 text-xl leading-normal md:text-2xl">
          Ik breng en houd uw voeten in conditie, gewoon comfortabel bij U thuis in de regio Voorne.
        </p>
        <div class="z-30 font-bold">
          <button
            class="px-8 py-4 mx-auto my-6 font-bold text-orange-700 bg-white rounded-full shadow-lg lg:mx-0 hover:text-white hover:bg-blue focus:outline-none"
            @click.prevent.stop="actieButton"
          >
            Actietarief
          </button>
        </div>
      </div>
      <!--Right Col-->
      <div class="z-20 w-full py-6 text-center md:w-3/5">
        <img class="z-50 invisible w-16 md:visible md:w-4/5" src="~/assets/img/hero-picture.png" alt="pedicure">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
  methods: {
    actieButton() {
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
      var cancelScroll = this.$scrollTo("#actie", 1000, options)
    }
  }
}
</script>
