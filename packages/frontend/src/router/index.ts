import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/account/Login.vue';
import Register from '../views/account/Register.vue';
import ListPlace from '../views/place/ListPlace.vue';
import ListItem from '../views/item/ListItem.vue';
import Group from '../views/group/Group.vue';
import GroupDetails from '../views/group/GroupDetails.vue';
import StatusUser from '../views/status/StatusUser.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Login',
        component: Register,
    },
    {
        path: '/listitem',
        name: 'ListItem',
        component: ListItem,
    },
    {
        path: '/group',
        name: 'Group',
        component: Group,
    },
    {
        path: '/group-details',
        name: 'GroupDetails',
        component: GroupDetails,
    },
    {
        path: '/status',
        name: 'StatusUser',
        component: StatusUser,
    },
    {
        path: '/listplace',
        name: 'ListPlace',
        component: ListPlace,
    },
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
