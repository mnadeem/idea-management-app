module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: {
    src: ['Gruntfile.js', '<%= appConfig.paths.app %>/src/{,*/}*.js']
  },
  test: {
    options: {
      jshintrc: '<%= appConfig.paths.test %>/.jshintrc'
    },
    src: ['<%= appConfig.paths.test %>/spec/{,*/}*.js']
  }
};