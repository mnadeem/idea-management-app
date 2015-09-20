module.exports = {
  dist: {
    src: ['<%= appConfig.paths.dist %>/scripts/{,*/}*.js',
      '<%= appConfig.paths.dist %>/styles/{,*/}*.css',
      '<%= appConfig.paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= appConfig.paths.dist %>/styles/fonts/*'
    ]
  }
};