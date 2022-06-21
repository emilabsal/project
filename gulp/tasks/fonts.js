const gulp = require('gulp')

module.exports = function fonts() {
	return gulp.src('src/**/*.{ttf,woff,woff2,eot}')
		.pipe(gulp.dest('build/fonts'))
}