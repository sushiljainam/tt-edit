// Define the `ttEditApp` module
var ttEditApp = angular.module('ttEditApp', ['ngCookies','ngAnimate']);

// Define the `bodyCntr` controller on the `ttEditApp` module
ttEditApp.controller('bodyCntr', ['$scope','$http','$cookies','$location', function inputTableCntr($scope, $http, $cookies, $location) {

	$scope.dayItems = [
	{"label":"Monday"},
	{"label":"Tuesday"},
	{"label":"Wednesday"},
	{"label":"Thursday"},
	{"label":"Friday"},
	{"label":"Saturday"}
	];
	$scope.classesEachDay = [
	{"value":1, "label":"I","startTime":"","endTime":""},
	{"value":2, "label":"II","startTime":"","endTime":""},
	{"value":3, "label":"III","startTime":"","endTime":""},
	{"value":4, "label":"IV","startTime":"","endTime":""},
	{"value":5, "label":"V","startTime":"","endTime":""}
	]

	$scope.viewTable = $cookies.get('viewTable') ? (JSON.parse($cookies.get('viewTable')) === true ? true : false) : false;
	$scope.toggleViewTable = function () {
		// console.log('1',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);

		$cookies.put('viewTable',(!$scope.viewTable).toString());
		// console.log('2',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);

		$scope.viewTable = !$scope.viewTable;
		// console.log('3',$cookies.get('viewTable'),typeof $scope.viewTable, $scope.viewTable);

	}

	//code for routing with path or search or hash
	$scope.urlToData = function () {
		var decision = $location.hash() ? 2 : 1; //console.log($location.hash(),$location.path(),$location.search());
		switch(decision){
			case 2:
			var arr = $location.hash().split('/');
			// console.log(arr);
			break;

			default:
			var arr = $location.path().split('/'); //$location.search().split('/')
			// console.log(arr);
			arr.splice(0,1);
			// console.log(arr);
			break;

		}
			var input1 = arr[0];
			var input2 = arr[1];
		console.log('input1,input2',input1,input2);

		var reg = new RegExp('^[0-9]+$');
		if (reg.test(input2)) {var semCh = input2; var brCh = input1;};
		// console.log('sem,br',semCh,brCh);
		if (reg.test(input1)) {var semCh = input1; var brCh = input2;};
		// console.log('sem,br',semCh,brCh);

		if (!(semCh && brCh)) {var brCh = input1;};
		console.log('sem,br',semCh,brCh);

		$scope.semCh = semCh; $scope.brCh = brCh;
		if(reg.test($scope.brCh)) $scope.brCh = undefined;

		$scope.conf = {};
		$scope.conf.semCh = angular.copy($scope.semCh);
		$scope.conf.brCh = angular.copy($scope.brCh);
	}

	//end


	$scope.changeLoc = function () {
		console.log('in loc');
		$location.path('/'+ $scope.conf.semCh+'/'+ $scope.conf.brCh);
		$scope.urlToData();
	}

	//code for noFilters
	$scope.noFilters = false;
	$scope.toggleNoFilters = function () {
		$scope.noFilters = !$scope.noFilters;
	}
	//code for save and saving
	$scope.savingPost = false;
	$scope.savePost = function(toSave){
		$scope.savingPost = true;
		$http({
			method: 'POST',	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			url: 'http://localhost/test/tt-save/',
			data: toSave,
		})
			.success(function(res){
				// console.log('test/tt-save', JSON.stringify(res));
				if(res.rTL){
					alert('errorr');
					$scope.savingPost = false;

				} else {
					console.log(res);
					alert('Saved');
					$scope.savingPost = false;

				}
			}).error(function(err){
				console.log(err);
				$scope.savingPost = false;

			})
		console.log('saving data');
	}

	$scope.showBtc = function(b,br,sem) {
		var str = sem;
		if (b) {
			//if no key is true then do nothing here
			var atLeastOneTrue = false;
			for(var key in b){
				if(b[key] == true){
					atLeastOneTrue = true;
					break;
				}
			}
			if (atLeastOneTrue == true) {
				str += '(';
				for (var key in b) {
					if (b[key]==true) { str+= br+(JSON.parse(key)+1)+',' };
				}
				str = str.slice(0, - 1);
				str += ')';
				return str;
			}
		} {
			str += br;
			return str;
		}
	}

	//number to array for ng-repeat: 4 -> [1,2,3,4]
	$scope.numberToArray = function(num){
		var arr = [];
		//i must start with 1 and end to num
		for (var i = 1; i <= num; i++) {arr.push(i);};
		return arr;
	}

	$scope.urlToData();
}]);
