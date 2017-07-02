angular.module("labApp").controller("DoctorResultController",['$scope','$location','ResultService',
    function($scope,$location,ResultService){
        $scope.search=(requestId)=>{
            ResultService.findOne(requestId).then(result=>{
                console.log(requestId);
                $scope.result=result[0];
                console.log($scope.result);
                if(Object.keys($scope.result).length==0){
                    alert("Results Not Available");
                }
            })
        }
        $scope.logout=()=>
        {
            $location.path('/');
        };


    }]);
