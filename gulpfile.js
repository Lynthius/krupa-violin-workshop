const gulp = require("gulp");
const sass = require("gulp-sass");
const minMarkup = require("gulp-htmlmin");
const minStyle = require("gulp-css");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync");

const style = function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
};

exports.style = style;

const watch = function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
};

exports.watch = watch;

const minHtml = function () {
  return gulp
    .src("./*.html")
    .pipe(minMarkup({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
};

exports.minHtml = minHtml;

const minCss = function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(minStyle())
    .pipe(gulp.dest("dist/css"));
};

exports.minCss = minCss;

const minJs = function () {
  return gulp.src("/src/js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
};

exports.minJs = minJs;

exports.build = gulp.parallel(minHtml, minCss, minJs)