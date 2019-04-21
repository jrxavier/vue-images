import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';

Vue.use(vueRouter);

const router = new VueRouter({
    routes: [
        { path: '/oauth2/callback', component: AuthHandler }
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');