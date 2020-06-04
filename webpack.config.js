const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}`);
const merge = require('webpack-merge');

let webpackConfig = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'scripts/[name][hash:8].bundle.js',
        chunkFilename: 'scripts/[name].bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',   // 指定生成的文件名，默认就是 index.html
        template: './src/index.html',  // 指定 html 生成使用用的模版文件，我指定 使用 ```./index.html``` 作为模版文件
    }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            "@pages": path.resolve(__dirname, "./src/view"),
        }
    },
};

module.exports = merge(webpackConfig, _mergeConfig);