module.exports = {
  html: '<%= appConfig.paths.app %>/index.html',
  options: {
    dest: '<%= appConfig.paths.dist %>',
    flow: {
      html: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['cssmin']
        },
        post: {}
      }
    }
  }
};