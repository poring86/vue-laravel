
import Vue from 'vue';
import Routes from './routes';
import App from './components/App';
import Store from './store';
import axios from 'axios';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 axios.defaults.baseURL = 'http://localhost:8000/api'

require('./bootstrap');

// window.Vue = require('vue');
window.Event = new Vue();



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('task-form', require('./components/TaskForm.vue').default);
Vue.component('task-list', require('./components/TaskList.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: Routes,
    store: Store,
    render: h => h(App)
});

export default app;
