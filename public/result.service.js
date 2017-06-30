angular.module("labApp").factory("ResultService",['$http',function ($http) {
    return{
        create:(result)=>$http.post('http://localhost:3000/results',result).then(response=>response.data),
        findOne:(testname,patientname)=>$http.get("http://localhost:3000/results/"+testname+"/patient/"+patientname).then(response=>response.data),
        findTest:(testname)=>$http.get('http://localhost:3000/labTests/'+testname+"/testname").then(response=>response.data),
        updateResult:(id,result)=>$http.put('http://localhost:3000/results/'+id,result).then(response=>response.data)
    }
}]);