angular.module('labApp').factory("DepartmentService",['$http',
    function($http){
        return{
            get: ()=>$http.get('http://localhost:3000/departments').then(response =>response.data),
            add: department=>$http.post('http://localhost:3000/departments',department).then(response =>response.data),
            delete:id=>$http.delete('http://localhost:3000/departments/'+id).then(response=>response.data)
        }
    }]);