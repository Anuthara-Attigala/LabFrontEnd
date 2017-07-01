angular.module("labApp").factory("PatientService",['$http',function ($http) {
    return{
        get:()=>$http.get('http://localhost:3000/patient').then(response=>response.data),
        deletepatient:id=>$http.delete('http://localhost:3000/patient/'+id).then(response=>response.data),
        updatepatient:id=>$http.put('http://localhost:3000/patient/',+id).then(response=>response.data)
        // getLabTests:()=>$http.get('/labTests').then(response=>response.data)
    };
}]);