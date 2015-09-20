module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.paths.temp %>/concat/scripts',
      src: ['*.js', '!oldieshim.js'],
      dest: '<%= appConfig.paths.temp %>/concat/scripts'
    }]
  }
};