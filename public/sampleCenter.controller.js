angular.module("labApp").controller("SampleCenterController",["$scope","SampleCenterService",
    function($scope,SampleCenterService){
        function getSampleCenters() {
            SampleCenterService.get().then(sampleCenters=>{
                $scope.sampleCenters=sampleCenters;
            });
            //console.log($scope.sampleCenters);
        };
        getSampleCenters();
        $scope.add=(center)=>{
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
                $scope.sampleCenterTypeNames=types;

            });

        };
        getCenterTypes();
        $scope.updateCenter=(center)=>{
            SampleCenterService.updateCenter(center).then(()=>{
                getSampleCenters();
            });
        };
    }])