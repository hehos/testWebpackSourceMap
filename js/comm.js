/**
 * 公共的资源。
 * 如：框架、项目自定义公共js、公共的字体样式，框架样式
 * */

require('muicss');
require('font');

// 公共的样式
require('commcss');

window.$ = require('jquery');

// mui 框架 js
window.mui = require('muijs');




// 底部菜单链接跳转
$(function ($) {
    mui('.mui-bar-tab').on('tap', 'a', function () {
        document.location.href = this.href;
    });
});