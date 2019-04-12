import Vue from 'vue';
import VueRouter from 'vue-router';

// import
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Edit from './components/pages/Edit.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        },
    ]
})

export default router;
