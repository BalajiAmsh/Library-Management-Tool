app.controller('loging', ['$scope', '$http', function ($scope, $http, $routeProvider,) {
    $scope.alm = true;
    $scope.logon = function () {
        $http({
            method: "POST",
            url: './app/php/stuLogin.php',
            data: $scope.ldata
        }).then(function (data1) {
            $scope.dab = data1.data;
            dab1 = JSON.stringify($scope.dab)
            obj = JSON.parse(dab1);
            console.log(obj.status);


            if (obj.$error == null) {
                if (obj.Authendication == 1 && obj.status == 'Login Successfully') {
                    $scope.alm = true;
                    $scope.altcls = 'alert-success'
                    $scope.altmsg = obj.status;

                    // This is Route provider

                    // End of the Route provider!!
                    // window: {
                    //     location: {
                    //         href: "http://localhost/ngJS/PROJECT/main.index.html"
                    //     }
                    // }
                    window.location.replace("app/template/main.index.html");
                }
                else {
                    $scope.alm = true;
                    $scope.altcls = 'alert-danger'
                    $scope.altmsg = obj.status;
                }

            } else {
                alert('Please Enter Valild email id')
            }



            // if (data1.error != '') {
            //     $scope.alertMsg = true;
            //     $scope.alertClass = 'alert-danger'
            //     $scope.alertMessage = data1.message;
            //     if ($scope.message == 'Login Successful') {
            //         $scope.alertMsg = true;
            //         alert(data1);
            //         $scope.alertClass = 'alert-success'
            //         $scope.alertMessage = data1.message
            //     }
            // }
        })
    }
}])










// var arr = [];
// for (var o in data1) {
//     var cr = {};
//     cr[o] = data1[o];
//     arr.push(cr)
// }

// // const obj = JSON.parse(data);
// alert(arr)























