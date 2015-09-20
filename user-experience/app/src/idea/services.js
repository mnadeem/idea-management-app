/**
 * @ngdoc service
 * @module idb-idb.idea.services
 * @name IdeaSvc
 * @requires $scope, $log, $timeout
 * @description
 * # IdeaSvc
 * Services for Idea Module
 */
angular.module('idb-idb.idea.services')
  .service('IdeaSvc', function(){
    var ids= [{id:113, title : 'Idea1', description : 'Description1', status:'New', commentsCount:2, thumbsUp:1, thumbsDown:2},
      {id:123, title : 'Idea2', description : 'Description2', status:'New', commentsCount:3, thumbsUp:2, thumbsDown:3}];

    this.ideas = function() {
      return ids;
    };
    this.save = function (idea) {
      idea.id = new Date().getTime();
      idea.commentsCount = 0;
      idea.thumbsDown = 0;
      idea.thumbsUp = 0;
      idea.status = 'New';
      ids.push(idea);
    };

    this.get = function (id) {
      var item = ids.find(function (element, index, array){
        if(element.id == id) {
          return true;
        }
        return false;
      });
      return item;
    }


  });

