
const webpack = require("webpack");
const MiniCssExtractPlugin = require('../node_modules/mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    // output: {
    //     publicPath: './'
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            chunkFilename: "css/[id].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    limit: 8192,
                    outputPath: 'images',
                }
            },
            {
                exclude: /(node_modules)/,
                test: /\.json$/i,
                type: 'javascript/auto',
                loader: 'json-loader'
            }
        ]
    },
    devtool: 'none'
}