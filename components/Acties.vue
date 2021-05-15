<template>
  <section class="bg-white-800 py-1" id="actie">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-1 text-3xl md:text-3xl lg:text-5xl font-bold leading-tight text-center text-gray">
        Introductie actie
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-100 my-0 py-0 rounded-t bg-blue"></div>
      </div>
      <actie-left
        headline="Gereduceerd tarief"
        background="bg-white-800"
        content="Als tijdelijk introductietarief bied ik U een uitgebreide en volledige behandeling aan van uw voeten, hoeveel eelt, kalknagels, likdoorns of nagelriemen ook behandeld moeten worden, voor de prijs van € 22,95. Ik neem hierbij alle tijd voor uw voeten en ga niet weg voordat ze weer als van een pasgeboren baby zijn. Zo kunt U het vrijblijvend ervaren."
      >
        <template v-slot:image>
          <img src="~assets/img/actietarief.png" >
        </template>
      </actie-left>
    </div>
  </section>
</template>

<script>
import ActieRight from '@/components/FeatureRight'
import ActieLeft from '@/components/FeatureLeft'

export default {
  name: 'Acties',
  components: {
    'actie-right': ActieRight,
    'actie-left': ActieLeft
  }
}
</script>
