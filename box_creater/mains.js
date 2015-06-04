angular.module('fadeInOut', [])
  .controller('fadeInOutController', [ '$scope',function($scope){
  	$scope.textBox="3";
  	$scope.loop=[{hoge:1}];

  	$scope.playButton=function(){
  		console.log("good");
  		$scope.loop=[];
  		parseInt($scope.textBox,10);
  		for(var i=0;i<$scope.textBox;i++){
  			$scope.loop.push(i);
  		}
  	};
}]);