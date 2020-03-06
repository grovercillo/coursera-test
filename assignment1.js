(function(){
	'use strict'
	
	angular.module("DataApp", [])
	
	.controller("DataController", DataController);
	
	DataController.$inject = ['$scope','$filter','$window'];
	
	function DataController($scope, $filter, $window){
		$scope.message = "";
		$scope.countNames = 0;
		$scope.listLunch = "";
		$scope.names = [];
		
		$scope.analyzeList = function (){
			if ($scope.listLunch == "") {
				$scope.countNames = 0
			} 
			else {
				$scope.names = $scope.listLunch.split(",");
				$scope.countNames = 0;
				
				for (i=0; i<$scope.names.length; i++){
					if ($scope.names[i].trim() != "") $scope.countNames++;
				}
			}
			
			if ($scope.countNames == 0) { 
				$scope.message = "Please enter data first";
			}
			else if ($scope.countNames <= 3){
				$scope.message = "Enjoy!";
			}
			else {
				$scope.message = "Too much!";
			}
		};	
	};
	
	
	
})();