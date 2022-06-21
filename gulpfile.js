const gulp = require("gulp");

const serve = require("./gulp/tasks/serve");
const pug2html = require("./gulp/tasks/pug2html");
const styles = require("./gulp/tasks/styles");
const stylesBuild = require("./gulp/tasks/styles-build");
const script = require("./gulp/tasks/script");
const scriptBuild = require("./gulp/tasks/script-build");
const imageMinify = require("./gulp/tasks/imageMinify");
const image = require("./gulp/tasks/image");
const emailImage = require("./gulp/tasks/emailImage");
const clean = require("./gulp/tasks/clean");
const spritePug = require("./gulp/tasks/spritePug");
const sprite = require("./gulp/tasks/sprite");
const fonts = require("./gulp/tasks/fonts");

function setMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? "production" : "development";
    cb();
  };
}

// const dev = gulp.parallel(pug2html, styles, script, fonts, imageMinify)
const dev = gulp.parallel(
  pug2html,
  styles,
  script,
  image,
  emailImage,
  sprite,
  spritePug,
  fonts
);
const base = gulp.parallel(
  pug2html,
  stylesBuild,
  scriptBuild,
  imageMinify,
  sprite,
  spritePug,
  fonts
);

const build = gulp.series(clean, base);

module.exports.start = gulp.series(setMode(), clean, dev, serve);
module.exports.build = gulp.series(setMode(true), build);

// module.exports.lighthouse = gulp.series(lighthouse)
