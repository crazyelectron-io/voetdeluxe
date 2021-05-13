<template>
  <section class="bg-white-500 text-white-500 py-2" id="behandelingen">
    <div class="container mx-auto flex flex-wrap w-full py-6">
      <h1 class="w-full my-2 text-4xl md:text-5xl font-bold leading-tight text-center text-gray-500">
        Behandelingen
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 my-0 py-0 rounded-t bg-blue-500"></div>
      </div>
      <behandeling-column :rows="3" image="basisbehandeling.jpg">
        <template v-slot:overline>Maximale behandeltijd 1 uur</template>
        <template v-slot:headline>Basisbehandeling</template>
        <template v-slot:description>
          Volledige verzorging van uw voeten, afgerond met een lichte voetmassage met een verzorgende creme, inclusief:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listBasis" :key="index" class="border-0 py-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 30,00 *</h2>
        </template>
      </behandeling-column>
      <behandeling-column :rows="3" image="voetmassage.jpeg">
        <template v-slot:overline>Maximale behandeltijd 1,5 uur</template>
        <template v-slot:headline>Luxe behandeling</template>
        <template v-slot:description>
          Extra uitgebreide verzorgende behandeling van uw voeten, naast basisbehandeling is dit inclusief:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listLuxe" :key="index" class="border-0 py-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 45,00 *</h2>
        </template>
      </behandeling-column>
      <behandeling-column :rows="3" image="pedicure.jpg">
        <template v-slot:overline>Maximale behandeltijd 30 minuten</template>
        <template v-slot:headline>Deelbehandeling</template>
        <template v-slot:description>
          Met een deelbehandeling kunt u kiezen uit één van de volgende behandelingen:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listDeel" :key="index" class="border-0 py-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 20,00 *</h2>
        </template>
      </behandeling-column>
    </div>
    <div class="flex text-gray-400 text-sm justify-center mb-3 mx-auto">
      * Exclusief reiskosten, Brielle: € 0,-, Oostvoorne: € 3,00, Rockanje: € 5,00
    </div>
    <div class="flex text-gray-600 font-semibold text-base mt-0 p-0 mb-6 justify-center">
      U kunt contant betalen maar ook pinnen met bankpas of telefoon
    </div>
  </section>
</template>

<script>
import Behandeling from '@/components/Behandeling'

export default {
  name: 'Behandelingen',
  components: {
    'behandeling-column': Behandeling
  },
  data() {
    return {
      listBasis: ['Voeten desinfecteren', 'Eelt verwijderen', 'Nagels knippen', 'Kloof of likdoorn verwijderen', 'Schimmelnagels behandelen'],
      listLuxe: ['Behandeling ingegroeide nagels', 'Voetscrub', 'Uitgebreide voetmassage', 'Eventueel nagellak aanbrengen' ],
      listDeel: ['Nagels knippen', 'Ingegroeide nagels behandelen', 'Verdikte nagels behandelen', 'Likdoorns verwijderen', 'Kloven behandelen', 'Uitgebreide voetmassage']
    }
  }
}
</script>
