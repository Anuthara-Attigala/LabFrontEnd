angular.module("labApp").controller("PatientController",["$scope","PatientService",
    function($scope,PatientService){

        function getPatients(){
            PatientService.get().then(patients=>{
                $scope.patients=patients;
            })
        }
        getPatients();

        $scope.deletepatient=(patient)=>{
            var id=patient._id;
            SampleCenterTypeService.delete(id).then(()=>{
                getPatients();
        })
        };
        // function getLabTests(){
        //     PatientService.getLabTests().then(labTests=>{
        //         $scope.labTests=labTests;
        //     })
        // }
        // getLabTests();
    }]);