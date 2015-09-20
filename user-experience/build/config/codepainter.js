module.exports = {
  dynamic: {
    options: {
      predef: 'mediawiki'
    },
    files: [{
      expand: true,
      cwd: 'app/src/',
      src: ['**/*.js'],
      dest: 'app/src/'
    }]
  }
};