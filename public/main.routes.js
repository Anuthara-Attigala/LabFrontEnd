angular.module("labApp").config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/samplecentertypes', {
            templateUrl: 'samplecentertype.html',
            controller: 'SampleCenterTypeController'
        }).when('/labtests',{
            templateUrl:"test.html",
            controller:"LabTestController"
        }).when('/labtestview',{
            templateUrl:"labTest.view.html",
            controller:"LabTestController"
        }).when('/testresult/:testName/patient/:patientName/request/:requestId',{
            templateUrl:"result.html",
            controller:"ResultController"
        }).when('/samplecenter',{
            templateUrl:"sampleCenters.html",
            controller:"SampleCenterController"
        }).when('/labdepartments',{
            templateUrl:"department.html",
            controller:"DepartmentController"

        }).when('/pharmacy', {
            templateUrl: 'pharmacy.html',
            controller: 'pharmacyController'
        }).when('/test',{
            templateUrl : 'labtest.html',
            controller : 'testController'
        }).when('/testresult/:testName/patient/:patientName/new/:requestID',{
            templateUrl : 'test2.html',
            controller : 'testController'
        }).when('/testresult/:testName/patient/:patientName/sample_collected/:requestID',{
            templateUrl : 'result.html',
            controller :'ResultController'
        }).when('/testresult/:testName/patient/:patientName/report_generated/:requestID', {
            templateUrl: 'report.html',
            controller : 'reportController'
        });

        $locationProvider.html5Mode(true);
    }]);