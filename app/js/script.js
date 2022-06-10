var app = angular.module('MyApp', ['ngMaterial', 'ngRoute', 'ngMessages',]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/signUp", {
            templateUrl: "app/template/signUp.html",
            controller: 'signup'
        })
        .when("/sAdmin", {
            templateUrl: "app/template/sAdmin.html",
            controller: 'loging'
        })

});

app.controller('signup', function ($scope) {
    $scope.message = "First";
});

// app.controller('loging', function ($scope, messages) {
//     $scope.message = $scope.userNam;

//     const self = this;
//     self.addMessage = function (message) {
//         // add message to local service
//         messages.add(message);

//         self.newMessage = $scope.userNam;
//     };
// });

// service
app.factory('messages', function () {
    const messages = {};

    messages.list = [];

    messages.add = function (message) {
        // add new item to messages in post module and increment id
        messages.list.push({ id: messages.list.length, text: message });
    };

    return messages;
});


