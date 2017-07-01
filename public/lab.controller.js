angular.module("labApp").controller("LabController",['$scope','$location','LabService',
    function($scope, $location, LabService){
        function getLabDepartmentTypes(){
            LabService.getDepartmentTypes().then(depTypes=>{
                $scope.labDepartmentTypes=depTypes;
            });
        };
        getLabDepartmentTypes();
        function getLabDepartments() {
            LabService.getDepartments().then(dep=>{
                $scope.labDepartments=dep;
            });
        };
        function getLabs(){
            LabService.get().then(labs=>{
                $scope.labs=labs;
            });
        };
        getLabDepartments();
        getLabs();
        $scope.addLab=(newLab,selectedLab,selectedDep)=> {
            if (newLab.contactNumber.length !== 10) {
                alert("incorrect phone number")
            }
            else{
            newLab.laboratoryTypeName = selectedLab.laboratoryTypeName;
            newLab.departmentName = selectedDep.departmentName;
            LabService.add(newLab).then(() => {
                $scope.newLab = "";
                console.log("lab added");
                getLabs();
            });

        }
        };

        $scope.logout=()=>
        {
            $location.path('/');
        };


    }]);
