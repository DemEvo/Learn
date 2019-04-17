import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DivFlexWrap from './components/Tag/DivFlexWrap.vue'



Vue.config.productionTip = false;

// Vue.component('DivFlexWrap', { /* ... */ });


new Vue({
  components:[DivFlexWrap],
  router,
  store,
  render: h => h(App)
}).$mount('#app');
