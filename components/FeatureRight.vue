<template>
  <div :class="background" class="flex flex-wrap flex-col-reverse md:flex-row overflow-hidden">
    <div class="w-5/6 md:w-1/2 pt-3 md:pt-6 p-6">
      <h3 class="text-xl md:text-2xl xl:text-3xl text-gray font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-700 mb-3 md:mb-8">
        {{ content }}
        <br />
      </p>
    </div>
    <div class="md:w-1/2 w-5/6 pt-3 md:pt-6 pb-6 px-6">
      <slot name="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRight',
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
