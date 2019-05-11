import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DivFlexWrap from '@/components/Tag/DivFlexWrap.vue'
import diB from '@/components/Tag/diB.vue'
import diIb from '@/components/Tag/diIb.vue'
import diFr from '@/components/Tag/diFr.vue'
import diFc from '@/components/Tag/diFc.vue'
import diIbFc from '@/components/Tag/diIbFc.vue'
import diIbFr from '@/components/Tag/diIbFr.vue'
import '@/scss/lib/global-flex.scss'

Vue.config.productionTip = false;

Vue.component('DivFlexWrap', DivFlexWrap);
Vue.component('di-b', diB);
Vue.component('di-ib', diIb);
Vue.component('di-fr', diFr);
Vue.component('di-fc', diFc);
Vue.component('di-ib-fc', diIbFc);
Vue.component('di-ib-fr', diIbFr);


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
