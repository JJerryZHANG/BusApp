var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl',['$scope','$http',
	function($scope,$http){
		console.log("hello world");

		//"get" request to the server
		
		
		$http.get('/routes').success(
			function(response){
				console.log("i get the data i requested");
				$scope.route=response; 
				//get the response and give the value to "$scope.route"
			});
				
		var refresh=function(){
			$http.get('/routes').success(function(response){
				console.log("i get the data i requested");
				$scope.route=response;
				$scope.item="";
			});
		};

		$scope.remove=function(id){
			console.log(id);
			$http.delete('/delete/'+id).success(
					function(response){
						refresh();
					});
		};

		$scope.add=function(){
			console.log($scope.item);
			$http.post('/add',$scope.item).success(
			function(response){
				console.log(response);
				refresh();
				$scope.item="";
			});
		};

		$scope.edit=function(id){
			console.log(id);
			$http.get('/edit/'+id).success(function(response){
				$scope.item=response;
			});
		};

		$scope.update=function(){
			console.log($scope.item._id);
			$http.put('/update/'+$scope.item._id,$scope.item).success(function(response){
				refresh();
			});
		};

		$scope.time=function(route_id,time){
			console.log($scope.route_id);
			location.href=time+".html?route_id="+route_id+"&time="+time;
		}



	}]);

		
