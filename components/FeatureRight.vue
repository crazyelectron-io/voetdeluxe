<template>
  <div :class="background" class="flex flex-wrap">
    <div class="w-5/6 sm:w-1/2 p-6">
      <h3 class="text-2xl md:text-3xl text-gray-500 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-700 mb-8">
        {{ content }}
        <br />
      </p>
    </div>
    <div class="w-full sm:w-1/2 p-6">
      <slot name="svg" />
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
