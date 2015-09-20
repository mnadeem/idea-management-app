'use strict';

(function(){

  /**
   * @ngdoc module
   * @name idb-idb.idea.services
   * @requires
   * @description
   * # idb-idb.idea.services
   *
   * Controller for creating Ideas
   */
  angular
    .module('idb-idb.idea.services',[]);

  /**
   * @ngdoc overview
   * @name idb-idb.idea.create
   * @requires idb-idb.idea.create.controllers
   * @description
   * # idb-idb.idea.create
   *
   * Create idea module.
   */
  angular
    .module('idb-idb.idea.controllers', []);

  /**
   * @ngdoc overview
   * @name idb-idb.idea
   * @requires idb-idb.idea.list
   * @description
   * # idb-idb.idea
   *
   * Idea module.
   */
  angular
    .module('idb-idb.idea',['idb-idb.idea.controllers','idb-idb.idea.services']);

})();
