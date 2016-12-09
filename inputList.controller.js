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


  $scope.userConfigs.rows = [
    {"dur":"2","d":"Wednesday","b":{"2":true},"s":"sub3","t":"tea3","sem":"3","br":"ce","p":"III","r":"room3"}
    ,{"dur":"2","p":"II","d":"Friday","s":"sub1","r":"room1","t":"tea1","sem":"3","br":"ce"}
    ,{"dur":"3","p":"II","d":"Tuesday","b":{"1":true,"2":true},"s":"sub3","t":"tea3","r":"room1","sem":"3","br":"me"}
    ,{"dur":"2","d":"Wednesday","b":{"2":true},"s":"sub3","t":"tea3","sem":"3","br":"ce","p":"III","r":"room3"}
    ,{"dur":"2","p":"II","d":"Friday","s":"sub1","r":"room1","t":"tea1","sem":"3","br":"ce"}
    ,{"dur":"3","p":"II","d":"Tuesday","b":{"1":true,"2":true},"s":"sub3","t":"tea3","r":"room1","sem":"3","br":"me"}
    ,{"b":{"0":true,"1":true},"sem":"3","br":"me"}
    ,{"sem":"3","br":"cs"}
    ,{"b":{"2":true},"s":"sub2","sem":"2","br":"cs"}
    ,{"dur":"2","p":"III","b":{"3":true,"5":true,"7":true},"sem":"2","br":"ce","r":"room2","s":"sub3"}
    ,{"dur":"2","p":"III","b":{"2":true,"3":true,"5":true,"7":true},"sem":"2","br":"ce","r":"room2","s":"sub1","d":"Wednesday","t":"tea2"}
  ];


  $scope.rowInput = {};
  $scope.addRow = function (row,sem,br) {
    console.log(row,sem,br);
    var toPush = angular.copy(row) || {};
    toPush.sem = sem; toPush.br = br;
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
