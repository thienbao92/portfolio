/**
* myApp.services Modul
*
* Description
*/
angular.module('myApp.services', [])

.factory('firebase', function($firebaseObject){
	var ref = new Firebase('https://baothien.firebaseio.com/data');

	var syncObject = $firebaseObject(ref);
	return syncObject
})