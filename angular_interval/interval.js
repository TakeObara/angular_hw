angular.module("APP",[])
      .controller("theController",['$scope','$interval',function($scope,$interval){
        $scope.items=[];
        var i=0;
        var promise=$interval(function(){
          $scope.items.push(i++);
        },500);

        $scope.stop=function(){
          $interval.cancel(promise);
        };
      }]);