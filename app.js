(function() {
	'use strict'
	
	angular.module('myFirstApp', [])
	
	.controller('myFirstController', Greeting)
	
	function Greeting ($scope, $injector, $window){
		$scope.name = "Jorge";
		$scope.sayHello = function(){return "Hello "};
		$window.alert($injector.annotate(Greeting))
	};
	
	angular.module('SecondApp', [])
	.controller('SecondController', ExampleFunction)
	
	function ExampleFunction($scope, $filter){
		$scope.other = ""
		$filter('uppercase')
		$scope.surname = "Perez"
	};
}
)();