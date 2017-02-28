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

	module.controller('InTheatersController', ['$scope','$http',function($scope,$http) {

		//控制器 分为两步： 1设计暴露数据 2设计暴露行为
		$scope.subjects=[];
        $scope.message='';
        //测试$http服务
        $http.get('/app/data1.json').then(function(res){
            //此处代码是异步请求完成之后才执行(需要等一段时间)
            if(res.status==200){
                $scope.subjects=res.data.subjects;
            }else{
                $scope.message='获取数据失败';
            }
        },function(err){
            console.log(err);
            $scope.message='获取数据失败';
        });
	}]);

})(angular);