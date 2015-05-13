/**
* myApp.controller Module
*
* Description
*/
angular.module('myApp.controller', [])

.controller('mainCtrl', function(){
	console.log("testing if everything is done")
})

.controller('homeCtrl', function(firebase,$scope){
	firebase.$bindTo($scope,"data");
})