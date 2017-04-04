angular.module('myApp')
.directive('loginForm', function() {
  return {
    restrict: 'AE',
    templateUrl: 'loginForm.html',
    controller: function($scope) {
      $scope.buttonText = $scope.buttonText || 'Click me!';
    },
    scope: {
      title: '@',
      userEmail: '=',
      buttonText: '@'
    }
  }
})