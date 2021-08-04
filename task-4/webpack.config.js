const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'bulid')
    },
    module:{
        rules:[
            {
                test:  /\.css$/,
                use: [
                    //创建style标签，将js中css插入
                    'style-loader',
                    //将css变成commonjs加载到js中
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader','css-loader','less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options:{
                    limit:8 * 1024
                }
            },
            {
                test :/\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            //复制html，自动引入 打包的js和css
            template:'./src/index.html'
        })
    ],
    mode: 'development'
}