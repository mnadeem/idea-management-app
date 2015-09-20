module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true
    },
    files: [{
      expand: true,
      cwd: '<%= appConfig.paths.dist %>',
      src: ['*.html', '{,*/}*.html'],
      dest: '<%= appConfig.paths.dist %>'
    }]
  }
};