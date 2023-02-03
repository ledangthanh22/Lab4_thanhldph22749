var app = angular.module("myapp",[])
app.controller("demoController",function ($scope) {
    $scope.save = function () {
        var a = parseFloat($scope.diem)
        if (a<5) {
            $scope.hocluc = "Rớt"
        } else {
            $scope.hocluc = "Đậu"
        }
    }
})