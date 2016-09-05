(function(angular) {
  'use strict';
angular.
 module('myModule', []).
  controller('MyController', ['$scope', function($scope) {
    
    $scope.firstWatcher = "I'm first watcher!";
    $scope.secondWatcher = "I'm second watcher!";
    
    $scope.callAlert = function() {
      alert($scope.$$watchers.length);
    };
  }]);
})(window.angular);