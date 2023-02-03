var app = angular.module("myapp", []);
app.controller("demoController", function ($scope) {
  $scope.calculate = function () {
    var a = parseFloat($scope.length)
    var b = parseFloat($scope.width)
    $scope.acreage = a * b
    $scope.perimeter = (a + b) * 2
  }
});