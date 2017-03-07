'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus'
 
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
.controller('SearchController',['$scope','$route',function($scope,$route){

	$scope.input='';//取文本框的输入
	$scope.search=function(){
		console.log($scope.input);
		$route.updateParams({category:'search',q:$scope.input});
	}

}])
;


