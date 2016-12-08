// Define the `ttEditApp` module
var ttEditApp = angular.module('ttEditApp', ['ngCookies']);

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

	//code for routing with path or search or hash
	$scope.urlToData = function () {
		var decision = $location.hash() ? 2 : 1; console.log($location.hash(),$location.path(),$location.search());
		switch(decision){
			case 2:
			var arr = $location.hash().split('/');
			console.log(arr);
			break;
			
			default:
			var arr = $location.path().split('/'); //$location.search().split('/')
			console.log(arr);
			arr.splice(0,1);
			console.log(arr);
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

	
	//code for save and saving
	$scope.savingPost = false;
	$scope.savePost = function(){
		$scope.savingPost = true;
		$http.post('http://52.76.114.10:3001/getuseractivitylist', {"currentpage":2,"pagelimit":220})
			.success(function(res){
				//console.log('getUseractivityCategory', JSON.stringify(res));
				if(res.rTL){
					alert('Session Expired');
						$scope.savingPost = false;

				} else {
				console.log(res);
					$scope.savingPost = false;

				}
			}).error(function(err){
				console.log(err);
					$scope.savingPost = false;

			})
		console.log('saving data');
	}

	$scope.showBtc = function(b) {
		if (b) {
			var str = '';
			if (b['0']==true) { str+='1,'};
			if (b['1']==true) { str+='2,'};
			if (b['2']==true) { str+='3,'};
			if (b['3']==true) { str+='4,'};
			str = str.slice(0, - 1);
			return str;
		} else {
			return 'All';
		}
	}

	$scope.urlToData();
}]);


