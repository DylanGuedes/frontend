angular.module('starter.controllers')

.controller('profileCtrl', function($scope, $state, $stateParams, $ionicHistory, Profile) {
  $ionicHistory.clearHistory();

  $scope.user = Profile.getUser();

  $scope.fbLogout = function() {
    $scope.user = Profile.setUser(null);
    console.log($scope.user);
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('menu.home');
  }

  $scope.inAppOpenLink = function(url) {
    if (!url) {
      return
    }

    $scope.getAvailabilityScheme(url, function(url) {
      document.addEventListener("deviceready", onDeviceReady, false);
      console.log(url);
      function onDeviceReady() {
        window.open = cordova.InAppBrowser.open(url, '_system', 'location=yes');
      }
    });
  }

  $scope.getAvailabilityScheme = function(url, callback) {
    var scheme;
    var schemeUrl;

    if (url.indexOf('facebook.com/')) {
      if(device.platform === 'iOS') {
        scheme = 'fb://';
      }
      else if(device.platform === 'Android') {
        scheme = 'com.facebook.katana';
      }
      schemeUrl = 'fb://facewebmodal/f?href=' + url;
    }

    appAvailability.check(
        scheme,
        function() {
          callback(schemeUrl);
        },
        function() {
          callback(url);
        }
    );
  }
})
