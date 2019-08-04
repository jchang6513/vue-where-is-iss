import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_TOKEN,
    libraries: 'places',
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
