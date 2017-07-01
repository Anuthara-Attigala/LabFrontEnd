angular.module("labApp").factory("PatientManagementService",['$http',function ($http) {
    return{
        get:()=>$http.get('http://localhost:3000/patient').then(response=>response.data),
        add: patient=>$http.post('http://localhost:3000/patient',patient).then(response =>response.data)
        updatepatient:(patients)=>$http.put('http://localhost:3000/patient'+patient).then(response=>response.data)
    };
}]);