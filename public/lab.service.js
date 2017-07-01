angular.module('labApp').factory("LabService",['$http',
    function($http){
        return{
            get: ()=>$http.get('http://localhost:3000/labs').then(response =>response.data),
            add: lab=>$http.post('http://localhost:3000/labs',lab).then(response =>response.data),
            getByDepartment:name=>$http.post('http://localhsot:3000/labs/'+name).then(response=>response.data),
            getDepartmentTypes:()=>$http.get('http://localhost:8081/labtypes').then(response=>response.data),
            getDepartments:()=>$http.get('http://localhost:3000/departments').then(response=>response.data)
        }
    }]);