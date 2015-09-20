'use strict';

/**
 * @ngdoc controller
 * @module idb-idb.components.confirmation.controllers
 * @name modalInstanceCtrl
 * @description
 * # modalInstanceCtrl
 * Controller to manage the modal instance
 */

angular.module('idb-idb.components.confirmation.controllers')
	.controller('modalInstanceCtrl',['$scope', '$modalInstance', 'confirmationMessage', function($scope, $modalInstance, confirmationMessage) {
		$scope.message = confirmationMessage;
		$scope.ok = function() {
	            $modalInstance.close(true);
          };

          $scope.cancel = function() {
        	  $modalInstance.dismiss('cancel');
          };
}]);
