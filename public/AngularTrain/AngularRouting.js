var l_Module = angular.module("Demo",["ngRoute"])
l_Module.config(function($routeProvider){
    alert("Hi")
     
    $routeProvider
    .when("/hm",
    {
         
        templateUrl:"Home.html",
        controller :"Home_Controller"
    })
    .when("/lh",{
        
        templateUrl: "lahore.html",
        controller :"lahore_Controller"
    })
    .when("/kr",{
        
        templateUrl: "karachi.html",
        controller :"karachi_Controller"
    })
    .otherwise({
        template:"<h1>Not Working Page</h1>"
    })
})
       
//Home Controller
.controller("Home_Controller",function($scope){
    $scope.Home_Message = "Home Page "
 })

 //Lahore Controller
 .controller("lahore_Controller",function($scope){
    $scope.message = "Lahore Home Page"
 })

//Karachi-Controller
 .controller("Karachi_Controller",function($scope){
   $scope.karachi_Message = "Karachi  Page"
})



// Just for practice purpose

//Lahore-Controller
// var l_Module = angular.module("lhr",["ngRoute"])
// l_Module.config(function($routeProvider){
//     $routeProvider
    
//     .when("/main",
//     {
//         templateUrl :"lahore.html"
//     })
//     .when("/red",{
//         templateUrl : "Karachi.html",
//         controller :"K_Controller"
//     })
//     .otherwise({
//         template:"<h1>Nothing tos how</h1>"
//     })
// })
// l_Module.controller("l_Controller",function($scope){
//     alert("Hi")
// })