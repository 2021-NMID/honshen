let path=require('path');
// 安装html-webpack-plugin依赖
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    //入口文件
    entry:"./src/index.js",
    output:{
        //输出的文件名称
        filename:"bullel.js",
        //输出的路径
        //绝对路径
        path:path.resolve(__dirname,'.dist')
    },
    // 开发模式
    mode:'development',
    // loader的配置,将css转化为js
    module:{
            // 对某个格式的文件进行转换处理
            rules:[
                {
                    test:/\.css$/,
                    // 告知怎么进行匹配的处理
                    use:[
                        // 首先将css的文件转换为js
                        // 再将js的样式内容插入到style标签
                        // use数组中的loader的顺序，是从下到上
                        "style-loader",
                        'css-loader'
                    ]
                }
            ]
    },
    // plugin插件配置
    plugin:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })]

}