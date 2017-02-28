(function(){
	'use strict';

	// 创建正在热映模块
	var module= angular.module('moviecat.in_theaters', ['ngRoute']);

	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html?v='+Math.random(),
	    controller: 'InTheatersController'
	  });
	}])

	module.controller('InTheatersController', ['$scope',function($scope) {

	}]);

})(angular);