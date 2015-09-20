module.exports = {
  generic: {
    src: ['Gruntfile.js', 'app/src/**/*.js'],
    exclude: ['doNotTest.js'],
    options: {
      breakOnErrors: true,
      jsLintXML: 'reports/jslint/jslint-report.xml',
      checkstyleXML: 'reports/jslint/checkstyle.xml',
      errorsOnly: false,
      cyclomatic: [3, 7, 12],
      halstead: [8, 13, 20],
      maintainability: 100,
      hideComplexFunctions: false,
      broadcast: false
    }
  }
};