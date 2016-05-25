angular.module('starter.controllers')

.controller('menuCtrl', function($scope, $ionicModal, $state, $stateParams, $ionicHistory, Profile) {
  $ionicHistory.clearHistory();

  $scope.user = Profile.getUser();

  $scope.isLogged = function() {
    $scope.user = Profile.getUser();
    if($scope.user.token == undefined) {
      return false;
    }
    else
      return true;
  }

  $scope.cancelRedirect = function() {
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('menu.home');
  }

  $scope.closeApp = function() {
    ionic.Platform.exitApp();
  }
})