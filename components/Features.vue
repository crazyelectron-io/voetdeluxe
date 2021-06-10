<template>
  <section class="py-8 bg-white" id="over">
    <div class="container max-w-5xl m-8 mx-auto">
      <h1 class="w-full my-2 text-2xl font-bold leading-tight text-center md:text-3xl lg:text-4xl text-gray">
        VoetDeluxe - Ambulante pedicure
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-100 gradient bg-blue"></div>
      </div>
      <feature-right
        headline="Even voorstellen"
        background="bg-white"
        content="Mijn naam is Arniël Moerman. Met heel veel enthousiasme ben ik dit jaar gestart als pedicure in de regio Voorne, na mijn gehele carriere in de ouderenzorg gewerkt te hebben. De opleiding van 9 maanden tot professionele pedicure rond ik binnenkort af met een laatste examen in juni. Mensen zien mij als een enthousiast en zorgzaam persoon, die ook graag een praatje maakt.<br><br>Ik wil uw voeten goed verzorgen en gezond houden met alle aandacht en tijd die ze verdienen. Vanuit mijn woonplaats Brielle werk ik ambulant in de regio Brielle, Zwartewaal, Westvoorne en een deel van Hellevoetsluis."
      >
        <template v-slot:image>
          <img src="~assets/img/voetdeluxe-arniel.jpg" class="rounded-2xl" alt="voorstellen">
        </template>
      </feature-right>
      <feature-left
        headline="Kwaliteit, tijd en aandacht"
        background="bg-white"
        content="Uw voeten dragen u uw hele leven en hebben het soms zwaar te verduren. Daar moet u dus zuinig op zijn. Bij mij bent U verzekerd van kwalitatief goede en professionele verzorging van uw voeten volgens de code en richtlijnen van ProVoet, de landelijke brancheorganisatie voor (medische) pedicures. Als lid van ProVoet voldoe ik aan alle kwaliteitseisen die aan dit lidmaatsschap gesteld worden, waaronder een erkend vakdiploma en verplichte regelmatige bijscholing om mijn kennis up-to-date te houden. Momenteel ben ik nog aspirant lid maar na mijn examen in juni ben ik volwaardig lid.<br><br>Uw voeten krijgen van mij alle verzorging en aandacht die ze verdienen, geheel conform de hygiëne-regels. Vanzelfsprekend werk ik volledig volgens de RIVM en ProVoet COVID-19 richtlijnen voor maximale veiligheid voor U en mij.<br>Ook ben ik al volledig gevaccineerd met het Pfizer vaccin."
      >
        <template v-slot:image>
          <img src="~assets/img/voeten400.jpg" class="rounded-2xl" alt="kwaliteit">
        </template>
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
