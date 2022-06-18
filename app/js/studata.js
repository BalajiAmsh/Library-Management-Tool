// < !--Here is the script content that connect the database and send data to the php file-- >

app.controller('sending', ['$scope', '$http', function ($scope, $http) {
    $scope.Register = function () {
        $http({
            method: "POST",
            url: './app/php/stuform.php',
            data: $scope.udata
        }).then(function (res) {
            window.location.replace("#!signUp");
        })

    }
    $scope.reset = function () {

        $scope.udata.name = ""
        $scope.udata.email = ""
        $scope.udata.spassword = ""
    }
}])





// This is an ajax method
// function fetchcall() {
//     // (1) GET FORM DATA
//     var data = new FormData();
//     data.append("name", document.getElementById("name").value);
//     data.append("email", document.getElementById("email").value);
//     data.append('spassword', document.getElementById("spassword").value);


//     // Ajex method to connect the php file
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "./app/php/stuform.php");
//     xhr.onload = function () {
//         console.log(this.response);
//     };
//     xhr.send(data);
//     return false;

// }