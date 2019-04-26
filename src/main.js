import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DivFlexWrap from '@/components/Tag/DivFlexWrap.vue'


Vue.config.productionTip = false;

Vue.component('DivFlexWrap', DivFlexWrap);

// Vue.component('section-header', { template: '<h3>section-header</h3>' });

// var comp = {
//     template: '<div>Hello Worldssssssssssss</div>'
// };


new Vue({
    // components: {
    //     'section-content': comp
    // },
    router,
    store,
    render: h => h(App)
}).$mount('#app');
