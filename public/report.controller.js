
/**
 * Created by User on 7/1/2017.
 */
angular.module('labApp').controller("reportController",['$scope','reportService','$routeParams',
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
            reportService.getById($routeParams.requestId).then(request => {
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
           reportService.getsDetails($routeParams.requestId).then(request => {
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

               console.log($scope.request);

           })
       }




    }]);

