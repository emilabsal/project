const gulp = require('gulp')
const plumber = require('gulp-plumber')
const uglify = require('gulp-uglify-es').default;



module.exports = function script() {
  return gulp.src(['src/pages/**/*.js'])
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }
    ))
    .pipe(
      uglify()
    )
    .pipe(gulp.dest('build/asset-files'))
}

