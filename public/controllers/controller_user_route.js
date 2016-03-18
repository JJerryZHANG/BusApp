var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl',['$scope','$http',
	function($scope,$http){
		
		function GetQueryString(name)
		{
     		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     		var r = window.location.search.substr(1).match(reg);
     		if(r!=null)return  unescape(r[2]); return null;
		}
		

		console.log(GetQueryString("start"));
		console.log(GetQueryString("end"));
		var getstart=GetQueryString("start");
		var getend=GetQueryString("end");


		$http.get('/search/'+getstart+'/'+getend).success(
				function (response){
					console.log("i get the routes i requested");
					$scope.route=response;
				});

	}]);