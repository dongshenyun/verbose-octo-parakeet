const path=require('path');//引用
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const glob=require('glob');
const PurifyCSSPlugin=require("purifycss-webpack");
const webpack=require('webpack');

module.exports={
    mode:'development',
    entry:{
        'index1':'./src/index.js',
        'index2':'./src/index2.js'
    },
    output:{
        path:path .resolve(__dirname,'./dist'),
        filename:'[name].js',//name代表index1、index2
        publicPath:"http://localhost:8080/"
    },
    module:{
        rules:[
            {
                test:/\.css$/,//\转义符号 转义.
                //use:['style-loader','css-loader']//从后往前
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                        },'postcss-loader']
                })
            }, {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss$/, 
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{loader:"css-loader",
                },{
                    loader:"sass-loader"}]
                })
              
            },{
                test:/\.(jsx|js)$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:["env","react"]
                        }
                    }
                ],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[//[]
        new HtmlPlugin({
            filename:'hh.html',
            titile:'tit',
            chunks:['index1'],//引用js
            template:'./src/index.html',
            hash:true//避免缓存
        }),
        new ExtractTextPlugin("./css/index.css"),
        // new ExtractTextPlugin("./css/indexscss.css")
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src*html'))
        }),
        new webpack.BannerPlugin('花花')
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        compress:true,
        open:true
    }
}