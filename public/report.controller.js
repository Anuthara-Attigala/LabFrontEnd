
/**
 * Created by User on 7/1/2017.
 */
angular.module('myApp').controller("reportController",['$scope','reportService','$routeParams',
    function ($scope,reportService,$routeParams) {
        //  function getDetails() {
        //      testService.get().then(requests => {
        //         $scope.requests = requests;

        //     });
        //  }
        // getDetails();

        $scope.export = function(){
            html2canvas(document.getElementById('exportthis'), {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500,
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("test.pdf");
                }
            });
        }
        function getID() {
            reportService.getById($routeParams.requestID).then(request => {
                $scope.request = {};
                // console.log($scope.request);
                $scope.request = request[0];
                console.log($scope.request);
                $scope.requestID = request[0].requestID;
                $scope.patientName = request[0].patientName;
                $scope.reqPerson = request[0].reqPerson;
                $scope.testName = request[0].testName;
            })
        };
       function getDetails() {
           reportService.getsDetails($routeParams.requestID).then(request => {
               $scope.request = {};
               $scope.request = request[0];
               console.log($scope.request);
               $scope.testType=request[0].testName;
               console.log($scope.testType);
       })}
        getID();
        getDetails();
       function getResultDetails(){
           reportService.getResults($routeParams.patientName).then(request => {
               $scope.request = {};
               $scope.request = request[0];
               console.log('ABCABC');
               console.log($scope.request);
             //  $scope.testType=request[0].testName;
             //  console.log($scope.testType);
           })
       }
              /*  request[0].action = 'add results';
                request[0].status = 'sample_collected';
                $scope.request.action = request[0].action;
                $scope.request.priority = request[0].priority;
                $scope.request.status = request[0].status;
                $scope.request.requestID = request[0].requestID;
                $scope.request.patientName = request[0].patientName;
                $scope.request.testName = request[0].testName;
                $scope.request.reqDate = request[0].reqDate;
                $scope.request.dueDate = request[0].dueDate;
                $scope.request.reqPerson = request[0].reqPerson;
                $scope.request.comment = request[0].comment;
                $scope.request._id = request[0]._id;
*/



    }]);
/*
        $scope.edit =(request)=>{
            getID();
        }

        $scope.updateRequest = (request)=>{

            testService.update(request).then(()=>{
                console.log(request);
                getDetails();
                alert("successfully updated");

            });
        };

        function getSpecimenDetails() {
            testService.get().then(details=>{
                $scope.details=details;
            })
        }

        $scope.addDetails = (detail)=>{
            testService.add(detail).then(()=>{
                console.log(detail);
                getSpecimenDetails();
                detail={};

            });
        };
        $scope.back = (request)=>{
            getDetails();
        }
*/
