angular.module("labApp").factory("SampleCenterService",["$http",function ($http) {
    return{
        get:()=>$http.get("http://localhost:3000/samplecenters").then(response=>response.data),
        add:(center)=>$http.post('http://localhost:3000/samplecenters',center).then(response=>response.data),
        getTypes:()=>$http.get('http://localhost:3000/sampleCenterTypes').then(response=>response.data),
        updateCenter:(center)=>$http.put('http://localhost:3000/samplecenters'+center._id,center).then(response=>response.data)
    }
}]);