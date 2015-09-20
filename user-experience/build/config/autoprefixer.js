module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.paths.temp %>/styles/',
      src: '{,*/}*.css',
      dest: '<%= appConfig.paths.temp %>/styles/'
    }]
  }
};