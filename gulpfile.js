var gulp = require('gulp'),
    rename = require('gulp-rename'),
    spritesmith = require('gulp.spritesmith'),
    clean = require('gulp-clean');


var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require("./webpack.config-test.js");


var pkg = require('./package.json');

var o = {
    spritePrefix: '.myicon-',
    spriteName: 'sprite'
}

var cf = {
    dir: {
        scss: 'scss',
        css: 'css',
        img: 'img',
        myicon: 'img/myicon'
    },
    file: {
        js: 'js/*',
        scss: 'scss/**/*',
        css: 'css/*',
        img: 'img/*',
        myicon: 'img/myicon/*',
        modules: ['modules/*.scss', 'modules/*.js']
    }
}

// sprite
gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src(cf.file.myicon).pipe(spritesmith({
        imgName: '../img/' + o.spriteName + '.png',
        cssName: o.spriteName + '.css',
        padding: 2,
        cssOpts: {
            cssSelector: function (sprite) {
                return o.spritePrefix + sprite.name;  // 自定义className前缀
            }
        }
    }));
    //  output path for the sprite
    spriteData.img.pipe(gulp.dest(cf.dir.img));
    // output path for the CSS
    spriteData.css.pipe(rename({
        //prefix: "__",
        extname: ".scss"
    })).pipe(gulp.dest(cf.dir.scss));
});

// ==============================
// 图片
gulp.task('img', ['cleanImg'], function () {
    return gulp.src(cf.file.img)
        .pipe(gulp.dest('dist/img'));
});

// ==============================
// webpack
gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

// ==============================
// 清理
gulp.task('cleanImg', function() {
    return gulp.src('dist/img', {read: false})
        .pipe(clean());
});

// ==============================
// watch
gulp.task('watch', function() {
    // watch scss
    gulp.watch(cf.file.myicon, ['sprite']);

    gulp.watch(
        [
            cf.file.js,
            cf.file.scss,
            cf.file.css,
            cf.file.img,
            cf.file.modules
        ],
        ['webpack']);
    gulp.watch(cf.file.img, ['img']);

});


// 预设任务
gulp.task('default', function() {
    gulp.start(['sprite', 'webpack', 'img']);
});


