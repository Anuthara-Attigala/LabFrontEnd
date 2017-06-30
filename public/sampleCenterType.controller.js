angular.module("labApp").controller("SampleCenterTypeController",['$scope','SampleCenterTypeService',
    function($scope,SampleCenterTypeService){
        function getSampleCenterTypes(){
            SampleCenterTypeService.get().then(sampleCenterTypes =>{
                $scope.sampleCenterTypes=sampleCenterTypes;
            })
        }
        getSampleCenterTypes();
        $scope.addSampleCenterType=(sampleCenterType)=>{
            SampleCenterTypeService.add(sampleCenterType).then(()=>{
                getSampleCenterTypes();
                sampleCenterType.sampleCenterTypeName="";
            });
        };
        $scope.deleteSampleCenterType=(sampleCenterType)=>{
            var id=sampleCenterType._id;
            SampleCenterTypeService.delete(id).then(()=>{
                getSampleCenterTypes();
            })
        };
    }]);
