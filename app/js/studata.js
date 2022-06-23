// < !--Here is the script content that connect the database and send data to the php file-- >

app.controller('sending', function ($scope, $http, $mdToast, $document, $mdDialog) {
    $scope.Register = function () {
        $http({
            method: "POST",
            url: './app/php/stuform.php',
            data: $scope.udata
        }).then(function (res) {
            obj = JSON.stringify(res.data)
            obj = JSON.parse(obj)
            if (obj.status == 1) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(obj.message)
                        .hideDelay(12000)
                );
                window.location.replace("#!sAdmin");
            } else {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(obj.message)
                        .hideDelay(12000)
                );
            }
        })

    }
    $scope.reset = function () {

        $scope.udata.name = ""
        $scope.udata.email = ""
        $scope.udata.spassword = ""
    }
})
