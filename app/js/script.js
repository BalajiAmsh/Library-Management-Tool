var app = angular.module('MyApp', ['ngMaterial', 'ngRoute', 'ngMessages',]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        // .when("/", {
        //     templateUrl: "app/template/defaultlog.html",
        //     controller: 'deflog'
        // })
        .when("/signUp", {
            templateUrl: "app/template/signUp.html",
            controller: 'signup'
        })
        .when("/sAdmin", {
            templateUrl: "app/template/sAdmin.html",
            controller: 'admin'
        })
        .when("/main-index", {
            templateUrl: "http://localhost/ngJS/PROJECT/main.index.html",
            controller: 'ma-ind'
        })
});

app.controller('signup', function ($scope) {
    $scope.message = "First";
});

app.controller('admin', function ($scope) {
    $scope.message = "admin";
});
app.controller('deflog', function ($scope) {
    $scope.temp = "We are in Default Page"
})


