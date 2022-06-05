main_app.controller('manageBookCtr', function ($timeout, $scope, $http) {
    $scope.message = "Under the";
    $scope.msg = "Hood";
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


    $scope.paginate = function (value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.bookContent.indexOf(value);
        return (begin <= index && index < end);
    };
});