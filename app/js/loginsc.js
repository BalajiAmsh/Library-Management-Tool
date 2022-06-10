app.controller('loging', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope, $routeProvider, messages) {
    $scope.alm = true;


    const self = this;
    self.addMessage = function (message) {
        // add message to local service
        messages.add(message);

        self.newMessage = $scope.userNam;
    };


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


            if (obj.Authendication == 1) {
                if (obj.actStatus == 'A') {
                    // app.run(function ($rootScope) {
                    //     $rootScope.userName = obj.nameUser
                    // });
                    $scope.alm = true;
                    $scope.altcls = 'alert-success'
                    $scope.altmsg = obj.status + obj.nameUser;
                    $scope.userNam = obj.nameUser;
                    // addMessage(obj.nameUser);
                    // $rootScope.username = obj.nameUser;

                    $scope.urleg = 'app/template/main.index.html?' + $scope.userNam;

                    // This is Route provider

                    // End of the Route provider!!
                    // window: {
                    //     location: {
                    //         href: "http://localhost/ngJS/PROJECT/main.index.html"
                    //     }
                    // }
                    window.location.replace($scope.urleg);
                }
            }
            else {
                $scope.alm = true;
                $scope.altcls = 'alert-danger'
                $scope.altmsg = obj.status;
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























