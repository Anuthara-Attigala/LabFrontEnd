angular.module("labApp").controller("LoginController",['$scope','$location',
    function($scope,$location){
        $scope.login=(username,password)=>{
            if(username==='Doctor1'){
                $location.path('/doctorlogin');
            }
            else if(username==='LabOp1'){
                $location.path('/lablogin');
            }
            else{
                alert("Incorrect username")
            }
        }
    }]);
