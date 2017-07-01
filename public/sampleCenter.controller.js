angular.module("labApp").controller("SampleCenterController",["$scope","$location","SampleCenterService",
    function($scope,$location,SampleCenterService){
        function getSampleCenters() {
            SampleCenterService.get().then(sampleCenters=>{
                $scope.sampleCenters=sampleCenters;
            });
            //console.log($scope.sampleCenters);
        };
        getSampleCenters();
        $scope.add=(name,center)=>{
            center.sampleCenterTypeName=name;
            console.log(name);
           SampleCenterService.add(center).then(()=>{
                getSampleCenters();
            });
        };
        $scope.setForm=(sampleCenter)=>{

            $scope.center=sampleCenter;
            $scope.center.sampleCenterTypeName=sampleCenter.sampleCenterTypeName;
        }
        function getCenterTypes() {
            SampleCenterService.getTypes().then(types=>{
                $scope.sampleCenterTypes=types;
                //console.log(types);
            });

        };
        getCenterTypes();
        $scope.updateCenter=(center)=>{
            SampleCenterService.updateCenter(center).then(()=>{
                getSampleCenters();
            });
        };

        $scope.logout=()=>
        {
            $location.path('/');
        };


    }])