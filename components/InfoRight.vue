<template>
  <div :class="background" class="flex flex-wrap overflow-hidden">
    <div class="w-5/6 sm:w-1/2 p-6">
      <h3 class="text-xl md:text-2xl xl:text-3xl text-gray font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-700 mb-8">
        {{ content }}
        <br />
      </p>
    </div>
    <div class="w-full object-cover sm:w-1/2 h-64 p-6 mt-6">
      <slot name="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoRight',
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
