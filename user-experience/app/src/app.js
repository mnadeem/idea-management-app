'use strict';

(function(){

/**
 * @ngdoc module
 * @name idb-idb
 * @requires ngAnimate, ngCookies, ngResource, ui.router, ngSanitize
 * @description
 * # idb-idb
 *
 * Main module of the application.
 */
 angular
  .module('idb-idb', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
	  'app-templates',
	  'ui.bootstrap',
     'idb-idb.idea',

  ]);
})();
