<template>
  <div>
    <hero />
    <features />
    <acties />
    <behandelingen />
    <producten />
    <contact />
    <informatie />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Behandelingen from '@/components/Behandelingen'
import Acties from '@/components/Acties'
import Producten from '@/components/Producten'
import Contact from '@/components/Contact'
import Informatie from '@/components/Informatie.vue'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    behandelingen: Behandelingen,
    acties: Acties,
    producten: Producten,
    contact: Contact,
    informatie: Informatie,
    'call-to-action': CallToAction
  },
}
</script>
