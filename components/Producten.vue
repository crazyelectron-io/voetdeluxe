<template>
  <section class="bg-white-800 py-8" id="producten">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-gray">
        Voetverzorgingsproducten
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-100 my-0 py-0 rounded-t bg-blue"></div>
      </div>
      <product-right
        headline="Binnenkort..."
        background="bg-white-800"
        content="Voor optimale verzorging van uw voeten gebruik ik tijdens de behandeling professionele producten. U kunt deze ook binnenkort in dit overzicht aantreffen."
      >
        <img src="~assets/img/voetverzorging.jpg" alt slot="image" >
      </product-right>
      <product-left
        headline="HFL productlijn"
        background="bg-white-800"
        content="Ik voer ondermeer de HFL productlijn. U kunt deze ook binnenkort in dit overzicht aantreffen."
      >
        <img src="~assets/img/hfl-producten.jpg" alt="HFL-producten" slot="image" >
      </product-left>
      <product-right
        headline="Samenwerkende Pedicures productlijn"
        background="bg-white-800"
        content="Ook de productlijn van de Samenwerkende Pedicures kunt U binnenkort in dit overzicht aantreffen."
      >
        <img src="~assets/img/samenwerkende-pedicures.jpg" alt="SamenwerkendePedicures" slot="image">
      </product-right>
    </div>
  </section>
</template>

<script>
import ProductRight from '@/components/ProductRight';
import ProductLeft from '@/components/ProductLeft';

export default {
  name: 'Producten',
  components: {
    'product-left': ProductLeft,
    'product-right': ProductRight,
  }
}
</script>
