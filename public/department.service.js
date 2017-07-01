angular.module('labApp').factory("DepartmentService",['$http',
    function($http){
        return{
            get: ()=>$http.get('/departments').then(response =>response.data),
            add: sampleCenterType=>$http.post('/departments',sampleCenterType).then(response =>response.data),
            delete:id=>$http.delete('/departments/'+id).then(response=>response.data)
        }
    }]);