angular.module("labApp").controller("ResultController",['$scope','$routeParams','ResultService',
    function($scope,$routeParams,ResultService){
        function setData() {
            $scope.namePatient=$routeParams.patientName;
            $scope.nameTest=$routeParams.testName;
        };
        function getData() {
            setData();
            ResultService.findOne($routeParams.testName,$routeParams.patientName).then(result=>{
                $scope.resultTobe=result[0];
            })
        };

        function getTest() {
            //console.log($scope.nameTest);
            ResultService.findTest($routeParams.testName).then(test=>{
                $scope.test=test[0];
                console.log($scope.test);
            });
        };
        setData();
        getData();
        getTest()
        $scope.createResults=()=>{
            var result={
                testName:$scope.nameTest,
                patientName:$scope.namePatient
            }
            getTest();
            ResultService.create(result).then(()=>{
                console.log("created")
            })
            getData();
        };
        $scope.addResult=(fieldname,result)=>{
            getData();
            var results={
                fieldName:fieldname,
                result:result
            }
            getData();
            ResultService.updateResult($scope.resultTobe._id,results).then(()=>{
                console.log("result added");
            });
        };


    }])