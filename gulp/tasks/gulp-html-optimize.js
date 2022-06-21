'use strict';

const PluginError = require('plugin-error'),
  through = require('through2'),
  cheerio = require('cheerio');

function optimizeCss($) {
  var links = [];

  $("link[rel='stylesheet']").each(function () {
    var elem = $(this);
    var link = elem.attr('href');

    if (links.indexOf(link) === -1) {
      links.push(link);
    }

    elem.remove();
  });

  links.forEach(function (item) {
    $('head').append('<link rel="stylesheet" href="' + item + '"/>')
  });
}

function optimizeJs($) {
  var scripts = [];

  $('script').each(function () {
    var elem = $(this);
    var link = elem.attr('src');

    if (scripts.indexOf(link) === -1) {
      scripts.push(link);
    }

    elem.remove();
  });

  scripts.forEach(function (item) {
    $('body').append('<script src="' + item + '"/>')
  });
}

function optimizeViewPort($) {
  var item;

  $('meta[name=viewport]').each(function () {
    var elem = $(this);

    if (!item) {
      item = elem.clone();
    }

    elem.remove();
  });

  if (item) {
    $('head').append(item);
  }
}

module.exports = (options = {}) => through.obj(function (file, encode, callback) {
  if (file.isNull()) {
    this.push(file);
    return callback();
  }

  if (file.isStream()) {
    this.emit('error', new PluginError('gulp-html-optimize', 'Streaming is not supported'));
    return callback();
  }

  var content = file.contents.toString();
  const $ = cheerio.load(content);

  optimizeViewPort($);
  optimizeCss($);
  optimizeJs($);

  file.contents = Buffer.from($.html());
  this.push(file);
  callback(null,);
}, callback => callback());
