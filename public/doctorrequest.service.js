angular.module("labApp").factory("DocRequestService",['$http',
    function($http){
        return{
            get:()=>$http.get("http://localhost:3000/doctorRequest").then(response=>response.data),
            adddoctorreq:(doctorRequest)=>$http.post("http://localhost:3000/doctorRequest",doctorRequest).then(response=>response.data),
            // getResult:(DoctorName,patientName,ReqDate)=>$http.get('/doctorRequest/'+ReqDate).then(response=>response.data)
            getLabTests:()=>$http.get('http://localhost:3000/labTests').then(response=>response.data)
        }
    }]);