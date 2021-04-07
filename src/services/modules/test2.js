import { API } from 'services';

//axios请求示例
const testAxios2 = (params, success) => {
    return API({
        url: '/myBackground/ports/article.php',
        params,
        success,
    });
};

export {
    testAxios2, //axios请求示例2
};