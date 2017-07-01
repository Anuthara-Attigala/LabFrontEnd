angular.module("labApp").controller('DocRequestController',['$scope','DocRequestService','LabTestService',
    function ($scope,DocRequestService,LabTestService) {
        function getRequests() {
            DocRequestService.get().then(docreq=>{
                $scope.doctorrequest=docreq;
            })
        }
        getRequests();
        $scope.adddoctorreq=(doctorRequest,selectedTest)=>{
            doctorRequest.testName=selectedTest.labTestName;
            doctorRequest.status="new";
            doctorRequest.action="add sample details";
            DocRequestService.adddoctorreq(doctorRequest).then(()=>{
                doctorRequest.action="Sample Details";
                doctorRequest.reqPerson="";
                doctorRequest.patientName="";
                doctorRequest.reqDate="";
                doctorRequest.dueDate="";
                doctorRequest.testName="";
                doctorRequest.priority="";
                doctorRequest.status="New";
                doctorRequest.comment="";
                getRequests();

            })
        };

        function getLabTests(){
            LabTestService.get().then(labTests=>{
                $scope.labTests=labTests;
                console.log($scope.labTests);
                console.log(labTests);
            });
        }
        getLabTests();

        $scope.clearall=(doctorRequest)=>{
                $scope.doctorrequest={}
        };

        // $scope.getResult=(DoctorName,patientName,ReqDate)=>{
        //     DocRequestService.getTest(ReqDate).then(testData=>{
        //         $scope.testData=testData    ///*************////
        //     })
        // }

    }])