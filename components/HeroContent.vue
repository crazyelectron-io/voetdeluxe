<template>
  <div class="pt-20">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <img class="absolute top-20 left-0 opacity-25 z-0" src="~assets/img/logo-bg.png" alt="" />
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p class="uppercase tracking-wide mt-0 mb-6 w-full">Uw voeten in goede handen</p>
        <h1 class="my-4 text-3xl md:text-4xl font-bold leading-snug lg:tracking-wide z-10">
          Ervaar het gemak van een pedicure aan huis
        </h1>
        <p class="leading-normal text-xl md:text-2xl mb-8 z-10">
          Ik breng en houd uw voeten in conditie, gewoon comfortabel bij U thuis in de regio Voorne.
        </p>
        <nuxt-link
          class="font-bold"
          to="#"
          v-scroll-to="{ element: '#contact', duration: 1000, offset: -30 }"
        >
          <button class="mx-auto lg:mx-0 bg-white-500 text-orange-700 hover:text-white-500 hover:bg-blue-600 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Afspraak
          </button>
        </nuxt-link>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center z-10">
        <img class="invisible md:visible w-16 md:w-4/5 z-50" src="~/assets/img/hero-picture-small.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>
