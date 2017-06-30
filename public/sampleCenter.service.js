angular.module("labApp").factory("SampleCenterService",["$http",function ($http) {
    return{
        get:()=>$http.get("/samplecenters").then(response=>response.data),
        add:(center)=>$http.post('/samplecenters',center).then(response=>response.data),
        getTypes:()=>$http.get('/sampleCenterTypes').then(response=>response.data),
        updateCenter:(center)=>$http.put('/samplecenters'+center._id,center).then(response=>response.data)
    }
}]);