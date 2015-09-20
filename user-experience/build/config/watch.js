module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  htmlTmpl: {
    files: '<%= appConfig.paths.app %>/src/**/*.tpl.html',
    tasks: ['html2js'],
    options: {
      livereload: '<%= appConfig.ports.livereload %>'
    }
  },
  js: {
    files: ['<%= appConfig.paths.app %>/src/**/*.js',
      '<%= appConfig.paths.temp %>/generated/scripts/templates.js'
    ],
    tasks: ['newer:jshint:all'],
    options: {
      livereload: '<%= appConfig.ports.livereload %>'
    }
  },
  jsTest: {
    files: ['<%= appConfig.paths.test %>/spec/{,*/}*.js'],
    tasks: ['newer:jshint:test', 'karma']
  },
  styles: {
    files: ['<%= appConfig.paths.app %>/styles/{,*/}*.css'],
    tasks: ['newer:copy:styles', 'autoprefixer']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= appConfig.ports.livereload %>'
    },
    files: ['<%= appConfig.paths.app %>/{,*/}*.html',
      '<%= appConfig.paths.temp %>/styles/{,*/}*.css',
      '<%= appConfig.paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};