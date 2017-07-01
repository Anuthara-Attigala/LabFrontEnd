angular.module("labApp").controller("PatientManagementController",["$scope","PatientManagementService",
    function($scope,PatientManagementService){

        function getPatients(){
            PatientManagementService.get().then(patients=>{
                $scope.patients=patients;
            })
        }
        $scope.addPatient=(patient)=>{
            PatientManagementService.add(patient).then(()=>{
                patient.patientName="";
                patient.gender="";
                patient.contactNumber="";
                patient.dob="";
            });
        };

        $scope.updatepatient=(patient)=>{
            PatientManagementService.updatepatient(patient).then(()=>{
                getPatients();
        });
        };

    }]);