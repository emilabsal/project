const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

module.exports = function styles() {
  return gulp.src('src/pages/**/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'))
}