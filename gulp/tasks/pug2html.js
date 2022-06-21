const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const inky = require("inky");
// const htmloptimize = require('./gulp-html-optimize')

module.exports = function pug2html(cb) {
  return (
    gulp
      .src("src/pages/**/*.pug")
      .pipe(plumber())
      .pipe(
        pug({
          pretty: true,
        })
      )
      // .pipe(htmloptimize())
      .pipe(gulp.dest("build"))
  );
};
