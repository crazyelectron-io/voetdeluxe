<template>
  <div class="flex-none w-4/5 gap-8 mr-4 bg-white border border-blue-600 rounded-lg cursor-pointer sm:w-3/5 sm:mr-6 md:w-3/5 lg:mr-6 lg:w-1/3 lg:pb-4">
    <div class="flex flex-col justify-between px-4 py-2">
      <div class="flex-1 overflow-hidden bg-white rounded-t-lg">
        <div class="space-y-1 leading-6">
          <h3 class="mb-2 text-lg font-bold text-center text-gray-600 md:text-xl">
            <slot name="headline" />
          </h3>
        </div>
        <div class="mb-2 aspect-w-16 aspect-h-9">
          <img :src="require(`../assets/img/${image.toLowerCase()}`)" alt="product" class="object-cover transition transform rounded-t-lg duration-600 shadow-t-md hover:scale-150">
        </div>
        <div class="">
          <div class="py-1 italic font-semibold text-center text-orange-600 text-md">
            <slot name="overline" />
          </div>
          <div class="mt-2 text-sm">
            <slot name="description" />
          </div>
        </div>
      </div>
      <div>
        <div class="items-center flex-1 p-6 mt-auto overflow-hidden">
          <div class="">
            <slot name="price" />
          </div>
        </div>
      </div>
      <!-- <div class="top-auto flex items-center justify-end mt-4">
        <button class="justify-between w-full px-4 py-2 mx-auto mb-2 font-semibold text-white border-gray-300 rounded-lg shadow-lg md:w-1/2 bg-orange hover:text-blue-600 focus:border-none focus:ring-none active:outline-none focus:outline-none btn"
          @click='showHide'
        >
          Toepassing...
        </button>
      </div>
      <div id="toepassing" class="flex-col mx-auto" :class="[ isHidden ? 'hidden' : 'block']">
        <div
          v-for="(toepassing, index) in toepassing"
          :key="toepassing.heading"
        >
          <div :data-toepassing-id="index" class="hidden p-1 px-6 text-gray-600 bg-white">
            <span v-html="toepassing.step"></span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    action: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    toepassing: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    showHide () {
      const toepassingDetails = document.querySelector('#toepassing-details')
      console.info(toepassingDetails)
      if (toepassingDetails.classList.contains('hidden')) {
        this.isHidden = false
        toepassingDetails.classList.remove('hidden')
      }
      else {
        this.isHidden = true
        toepassingDetails.classList.add('hidden')
      }
    }
  }
}
</script>
