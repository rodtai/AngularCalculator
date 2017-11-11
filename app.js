
var app = angular.module('myApp',[]);
app.controller(
'myController', 	
function($scope){
	$scope.numberbox = "";
	$scope.num = [["9","8","7"],["6","5","4"],["3","2","1"],["0",".","(-)"]];
	$scope.concatNum= function(val){
		$scope.numberbox += val;
	};
}
);
