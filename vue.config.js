module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://bilibili-vue.0x00000000.me/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
