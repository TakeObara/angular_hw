angular.module('fadeInOut', [])
  .controller('fadeInOutController', ['$scope',function($scope){
  	$scope.textBox="3";

    $scope.$watch("textBox",function(){
      var loop=0;
      $scope.hogeArray=[];
      loop=parseInt($scope.textBox,10);
      for(var i=0;i<loop;i++){
        $scope.hogeArray.push(i);
      }
    });
}]);