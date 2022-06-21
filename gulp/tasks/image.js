const gulp = require("gulp");

module.exports = function image() {
  return gulp
    .src([
      "src/**/*.{gif,png,jpg,svg,webp}",
      "!src/pages/email/**/*.{gif,png,jpg,svg,webp}",
    ])
    .pipe(gulp.dest("build/img"));
};
