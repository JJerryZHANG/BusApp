var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl',['$scope','$http',
	function($scope,$http){
	console.log("appCtrl can be used now");	
		$scope.login=function(user,pwd){
			$http.get('/login/'+user+'/'+pwd).success(
				console.log("requet to login");
					function(response){
						console.log("get the response" + response);
						if(JSON.stringify(response)=="[]"){
							alert("Login Failed!");
						}else{
							location.href="route_admin.html";
						}
					});
		};


		$scope.give=function(start,end){
				if ( start==end) {alert("the end stop can not equal to the start stop!");}
				else
					{
						console.log("send the value of start and end to route_user.html successful");
						location.href="route_user.html?start="+start+"&end="+end;
					}
		};


		$scope.search=function(start,end){
			//location.href="route_user.html";
			console.log(start);
			console.log(end);
		
			$http.get('/search/'+start+'/'+end).success(
				function (response){
					console.log("i get the routes i requested");	
					$scope.route=response;
		
				});
		};
		
	}]);

		
