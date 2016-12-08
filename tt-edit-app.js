// Define the `ttEditApp` module
var ttEditApp = angular.module('ttEditApp', []);

// Define the `bodyCntr` controller on the `ttEditApp` module
ttEditApp.controller('bodyCntr', function inputTableCntr($scope) {
  $scope.viewTable = false;
  $scope.toggleViewTable = function () {
    $scope.viewTable = !$scope.viewTable;
  }

});
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
  {"label":"Monday"},
  {"label":"Tuesday"},
  {"label":"Wednesday"},
  {"label":"Thursday"},
  {"label":"Friday"},
  {"label":"Satudayr"}
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

  
  $scope.userConfigs.rows = [{"p":"II","dur":"2","d":"Wednesday","s":"sub3","r":"room2","t":"tea1"}];


  $scope.rowInput = {};
  $scope.addRow = function (row) {
    var toPush = angular.copy(row);
    $scope.userConfigs.rows.push(toPush);
    $scope.resetRow();
  }
  $scope.copyRow = function (row) {
    var toPush = angular.copy(row);
    $scope.rowInput = toPush;
  }

  $scope.deleteRow = function(idx) {
    $scope.userConfigs.rows.splice(idx,1);
  }

   $scope.editRow = function(row,idx) {
    $scope.copyRow(row);
    $scope.deleteRow(idx);
  }

  $scope.resetRow = function () {
    $scope.rowInput = {};
  }

  $scope.isEmptyObj = function (obj) {
    return angular.equals(obj, {});
  }
});