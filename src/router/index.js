import Vue from 'vue'
import VueRouter from 'vue-router'
import CovidView from "../CovidView.vue";
import PreView from "../PreView.vue";
import ShowView from '../componentsMain/ShowView.vue'
import Start from '../Start.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '../start'
    },
    {
        path: '/start',
        component: Start
    },
    {
        path: '/covidview',
        name: 'covidview',
        component: CovidView
    },
    {
        path: '/preview',
        name: 'PreView',
        component: PreView,
    },
    {
        path: '/showview',
        name: 'ShowView',
        component: ShowView,
    },
]

const router = new VueRouter({
   // mode: 'history',
    base: "/dist/",
    routes
})

export default router

