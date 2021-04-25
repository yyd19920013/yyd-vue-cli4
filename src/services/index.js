import vm from 'src/main.js';
import md5 from 'md5';
import { cookie, lStore, sStore, alerts, axios, axiosWrap } from 'js/utils';
import CONFIG_JSON from 'services/config';

const COMMON = CONFIG_JSON[__ENV || 'develop'];
const URL = ['localhost', '127.0.0.1'].includes(window.location.hostname) ? '/api' : COMMON.baseUrl; //本地环境用反向代理，线上环境用baseUrl，线上域名和请求地址一致用'/'
const context = require.context('./modules', true, /\.js$/);
let modules = {};

context.keys().forEach((item) => {
    modules = Object.assign({}, modules, context(item));
});
const API = (config) => {
    config.url = URL + config.url;
    config.method = config.method ? config.method : 'post';
    config.code = 0;
    config.params = `post=${JSON.stringify(config.params)}`;
    config.headers = {
        'token': '',
        'sign': '',
        'timestamp': +new Date() / 1000,
    };
    return axiosWrap(config);
};
//axios请求示例
const testAxios = (params, success) => {
    return API({
        url: '/myBackground/ports/article.php',
        params,
        success,
    });
};

const CONFIG = Object.assign({}, COMMON, {
    envName: __ENV,
    API, //api请求函数
    testAxios, //axios请求示例
});
const SERVICES = Object.assign({}, CONFIG, modules);

console.log('当前环境：', __ENV);
console.log('当前环境配置：', CONFIG);
console.log('SERVICES', SERVICES);
export default SERVICES;