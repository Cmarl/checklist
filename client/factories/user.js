'use strict';

angular.module('checklist')
.factory('User', ['$rootScope' ,function($rootScope){

  function register(user){
    console.log($rootScope.afAuth);
    return $rootScope.afAuth.$createUser(user);
  }

  function login(user){
    return $rootScope.afAuth.$authWithPassword(user);
  }

  return {register: register, login: login};
}]);
