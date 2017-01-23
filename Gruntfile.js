'use strict';
module.exports = function(grunt) {
	var mochaTests =  ['test/*.js']
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Mocha
    mocha: {
      all: {
        src: mochaTests,
      },
      options: {
        run: true,
        require: 'server.js'
      }
    }
  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['mocha']);
};