var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

var getroute_id=GetQueryString("route_id");
//var getend=GetQueryString("time");
var refresh = function() {
  $http.get('/buslist_campus/'+getroute_id).success(function(response) {          
    console.log("I got the data I requested");
    $scope.buslist = response;                               
    $scope.bus = "";                                         
  });
};

refresh();

$scope.addBus = function() {                                  
  console.log($scope.bus);                                    
  $http.post('/buslist_add_campus', $scope.bus).success(function(response) {           
    console.log(response);
    refresh();
    $scope.bus="";
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/buslist_remove_campus/' + id).success(function(response) {           
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/buslist_edit_campus/' + id).success(function(response) {        
    $scope.bus = response;                                         
  });
};  

$scope.update = function() {
  console.log($scope.bus._id);
  $http.put('/buslist_update_campus/' + $scope.bus._id, $scope.bus).success(function(response) {
    refresh();
  })
};

// $scope.update1 = function() {
//   console.log($scope.bus._id);
//   $http.put('/buslist1/' + $scope.bus._id, $scope.bus).success(function(response) {
//     refresh();
//   })
// };

$scope.deselect = function() {
  $scope.bus = "";
}

}]);﻿