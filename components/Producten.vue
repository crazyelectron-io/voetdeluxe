<template>
  <section class="py-2 text-gray-600 bg-white-800">
    <div class="container flex-grow flex-shrink px-2 pt-4 pb-12 mx-auto text-gray-800 md:py-12">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center md:text-4xl lg:text-5xl text-gray"  id="producten">
        Voetverzorgingsproducten
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-100 gradient bg-blue"></div>
      </div>
      <div class="flex w-full px-2 md:px-4">
        <div class="container my-4">
          <div class="flex items-center mx-auto leading-6">
            <p class="mb-3 text-gray-600 ">
              Voor optimale verzorging van uw voeten gebruik ik tijdens de behandeling professionele producten. U kunt deze ook bij mij aanschaffen.
            </p>
          </div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-3xl font-medium text-orange-600">
              HFL Productlijn
            </h2>
            <div>
              <img src="~assets/img/hfl-logo.png" alt="HFL Productlijn" class="justify-between h-16">
              <button class="mx-1 text-xl font-bold text-indigo-600 cursor-pointer">
              </button>
              <button class="mx-1 text-xl font-bold text-indigo-600 cursor-pointer">
              </button>
            </div>
          </div>

          <div class="flex flex-no-wrap mb-8 overflow-x-scroll scrolling-touch">
            <product-column image="product-hfl-dermoleen.png">
              <template v-slot:overline>Voor hydratatie van de voet</template>
              <template v-slot:headline>Dermoleen crème</template>
              <template v-slot:description>
                Deze verzorgende crème biedt een aangename en effectieve verzorging voor de droge huid. Tevens wordt de crème vaak als bodylotion gebruikt. De Dermoleen Cream behoudt een goede pH-waarde, is vochtregulerend en draagt bij aan de bescherming en hydratatie van de droge huid. Door gebruik te maken van de lichaamseigen stof Ureum wordt er een optimale hydratatie behaalt. Deze stof is herkenbaar voor de huid.
              </template>
              <template v-slot:price>
                <h2 class="font-bold text-gray-700">Prijs: € 13,50</h2>
              </template>
            </product-column>
            <product-column image="product-hfl-roselan-balm.png">
              <template v-slot:overline>Voor verzorging van de droge voet</template>
              <template v-slot:headline>Roselan Balm</template>
              <template v-slot:description>
                Intensieve verzorging van de droge huid, kloofjes, eeltplekken, droge vlekken en de gevoelige huid. Deze zalf ondersteunt het herstellend vermogen van de huid en verzorgt de diepere huidlagen met behulp van het eigen lichaamsvocht. Dit product maakt de ruwe huid weer zacht en glad. Heeft u een droge of ruwe voet dan kunt u dit product combineren met Dermoleen creme: in de ochtend smeren met <i>Dermoleen</i> en in de avond met <i>Roselan Balm</i>.
              </template>
              <template v-slot:price>
                <h2 class="font-bold text-gray-700">Prijs: € 12,95</h2>
              </template>
            </product-column>
            <product-column image="product-hfl-fresh-gel.png">
              <template v-slot:overline>Bevordert de doorbloeding</template>
              <template v-slot:headline>Fresh Gel</template>
              <template v-slot:description>
                Bevordert de doorbloeding waardoor afvalstoffen beter worden afgevoerd zoals bij vermoeide en zware benen en voeten. Ook bij branderige en vermoeide voeten en bij koude handen en voeten. De Fresh Gel heeft een gunstige invloed op de bloedsomloop, hierdoor wordt de doorbloeding bevordert.<br><br>
                <i>Fresh gel kan gebruikt worden bij het dragen van elastische kousen</i>.
              </template>
              <template v-slot:price>
                <h2 class="font-bold text-gray-700">Prijs: € 13,95</h2>
              </template>
            </product-column>
            <product-column image="product-hfl-solution-spray.png">
              <template v-slot:overline>Voor de verzorging van kalknagels</template>
              <template v-slot:headline>Solution Spray</template>
              <template v-slot:description>
                HFL Laboratories gepatenteerde <i>Solution Spray</i> is het product voor de verzorging van <strong>kalknagels</strong> die vaak verkleurd of broos zijn. De spray maakt de huid en nagels goed schoon en bevat verzorgende bestanddelen.<br><br>Ook kan de spray gebruikt worden op de huid. Bijvoorbeeld wanneer men de voeten of huid niet goed heeft afgedroogd na het douchen of zwemmen en de huid dus rood en gevoelig kan zijn geworden.
              </template>
              <template v-slot:price>
                <h2 class="font-bold text-gray-700">Prijs: € 12,50</h2>
              </template>
            </product-column>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Product from '@/components/Product'

  export default {
    name: 'Producten',
    components: {
      'product-column': Product
    }
  }
</script>
