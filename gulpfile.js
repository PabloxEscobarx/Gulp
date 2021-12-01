const { gulp, parallel, series, dest, src } = require('gulp');
// const sync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
// const sass = require('gulp-sass')(require('scss'));
const del = require('del')
const autoprefixer = require('gulp-autoprefixer');


//create task
function html() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
};



function css() {
    return src('src/*.css')
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'));
};

// function scss() {
//     return src('src/*.scss')
//         .pipe(sass())
//         .pipe(dest('dist'))
// }

function clear() {
    return del('dist')
};

//reg task
exports.html = html;
exports.css = css;
// exports.scss = scss
exports.clear = clear;
exports.build = series(clear, html, css);