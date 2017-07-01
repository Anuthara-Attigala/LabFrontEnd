(function() {
    angular.module('labApp', ['ui.router']);

    angular.module.run(function($rootScope, $location, $state, LoginService) {
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log('Changed state to: ' + toState);
            });

        if(!LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });

    angular.module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('login', {
                url : '/login',
                templateUrl : 'login.html',
                controller : 'LoginController'
            })
            .state('index', {
                url : '/index',
                templateUrl : 'index.html',
                controller : 'HomeController'
            });
    }]);

    angular.module.controller('LoginController', function($scope, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";

        $scope.formSubmit = function() {
            if(LoginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
            } else {
                $scope.error = "Incorrect username/password !";
            }
        };

    });

angular.module.controller('HomeController', function($scope, $rootScope, $stateParams, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";

    });

angular.module.factory('LoginService',

    ['$http',function ($http) {
        var admin = 'doctor1';
            var pass = '1234';
            var isAuthenticated = false;

            return {
                login : function(username, password) {
                    isAuthenticated = username === doctor1 && password === 1234;
                    return isAuthenticated;
                },
                isAuthenticated : function() {
                    return isAuthenticated;
                }
            };
    }]);


    // function() {
    //     var admin = 'doctor1';
    //     var pass = '1234';
    //     var isAuthenticated = false;
    //
    //     return {
    //         login : function(username, password) {
    //             isAuthenticated = username === doctor1 && password === 1234;
    //             return isAuthenticated;
    //         },
    //         isAuthenticated : function() {
    //             return isAuthenticated;
    //         }
    //     };
    //
    // });


    // app.constant('AUTH_EVENTS', {
    //     loginSuccess: 'auth-login-success',
    //     loginFailed: 'auth-login-failed',
    //     logoutSuccess: 'auth-logout-success',
    //     sessionTimeout: 'auth-session-timeout',
    //     notAuthenticated: 'auth-not-authenticated',
    //     notAuthorized: 'auth-not-authorized'
    // })
    //
    //   app.constant('USER_ROLES', {
    //         all: '*',
    //         admin: 'admin',
    //         doc1: 'doctor1',
    //         doc2: 'doctor2'
    //     })




})();