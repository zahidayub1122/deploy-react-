var mymodule = angular.module("pu",[])
mymodule.controller ("myController",function($scope,$http,$log)
{
    $http({
        method :'Get',
        url :'http://jsonplaceholder.typicode.com/posts'
    })
    .then(function(response)
    {
        console.log(response)
        $scope.lhr = response.data
       // $log.info(response)
    },
    function(reason){
        $scope.error = reason.data;
        $log.info(reason)
        
    }
    
    )
     
})