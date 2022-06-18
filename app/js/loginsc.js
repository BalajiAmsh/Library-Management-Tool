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
                    $scope.alm = true;
                    $scope.altcls = 'alert-success'
                    $scope.altmsg = obj.status + obj.nameUser;
                    $scope.userNam = obj.nameUser;
                    $scope.role = obj.Postion;
                    //For local storage
                    localStorage.setItem("role", $scope.role);

                    $scope.urleg = 'app/template/main.index.html?' + $scope.userNam;
                    window.location.replace($scope.urleg);
                }
            }
            else {
                $scope.alm = true;
                $scope.altcls = 'alert-danger'
                $scope.altmsg = obj.status;
            }


        })
    }
}])



























