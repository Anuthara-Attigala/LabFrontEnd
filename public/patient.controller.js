angular.module("labApp").controller("PatientController",["$scope",'$location',"PatientService",
    function($scope,$location,PatientService){

        function getPatients(){
            PatientService.get().then(patients=>{
                $scope.patients=patients;
            })
        }
        getPatients();

        $scope.deletepatient=(patient)=>{
            var id=patient._id;
            PatientService.deletepatient(id).then(()=>{
                getPatients();
        })
        };

//edit-----------------
        $scope.edit =(request)=>{
            getPatientDetails();
        }

//---------------
        $scope.updatepatient=(patient)=>{
            PatientService.updatepatient(patient).then(()=>{
                getPatients();
            });
        };

        // function getLabTests(){
        //     PatientService.getLabTests().then(labTests=>{
        //         $scope.labTests=labTests;
        //     })
        // }
        // getLabTests();

        $scope.logout=()=>
        {
            $location.path('/');
        };

    }]);