angular.module("labApp").controller("DepartmentController",['$scope','$location','DepartmentService',
    function($scope, $location, DepartmentService){
        function getDepartments(){
            DepartmentService.get().then(departments =>{
                $scope.departments=departments;
            })
        }
        getDepartments();
        $scope.addDepartment=(department)=>{
            DepartmentService.add(department).then(()=>{
                getDepartments();
                department.departmentName="";
            });
        };
        $scope.deleteDepartment=(department)=>{
            var id=department._id;
            DepartmentService.delete(id).then(()=>{
                getDepartments();
            })
        };

        $scope.logout=()=>
        {
            $location.path('/');
        };

    }]);
