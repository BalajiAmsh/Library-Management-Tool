var app = angular.module('MyApp', ['ngMaterial', 'ngRoute', 'ngMessages']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/signUp", {
            templateUrl: "app/template/signUp.html",
            controller: 'signup'
        })
        .when("/sAdmin", {
            templateUrl: "app/template/sAdmin.html",
            controller: 'admin'
        })
});

app.controller('signup', function ($scope) {
    $scope.message = "First";
});

app.controller('admin', function ($scope) {
    $scope.message = "admin";
});



