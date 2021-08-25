<template>
  <section class="py-1 bg-white-800" id="actie">
    <div class="container max-w-5xl m-8 mx-auto">
      <h1 class="w-full my-1 text-3xl font-bold leading-tight text-center md:text-3xl lg:text-5xl text-gray">
        Introductie actie
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-100 gradient bg-blue"></div>
      </div>
      <actie-left
        headline="Gereduceerd tarief"
        background="bg-white-800"
        content="Ter kennismaking bied ik U een uitgebreide basisbehandeling van uw voeten aan inclusief eelt verwijderen, nagels behandelen, zonodig een likdoorn verwijderen en evt. max45 kalk- of schimmelnagels, <strong>voor de prijs van € 22,95 *</strong>.
        <br>
        <br>
        Ik neem hierbij alle tijd voor uw voeten en ga niet weg voordat ze weer als van een pasgeboren baby zijn.
        Zo kunt U het gemak van een pedicure aan huis zelf ervaren.
        <br>
        <br>
        Deze aanbieding is geldig voor eerste afspraken gemaakt voor 1 november."
      >
        <template v-slot:image>
          <img src="~assets/img/actietarief.png" alt="actietarief">
        </template>
      </actie-left>
      <div class="mx-auto text-sm italic text-center text-gray">
        * Maximale behandeltijd 2 uur
      </div>
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
