const gulp = require('gulp')
const plumber = require('gulp-plumber')



module.exports = function script() {
  return gulp.src('src/pages/**/*.js*')
    .pipe(plumber())
    .pipe(gulp.dest('build'))
}

