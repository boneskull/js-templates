/* eslint-env node */

'use strict';

module.exports = function (grunt) {
  var path = require('path'),
    loadGruntConfig = require('load-grunt-config');

  var join = path.join;

  if (grunt.option('time')) {
    require('time-grunt')(grunt);
  }

  loadGruntConfig(grunt, {
    configPath: join(__dirname, 'tasks'),
    jitGrunt: {},
    data: {
      pkg: require(join(__dirname, 'package.json'))
    }
  });
};
