<template>
  <div :class="background" class="flex flex-wrap flex-col-reverse sm:flex-row overflow-hidden">
    <div class="w-full object-cover sm:w-1/2 h-64 p-6 mt-6">
      <slot name="image" />
    </div>
    <div class="w-full sm:w-1/2 sm:p-6 sm:mt-6 p-2 mt-2">
      <div class="align-middle">
        <h3 class="text-xl md:text-2xl xl:text-3xl text-gray font-bold leading-none mb-3">
          {{ headline }}
        </h3>
        <p class="text-gray-700 mb-8">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoLeft',
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
