
var app = angular.module('myApp',[]);
app.controller(
'myController', 	
function($scope){
	$scope.numberbox1=2;
	$scope.numberbox2=3;
}
);
function myNum($x){
	$scope.numberbox1=x;
}