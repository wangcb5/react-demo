const path = require("path");
module.exports = {
    mode: 'development',
    // output: {
    //     publicPath: '/'
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    limit: 8192,
                    outputPath: 'static/images'
                }
            },
        ]
    },
    devServer: {
        inline: true, //检测文件变化，实时构建并刷新浏览器
        port: "9987",
        openPage: './index.html',
        proxy: {
            '/API':{
                target: 'http://admin.nec.lenovouat.cn/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/API': ''
                }
            },
        },
        //404 页面返回 index.html
        historyApiFallback: true,
    },
    devtool: 'eval-source-map'
}