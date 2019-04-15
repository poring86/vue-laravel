import Vue from 'vue';
import VueRouter from 'vue-router';

// import
import Home from './components/pages/Home.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Edit from './components/pages/Edit.vue';
import Profile from './components/pages/Profile.vue';
import Categories from './components/pages/Categories.vue';

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
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path: '/edit/:uuid',
            name: 'Edit',
            component: Edit
        },
    ]
})

export default router;
