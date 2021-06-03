<template>
  <div :class="background" class="flex flex-col-reverse flex-wrap overflow-hidden md:flex-row">
    <div class="object-cover w-5/6 px-6 pt-3 pb-4 md:w-1/2 md:pt-6">
      <slot name="image" />
    </div>
    <div class="w-5/6 p-6 pt-3 md:w-1/2 md:pt-6">
      <div class="align-middle">
        <h3 class="mb-3 text-xl font-bold leading-none text-orange-600 md:text-2xl xl:text-3xl">
          {{ headline }}
        </h3>
        <p class="mb-3 text-gray-700 md:mb-8">
          <span v-html="content"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureLeft',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    background: {
      type: String,
      required: false
    },
  },
}
</script>
