/*
* @Author: Sushil Jain
* @Date:   2017-02-06 18:42:23
* @Last Modified by:   csnodejs4
* @Last Modified time: 2017-02-06 19:52:06
*/

'use strict';

var data = {};
data.input = [
	{"dur":"1","p":"3","d":"Monday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"4","d":"Monday","s":"DIP","t":"GF3","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"2","p":"5","d":"Monday","s":"PROJ LAB","t":["SCJ","GF8"],"r":"PG LAB","sem":"4","br":"CS","b":{"2":true,"3":true}},
	{"dur":"3","p":"8","d":"Monday","s":"FPGA LAB","t":"GF2","r":"CSC","sem":"4","br":"CS","b":{"0":true}},
	{"dur":"3","p":"8","d":"Monday","s":"UNIX LAB","t":"CPG","r":"A219","sem":"4","br":"CS","b":{"1":true}},
	{"dur":"1","p":"3","d":"Tuesday","s":"RTS","t":"NS","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"4","d":"Tuesday","s":"DS","t":"DS","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"5","d":"Tuesday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"2","p":"8","d":"Tuesday","s":"SEMINAR","t":["NS","GF9"],"r":"PG LAB","sem":"4","br":"CS","b":{"0":true,"1":true}},
	{"dur":"3","p":"8","d":"Tuesday","s":"UNIX LAB","t":"GF3","r":"A219","sem":"4","br":"CS","b":{"3":true}},
	{"dur":"3","p":"8","d":"Tuesday","s":"FPGA LAB","t":"GF4","r":"CSC","sem":"4","br":"CS","b":{"2":true}},
	{"dur":"1","p":"3","d":"Wednesday","s":"MC","t":"CPG","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"4","d":"Wednesday","s":"DIP","t":"GF3","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"5","d":"Wednesday","s":"RTS","t":"NS","r":"A221","sem":"4","br":"CS","b":{}},
	{"dur":"3","p":"8","d":"Wednesday","s":"UNIX LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"2":true}},
	{"dur":"2","p":"3","d":"Thursday","s":"DIP LAB","t":"GF3","r":"A219","sem":"4","br":"CS","b":{"2":true}},
	{"dur":"2","p":"3","d":"Thursday","s":"DIP LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"3":true}},
	{"dur":"1","p":"5","d":"Thursday","s":"DS","t":"DS","r":"C202","sem":"4","br":"CS","b":{}},
	{"dur":"3","p":"8","d":"Thursday","s":"FPGA LAB","t":"GF4","r":"CSC","sem":"4","br":"CS","b":{"1":true}},
	{"dur":"3","p":"8","d":"Thursday","s":"UNIX LAB","t":"DS","r":"A219","sem":"4","br":"CS","b":{"0":true}},
	{"dur":"2","p":"3","d":"Friday","s":"DIP LAB","t":"CPG","r":"A219","sem":"4","br":"CS","b":{"0":true}},
	{"dur":"2","p":"3","d":"Friday","s":"DIP LAB","t":"GF7","r":"A219","sem":"4","br":"CS","b":{"1":true}},
	{"dur":"1","p":"5","d":"Friday","s":"DS","t":"DS","r":"C202","sem":"4","br":"CS","b":{}},
	{"dur":"2","p":"8","d":"Friday","s":"PROJ LAB","t":["RSS","GF6"],"r":"PG LAB","sem":"4","br":"CS","b":{"0":true,"1":true}},
	{"dur":"3","p":"8","d":"Friday","s":"FPGA LAB","t":"SCJ","r":"CSC","sem":"4","br":"CS","b":{"3":true}},
	{"dur":"1","p":"3","d":"Saturday","s":"RTS","t":"NS","r":"C202","sem":"4","br":"CS","b":{}},
	{"dur":"1","p":"4","d":"Saturday","s":"DIP","t":"GF3","r":"C202","sem":"4","br":"CS","b":{}},
	{"dur":"2","p":"5","d":"Saturday","s":"SEMINAR","t":["RKB","GF2"],"r":"PG LAB","sem":"4","br":"CS","b":{"2":true,"3":true}}
	];

data.output = [];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (var i = 0; i < days.length; i++) {
	data.inputDay = filterOneKey(data.input, 'd', days[i]);
	var temp = prepareFor_ttDraw(data.inputDay);
	data.output[i] = filterKeysDelete(temp, ['actualCount','virtualCount','n','aOv']);
};
// data.inputDay = filterOneKey(data.input, 'd', 'Tuesday');

console.log(JSON.stringify(data.output));


// data.arrayForHtmlRow = prepareFor_ttDraw(data.inputDay);
// data.arrayForHtmlRow = filterKeysDelete(data.arrayForHtmlRow,['actualCount','virtualCount','n','aOv']);
// console.log(JSON.stringify(data.arrayForHtmlRow));

function prepareFor_ttDraw (data) {
	for (var i = 0; i < data.length; i++) {
		var eachClass = data[i];
		eachClass.periods = [];
		for (var j = 0; j < JSON.parse(eachClass.dur); j++) {
			eachClass.periods.push(JSON.parse(eachClass.p) + JSON.parse(j));
		};
	};
	// console.log(data);
	// send 'data' to ttDraw Algo file with keyname='periods' and 'no need of uid' = true
	// also give list of keys- wants to retain like = ['s', 't', 'r', 'sem', 'br', 'b']
	/////////////////////////////////////// start
	
	var INDEX_PERIOD = 0;
	var keyname = keyname || 'periods';
	var retainKeys = retainKeys || ['s', 't', 'r', 'sem', 'br', 'b'];
	data = sortByPPP(data);

	var periodWithCounts = [
	//label is period label, count is 0 init, count for family is 0 init
	 {label: 1,  count: 0, countFFamily:0},
	 {label: 2,  count: 0, countFFamily:0},
	 {label: 3,  count: 0, countFFamily:0},
	 {label: 4,  count: 0, countFFamily:0},
	 {label: 5,  count: 0, countFFamily:0},
	 {label: 6,  count: 0, countFFamily:0},
	 {label: 7,  count: 0, countFFamily:0},
	 {label: 8,  count: 0, countFFamily:0},
	 {label: 9,  count: 0, countFFamily:0},
	 {label: 10, count: 0, countFFamily:0}];
	var maxFreq = -1;

	for (var i = 0; i < data.length; i++) {
		var eachClass = data[i];
		for (var j = 0; j < eachClass.periods.length; j++) {
			periodWithCounts[eachClass.periods[j] -1].count++;
			if (maxFreq < periodWithCounts[eachClass.periods[j] -1].count){
				maxFreq = periodWithCounts[eachClass.periods[j] -1].count;
			}
		};
	};

	for (var i = 0; i < data.length; i++) {
		var listPeriods = data[i].periods;
		var max =0;
		for (var j = 0; j < listPeriods.length; j++) {
			if(max<periodWithCounts[listPeriods[j]-1].count){
				max = periodWithCounts[listPeriods[j]-1].count;
			}
		};
		for (var j = 0; j < listPeriods.length; j++) {
			periodWithCounts[listPeriods[j]-1].countFFamily = max;
		};
	};
	for (var i = 0; i < periodWithCounts.length; i++) {
		periodWithCounts[i].countFFamily = periodWithCounts[i].countFFamily || 1;
	};

	var resArray = [];
	for (var i = 0; i < periodWithCounts.length; i++) {
		resArray.push([]);
		for (var j = 0; j < maxFreq; j++) {
			var cellItem = {}; //later init here all things
			var cellItem = {row:j, col:i, rspan:1, cspan:1 /*, n:false, aOv:true, plbl:0*/}; 
			// cl(i,j);
			// count for actual and virtual
			cellItem.actualCount = j==0 ? periodWithCounts[i].count : ((periodWithCounts[i].count - j)>0?(periodWithCounts[i].count - j):0);
			cellItem.virtualCount = j==0 ? periodWithCounts[i].countFFamily : ((periodWithCounts[i].countFFamily - j)>0?(periodWithCounts[i].countFFamily - j):0 );
			// 
			resArray[i].push(cellItem);
		};
	};
	for (var i = 0; i < maxFreq; i++) {
		for (var j = 0; j < periodWithCounts.length; j++) {
			var cellItem = resArray[j][i];
			cellItem.n = (cellItem.actualCount==0 && cellItem.virtualCount==0);
			cellItem.aOv = !((cellItem.actualCount==0 && cellItem.virtualCount > 0) || cellItem.virtualCount ==0);
			
			// cl(cellItem);
		};
	};

	for (var i = 0; i < maxFreq; i++) {
		for (var j = 0; j < periodWithCounts.length; j++) {
			var cellItem = resArray[j][i];

			if(cellItem.aOv && !cellItem.periodLabel){
				var classItem = getClassItemForStartingPeriodAndNotAssigned(cellItem.col + 1);
				if (classItem) {
					for (var k = 0; k < classItem.periods.length; k++) {
						for (var h = 0; h < retainKeys.length; h++) {
							resArray[classItem.periods[k]-1][i][retainKeys[h]] = classItem[retainKeys[h]];
						};
						resArray[classItem.periods[k]-1][i].n = k>0;
						resArray[classItem.periods[k]-1][i].cspan = classItem.periods.length;
					};
				};
			}
			// cl(cellItem);
		};
	};
	for (var j = 0; j < periodWithCounts.length; j++) {
		var countEmpty = 0;
		for (var i = maxFreq-1; i >= 0; i--) {
			var cellItem = resArray[j][i];
			if(!cellItem.aOv && !!cellItem.n){
				countEmpty++;
				continue;
			} else if (!cellItem.n) {
				if (countEmpty>=1) {
					cellItem.rspan = countEmpty+1;
				};
				break;
			};
		};
	};
	//////////
	var resArr2 = array2dSwapAndRemoveNull(resArray, maxFreq, 10);

	return resArr2;

	function sortByPPP (data) {
		for (var i = 1; i < data.length; i++) {
			var j = i;
			while(j>0 && data[j-1][keyname][INDEX_PERIOD] > data[j][keyname][INDEX_PERIOD]) {
				var t = data[j-1];
				data[j-1] = data[j];
				data[j] = t;
				//
				j = j-1;
			}
		};

		for (var i = 1; i < data.length; i++) {
			var j = i;
			while(j>0 && (data[j-1][keyname][INDEX_PERIOD] == data[j][keyname][INDEX_PERIOD] && data[j-1][keyname].length < data[j][keyname].length)) {
				var t = data[j-1];
				data[j-1] = data[j];
				data[j] = t;
				//
				j = j-1;
			}
		};
		return data;
	}

	function array2dSwapAndRemoveNull (arr, m, n) {
		var arr2 = [];
		for (var i = 0; i < m; i++) {
			arr2[i] = []
			for (var j = 0, k = 0; j < n; j++) {
				if(!arr[j][i].n){
					arr2[i][k] = arr[j][i];
					k++;
				}
			};
		};
		return arr2;
	}

	function getClassItemForStartingPeriodAndNotAssigned (periodSt) {
		for (var i = 0; i < data.length; i++) {
			var classItem = data[i];
			if(!classItem.assigned && classItem.periods[0]==periodSt){
				classItem.assigned = true;
				return classItem;
				// break;
			}
		};
	}

	/////////////////////////////////////// end
}

function filterOneKey (data, key, value) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		if (data[i][key]==value) {
			res.push(data[i]);
		};
	};
	return res;
}

function filterKeysDelete (arr, keys) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			for (var k = 0; k < keys.length; k++) {
				delete arr[i][j][keys[k]];
			};
		};
	};
	return arr;
}