module.exports = {
  options: {
    port: '<%= appConfig.ports.app %>',
    hostname: 'localhost',
    livereload: '<%= appConfig.ports.livereload %>'
  },
  proxies: '<%= buildConfig.proxies %>',
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
    	  var middlewares = [];

          middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

          // Serve static files.

          middlewares.push(connect.static(require('path').resolve('.tmp')));
          middlewares.push(connect().use('/vendor', connect.static(require('path').resolve('./vendor'))));
          middlewares.push(connect.static(require('path').resolve('app')));
          
        return middlewares;
      }
    }
  },
  test: {
    options: {
      port: '<%= appConfig.ports.test %>',
      middleware: function (connect) {
    	  var middlewares = [];

          middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

          // Serve static files.
          middlewares.push(connect.static(require('path').resolve('.tmp')));
          middlewares.push(connect.static(require('path').resolve('test')));
          middlewares.push(connect().use('/vendor', connect.static(require('path').resolve('./vendor'))));
          middlewares.push(connect.static(require('path').resolve('app')));

        return middlewares;
      }
    }
  },
  dist: {
    options: {
      open: true,
      base: '<%= appConfig.paths.dist %>'
    }
  }
};