var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHTML = require("gulp-minify-html");
var htmlclean = require('gulp-htmlclean');
var gutil = require('gulp-util');
var minifyInline = require('gulp-minify-inline');
var inline = require('gulp-inline')
var inlineimage = require('gulp-inline-image');

// 获取 gulp-imagemin 模块
var imagemin = require('gulp-imagemin');

var dir = './public'


// 压缩 public 目录 html
gulp.task('minify-html',function() {
    var opts = {
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
    };
    gulp.src('./public/**/*.html')
        .pipe(inline({
            base: './public/',
            disabledTypes: ['svg', 'img'], // Only inline css files
        }))
        .pipe(minifyInline())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(dir));
});

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    gulp.src('./public/**/*.css')
        .pipe(inlineimage())
        .pipe(minifycss())
        .pipe(gulp.dest(dir));
});

// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    gulp.src('./public/**/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
        }))
        .pipe(gulp.dest(dir));
});


// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images-photos', function () {
    // 1. 找到图片
    gulp.src('./photos/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});


// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images-public', function () {
    // 1. 找到图片
    gulp.src('./public/**/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest(dir))
});


// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-css','minify-js','minify-html',
    'images-photos','images-public']
);