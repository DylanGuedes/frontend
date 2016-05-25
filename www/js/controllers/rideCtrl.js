angular.module('starter.controllers')

.controller('rideCtrl', function($scope, $ionicHistory, RideAPI, VehicleAPI, UserAPI, RegisterRide, $http) {
  $ionicHistory.clearHistory();
  $scope.rides = [];
  $scope.vehicles = [];
  $scope.ride = {};
  $scope.vehicle = {};
  $scope.message = '';
  $scope.filtro = '';

  UserAPI.query().$promise.then(function(response){
    $scope.users = response;
    console.log($scope.users);
  });

  RideAPI.query().$promise.then(function(response){
    $scope.rides = response;
    console.log($scope.rides);
  });

  VehicleAPI.query().$promise.then(function(response){
    $scope.vehicles = response;
    console.log($scope.vehicles);
  });

  $scope.remove = function(ride) {
		RideAPI.delete({rideID: ride.id}, function(){
			var rideIndex = $scope.rides.indexOf(ride);
			$scope.rides.splice(rideIndex, 1);
			$scope.message = "Carona " + ride.title + " foi removida com sucesso!";
		}, function(erro){
			console.error(erro.status);
			$scope.message = "Não foi possivel remover a carona " + ride.title;
		});
	};

  $scope.submitRide = function() {

    RegisterRide.register($scope.ride, $scope.vehicle)
      .then(function(data_success){
        $scope.message = data_success.message;
        console.log($scope.message);
        if(data_success.create);
      })
    .catch(function(data_error){
      $scope.message = data_error.message;
      console.error($scope.message);
    });

  };

  $scope.testStub = function (value) {
    return value*5;
  }

});
