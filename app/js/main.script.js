// Create and prepare the 'users' module (with its controllers and dataservices) 

var main_app = angular.module('user', ['ngMaterial', 'ngRoute', 'ngFileUpload', 'ui.bootstrap', 'ngResource']);

main_app.config(function ($routeProvider, $locationProvider) {
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




