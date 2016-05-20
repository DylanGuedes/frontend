describe('rideCtrl tests', function() {
  var scope, controller;
  
  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('rideCtrl', { $scope: scope });
   }));

  describe('#expectStub to', function() {
    it('return 5', function() {
      var value = 1;
      var testResult = scope.testStub(value);
      expect(testResult).toEqual(5);
    });
  });
});