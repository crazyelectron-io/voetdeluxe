<template>
  <div :class="classList" class="w-full px-3 pt-6 pb-2 flex flex-col flex-grow flex-shrink">
    <div class="flex-1 bg-white-500 rounded-t-lg overflow-hidden shadow-lg">
      <a href="#" class="flex flex-wrap no-underline hover:no-underline">
        <img src="@/assets/img/pedicure.jpg" alt="" class="object-cover h-48 w-full rounded-t-lg">
        <p class="w-full text-gray-700 text-xs md:text-sm px-6">
          <slot name="overline" />
        </p>
        <div class="w-full font-bold text-center text-xl text-gray-800 px-6 mt-3">
          <slot name="headline" />
        </div>
        <p class="text-gray-800 text-base px-6 mb-2 mt-3">
          <slot name="description" />
        </p>
        <p class="text-gray-800 text-base italic px-6 my-0">
          <slot name="treatment" />
        </p>
      </a>
    </div>
    <div>
      <div class="flex-1 mt-auto bg-white-500 rounded-b overflow-hidden shadow-lg items-center p-6">
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
    }
  },
  computed: {
    classList() {
      return `md:w-1/2 lg:w-1/${this.rows}`
    },
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
