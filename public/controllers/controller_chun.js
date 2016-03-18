var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/buslist_chun').success(function(response) {          
    console.log("I got the data I requested");
    $scope.buslist = response;                               
    $scope.bus = "";                                         
  });
};

refresh();

$scope.addBus = function() {                                  
  console.log($scope.bus);                                    
  $http.post('/buslist_add_chun', $scope.bus).success(function(response) {           
    console.log(response);
    refresh();
    $scope.bus="";
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/buslist_remove_chun/' + id).success(function(response) {           
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/buslist_edit_chun/' + id).success(function(response) {        
    $scope.bus = response;                                         
  });
};  

$scope.update = function() {
  console.log($scope.bus._id);
  $http.put('/buslist_update_chun/' + $scope.bus._id, $scope.bus).success(function(response) {
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