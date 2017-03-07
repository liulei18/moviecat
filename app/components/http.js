
'use strict';

(function(angular){
	//由于默认angular提供的异步请求对象不支持自定义回调函数名
	//angular随机分配的回调函数名不被豆瓣支持
	var http= angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$window','$document',function($window,$document){
		//url :http://api.douban.com/aaa -->script -->html自动执行
		this.jsonp =function(url,data,callback){

			
			// 2 将data转换为url字符串的形式
			// {id:1,name:'zhangsan'} id=1&name='zhangsan'
			var querystring= url.indexOf('?')==-1?'?':'&';
			for(var key in data){
				querystring+=key+'='+data[key]+'&';
			}

			// 1 挂载回调函数
			var fnSuffix=Math.random().toString().replace('.','');
			var cbFuncName='my_json_cb_'+fnSuffix;
			//不推荐
			

			// 3 处理url中的回调参数
			// url+=callback=函数名
			
			querystring+='callback='+cbFuncName;
			// 4 创建一个script标签
			var scriptElement=$document[0].createElement('script');
			scriptElement.src=url+querystring;
			// 注意此时还不能将其append页面上

			//不推荐
			$window[cbFuncName]=function(data){
				callback(data);
				$document[0].body.removeChild(scriptElement);
			};
			
			// 5 将script标签放到页面中
			$document[0].body.appendChild(scriptElement);
			// append过后页面会自动对这个地址发送请求，请求完成后自动执行

		};

	}]);
})(angular);