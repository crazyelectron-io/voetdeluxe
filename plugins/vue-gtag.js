import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

Vue.use(VueGtag, {
  config: { id: 'UA-197560367-1' },
  bootstrap: getGDPR === 'true',
  appName: 'VoetDeluxe',
  enabled: getGDPR === 'true'
})
