angular.module("labApp").factory("ResultService",['$http',function ($http) {
    return{
        create:(result)=>$http.post('/results',result).then(response=>response.data),
        findOne:(testname,patientname)=>$http.get("/results/"+testname+"/patient/"+patientname).then(response=>response.data),
        findTest:(testname)=>$http.get('/labTests/'+testname+"/testname").then(response=>response.data),
        updateResult:(id,result)=>$http.put('/results/'+id,result).then(response=>response.data)
    }
}])