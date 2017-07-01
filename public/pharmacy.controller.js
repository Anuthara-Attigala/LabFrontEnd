/**
 * Created by User on 5/6/2017.
 */
'use strict'

angular.module('labApp').controller('pharmacyController',['$scope','pharmacyService',
            function ($scope,pharmacyService) {

                function getUsers() {
                    pharmacyService.get().then(users=>{
                        $scope.users=users;
                    })
                }
                getUsers();

                $scope.addUser = (user)=>{
                    pharmacyService.add(user).then(()=>{
                        getUsers();
                        user={};
                    });
                };



                $scope.updateUser=(user)=>{
                    var id=user._id;
                    pharmacyService.update(id).then(()=>{
                        getUsers();
                    });
                };

                $scope.editUser=(user)=>{
                    $scope.user={};
                        var mdate1=user.mDate;
                        var mdate2=mdate1.split("T");
                        var edate1=user.eDate;
                        var edate2=edate1.split("T");

                        console.log(mdate2[0]);
                        console.log(edate2[0]);
                   $scope.user.drugID=user.drugID;
                   $scope.user.drugName=user.drugName;
                   $scope.user.quantity=user.quantity;
                   $scope.user.mDate=mdate2[0];
                   $scope.user.eDate=edate2[0];
                   $scope.user.supplierID=user.supplierID;


                };
                $scope.getUser=(user)=>{
                    var id=user.drugID;
                    console.log(id);
                    $scope.users={};
                    pharmacyService.getbyID(id).then(users=>{
                        $scope.users=users;
                    });
                };

                $scope.eUser=(user)=>{

                    console.log(dd);
                    pharmacyService.update(dd).then(()=>{
                        getUsers();
                    });
                };


                $scope.deleteUser=(user)=>{
                    var id=user._id;
                    pharmacyService.delete(id).then(()=>{
                        getUsers();
                    });
                };

                $scope.clearUser=(user)=> {
                    $scope.user = {};
                    //$scope.user.drugID="";
                }
            }]);