var webpack = require('webpack');
var path = require('path');



module.exports = {
  //  devtool: "source-map",    //生成sourcemap,便于开发调试

    //页面入口文件配置
    entry: {
        bind : './entry'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: 'bind.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
            	test: /\.css$/,
            	exclude: /(dist)/,
            	loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 versions'
            },
            // 跟踪源文件模式，便于调试。
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=10240&name=[path][name].[ext]'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: __dirname, //绝对路径
        extensions: ['', '.js', '.json', '.scss']
    }
};

