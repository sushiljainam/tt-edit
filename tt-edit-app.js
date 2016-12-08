// Define the `ttEditApp` module
var ttEditApp = angular.module('ttEditApp', ['ngCookies']);

// Define the `bodyCntr` controller on the `ttEditApp` module
ttEditApp.controller('bodyCntr', ['$scope','$cookies', function inputTableCntr($scope, $cookies) {

  $scope.dayItems = [
  {"label":"Monday"},
  {"label":"Tuesday"},
  {"label":"Wednesday"},
  {"label":"Thursday"},
  {"label":"Friday"},
  {"label":"Saturday"}
  ];
  $scope.classesEachDay = [
  {"label":"I","startTime":"","endTime":""},
  {"label":"II","startTime":"","endTime":""},
  {"label":"III","startTime":"","endTime":""},
  {"label":"IV","startTime":"","endTime":""},
  {"label":"V","startTime":"","endTime":""}
  ]

  $scope.viewTable = $cookies.get('viewTable') ? (JSON.parse($cookies.get('viewTable')) === true ? true : false) : false;
  $scope.toggleViewTable = function () {
    // console.log('1',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);
    
    $cookies.put('viewTable',(!$scope.viewTable).toString());
    // console.log('2',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);

    $scope.viewTable = !$scope.viewTable;
    // console.log('3',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);

  }

}]);


