describe('menuCtrl tests', function() {
  describe('scope tests', function() {
    var $rootScope, createController;
    beforeEach(function() {
      module('starter');
      module('starter.controllers');
      module('starter.services');
    });

    beforeEach(inject(function($injector) {
      var $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');

      createController = function() {
        return $controller('menuCtrl', {'$scope': $rootScope});
      };
    }));

  /*

  it('should be defined and initializes', (function() {
      var controller = createController();
      expect(controller).toBeDefined();
      expect($rootScope).toBeDefined();
      expect($rootScope.remove).toBeDefined();
      expect($rootScope.rides).toBeDefined();
      expect($rootScope.rides).toEqual([]);
      expect($rootScope.message).toEqual('');
    }));
  */

    it('should be defined and initializes', (function() {
      var controller = createController();
      expect(controller).toBeDefined();
      expect($rootScope).toBeDefined();       

      }));

    describe('User is logged', function(){

      beforeEach(function() {               
        module('starter');
        module('starter.controllers');
        module('starter.services');
      });

      it('should be logged', function(){

        expect(expect(scope.user.token).toBeDefined()).toEqual(true);
        expect(expect(scope.user.token).not.toBeDefined()).toEqual(false);

      });

      describe('')
    });
  });
});