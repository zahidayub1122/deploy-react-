var mymodule = angular.module("pu",[])
mymodule.controller ("mycontroller",function($scope,$http)
{

    //  $http({
    //      method :'GET',
    //      url :'https://jsonplaceholder.typicode.com/posts'})
    //  .then(function(response){
         
    //      $scope.employees = response.data;
    //  })
     
})
.service('HttpService', function($http) {
    return {
      getPost: function() {
        // $http returns a promise, which has a then function, which also returns a promise.
        return $http.get('http://jsonplaceholder.typicode.com/posts/1')
         .then(function (response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Get Post'+response);
         return response.data;
        });
      }
    };
  });