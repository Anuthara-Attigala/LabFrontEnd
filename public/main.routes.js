angular.module("labApp").config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/samplecentertypes', {
            templateUrl: 'samplecentertype.html',
            controller: 'SampleCenterTypeController'
        }).when('/labtests',{
            templateUrl:"labtest.html",
            controller:"LabTestController"
        }).when('/labtestview',{
            templateUrl:"labTest.view.html",
            controller:"LabTestController"
        }).when('/testresult/:testName/patient/:patientName',{
            templateUrl:"result.html",
            controller:"ResultController"
        }).when('/samplecenter',{
            templateUrl:"sampleCenters.html",
            controller:"SampleCenterController"
        });

        $locationProvider.html5Mode(true);
    }]);