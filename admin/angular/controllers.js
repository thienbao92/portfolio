/**
* admin.controller Module
*
* Description
*/
angular.module('admin.controller', [])

.controller('mainCtrl', function($scope, $firebaseArray){
var ref = new Firebase('https://baothien.firebaseio.com/data');

$scope.data = $firebaseArray(ref);
$scope.newText = {};
console.log($scope.data);

$scope.addData = function() {
	$scope.data.$add({
		text: $scope.newText
	})
}// end addData function
	

})