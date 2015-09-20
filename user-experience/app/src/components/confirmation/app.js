'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name idb-idb.components.confirmation.directives
 * @description
 * # idb-idb.components.confirmation.directives
 *
 * idb-idb.components.confirmation.directives module of the application.
 */
 angular
	.module('idb-idb.components.confirmation.directives',['ui.bootstrap']);
 
 /**
  * @ngdoc module
  * @name idb-idb.components.confirmation.controllers
  * @description
  * # idb-idb.components.confirmation.controllers
  *
  * idb-idb.components.confirmation.controllers module of the application.
  */
  angular
 	.module('idb-idb.components.confirmation.controllers',[]);
 
 /**
 * @ngdoc module
 * @name idb-idb.components.confirmation
 * @description
 * # idb-idb.components.confirmation
 *
 * idb-idb.components.confirmation module of the application.
 */
 angular
	.module('idb-idb.components.confirmation', [
	'idb-idb.components.confirmation.directives',
	'idb-idb.components.confirmation.controllers'
	]);
})();