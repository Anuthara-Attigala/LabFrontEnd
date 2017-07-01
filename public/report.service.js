/**
 * Created by User on 7/1/2017.
 */
angular.module("labApp").factory("reportService",['$http',function ($http) {
    return{
        getById:id=>$http.get('http://localhost:3000/requests/'+id).then(response=>response.data),
        update:request=>$http.put('http://localhost:3000/requests/'+request._id,request).then(response=>response.data),
        getsDetails:request=>$http.get('http://localhost:3000/addDetails/'+request).then(response=>response.data),
        getResults:requestid=>$http.get('http://localhost:3000/results/'+requestid+'/request').then(response=>response.data)
    }
}]);