angular.module("labApp").controller('LabTestController',['$scope','LabTestService',
    function ($scope,LabTestService) {
        function getTests() {
            LabTestService.get().then(tests=>{
                $scope.LabTests=tests;
        })
        }
        getTests();
        $scope.addTest=(test)=>{
            //console.log(test);
            LabTestService.addTest(test).then(()=>{
                test.labTestName="";
            test.category="";
            getTests();

        })
        };
        $scope.addField=(id,field)=>{
            LabTestService.addField(id,field).then(()=>{
                field.fieldName="";
            field.unit="";
            field.normalRange="";
        })
        }
        $scope.getTest=id=>{
            LabTestService.getTest(id).then(testData=>{
                $scope.testData=testData
        })
        }

    }])