var app = angular.module("myapp", []);
app.controller("demoController", function ($scope) {
            $scope.hocsinh = [{
                ten:"Le Dang Thanh",
                ngaysinh: "22/06/2002",
                gioitinh: "Nam",
                diemTB: "9",
                anh:"anh.jpg"
            },{
                ten:"Le Dang thuc",
                ngaysinh: "22/06/2002",
                gioitinh: "Nam",
                diemTB: "8",
                anh:"anh1.jpeg"
            },{
                ten:"Le Anh Dung",
                ngaysinh: "22/06/2002",
                gioitinh: "Nam",
                diemTB: "9",
                anh:"anh2.jpg"
            }];
});
