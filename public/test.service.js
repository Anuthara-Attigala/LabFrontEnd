/**
 * Created by User on 6/30/2017.
 */
angular.module('labApp').factory('testService',['$http',
    function ($http) {
        return{
            get:()=>$http.get('/requests').then(response=>response.data),
            update:request=>$http.put('/requests/'+request._id,request).then(response=>response.data),

                getById:id=>$http.get('/requests/'+id).then(response=>response.data),


            add:detail=>$http.post('/addDetails',detail).then(response=>response.data),
            getLocation:()=>$http.get('/samplecenters').then(response=>response.data)
            //       add:request=>$http.post('/requests',request).then(response=>response.data),
            //  update :(id,request)=>$http.put('/requests/'+id,request).then(response=>response.data)
            // update:request=>$http.put('/requests/'+request._id,request.action,request.status).then(response=>response.data)

            //  update:request=>$http.put('/requests/'+request._id,request).then(response=>response.data)
        }

    }]);
