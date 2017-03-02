(function(){
	'use strict';

	
	// 创建正在热映模块
	var module= angular.module('moviecat.in_theaters', ['ngRoute','moviecat.services.http']);

	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html?v='+Math.random(),
	    controller: 'InTheatersController'
	  });
	}])

	module.controller('InTheatersController', ['$scope','HttpService',function($scope,HttpService) {

                //控制器 分为两步： 1设计暴露数据 2设计暴露行为
                $scope.loading=true; //开始加载
                $scope.subjects=[];
                $scope.message='';
                $scope.totalCount=0;
                
                //该匿名函数需要挂载在全局作用域，才能被调用
                HttpService.jsonp('http://api.douban.com//v2/movie/in_theaters',{},function(data){
                        console.log(data);
                        $scope.subjects=data.subjects;
                        $scope.totalCount=data.total;
                        $scope.loading=false;
                        // $apply的作用就是让指定的表达式重新同步
                        $scope.$apply();
                        
                });

        


	}]);

})(angular);

// var doubanApiAddress='http://api.douban.com/v2/movie/in_theaters';
        // //测试$http服务
        // //在Angular中使用JSONP的方式做跨域请求
        // //必须给当前地址加上一个参数 callback=JSON_CALLBACK,实际请求地址angular会将JSON_CALLBACK替换http://api.douban.com/v2/movie/in_theaters?callback=angular.callbacks._0，但是豆瓣api不知callback=angular.callbacks._0,的函数名
        // $http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK').then(function(res){
        //     //此处代码是异步请求完成之后才执行(需要等一段时间)
        //     if(res.status==200){
        //         $scope.subjects=res.data.subjects;
        //     }else{
        //         $scope.message='获取数据失败:'+res.statusText;
        //     }
        // },function(err){
        //     console.log(err);
        //     $scope.message='获取数据失败:'+err.statusText;
        // });