import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//首页
const Home = () => import('views/Home/Home');

//404页面
const Page404 = () => import('views/Page404/Page404');

//配置路由规则
const routes = [{
        path: '',
        redirect: '/home',
    },
    //首页
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
        },
    },
    //404页面
    {
        path: '*',
        name: 'Page404',
        component: Page404,
        meta: {
            title: '404',
        },
    },
];

export default new VueRouter({
    routes
});