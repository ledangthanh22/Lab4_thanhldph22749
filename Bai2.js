var app = angular.module("myapp", []);
app.controller("demoController", function ($scope) {
    $scope.ten = "Le Dang Thanh"
            $scope.hocsinh = {
                ten:"Le Dang Thanh",
                ngaysanh: "22/06/2002",
                gioitinh: "Nam",
                diemTB: 9,
                anh:"anh.jpg"
            }
});