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
  {"label":"II","startTime":"","endTime":""},
  {"label":"III","startTime":"","endTime":""},
  {"label":"IV","startTime":"","endTime":""},
  {"label":"V","startTime":"","endTime":""}
  ]

  $scope.userConfigs = {};
  $scope.userConfigs.subjects = [
  {"key":"sub1"},
  {"key":"sub2"},
  {"key":"sub3"},
  {"key":"sub4"},
  {"key":"sub5"},
  {"key":"sub6"}
  ];

  $scope.userConfigs.rooms = [
  {"key":"room1"},
  {"key":"room2"},
  {"key":"room3"},
  {"key":"room4"},
  ];


});