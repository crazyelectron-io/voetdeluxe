<template>
  <div class="flex flex-col flex-grow flex-shrink w-full px-3 pt-6 pb-2 md:w-1/2 lg:w-1/3">
    <!-- data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-once="false" -->
    <div class="flex-1 overflow-hidden bg-white rounded-t-lg shadow-lg">
      <div class="flex flex-wrap no-underline hover:no-underline">
        <img :src="require(`../assets/img/${image.toLowerCase()}`)" alt="behandeling" class="object-cover w-full h-48 rounded-t-lg">
          <!-- data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" data-aos-once="false" -->
        <div class="w-full px-6 text-xs text-gray-700 md:text-sm">
          <slot name="overline" />
        </div>
        <div class="w-full px-6 mt-3 text-xl font-bold text-center text-gray-800">
          <slot name="headline" />
        </div>
        <div class="px-6 mt-3 mb-2 text-base text-gray-800">
          <slot name="description" />
        </div>
        <div class="px-6 my-0 text-base italic text-gray-800">
          <slot name="treatment" />
        </div>
      </div>
    </div>
    <div>
      <div class="items-center flex-1 p-6 mt-auto overflow-hidden bg-white rounded-b shadow-lg">
        <div class="items-center justify-end">
          <slot name="price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Behandeling',
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
  }
}
</script>
