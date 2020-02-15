var mymodule = angular.module("ht", [])
mymodule.controller("mycontroler", function ($scope) {
    // alert("Hi- this is Controller")

    // Use of Scope variable now
    $scope.Name = "Zahid"
    $scope.Roll = "Bcsf15a009"
    $scope.City = "Lahore"
    $scope.detail = function () {
        return "This is naem :" + $scope.Name
    }
    $scope.colors = ['red', 'greeen', 'yellow', 'orange', 'blue']

    // Json With Array
    $scope.arr = [
        { 'name': 'zahid', 'city': 'Karachi', 'Gender': 'Male' },
        { 'name': 'zahid', 'city': 'Lahore', 'Gender': 'Male' },
        { 'name': 'zahid', 'city': 'Lahore', 'Gender': 'Male' },
    ];

    // Practice for Event Handler
    $scope.EventHandler = function () {
        $scope.Eventmessage = "HI - this is click handler"
    }

    // Use of If else Statement
    // agr return use nahi krain gay to Output show nahi ho gi
    // Why???????
    $scope.a = 5
    $scope.b = 50
    if ($scope.a > $scope.b) {
        return $scope.c = "A is greater than B"
    }
    else if ($scope.a == $scope.b) {
        $scope.c = "Both are same things"

    }
    else if ($scope.a <= $scope.b) {
        $scope.c = "Both are same things"

    }
    else if ($scope.a >= $scope.b) {
        $scope.c = "Both are same things"

    }
    else {
        return $scope.c = "B is greater than A"
    }
})