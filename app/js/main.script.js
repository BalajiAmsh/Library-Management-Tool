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
})

main_app.controller('userFine', ['$scope', function ($scope, $location, $rootElement) {

  // $scope.url = '';
  $scope.searchObject = $location.search();

  alert($scope.url);
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




