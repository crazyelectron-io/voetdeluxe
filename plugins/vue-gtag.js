import Vue from 'vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
    config: { id: 'GA_MEASUREMENT_ID' },
    appName: 'APP_NAME',
});
