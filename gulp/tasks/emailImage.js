const gulp = require("gulp");

module.exports = function emailImage() {
  return gulp
    .src("src/pages/email/**/*.{gif,png,jpg,svg,webp}")
    .pipe(gulp.dest("build/email/"));
};
