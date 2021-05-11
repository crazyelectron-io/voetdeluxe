<template>
  <div>
    <hero />
    <features />
    <behandelingen />
    <contact />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Behandelingen from '@/components/Behandelingen'
import Contact from '@/components/Contact'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    behandelingen: Behandelingen,
    contact: Contact,
    'call-to-action': CallToAction
  },
}
</script>
