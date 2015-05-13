/**
* admin.services Module
*
* Description
*/
angular.module('admin.services', [])

.factory('firebaseRef', function(){
		var ref = new Firebase("https://sizzling-fire-8639.firebaseio.com/data");
	return ref
})