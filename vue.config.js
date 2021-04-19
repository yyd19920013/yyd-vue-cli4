const path = require('path');
const resolve = (dir) => {
    return path.join(__dirname, dir);
};
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';
const CONFIG_JSON = require('./src/services/config.js');
const ENV = process.env.__ENV;
const target = CONFIG_JSON[ENV || 'develop'].baseUrl;

console.log(`当前运行环境：${ENV}`);
console.log(`当前代理地址：${target}`);
module.exports = { // 原来的 module.exports 代码赋值给变量 webpackConfig
    publicPath: './', //基本路径
    lintOnSave: false, //eslint校验
    devServer: {
        host: 'localhost',
        port: 8088,
        open: true,
        proxy: {
            '/api': { //这里最好有一个 /
                target, // 服务器端接口地址
                //如果要代理 websockets，配置这个参数
                ws: false,
                // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: config => {
        require('@vux/loader').merge(config, {
            options: {},
            plugins: ['vux-ui'],
        });
        if (IS_DEV) {
            config.plugins.push(
                new HardSourceWebpackPlugin(),
                new HardSourceWebpackPlugin.ExcludeModulePlugin([{
                    test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
                }])
            );
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias //配置别名
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('store', resolve('src/store'))
            .set('services', resolve('src/services'))
            .set('assets', resolve('src/assets'))
            .set('js', resolve('src/assets/js'))
            .set('css', resolve('src/assets/css'))
            .set('images', resolve('src/assets/images'));
        config
            .plugin('define')
            .tap(args => {
                args[0].__ENV = JSON.stringify(process.env.__ENV);
                return args;
            });
    },
    css: {
        loaderOptions: {
            postcss: { //px转rem
                plugins: [
                    require('autoprefixer')({ // 配置使用 autoprefixer
                        // browsers: ['last 20 versions'],
                        overrideBrowserslist: ['last 20 versions'] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
                    }),
                    require('postcss-plugin-px2rem')({ // 配置使用 postcss-plugin-px2rem 把 px 单位转成 rem，当然项目 main.js 中要相应 import 'amfe-flexible' 作为移动端的自适应解决方案
                        rootValue: 100,
                        unitPrecision: 8,
                        propWhiteList: [],
                        propBlackList: [],
                        selectorBlackList: [],
                        ignoreIdentifier: false,
                        replace: true,
                        mediaQuery: false,
                        minPixelValue: 2
                    })
                ]
            }
        }
    }
};