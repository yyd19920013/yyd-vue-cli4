import { API } from 'services';

//axios请求示例
const testAxios1 = (params, success) => {
    return API({
        url: '/myBackground/ports/article.php',
        params,
        success,
    });
};

export {
    testAxios1, //axios请求示例1
};