<template>
  <section class="bg-white py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-gray">
        VoetDeluxe - Ambulante pedicure
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-100 my-0 py-0 rounded-t bg-blue"></div>
      </div>
      <feature-right
        headline="Even voorstellen"
        background="bg-white"
        content="Mijn naam is Arniël Moerman. Met heel veel enthousiasme ben ik dit jaar gestart als pedicure in de regio Voorne, na mijn gehele carriere in de ouderenzorg gewerkt te hebben. De opleiding van 9 maanden tot professionele pedicure rond ik binnenkort af met een laatste examen in juni. Mensen zien mij als een enthousiast en zorgzaam persoon, die ook graag een praatje maakt. Ik wil uw voeten goed verzorgen en gezond maken met alle aandacht en tijd die ze verdienen. Vanuit mijn woonplaats Brielle werk ik ambulant in de regio Brielle, Westvoorne en een deel van Hellevoetsluis."
      >
        <template v-slot:image>
          <img src="~assets/img/arniel.jpg" >
        </template>
      </feature-right>
      <feature-left
        headline="Kwaliteit, tijd en aandacht"
        background="bg-white"
        content="Uw voeten dragen u uw hele leven en hebben het soms zwaar te verduren. Daar moet u dus zuinig op zijn. Bij mij bent U verzekerd van kwalitatief goede en professionele verzorging van uw voeten volgens de code en richtlijnen van ProVoet, de landelijke brancheorganisatie voor (medische) pedicures. Als lid van ProVoet voldoe ik aan alle kwaliteitseisen die aan dit lidmaatsschap gesteld worden, waaronder een erkend vakdiploma en verplichte regelmatige bijscholing om mijn kennis up-to-date te houden. Momenteel ben ik nog aspirant lid maar na mijn examen in juni ben ik volwaardig lid. Uw voeten krijgen van mij alle verzorging en aandacht die ze verdienen, geheel conform de hygiëne-regels. Vanzelfsprekend werk ik volledig volgens de RIVM en ProVoet COVID-19 richtlijnen voor maximale veiligheid voor U en mij. Ook ben ik al volledig gevaccineerd met het Pfizer vaccin."
      >
        <template v-slot:image>
          <img src="~assets/img/voeten400.jpg" >
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
