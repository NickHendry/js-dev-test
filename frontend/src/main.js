import Vue from 'vue';
import Toasted from 'vue-toasted';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.use(Toasted, { duration: 3000 });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
