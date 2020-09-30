import App from './App.vue';
import './registerServiceWorker';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import router from './router';
import store from './store';
import '../src/assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import vSelect from 'vue-select';

import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect);

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
