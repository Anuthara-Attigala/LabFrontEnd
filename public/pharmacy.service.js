/**
 * Created by User on 5/6/2017.
 */
angular.module('labApp').factory("pharmacyService",['$http',
    function($http){
        return{
            getbyID: id => $http.get('http://localhost:3000/users/' + id).then(response => response.data),
            get: ()=>$http.get('http://localhost:3000/users').then(response =>response.data),
            add: user=>$http.post('http://localhost:3000/users',user).then(response =>response.data),
            delete:id=>$http.delete('http://localhost:3000/users/'+id).then(response=>response.data)
        }
    }]);