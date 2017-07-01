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
        }).when('/testresult/:testName/patient/:patientName/request/:requestId',{
            templateUrl:"result.html",
            controller:"ResultController"
        }).when('/samplecenter',{
            templateUrl:"sampleCenters.html",
            controller:"SampleCenterController"
        }).when('/pharmacy', {
            templateUrl: 'pharmacy.html',
            controller: 'MainController'

        }).when('/sampleDetails', {
            templateUrl: 'sampleDetails.html',
            controller: 'sampleDetailsController'

        }).when('/addSampleDetails',{
            templateUrl : 'addSampleDetails.html',
            controller : 'addSampleDetailsController'
        }).when('/test',{
            templateUrl : 'test2.html',

        }).when('/new/:requestID',{
            templateUrl : 'test2.html',
            controller : 'testController'
        }).when('/sample_collected/:requestID',{
            templateUrl : 'result.html'

        }).when('/sample_collected/:requestID', {
            templateUrl: 'result.html'
        }).when('/labdepartments',{
            templateUrl:"department.html",
            controller:"DepartmentController"
        }).when('/test',{
            templateUrl : 'test.html',
            controller : 'testController'
       }).when('/testresult/:testName/patient/:patientName/new/:requestID',{
            templateUrl : 'test2.html',
            controller : 'testController'
});

        $locationProvider.html5Mode(true);
    }]);