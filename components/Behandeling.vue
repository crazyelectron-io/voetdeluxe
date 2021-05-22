<template>
  <div
    class="w-full md:w-1/2 lg:w-1/3 px-3 pt-6 pb-2 flex flex-col flex-grow flex-shrink"
    data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" data-aos-once="false"
  >
    <div class="flex-1 bg-white rounded-t-lg overflow-hidden shadow-lg">
      <div class="flex flex-wrap no-underline hover:no-underline">
        <img
          :src="require(`../assets/img/${image.toLowerCase()}`)"
          alt=""
          class="object-cover h-48 w-full rounded-t-lg"
          data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" data-aos-once="false"
        >
        <div class="w-full text-gray-700 text-xs md:text-sm px-6">
          <slot name="overline" />
        </div>
        <div class="w-full font-bold text-center text-xl text-gray-800 px-6 mt-3">
          <slot name="headline" />
        </div>
        <div class="text-gray-800 text-base px-6 mb-2 mt-3">
          <slot name="description" />
        </div>
        <div class="text-gray-800 text-base italic px-6 my-0">
          <slot name="treatment" />
        </div>
      </div>
    </div>
    <div>
      <div class="flex-1 mt-auto bg-white rounded-b overflow-hidden shadow-lg items-center p-6">
        <div class="items-center justify-end">
          <slot name="price" />
        </div>
      </div>
    </div>
    <!-- <div class="absolute right-3 bottom-2 w-8 h-8 bg-white-900 text-gray-700 hover:bg-orange text-center">
      <span class="icon mt-2 text-blue">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Behandeling',
  name: 'back-to-top',
  props: {
    rows: {
      type: Number,
      required: true,
      validator: value => {
        return value >= 1 && value <= 6
      }
    },
    action: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    renderAction() {
      return this.action !== ''
    }
  },
  methods: {
    onClick() {
      // NOTE: is fired, but not handled in this template
      this.$emit('clicked')
    }
  }
}
</script>
