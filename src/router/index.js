import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//首页
const home = () => import('views/home/home');

//404页面
const page404 = () => import('views/page404/page404');

//360全景
const demo360 = () => import('views/demo360/demo360');

//翻书
const demoBook = () => import('views/demoBook/demoBook');

//配置路由规则
const routes = [{
        path: '',
        redirect: '/home',
    },
    //首页
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: '首页',
        },
    },
    //360全景
    {
        path: '/demo360',
        name: 'demo360',
        component: demo360,
        meta: {
            title: '360全景',
        },
    },
    //翻书
    {
        path: '/demoBook',
        name: 'demoBook',
        component: demoBook,
        meta: {
            title: '翻书',
        },
    },
    //404页面
    {
        path: '*',
        name: 'page404',
        component: page404,
        meta: {
            title: '404',
        },
    },
];

export default new VueRouter({
    routes
});