angular.module('labApp').controller("testController",['$scope','testService','$routeParams','ResultService',
    function ($scope,testService,$routeParams,ResultService) {
        function getDetails() {
            testService.get().then(requests => {
                $scope.requests = requests;

            });
        }
        getDetails();

      /*  $scope.edit = (request)=>{
            $scope.request={};


            $scope.request.action=request.action;
            $scope.request.priority=request.priority;
            $scope.request.status=request.status;
            $scope.request.requestID=request.requestID;
            $scope.request.patientName=request.patientName;
            $scope.request.testName=request.testName;
            $scope.request.reqDate=request.reqDate;
            $scope.request.dueDate=request.dueDate;
            $scope.request.reqPerson=request.reqPerson;
            $scope.request.comment=request.comment;

            $scope.request._id=request._id;

        }

        $scope.updateRequest = (request)=>{

            addSampleDetailsService.update(request).then(()=>{
                console.log(request);
                getSampleDetails();

            });
        };
*/
        function getRequest() {
            ResultService.getById($routeParams.requestId).then(request=>{
                console.log($routeParams.requestId);
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
                console.log(request);
                // getDetails();
                alert("successfully updated");
            });
        };


          function getID() {
              testService.getById($routeParams.requestId).then(request => {
                  $scope.request={};
                 // console.log($scope.request);
                  $scope.request = request[0];
                  console.log($scope.request);


               request[0].action = 'add results';
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
              })
          }

      /*    function getlocation() {
              testService.getLocation().then(location=>{
                  $scope.location={};
                  $scope.location=location;
                  console.log( $scope.location);
              })
          }
          getlocation();*/

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




    }]);





