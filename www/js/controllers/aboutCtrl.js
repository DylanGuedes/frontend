angular.module('starter.controllers')

.controller('aboutCtrl', function ($scope, $state, $ionicHistory, Profile) {
  $ionicHistory.clearHistory();

  $scope.user = Profile.getUser();

  $scope.testStub = function (value) {
    return value*5;
  }
})