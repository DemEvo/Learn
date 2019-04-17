<<<<<<< Updated upstream
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DivFlexWrap from './components/Tag/DivFlexWrap.vue'



Vue.config.productionTip = false;

// Vue.component('DivFlexWrap', { /* ... */ });
=======
import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
>>>>>>> Stashed changes

new Vue({
  components:[DivFlexWrap],
  router,
  store,
  render: h => h(App)
}).$mount('#app');
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
