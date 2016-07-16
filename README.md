## 分析一个chrome下异步加载css的bug

这个bug在 style-loader上有人提到：
[https://github.com/webpack/style-loader/issues/121](https://github.com/webpack/style-loader/issues/121)

补充：查到一些资料：应该是chrome的一个bug，可能最新版的还未修复
https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2016/february/script-injected-css-will-no-longer-block-rendering-in-chrome/
https://bugs.chromium.org/p/chromium/issues/detail?id=571725
此现象在 firefox和IE上没有问题


[https://github.com/synchronizingtheworld/testWebpackSourceMap/issues/1](https://github.com/synchronizingtheworld/testWebpackSourceMap/issues/1)
