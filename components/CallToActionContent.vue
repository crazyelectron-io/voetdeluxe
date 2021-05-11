<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1 class="w-full my-2 text-4xl md:text-5xl font-bold leading-tight text-center text-white-500">
      Ervaar het ook
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto bg-blue-500 w-1/6 my-0 py-0 rounded-t"></div>
    </div>
    <h3 class="my-4 text-2xl md:text-3xl leading-tight">
      Volledige voetverzorging, in het comfort van uw eigen huis
    </h3>
    <nuxt-link
      class="inline-block py-2 px-4 font-bold hover:text-blue-800 no-underline"
      to="#"
      v-scroll-to="{ element: '#contact', duration: 1000, offset: -30 }"
    >
      <button class="mx-auto lg:mx-0 hover:no-underline hover:bg-blue-500 hover:text-white-500 bg-white-500 text-orange-500 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
        Afspraak
      </button>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'CallToActionContent'
}
</script>
