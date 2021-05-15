<template>
  <div>
    <img src="~assets/img/wave-top.svg?inline" alt class="text-white" >
    <call-to-action-content />
  </div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'

export default {
  name: 'CallToAction',
  components: {
    'call-to-action-content': CallToActionContent
  }
}
</script>
