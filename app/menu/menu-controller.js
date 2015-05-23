dtApp.controller('dtController-Menu', ['$scope', function($scope) {

	$scope.tools = [
		{
			url: 'chartbuilder',
			name: 'Chartbuilder',
			icon: 'img/icons/chartbuilder.jpg'
		},
		{
			url: 'fusiontables',
			name: 'Google Fusion Tables',
			icon: 'img/icons/fusiontables.png'
		},
		{
			url: 'mapsengine',
			name: 'Google Maps Engine',
			icon: 'img/icons/mapsengine.png'
		},
		{
			url: 'thinglink',
			name: 'ThingLink',
			icon: 'img/icons/thinglink.png'
		},
		{
			url: 'timelinejs',
			name: 'Timeline JS',
			icon: 'img/icons/timelinejs.png'
		}
	]

}]);