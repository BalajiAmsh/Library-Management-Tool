main_app.controller('ad_book', function ($timeout, $scope, Upload) {
    $scope.message = "We are in the Register catageory";

    $scope.category = null;
    $scope.categories = null;


    $scope.loadCategories = function () {

        return $timeout(function () {

            $scope.categories = $scope.categories || [
                { id: 1, name: 'Philosophy' },
                { id: 2, name: 'Financial' },
                { id: 3, name: 'Education' },
                { id: 4, name: 'Entertainment' },
                { id: 5, name: 'Astronomy' }
            ];

        }, 650);
    };



    $scope.submit = function () {
        if ($scope.bookForm.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };



    $scope.upload = function (file) {
        Upload.upload({
            url: '../php/main.content/addBook.php',
            method: 'POST',
            file: file,
            data: {
                'bookInfo': $scope.bookInfo,
                'targetPath': '/var/www/html/ngJS/mform/app/image/uploadImage/Philosophy/'
            }
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + '  uploaded ');
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        }
        );
    };








    // Here is the form directives attached here!

    // main_app.directive('fileModel', ['$parse', function ($parse) {
    //     return {
    //         restrict: 'A',
    //         link: function (scope, element, attrs) {
    //             var model = $parse(attrs.fileModel);
    //             var modelSetter = model.assign;

    //             element.bind('change', function () {
    //                 scope.$apply(function () {
    //                     modelSetter(scope, element[0].files[0]);
    //                 });
    //             });
    //         }
    //     };
    // }]);

    // Here is the Service of the controller

    // main_app.service('fileUpload', ['$https:', function ($https) {
    //     this.uploadFileToUrl = function (file, uploadUrl) {
    //         var fd = new FormData();
    //         fd.append('file', file);

    //         $https: post(uploadUrl, fd, {
    //             transformRequest: angular.identity,
    //             headers: { 'Content-Type': undefined }
    //         })
    //             .success(function () {
    //             })
    //             .error(function () {
    //             });
    //     }
    // }]);

});
