
var $=require('jquery');
require('./test.css');

//这里遇到chrome的bug:
/*
补充：查到一些资料：应该是chrome的一个bug，可能最新版的还未修复
https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2016/february/script-injected-css-will-no-longer-block-rendering-in-chrome/
https://bugs.chromium.org/p/chromium/issues/detail?id=571725
此现象在 firefox和IE上没有问题

style-loader的issue提到这个问题：
https://github.com/webpack/style-loader/issues/121
*/

$('.test').show();

