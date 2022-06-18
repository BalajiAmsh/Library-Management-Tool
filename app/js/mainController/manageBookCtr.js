main_app.controller('manageBookCtr', function ($timeout, $scope, $http, $mdDialog, $rootScope, $route) {
    $scope.message = "Under the";
    $scope.msg = "Hood";
    $scope.value = $rootScope.detail;
    $scope.role = localStorage.getItem('role')
    $scope.prmitBtn = true;
    $scope.prmitTable = false;
    $scope.managingData = function () {
        $http({
            method: "POST",
            url: '../php/main.content/managing.book.php'
        }).then(function (BookData) {
            $scope.bC = JSON.stringify(BookData.data);
            $scope.bookContent = JSON.parse($scope.bC);
            // alert(JSON.stringify(bookContent));
            // alert(JSON.stringify($scope.bookContent))
            $scope.prmitBtn = false;
            $scope.prmitTable = true;
            $scope.totalItems = $scope.bookContent.length;
            $scope.currentPage = 1;
            $scope.numPerPage = 5;
        })
    };

    $scope.updateBook = function () {
        $http({
            method: 'POST',
            url: '../php/main.content/editBook.php',
            data: {
                'data': $scope.value,
                'action': "updatingValue"
            }
        }).then(function (response) {
            $mdDialog.hide();
            res = JSON.stringify(response.data);
            resp = JSON.parse(res);
            if (resp.status == '1') {
                $scope.message = resp.message

                alert($scope.message);
                $route.reload();
                $scope.managingData()
            }
            else {
                $scope.message = resp.message

                alert($scope.message);
            }
        })
    }

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.editBook = function (book, ev) {

        $scope.perBook = book;
        // console.log($scope.perBook)
        $rootScope.detail = $scope.perBook;
        $mdDialog.show({
            // controller: dgCtr,
            // templateUrl: 'app/template/dialouge.show.html',
            template: `<md-dialog aria-label="Edit Book" ng-controller="manageBookCtr" layout="row" flex="70">
                        <div ng-include="'./main.content/editBook.html'" style="width:100%"></div>
                        </md-dialog>`,


            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }), function () {
            alert('Welcome anyway   ')
        };

        // $http({
        //     method: "POST",
        //     url: '../php/main.content/managing.book.php'
        // })
    };

    $scope.deleteBook = function (book, ev) {
        $scope.perBook = book;
        $scope.bookName = $scope.perBook.name;
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete the ' + $scope.bookName)
            .textContent('Your action will make disapper the book in the table')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function () {
            $scope.bookId = $scope.perBook.id;

            $http({
                method: 'POST',
                url: '../php/main.content/editBook.php',
                data: {
                    'data': $scope.bookId,
                    'action': "deleteValue"
                }
            }).then(function (response) {
                $mdDialog.hide();
                res = JSON.stringify(response.data);
                resp = JSON.parse(res);
                if (resp.status == '1') {
                    $scope.message = resp.message

                    alert($scope.message);
                    $route.reload();
                    $scope.managingData()
                }
                else {
                    $scope.message = resp.message

                    alert($scope.message);
                }
            })

        }, function () {

        });
    };


    $scope.paginate = function (value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.bookContent.indexOf(value);
        return (begin <= index && index < end);
    };

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



});