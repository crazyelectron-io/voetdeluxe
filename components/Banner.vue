<template>
    <div class="bg-blue-700">
        <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between">
                <div class="flex items-center flex-1 w-0">
                    <p class="ml-3 font-medium text-white truncate">
                        <span class="md:hidden">
                            Ik ben van 28 augustus tot 20 september op vakantie
                        </span>
                        <span class="hidden md:inline">
                            Ik ben vanaf 28 augustus op vakantie en verwen uw voeten weer vanaf 20 september
                        </span>
                    </p>
                </div>
                <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
                    <button type="button" class="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        @click="hideIt != hideIt"
                    >
                        <span class="sr-only">Dismiss</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Banner',
  }
</script>
