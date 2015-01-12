var demoApp = angular.module('demoApp', ["timer", "ngRoute"]);

demoApp.config(['$routeProvider', function($routeProvider){
	
	$routeProvider.when('/', {
		
		templateUrl:'form.html',
		controller:'demoInputs'
	
	}).when('/demoTime', {
		
		templateUrl:'timer.html',
		controller:'demoTime'
	
	});

}]);

///////
demoApp.controller('demoInputs', ['$scope','$rootScope','$location' ,function($scope, $rootScope, $location){
	$scope.submit = function() {
        if ($scope.hours || $scope.minutes || $scope.seconds) {
          var hoursInSeconds = this.hours * 3600;
          var minutesInSeconds = this.minutes * 60;
          var seconds = $scope.seconds;

          var fullTime = hoursInSeconds + minutesInSeconds + seconds;
          $rootScope.fullTime = fullTime;
          fullTime = 0;
          $location.path('/demoTime');
    	}
    };
}]);

demoApp.controller('demoTime', ['$scope','$rootScope' ,function($scope, $rootScope){
	console.log($rootScope.fullTime);

}]);

