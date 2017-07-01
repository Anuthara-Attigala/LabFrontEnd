/**
 * Created by User on 6/30/2017.
 */
angular.module('labApp').factory('testService',['$http',
    function ($http) {
        return{
            get:()=>$http.get('http://localhost:3000/requests').then(response=>response.data),
            add:detail=>$http.post('http://localhost:3000/addDetails',detail).then(response=>response.data),
            getLocation:()=>$http.get('http://localhost:3000/samplecenters').then(response=>response.data),
            getById:id=>$http.get('http://localhost:3000/requests/'+id).then(response=>response.data),
            update:request=>$http.put('http://localhost:3000/requests/'+request._id,request).then(response=>response.data)
        }

    }]);
