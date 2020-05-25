// import 'amfe-flexible';
import App from 'src/App';
import Vue from 'vue';
import router from './router';
import store from './store';

import { AlertPlugin, ConfirmPlugin } from './VUX';
import fastclick from 'fastclick';

//处理点击延迟
let hostname = window.location.hostname;
let noNative = hostname != 'localhost' && hostname != '127.0.0.1' && hostname != '172.16.21.92';

if (noNative) {
    fastclick.attach(document.body);
}

//调用插件
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);

//路由改变之前显示loading
router.beforeEach((to, from, next) => {
    store.commit({
        type: 'UPDATE_LOADINGSTATUS',
        isLoading: true,
    });

    //根据meta值改变title
    if (to.meta && to.meta.title) document.title = to.meta.title;

    next();
});

//路由改变之后隐藏loading
router.afterEach(() => {
    store.commit({
        type: 'UPDATE_LOADINGSTATUS',
        isLoading: false,
    });

    //关闭vux组件的遮罩
    vm.$vux.alert.hide();
    vm.$vux.confirm.hide();
});

//挂载到#app匹配的元素上
const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

//用来发送事件的vue实例
const vmEvent = new Vue({
    router,
});

export default vmEvent;