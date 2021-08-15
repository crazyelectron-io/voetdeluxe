<template>
  <section class="py-2 text-white bg-white" id="behandelingen">
    <div class="container flex flex-wrap w-full py-6 mx-auto">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center md:text-4xl lg:text-5xl text-gray">
        Behandelingen
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t gradient bg-blue"></div>
      </div>
      <behandeling-column :rows="3" image="behandeling-basis.jpg">
        <template v-slot:overline>Maximale behandeltijd 1 uur</template>
        <template v-slot:headline>Basisbehandeling</template>
        <template v-slot:description>
          Volledige verzorging van uw voeten, afgerond met een lichte voetmassage met een verzorgende creme, inclusief:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listBasis" :key="index" class="py-0 border-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 30,00 *</h2>
        </template>
      </behandeling-column>
      <behandeling-column :rows="3" image="behandeling-voetmassage.jpeg">
        <template v-slot:overline>Maximale behandeltijd 1,5 uur</template>
        <template v-slot:headline>Luxe behandeling</template>
        <template v-slot:description>
          Extra uitgebreide verzorgende behandeling van uw voeten, naast basisbehandeling is dit inclusief:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listLuxe" :key="index" class="py-0 border-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 45,00 *</h2>
        </template>
      </behandeling-column>
      <behandeling-column :rows="3" image="behandeling-deel.jpg">
        <template v-slot:overline>Maximale behandeltijd 30 minuten</template>
        <template v-slot:headline>Deelbehandeling</template>
        <template v-slot:description>
          Met een deelbehandeling kunt u kiezen uit één van de volgende behandelingen:
        </template>
        <template v-slot:treatment>
          <ul class="w-full text-orange-800">
            <li v-for="(item, index) in listDeel" :key="index" class="py-0 border-0">
              {{ item }}.
            </li>
          </ul>
        </template>
        <template v-slot:price>
          <h2 class="font-bold text-gray-700">Prijs: € 20,00 *</h2>
        </template>
      </behandeling-column>
    </div>
    <div class="flex justify-center px-3 mb-3 text-sm text-gray-400 ">
      * Exclusief reiskosten. Brielle: € 0,-, Oostvoorne/Zwartewaal: € 3,00, Rockanje: € 5,00, Hellevoetsluis: € 7,00.
    </div>
    <div class="flex justify-center px-3 py-0 mt-0 mb-6 text-base font-semibold text-gray-600 md:px-4">
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
