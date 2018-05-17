var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map', // 调试
    entry: "./src/main.js",　　　　//模块的入口文件
    output: {
        filename: devMode ? "bundle.js" : "bundle.[hash].js",      //打包后输出文件的文件名
        publicPath: '/dist/',
        path: __dirname + '/dist',   //打包后的文件存放的地方;注："__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        chunkFilename: '[name].chunk.js',
    },

    // devServer: {
    //     contentBase: "./dist",//本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // },


    performance: {
        hints: 'warning',
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        // assetFilter: function (assetFilename) {
        //     // 提供资源文件名的断言函数
        //     return assetFilename.endsWith('.jpg') || assetFilename.endsWith('.js')
        // }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new VueLoaderPlugin(),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: 'index.ejs',
            inject: false,
            // minify: { // 压缩HTML文件
            //     removeComments: true, // 移除HTML中的注释
            //     collapseWhitespace: true, // 删除空白符与换行符
            //     minifyCSS: true// 压缩内联css
            // },

        }),
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath: '/dist/',
                    //     }
                    // },
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 图片，字体等文件的支持
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
          '@': path.resolve(__dirname,'./src'),
        },
        modules:['node_modules'],
        // mainFields: ['browser', 'module', 'main']
    },

};


