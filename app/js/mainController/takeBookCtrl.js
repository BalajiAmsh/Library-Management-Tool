main_app.controller('takeBookCtrl', function ($scope, $http, $filter, $mdToast, $document, $route) {
    $scope.morning = 'We are in the Take Book Controller';

    const d = new Date();
    d.setDate(d.getDate() + 29);
    $scope.todayDate = $filter('date')(Date.now(), 'yyyy-MM-dd');
    $scope.submitDate = $filter('date')(d, 'yyyy-MM-dd');

    // Custome Function for Email AutoComplete
    $scope.fetchUsers = function () {

        var searchText_len = $scope.searchText.trim().length;

        // Checking Email length
        if (searchText_len > 0) {
            $http({
                method: 'post',
                url: '../php/main.content/fetchUser.php',
                data: { searchText: $scope.searchText }
            }).then(function successCallback(response) {
                $scope.searchResult = response.data;
            });
        } else {
            $scope.searchResult = {};
        }

    }

    // Set value to an Email search box
    $scope.setValue = function (index, $event) {
        $scope.searchText = $scope.searchResult[index].memberEmail;
        $scope.searchResult = {};
        $event.stopPropagation();
    }

    $scope.searchboxClicked = function ($event) {
        $event.stopPropagation();
    }

    $scope.containerClicked = function () {
        $scope.searchResult = {};
    }

    /************************************************** */

    // Custome Function for Book AutoComplete
    $scope.fetchBooks = function () {

        var searchBook_len = $scope.searchBook.trim().length;

        // Checking on search Book text length
        if (searchBook_len > 0) {
            $http({
                method: 'post',
                url: '../php/main.content/fetchBook.php',
                data: { searchBook: $scope.searchBook }
            }).then(function successCallback(response1) {
                $scope.searchBookResult = response1.data;
            });
        } else {
            $scope.searchBookResult = {};
        }

    }

    // Setting value for Book search box
    $scope.setValueBook = function (index, $event) {
        $scope.searchBook = $scope.searchBookResult[index].name;
        $scope.searchBookResult = {};
        $event.stopPropagation();
    }

    $scope.searchboxClicked = function ($event) {
        $event.stopPropagation();
    }

    $scope.containerClicked = function () {
        $scope.searchBookResult = {};
    }

    $scope.commitProcess = function () {
        $scope.Data = {
            'BookName': $scope.searchBook,
            'memName': $scope.searchText,
            'todayDate': $scope.todayDate,
            'returnDate': $scope.submitDate,
            'action': "takeBook"
        }
        $http({
            method: 'POST',
            url: '../php/main.content/process.php',
            data: $scope.Data
        }).then(function (res) {
            obj = JSON.stringify(res.data);
            obj = JSON.parse(obj);
            if (obj.Status = '1') {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(obj.Message)
                        .hideDelay(12000)
                );
                $route.reload();
            }
            else {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(obj.Message)
                        .hideDelay(12000)
                );
            }
        })
    }
})