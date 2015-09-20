'use strict';

/**
 * @ngdoc directive
 * @module idb-idb.components.confirmation.directives
 * @name ngReallyClick
 * @restrict A
 * @scope Isolated
 * @description
 * # ngReallyClick
 * Directive to get user confirmation
 */

angular.module('idb-idb.components.confirmation.directives')
	.directive('ngReallyClick',['$log', '$modal', '$parse', function factory($log, $modal, $parse) {
		var directiveDefinitionObject = {
				restrict: 'A',
		        scope:{
		          ngReallyClick:"&"
		        },
		        link: function(scope, element, attrs) {
		        	 element.bind('click', function() {
		                 var message = attrs.ngReallyMessage || "Are you sure ?";

		                 var modalInstance = $modal.open({
		                	 templateUrl: 'src/components/confirmation/confirmation.tpl.html',
		                	 size: 'sm',
		                	 resolve: {
	                	        confirmationMessage: function () {
	                	          return message;
	                	        }
	                	      },
		                	 controller: 'modalInstanceCtrl'
		                 });
		                 scope.$apply();
		                 modalInstance.result.then(function(confirmed) {
		                	 confirmed = confirmed || false;
		                	 //$parse method, this allows parameters to be passed
		                     var invoker = $parse(attrs.ngReallyClick);
		                     scope.ngReallyClick({confirmed:confirmed});
		                 }, function() {
		                	 $log.info('Confirmation Modal dismissed at: ' + new Date());
		                	 //$parse method, this allows parameters to be passed
		                     var invoker = $parse(attrs.ngReallyClick);
		                     scope.ngReallyClick({confirmed:false});
		                 });

		               });
		        }
		};
	    return directiveDefinitionObject;
	}]);
