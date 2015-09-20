'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var path = require('path');

  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'build/config'), //path to task.js files, defaults to grunt dir
      init: true, //auto grunt.initConfig
      data: { //data passed into config.  Can use with <%= test %>
          test: false
      },
      loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
          pattern: 'grunt-*',
          config: require('./package.json'),
          scope: 'devDependencies'
      },
      postProcess: function(config) {} //can post process config object before it gets passed to grunt
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

};
