const path = require('path');
const resolve = (dir) => {
    return path.join(__dirname, dir);
}

module.exports = { // 原来的 module.exports 代码赋值给变量 webpackConfig
    publicPath: './', //基本路径
    lintOnSave: true, //eslint校验
    configureWebpack: config => {
        config.devServer = {
            host: 'localhost',
            port: 8088,
            open: true,
        };
        require('@vux/loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        });
    },
    chainWebpack: (config) => {
        config.resolve.alias //配置别名
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('store', resolve('src/store'))
            .set('assets', resolve('src/assets'))
            .set('js', resolve('src/assets/js'))
            .set('css', resolve('src/assets/css'))
            .set('images', resolve('src/assets/images'))
    },
    css: {
        loaderOptions: {
            postcss: { //px转rem
                plugins: [
                    require('postcss-px2rem')({ remUnit: 37.5 }),
                ]
            }
        }
    }
};