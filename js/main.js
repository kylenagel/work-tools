var dtApp = angular.module('dtApp', ['ngRoute']);

dtApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/home-partial.html',
			controller: 'dtController-Home'
		})
		.when('/chartbuilder', {
			templateUrl: 'app/chartbuilder/chartbuilder-partial.html',
			controller: 'dtController-Chartbuilder'
		})
		.when('/fusiontables', {
			templateUrl: 'app/fusiontables/fusiontables-partial.html',
			controller: 'dtController-FusionTables'
		})
		.when('/mapsengine', {
			templateUrl: 'app/mapsengine/mapsengine-partial.html',
			controller: 'dtController-MapsEngine'
		})
		.when('/thinglink', {
			templateUrl: 'app/thinglink/thinglink-partial.html',
			controller: 'dtController-Thinglink'
		})
		.when('/timelinejs', {
			templateUrl: 'app/timelinejs/timelinejs-partial.html',
			controller: 'dtController-TimelineJS'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

}]);