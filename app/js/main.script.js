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
    .when("/eBook", {
      templateUrl: "main.content/eBook.html",
      controller: 'manageBookCtr'
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

main_app.controller('userFine', function ($scope, $location, $rootElement, $mdDialog, $rootScope) {

  searchObject = window.location.search;
  smpName = searchObject.split('?');
  $scope.Name = smpName[1];
  $scope.Name = $scope.Name.replace(/%20/g, " ");
  $scope.role = localStorage.getItem('role')

  $scope.logout = function (ev) {
    var confirm = $mdDialog.confirm()
      .title('Logout From Library Tool')
      .textContent('Are you going to Logout !')
      .ariaLabel('Logout')
      .targetEvent(ev)
      .ok('Logout')
      .cancel('Cancel')

    $mdDialog.show(confirm).then(function () {
      window.location.replace('../../index.html#!/sAdmin')
    })
  }

});




