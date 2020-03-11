module.exports = {
    devServer: {
        port: 9999, // 端口
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 'primary-color': '#78BDC5',
                    // 'link-color': '#78BDC5',
                    // 'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    }
};
