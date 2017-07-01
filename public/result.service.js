angular.module("labApp").factory("ResultService",['$http',function ($http) {
    return{
        create:(result)=>$http.post('http://localhost:3000/results',result).then(response=>response.data),
        findOne:(requestId)=>$http.get("http://localhost:3000/results/"+requestId+"/request/").then(response=>response.data),
        findTest:(testname)=>$http.get('http://localhost:3000/labTests/'+testname+"/testname").then(response=>response.data),
        updateResult:(id,result)=>$http.put('http://localhost:3000/results/'+id,result).then(response=>response.data),


        getById:id=>$http.get('/requests/'+id).then(response=>response.data),
        update:request=>$http.put('/requests/'+request._id,request).then(response=>response.data)
    }
}]);