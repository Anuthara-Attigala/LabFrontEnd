/**
 * Created by User on 7/1/2017.
 */
angular.module("myApp").factory("reportService",['$http',function ($http) {
    return{
        getById:id=>$http.get('http://localhost:3000/requests/'+id).then(response=>response.data),
        update:request=>$http.put('http://localhost:3000/requests/'+request._id,request).then(response=>response.data),
        getsDetails:request=>$http.get('http://localhost:3000/addDetails/'+request).then(response=>response.data),
        getResults:request=>$http.get('http://localhost:3000/results/'+request).then(response=>response.data)
    }
}]);