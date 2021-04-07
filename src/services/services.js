import vm from 'src/main.js';
import md5 from 'md5';
import { cookie, lStore, sStore, alerts, strToJson, axios, axiosWrap, createStr } from 'js/yydjs.js';
const context = require.context('./modules', true, /\.js$/);
let modules = {};
const URL = '/api'; //域名

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
        'sign': '5736edc08324690890926ff7f831da52',
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

const COMMON = {
    URL, //域名
    API, //api请求函数
    testAxios, //axios请求示例
};
const SERVICES = Object.assign({}, COMMON, modules);

console.log('SERVICES', SERVICES);
export default SERVICES;