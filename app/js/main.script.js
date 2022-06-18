// Create and prepare the 'users' module (with its controllers and dataservices) 

var main_app = angular.module('user', ['ngMaterial', 'ngRoute', 'ngFileUpload', 'ui.bootstrap', 'ngResource']);

main_app.config(function ($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when("/addbook", {
      templateUrl: "main.content/add.book.html",
      controller: 'ad_book'
    })
    .when("/managebook", {
      templateUrl: "main.content/manage.book.html",
      controller: 'manageBookCtr'
    })
    .when("/takeBook", {
      templateUrl: "main.content/takeBook.html",
      controller: 'takeBookCtrl'
    })
    .when("/returnBook", {
      templateUrl: 'main.content/returnBook.html',
      controller: 'returnBookCtrl'
    })
})
main_app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('customTheme')
    .primaryPalette('grey')
    .accentPalette('orange')
    .warnPalette('red');
});

function themeController($scope) {
}

main_app.controller('userFine', ['$scope', '$location', function ($scope, $location, $rootElement, $rootScope) {

  searchObject = window.location.search;
  smpName = searchObject.split('?');
  $scope.Name = smpName[1];
  $scope.Name = $scope.Name.replace(/%20/g, " ");
  $scope.role = localStorage.getItem('role')



  // alert($scope.searchObject);
  // var routeParam = $routeParams.paramName

  // if ($routeParams.message) {
  //   // If a param called 'message' exists, we show it's value as the message
  //   $scope.userName = $routeParams.message;
  // } else {
  //   // If it doesn't exist, we show a default message
  //   $scope.userName = 'Hello world from Controller Three!';
  // }

  // $http({
  //   params: { nameUser: $routeParams.name },
  // });
  // $scope.nameUser = nameUser;

  // alert($rootScope.username)
  // $scope.nameUser = $rootScope.username;
  // // $scope.msg1 = "hii"
}]);




