import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

// const routes: Array<Object> = [
//     { path: '/', component: Home },
//     { path: '/About', component: About },
// ];

export default new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/About', name: 'About', component: About },
    ],
});
