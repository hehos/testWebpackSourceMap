
require('muicss');
// mui 框架 js
//必须在setTimeout里调用。否则样式出错
//https://github.com/synchronizingtheworld/testWebpackSourceMap/issues/1
//setTimeout(function(){
	window.mui = require('muijs');
//},0)
