angular.module("labApp").controller("ResultController",['$scope','$routeParams','ResultService',
    function($scope,$routeParams,ResultService){
        function setData() {
            $scope.namePatient=$routeParams.patientName;
            $scope.nameTest=$routeParams.testName;
            $scope.requestId=$routeParams.requestId;
        };
        function getData() {
            setData();
            ResultService.findOne($routeParams.requestId).then(result=>{
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
                patientName:$scope.namePatient,
                requestID:$routeParams.requestId
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
            getData();
        };


        function getRequest() {
            ResultService.getById($routeParams.requestID).then(request=>{
                console.log($routeParams.requestID);
                $scope.request={};
                $scope.request = request[0];
                console.log($scope.request);
                $scope.request.action='View Report';
                $scope.request.status='report_generated';

                console.log($scope.request);
            })};

        $scope.edit =(request)=>{
            getRequest();
        }
        $scope.updateAddResults = (request)=>{

            ResultService.update(request).then(()=>{
                console.log('ABC');
                console.log(request);
                // getDetails();
                alert("successfully updated");

            });
        };



    }])