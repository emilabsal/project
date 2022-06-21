const gulp = require('gulp')

const image = require('./image')
const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const sprite = require('./sprite')
const spritePug = require('./spritePug')
const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        directory: true,
        open: true,
        cors: true,
        middleware: function (req, res, next) {
            if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() === 'POST') {
                console.log('[POST => GET] : ' + req.url);
                req.method = 'GET';
            }
            next();
        }
    })

    gulp.watch('src/pages/**/*.{gif,png,jpg,svg,webp}', gulp.series(image, readyReload))
    gulp.watch('src/sprite/*.svg', gulp.series(sprite, readyReload))
    gulp.watch('src/pages/**/*.scss', gulp.series(styles, cb => gulp.src('build').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/pages/**/*.js*', gulp.series(script, readyReload))
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))
    gulp.watch('src/sprite/templates/icons.pug', gulp.series(spritePug, readyReload))

    // gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

    return cb()
}