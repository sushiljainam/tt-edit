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
  "CS":{ "many" : 4},
  "EE":{ "many" : 6},
  "ME":{ "many" : 6},
  "CE":{ "many" : 8}
  };

  $scope.userConfigs.t = {};
  $scope.userConfigs.t.btc = 0;


  $scope.userConfigs.rows = [{"dur":"1","p":"5","d":"Monday","s":"IR","t":"RKB","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"6","d":"Monday","s":"DIP","t":"GF4","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"2","p":"8","d":"Monday","s":"PROJ LAB","t":["DS","GF4"],"r":"PG LAB","sem":"4","br":"IT","b":{"0":true,"1":true}},{"dur":"1","p":"5","d":"Tuesday","s":"DIP","t":"GF4","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"6","d":"Tuesday","s":"S\/W TEST","t":"GF6","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"3","p":"8","d":"Tuesday","s":"S\/W LAB","t":"DS","r":"A219","sem":"4","br":"IT","b":{"0":true}},{"dur":"2","p":"3","d":"Wednesday","s":"DIP LAB","t":"DS","r":"A219","sem":"4","br":"IT","b":{"0":true}},{"dur":"2","p":"3","d":"Wednesday","s":"DIP LAB","t":"GF4","r":"A219","sem":"4","br":"IT","b":{"1":true}},{"dur":"1","p":"5","d":"Wednesday","s":"DCT","t":"DS","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"2","p":"8","d":"Wednesday","s":"SEMINAR","t":["CPG","GF3"],"r":"PG LAB","sem":"4","br":"IT","b":{"0":true,"1":true}},{"dur":"1","p":"3","d":"Thursday","s":"DIP","t":"GF4","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"4","d":"Thursday","s":"S\/W TEST","t":"GF6","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"2","p":"5","d":"Thursday","s":"MAD LAB","t":"CPG","r":"A219","sem":"4","br":"IT","b":{"0":true}},{"dur":"2","p":"5","d":"Thursday","s":"AWP LAB","t":"GF8","r":"A219","sem":"4","br":"IT","b":{"1":true}},{"dur":"3","p":"8","d":"Thursday","s":"S\/W LAB","t":"GF6","r":"A219","sem":"4","br":"IT","b":{"1":true}},{"dur":"1","p":"3","d":"Friday","s":"IR","t":"RKB","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"4","d":"Friday","s":"DCT","t":"DS","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"2","p":"5","d":"Friday","s":"AWP LAB","t":"RKB","r":"A219","sem":"4","br":"IT","b":{"0":true}},{"dur":"2","p":"5","d":"Friday","s":"MAD LAB","t":"GF3","r":"A219","sem":"4","br":"IT","b":{"1":true}},{"dur":"1","p":"3","d":"Saturday","s":"IR","t":"RKB","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"4","d":"Saturday","s":"DCT","t":"DS","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"5","d":"Saturday","s":"S\/W TEST","t":"GF6","r":"B203","sem":"4","br":"IT","b":{}},{"dur":"1","p":"3","d":"Monday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"1","p":"4","d":"Monday","s":"DIP","t":"GF3","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"2","p":"5","d":"Monday","s":"PROJ LAB","t":["SCJ","GF8"],"r":"PG LAB","sem":"4","br":"CS","b":{"2":true,"3":true}},{"dur":"3","p":"8","d":"Monday","s":"FPGA LAB","t":"GF2","r":"CSC","sem":"4","br":"CS","b":{"0":true}},{"dur":"3","p":"8","d":"Monday","s":"UNIX LAB","t":"CPG","r":"A219","sem":"4","br":"CS","b":{"1":true}},{"dur":"1","p":"3","d":"Tuesday","s":"RTS","t":"NS","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"1","p":"4","d":"Tuesday","s":"DS","t":"DS","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"1","p":"5","d":"Tuesday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"2","p":"8","d":"Tuesday","s":"SEMINAR","t":["NS","GF9"],"r":"PG LAB","sem":"4","br":"CS","b":{"0":true,"1":true}},{"dur":"3","p":"8","d":"Tuesday","s":"UNIX LAB","t":"GF3","r":"A219","sem":"4","br":"CS","b":{"3":true}},{"dur":"3","p":"8","d":"Tuesday","s":"FPGA LAB","t":"GF4","r":"CSC","sem":"4","br":"CS","b":{"2":true}},{"dur":"1","p":"3","d":"Wednesday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"1","p":"4","d":"Wednesday","s":"DIP","t":"GF3","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"1","p":"5","d":"Wednesday","s":"RTS","t":"NS","r":"A221","sem":"4","br":"CS","b":{}},{"dur":"3","p":"8","d":"Wednesday","s":"UNIX LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"2":true}},{"dur":"2","p":"3","d":"Thursday","s":"DIP LAB","t":"GF3","r":"A219","sem":"4","br":"CS","b":{"2":true}},{"dur":"2","p":"3","d":"Thursday","s":"DIP LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"3":true}},{"dur":"1","p":"5","d":"Thursday","s":"DS","t":"DS","r":"C202","sem":"4","br":"CS","b":{}},{"dur":"3","p":"8","d":"Thursday","s":"FPGA LAB","t":"GF4","r":"CSC","sem":"4","br":"CS","b":{"1":true}},{"dur":"3","p":"8","d":"Thursday","s":"UNIX LAB","t":"DS","r":"A219","sem":"4","br":"CS","b":{"0":true}},{"dur":"2","p":"3","d":"Friday","s":"DIP LAB","t":"CPG","r":"A219","sem":"4","br":"CS","b":{"0":true}},{"dur":"2","p":"3","d":"Friday","s":"DIP LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"1":true}},{"dur":"1","p":"5","d":"Friday","s":"DS","t":"DS","r":"C202","sem":"4","br":"CS","b":{}},{"dur":"2","p":"8","d":"Friday","s":"PROJ LAB","t":["RSS","GF6"],"r":"PG LAB","sem":"4","br":"CS","b":{"0":true,"1":true}},{"dur":"3","p":"8","d":"Friday","s":"FPGA LAB","t":"SCJ","r":"CSC","sem":"4","br":"CS","b":{"3":true}},{"dur":"1","p":"3","d":"Saturday","s":"RTS","t":"NS","r":"C202","sem":"4","br":"CS","b":{}},{"dur":"1","p":"4","d":"Saturday","s":"DIP","t":"GF3","r":"C202","sem":"4","br":"CS","b":{}},{"dur":"2","p":"5","d":"Saturday","s":"SEMINAR","t":["RKB","GF2"],"r":"PG LAB","sem":"4","br":"CS","b":{"2":true,"3":true}}
    // {"dur":"2","d":"Wednesday","b":{"2":true},"s":"sub3","t":"tea3","sem":"3","br":"CE","p":"III","r":"room3"}
    // ,{"dur":"2","p":"II","d":"Friday","s":"sub1","r":"room1","t":"tea1","sem":"3","br":"CE"}
    // ,{"dur":"3","p":"II","d":"Tuesday","b":{"1":true,"2":true},"s":"sub3","t":"tea3","r":"room1","sem":"3","br":"ME"}
    // ,{"dur":"2","d":"Wednesday","b":{"2":true},"s":"sub3","t":"tea3","sem":"3","br":"CE","p":"III","r":"room3"}
    // ,{"dur":"2","p":"II","d":"Friday","s":"sub1","r":"room1","t":"tea1","sem":"3","br":"CE"}
    // ,{"dur":"3","p":"II","d":"Tuesday","b":{"1":true,"2":true},"s":"sub3","t":"tea3","r":"room1","sem":"3","br":"ME"}
    // ,{"b":{"0":true,"1":true},"sem":"3","br":"ME"}
    // ,{"sem":"3","br":"CS"}
    // ,{"b":{"2":true},"s":"sub2","sem":"2","br":"CS"}
    // ,{"dur":"2","p":"III","b":{"3":true,"5":true,"7":true},"sem":"2","br":"CE","r":"room2","s":"sub3"}
    // ,{"dur":"2","p":"III","b":{"2":true,"3":true,"5":true,"7":true},"sem":"2","br":"CE","r":"room2","s":"sub1","d":"Wednesday","t":"tea2"}
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
