angular.module('labApp').factory("SampleCenterTypeService",['$http',
    function($http){
        return{
            get: ()=>$http.get('http://localhost:3000/sampleCenterTypes').then(response =>response.data),
            add: sampleCenterType=>$http.post('http://localhost:3000/sampleCenterTypes',sampleCenterType).then(response =>response.data),
            delete:id=>$http.delete('http://localhost:3000/sampleCenterTypes/'+id).then(response=>response.data)
        }
    }]);