
'use strict';

(function(angular){
	//由于默认angular提供的异步请求对象不支持自定义回调函数名
	//angular随机分配的回调函数名不被豆瓣支持
	var http= angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$document',function($document){
		//url :http://api.douban.com/aaa -->script -->html自动执行
		this.jsonp =function(url,callback){
			// 1 处理url中的回调参数
			// 2 创建一个script标签
			// 3 挂载回调函数
			// 4 将script标签放到页面中
		}
	}]);
})(angular);