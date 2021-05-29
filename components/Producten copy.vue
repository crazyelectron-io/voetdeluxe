<template>
  <section class="py-2 text-gray-600 bg-white-800" id="producten">
    <div class="container px-2 pt-4 pb-12 mx-auto text-gray-800 md:py-12">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center md:text-4xl lg:text-5xl text-gray">
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
              <button class="mx-1 text-xl font-bold text-indigo-600 cursor-pointer">
              </button>
              <button class="mx-1 text-xl font-bold text-indigo-600 cursor-pointer">
              </button>
            </div>
          </div>

          <div class="flex flex-no-wrap mb-8 overflow-x-scroll scrolling-touch">
            <product-column image="product-hfl-dermoleen.png">
              <template v-slot:overline>Voor verzorging van de droge voet</template>
              <template v-slot:headline>Dermoleen crème</template>
              <template v-slot:description>
                Dermoleen crème voor de droge of gevoelige huid. Helpt bij onder andere kloven, huidschilfers en psorias.
              </template>
              <template v-slot:price>
                <h2 class="font-bold text-gray-700">Prijs: € 13,95</h2>
              </template>
            </product-column>
            <div class="flex-none w-4/5 gap-8 mr-4 bg-white border rounded-lg shadow-lg cursor-pointer sm:w-3/5 sm:mr-6 md:w-3/5 lg:mr-6 lg:w-1/3 lg:pb-4">
              <div class="flex flex-col justify-between px-4 py-2">
                <div class="space-y-1 leading-6">
                  <h3 class="mb-2 text-xl font-bold text-center text-gray-600 md:text-2xl">
                    Roselan Balm
                  </h3>
                </div>
                <div class="mb-2 aspect-w-16 aspect-h-9">
                  <img class="object-cover rounded-t-lg shadow-t-md" src="~assets/img/product-hfl-roselan-balm.png" alt="Roselan Balm" />
                </div>
                <div class="text-base">
                  <div class="py-2 text-lg italic font-semibold text-center text-orange-600">
                    Voor verzorging van de droge voet
                  </div>
                  <p class="">
                    Roselan Balm is een intensief werkend product voor verzorging van de droge huid, kloofjes, eeltplekken, droge vlekken, en de gevoelige huid. Deze zalf ondersteunt het herstellend vermogen van de huid en verzorgd de diepere huidlagen met behulp van je eigen lichaamsvocht. Dit product maakt de ruwe huid weer zacht en glad. Heeft u een droge, ruwe of schrale gevoelige huid dan kunt u dit product combineren met Dermoleen creme. In de ochtend smeren met Dermoleen en in de avond met Roselan Balm.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-none w-4/5 gap-8 mr-4 bg-white border rounded-lg shadow-lg cursor-pointer sm:w-3/5 sm:mr-6 md:w-3/5 lg:mr-6 lg:w-1/3 lg:pb-4">
              <div class="flex flex-col justify-between px-4 py-2">
                <div class="space-y-1 leading-6">
                  <h3 class="mb-2 text-xl font-bold text-center text-gray-800 md:text-2xl">
                    Fresh Gel
                  </h3>
                </div>
                <div class="mb-2 aspect-w-16 aspect-h-9">
                  <img class="object-cover rounded-t-lg" src="~assets/img/product-hfl-fresh-gel.png" alt="" />
                </div>
                <div class="text-base">
                  <p class="">
                    Verlicht je benenen is geschikt bij spier- en gewrichtspijnen, krampen, wintervoeten en -handen, vermoeide en/of zware benen, brandwonden.<br>De gel bevordert de bloedsomloop en verlicht de pijn.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-none w-4/5 gap-8 mr-4 bg-white border rounded-lg shadow-md sm:w-3/5 sm:mr-6 lg:mr-6 lg:w-1/3 lg:pb-4">
              <div class="flex flex-col justify-between px-4 py-2">
                <div class="space-y-1 leading-6">
                  <h3 class="mb-2 text-xl font-bold text-center text-gray-800 md:text-2xl">
                    Solution Spray
                  </h3>
                </div>
                <div class="mb-2 aspect-w-16 aspect-h-9">
                  <img class="object-cover rounded-t-lg" src="~assets/img/product-hfl-solution-spray.png" alt="" />
                </div>
                <div class="text-base">
                  <p class="">
                    HFL Solution spray kan gebruikt worden bij behandeling van kalknagels en ook bij rode en gevoelige huid over het hele lichaam.
                  </p>
                  <!-- <p class="mt-2 text-sm font-medium text-indigo-600">
                    Read more<span class="text-indigo-600">&hellip;</span>
                  </p> -->
                </div>
              </div>
            </div>
            <div class="flex-none w-4/5 gap-8 mr-4 bg-white border rounded-lg shadow-md sm:w-3/5 sm:mr-6 lg:mr-6 lg:w-1/3 lg:pb-4">
              <div class="flex flex-col justify-between px-4 py-2">
                <div class="space-y-1 leading-6">
                  <h3 class="mb-2 text-xl font-bold text-center text-gray-800 md:text-2xl">
                    Kadoverpakking
                  </h3>
                </div>
                <div class="mb-2 aspect-w-16 aspect-h-9">
                  <img class="object-cover rounded-t-lg" src="~assets/img/hfl-giftset.jpg" alt="" />
                </div>
                <div class="text-base">
                  <p class="">
                    Binnenkort zal ik ook deze leuke kadoverpakking te koop hebben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Product',
  }
</script>
