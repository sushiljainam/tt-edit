// Define the `inputListCntr` controller on the `ttEditApp` module
ttEditApp.controller('inputListCntr', function inputListCntr($scope) {
  
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

  $scope.userConfigs.batches = {
  "cs":{ "many" : [1,2,3,4]},
  "ee":{ "many" : [1,2,3,4,5,6]},
  "me":{ "many" : [1,2,3,4,5,6]},
  "ce":{ "many" : [1,2,3,4,5,6,7,8]}
  };

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