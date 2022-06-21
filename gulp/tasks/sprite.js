const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sprites = require('gulp-svg-sprite')
const svgo = require('gulp-svgo')

module.exports = function sprite () {
	return gulp.src('src/sprite/*.svg') // svg files for sprite
		.pipe(sprites({
				mode: {
					stack: {
            dest: './',
						sprite: "build/sprite/sprite.svg",  //sprite file name
            render: {
              scss: {
                dest: 'src/sprite/templates/icons',
                template: 'src/sprite/templates/svg.tpl'
              },
              pug: {
                dest: 'src/sprite/templates/icons',
                template: 'src/sprite/templates/svg-pug.tpl'
              }
            }
					}
				}
		}))
    .pipe(svgo({
      plugins: [
        {removeTitle: true},
        {convertColors: {shorthex: false}},
        {removeAttrs: {attrs: '(fill|stroke)'}}
      ]
    }
      ))
		.pipe(gulp.dest('.'));
};


// module.exports = function (cfg, browserSync) {
//   bs = browserSync;
//   config = cfg;

//   paths = {
//     root: 'src/svg/',
//     template_scss: 'src/svg/templates/svg.tpl',
//     template_pug: 'src/svg/templates/svg-pug.tpl',
//     template_out: 'src/svg/templates/icons',
//     watch: config.srcDir + 'svg/*.svg',
//     src: 'src/sprite/*.svg',
//   };
// }