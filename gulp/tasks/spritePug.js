const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')


module.exports = function pugPreview() {
  return gulp.src('src/sprite/templates/icons.pug')
    .pipe(plumber())
    .pipe(pug({  
      basedir: 'src',
      pretty: true,
      doctype: 'html',
      data: {
        debug: false
      }
    }))
    .pipe(gulp.dest('build/svg/'))
}