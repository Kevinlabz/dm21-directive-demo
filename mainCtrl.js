angular.module('myApp')
.controller('mainCtrl', function($scope) {
  $scope.user = {
    email: 'brett@brett.com'
  }


  $scope.currentPage = 'Home';

  $scope.changePage = function(newPage) {
    $scope.currentPage = newPage;
  }
})