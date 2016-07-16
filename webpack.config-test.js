var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var ROOT_PATH = path.resolve(__dirname);
//var APP_PATH = path.resolve(ROOT_PATH, 'app');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    devtool: "source-map",    //生成sourcemap,便于开发调试

    //插件项
    plugins: [
    	new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            mui: 'muijs'
        })
        ////js文件的压缩
        //new uglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        //commonsPlugin , // 自定义公共模块提取
        //new ExtractTextPlugin("bind.css")
    ],
    //页面入口文件配置
    entry: {
        bind : './js/bind-test'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        publicPath: 'http://192.168.0.188//merchants/dist/js/',
        filename: 'bind.js'
    },
    module: {
        //加载器配置
        loaders: [
            // 基本模式
            //{ test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
            //
            //{
            //	test: /\.css$/,
            //	exclude: /(dist)/,
            //	loader: 'style!css!autoprefixer?browsers=last 2 versions'
            //},
            // 重现问题的配置
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!autoprefixer!sass?sourceMap'
            },
            {
                test: /\.css$/,
                exclude: /(dist)/,
                loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 versions'
            },

            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=10240&name=[path][name].[ext]'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: __dirname, //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: { // 别名
            'jquery': __dirname + '/vendor/jquery/dist/jquery.js',
            'zepto': __dirname + '/vendor/zepto/zepto.js',
        	'muijs': __dirname + '/vendor/mui/js/mui.js',
            'vue': __dirname + '/vendor/vue/vue.js',
        	'muicss': __dirname + '/vendor/mui/css/mui.css',
          	'commcss' : __dirname + '/scss/comm.scss',
            'font' : __dirname + '/vendor/jzfont/style.css',
            'ChineseDistricts': __dirname + '/vendor/distpicker/distpicker.data',
            'distpicker': __dirname + '/vendor/distpicker/distpicker'
        }
    }
//,
//	devServer: {
//	    historyApiFallback: true,
//	    hot: true,
//	    inline: true,
//	    progress: true,
//	}
};

