const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/**/*.{gif,png,jpg,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo({
        plugins: [
          { "removeViewBox": false },
          { "cleanupIDs": false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}