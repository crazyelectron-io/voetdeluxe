<template>
  <div class="flex-none w-4/5 gap-8 mr-4 bg-white border rounded-lg shadow-lg cursor-pointer sm:w-3/5 sm:mr-6 md:w-3/5 lg:mr-6 lg:w-1/3 lg:pb-4">
    <div class="flex flex-col justify-between px-4 py-2">
      <div class="flex-1 overflow-hidden bg-white rounded-t-lg">
        <div class="space-y-1 leading-6">
          <h3 class="mb-2 text-lg font-bold text-center text-gray-600 md:text-xl">
            <slot name="headline" />
          </h3>
        </div>
        <div class="mb-2 aspect-w-16 aspect-h-9">
          <img :src="require(`../assets/img/${image.toLowerCase()}`)" alt="product" class="object-cover rounded-t-lg shadow-t-md">
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
          <div class="justify-end">
            <slot name="price" />
          </div>
        </div>
      </div>
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
    }
  }
}
</script>
