'use strict';

/**
 * @ngdoc controller
 * @module idb-idb.idea.controllers
 * @name ideas
 * @requires $scope, $log, $timeout
 * @description
 * # ideaCreateCtr
 * Controller to manage the plan details
 */
angular.module('idb-idb.idea.controllers')
  .controller('ideaCreateCtr',['$scope', '$log', 'IdeaSvc',  function($scope,  $log, ideaSvc) {
    $scope.alerts = [];
    $scope.idea = {};

    $scope.saveIdea = function(idea) {
      ideaSvc.save(idea);
      $log.log(idea);
      $scope.addAlert('info','Idea Added successfully');

    };

    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({type: type, msg: msg});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  }]);

/**
 * @ngdoc controller
 * @module idb-idb.idea.controllers
 * @name ideaListCtr
 * @requires $scope, $log, $timeout
 * @description
 * # ideaListCtr
 * Controller to manage Idea Listing
 */
angular.module('idb-idb.idea.controllers')
  .controller('ideaListCtr',['$scope', '$log', 'IdeaSvc',  function($scope,  $log, ideaSvc) {

    this.ideas = ideaSvc.ideas();
    $scope.thumbsDown = function(idea) {
      idea.thumbsDown++;
      $log.log('Thumbs Down' + idea.toString());

    }
    $scope.thumbsUp = function(idea) {
      idea.thumbsUp ++;
      $log.log('Thumbs Up' + idea.toString());
    }

  }]);

/**
 * @ngdoc controller
 * @module idb-idb.idea.controllers
 * @name ideaReviewCtr
 * @requires $scope, $log, $timeout
 * @description
 * # ideaReviewCtr
 * Controller to manage Idea Listing
 */
angular.module('idb-idb.idea.controllers')
  .controller('ideaReviewCtr',['$scope', '$log', 'IdeaSvc', '$stateParams',  function($scope,  $log, ideaSvc, $stateParams) {

    $scope.alerts = [];
    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({type: type, msg: msg});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    var idea = ideaSvc.get($stateParams.id);
    $scope.idea = idea;

    $scope.update = function (idea) {
      $log.log(idea);
      $scope.addAlert('info','Updated successfully');
    };

  }]);
