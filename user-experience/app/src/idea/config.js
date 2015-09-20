'use strict';

angular
  .module('idb-idb.idea')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    // For any unmatched url, redirect to /ideas
    $urlRouterProvider.otherwise("/idea/list");

    $stateProvider.state('listIdeas', {
      url : '/idea/list',
      templateUrl : 'src/idea/idea-list.tpl.html'
    }).state('createIdea', {
      url : '/idea/create',
      templateUrl : 'src/idea/idea-create.tpl.html'
    }).state('reviewIdea', {
      url : '/idea/review/:id',
      templateUrl : 'src/idea/idea-review.tpl.html'
    });

}]);
