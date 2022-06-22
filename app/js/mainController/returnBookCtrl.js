main_app.controller('returnBookCtrl', function ($scope, $http, $route, $mdToast, $document, $mdDialog) {
    $scope.msg = 'We are in the Return Book Controller'

    $scope.fetchDetail = function (act) {
        $http({
            method: "POST",
            url: '../php/main.content/fetchDetail.php'
        }).then(function (res) {
            obj = JSON.stringify(res.data);
            $scope.details = JSON.parse(obj);
        });
    }

    $scope.Column = "id";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }
    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'icon-arrow-down' : 'icon-arrow-up'
        }
        return '';
    }


    $scope.editdetail = function (detail, ev) {
        $scope.detail = detail;
        var confirm = $mdDialog.confirm()
            .title('Returning Book Confirmation')
            .textContent('Does ' + detail.memberEmail + ' returned ' + detail.bookName)
            .ariaLabel('Returning Book Process')
            .targetEvent(ev)
            .ok('Returned')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function () {
            $scope.bookEmail = $scope.detail.memberEmail;

            $http({
                method: 'POST',
                url: '../php/main.content/process.php',
                data: {
                    'memName': $scope.bookEmail,
                    'action': "returned"
                }
            }).then(function (response) {
                $mdDialog.hide();
                res = JSON.stringify(response.data);
                resp = JSON.parse(res);
                if (resp.status == 1) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Returned Book saved successfully Have a Great Day  ' + $scope.bookEmail + ' :) ')
                            .hideDelay(12000)
                    );
                    $route.reload();
                }
                else {
                    $scope.Message = resp.Message

                    $route.reload();
                }
            })

        }, function () {

        });
    };

})