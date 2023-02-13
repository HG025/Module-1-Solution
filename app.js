

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.checkLunchItems = function() {
    $scope.message = '';
    if (!$scope.lunchItems) {
      $scope.message = 'Please enter data first';
    } else {
      var items = $scope.lunchItems.split(',');
      if (items.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  };
});