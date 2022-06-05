main_app.controller('ad_book', function ($timeout, $scope, $location, Upload) {
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
                { id: 5, name: 'Astronomy' },
                { id: 6, name: 'Others' }
            ];

        }, 650);
    };



    $scope.submit = function () {
        if ($scope.bookForm.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };



    $scope.upload = function (file) {
        //Here is the Condition to assign the folder
        if ($scope.bookInfo.category.name == 'Philosophy') {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Philosophy/'
        }
        else if ($scope.bookInfo.category.name == 'Financial') {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Financial/'
        }
        else if ($scope.bookInfo.category.name == 'Education') {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Education/'
        }
        else if ($scope.bookInfo.category.name == 'Entertainment') {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Entertainment/'
        }
        else if ($scope.bookInfo.category.name == 'Astronomy') {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Astronomy/'
        }
        else {
            $scope.tarpath = '/var/www/html/ngJS/mform/app/image/uploadImage/Others/'
        }
        Upload.upload({
            url: '../php/main.content/addBook.php',
            method: 'POST',
            file: file,
            data: {
                'bookInfo': $scope.bookInfo,
                'targetPath': $scope.tarpath
            }
        }).then(function (resp) {
            obj = JSON.stringify(resp.data);
            obj = JSON.parse(obj)
            if (obj.status == 1) {
                alert(JSON.stringify(obj.message))
                console.log('Success ' + resp.config.data.file.name + '  uploaded ');
                window.location.replace("#!addbook");
            }
            else {
                alert(JSON.stringify(obj.message))
            }
        },
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
