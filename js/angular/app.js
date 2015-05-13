/**
* myApp Modul
*
* Description
*/
angular.module('myApp', ['myApp.controller','myApp.services','ui.router','firebase'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	// Home state
	.state('home', {
		url:'/home',
		views: {
			'': {
				templateUrl:'templates/home.html'
			},
			'portfolio@home': {
				url:'/portfolio',
				templateUrl:'templates/portfolio.html',
				
			},
			'contact@home': {
			url:'/contact',	
				templateUrl:'templates/contact.html',
				
			},
			'about@home': {
			url:'/about',	
				templateUrl:'templates/about.html',
				
			}
			
		}
		
	})

	.state('home.modal', {
		url:'/modal',
		templateUrl: 'templates/modals.html'
	})

})