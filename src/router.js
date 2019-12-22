import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
import Page3 from './views/Page3.vue'
import Page4 from './views/Page4.vue'

import Test from './views/Test.vue'
import Bootstrap from './views/Bootstrap.vue'
import PdfViewers from './views/PdfViewers.vue'
import Selector from './views/Selector.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () = > import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        },
        {
            path: '/page3',
            name: 'Page3',
            component: Page3
        },
        {
            path: '/page4',
            name: 'Page4',
            component: Page4
        },

        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
        {
            path: '/bootstrap',
            name: 'Bootstrap',
            component: Bootstrap,
        },
        {
            path: '/pdf-viewers',
            name: 'PdfViewers',
            component: PdfViewers,
        },
        {
            path: '/selector',
            name: 'Selector',
            component: Selector,
        },
    ]
})
