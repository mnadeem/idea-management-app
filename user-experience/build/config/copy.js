module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= appConfig.paths.app %>',
      dest: '<%= appConfig.paths.dist %>',
      src: ['*.{ico,png,txt}',
        '.htaccess',
        '*.html',
        '{,*/}*.html',
        'images/{,*/}*.{webp}',
        'fonts/*'
      ]
    }, {
      expand: true,
      cwd: '<%= appConfig.paths.temp %>/images',
      dest: '<%= appConfig.paths.dist %>/images',
      src: ['generated/*']
    }]
  },
  styles: {
    expand: true,
    cwd: '<%= appConfig.paths.app %>/styles',
    dest: '<%= appConfig.paths.temp %>/styles/',
    src: '{,*/}*.css'
  },
  fonts: {
    expand: true,
    cwd: '<%= appConfig.paths.vendor %>/bootstrap/fonts',
    dest: '<%= appConfig.paths.dist %>/fonts/',
    src: '*'
  }
};
