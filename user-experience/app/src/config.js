'use strict';

angular.module('idb-idb')
  .constant('APP_HOME_URL', '/xyz/app');

/**
 * @ngdoc overview
 * @name idb-idb
 * @requires $httpProvider
 * @description
 *
 * Configures the @module idb-idb $httpProvider to disable IE caching
 */
angular
  .module('idb-idb')
  .config(['$httpProvider', '$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
 }]);

