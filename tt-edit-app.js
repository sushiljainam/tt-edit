// Define the `ttEditApp` module
var ttEditApp = angular.module('ttEditApp', []);

// Define the `inputTableCntr` controller on the `ttEditApp` module
ttEditApp.controller('inputTableCntr', function inputTableCntr($scope) {
  $scope.dayItems = [
  {"label":"Mon"},
  {"label":"Tues"},
  {"label":"Wednes"},
  {"label":"Thurs"},
  {"label":"Fri"},
  {"label":"Satur"}
  ];
  $scope.classesEachDay = [
  {"label":"I","startTime":"","endTime":""},
  {"label":"I","startTime":"","endTime":""},
  {"label":"I","startTime":"","endTime":""},
  {"label":"I","startTime":"","endTime":""},
  {"label":"I","startTime":"","endTime":""}
  ]
});