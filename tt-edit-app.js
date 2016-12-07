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


// Define the `inputListCntr` controller on the `ttEditApp` module
ttEditApp.controller('inputListCntr', function inputListCntr($scope) {
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

  $scope.userConfigs.teachers = [
  {"key":"tea1"},
  {"key":"tea2"},
  {"key":"tea3"},
  {"key":"tea4"},
  ];

  $scope.userConfigs.batches = [
  {"label":"cs", "many" : [1,2,3,4]},
  {"label":"ee", "many" : [1,2,3,4,5,6]},
  {"label":"ce", "many" : [1,2,3,4,5,6,7,8]}
  ];

  $scope.userConfigs.t = {};
  $scope.userConfigs.t.btc = 0;

  
  $scope.userConfigs.rows = [];

  $scope.addRow = function (row) {
    var toPush = angular.copy(row);
    $scope.userConfigs.rows.push(toPush);
    $scope.rowInput = null;
  }

});