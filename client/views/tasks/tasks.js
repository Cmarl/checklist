'use strict';

angular.module('checklist')
.controller('TasksCtrl',['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.duedate.getTime(),
      priority: task.priority,
      isCompleted: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    Task.add(o)
    .then(function(data){
      console.log('data',data);
    });
  };
}]);
