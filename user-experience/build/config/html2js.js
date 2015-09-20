module.exports = {
  options: {
    base: 'app',
    module: 'app-templates',
    singleModule: true,
    useStrict: true,
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  },
  main: {
    src: ['app/src/**/*.tpl.html'],
    dest: '<%= appConfig.paths.temp %>/generated/scripts/templates.js'
  }
};