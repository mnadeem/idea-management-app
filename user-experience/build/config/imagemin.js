module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.paths.app %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= appConfig.paths.dist %>/images'
    }]
  }
};