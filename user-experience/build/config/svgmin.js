module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.paths.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= appConfig.paths.dist %>/images'
    }]
  }
};