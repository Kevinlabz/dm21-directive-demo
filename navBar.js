angular.module('myApp')
.directive('navBar', function() {

  return {
    restrict: 'E',
    templateUrl: 'navBar.html',
    scope: {
      title: '@',
      whenClicked: '&'
    }
  }
})