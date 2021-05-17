<template>
  <section class="bg-white-800 py-8" id="informatie">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-gray">
        Informatie
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-100 my-0 py-0 rounded-t bg-blue"></div>
      </div>
      <info-right
        headline="Werk in uitvoering"
        background="bg-white-800"
        content="Hier zult U binnenkort allerlei informatie vinden over de behandelingen, wat je zelf kan doen, hoe je bepaalde problemen zoals schimmelnagels kunt herkennen, e.d."
      >
        <template v-slot:image>
          <img src="~assets/img/voeten400.jpg" >
        </template>
      </info-right>
    </div>
  </section>
</template>

<script>
import InfoRight from '@/components/InfoRight'
import InfoLeft from '@/components/InfoLeft'

export default {
  name: 'Informatie',
  components: {
    'info-right': InfoRight,
    'info-left': InfoLeft
  }
}
</script>
