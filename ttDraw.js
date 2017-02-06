/*
* @Author: Sushil Jain
* @Date:   2017-02-03 17:49:12
* @Last Modified by:   csnodejs4
* @Last Modified time: 2017-02-06 16:02:04
*/

'use strict';
console.time('ttDrawTime');
var INDEX_PERIOD = 0;
var INDEX_DURATION = 1;
var c = console;
var cl = console.log;
var cl = function(){};//temp
//

var stepCount = 0;
var UIDlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var UIDcount = 0;

//
var input1 = [[3],[4,5],[5],[8,9],[8,9,10],[8,9,10]];
var input2 = [[3,1],[4,2],[5,1],[8,2],[8,3],[8,3]];


var merged = [].concat.apply([], input1);
cl(input1);
cl(merged);


var data = input1;
cl(data);
// data = sortByPD(input2);
function sortByPD (data) {
	for (var i = 1; i < data.length; i++) {
		var j = i;
		while(j>0 && data[j-1][INDEX_PERIOD] > data[j][INDEX_PERIOD]) {
			var t = data[j-1];
			data[j-1] = data[j];
			data[j] = t;
			//
			j = j-1;
			cl('steps-',++stepCount);
		}
	};

	for (var i = 1; i < data.length; i++) {
		var j = i;
		while(j>0 && (data[j-1][INDEX_PERIOD] == data[j][INDEX_PERIOD] && data[j-1][INDEX_DURATION] < data[j][INDEX_DURATION])) {
			var t = data[j-1];
			data[j-1] = data[j];
			data[j] = t;
			//
			j = j-1;
			cl('steps-',++stepCount);
		}
	};
	return data;
}
//cl(data);

data = sortByPPP(input1);
function sortByPPP (data) {
	for (var i = 1; i < data.length; i++) {
		var j = i;
		while(j>0 && data[j-1][INDEX_PERIOD] > data[j][INDEX_PERIOD]) {
			var t = data[j-1];
			data[j-1] = data[j];
			data[j] = t;
			//
			j = j-1;
			cl('steps-',++stepCount);
		}
	};

	for (var i = 1; i < data.length; i++) {
		var j = i;
		while(j>0 && (data[j-1][INDEX_PERIOD] == data[j][INDEX_PERIOD] && data[j-1].length < data[j].length)) {
			var t = data[j-1];
			data[j-1] = data[j];
			data[j] = t;
			//
			j = j-1;
			cl('steps-',++stepCount);
		}
	};
	return data;
}
cl(data);

for (var i = 0; i < data.length; i++) {
	var t = data[i];
	data[i] = {};
	data[i].uid = getUID();
	data[i].periods = t;
}

cl(data);

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
cl(periodWithCounts);
for (var i = 0; i < merged.length; i++) {
	periodWithCounts[merged[i]-1].count++;
	if (maxFreq < periodWithCounts[merged[i]-1].count){
		maxFreq = periodWithCounts[merged[i]-1].count;
	}
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
var cl = console.log;//temp
cl(periodWithCounts, maxFreq);

var cl = console.log;//temp

var resArray = [];
for (var i = 0; i < periodWithCounts.length; i++) {
	resArray.push([]);
	for (var j = 0; j < maxFreq; j++) {
		var cellItem = {}; //later init here all things
		var cellItem = {row:j, col:i, /*rs:0, cs:0, n:false, aOv:true, plbl:0*/}; 
		// cl(i,j);
		// count for actual and virtual
		cellItem.actualCount = j==0 ? periodWithCounts[i].count : ((periodWithCounts[i].count - j)>0?(periodWithCounts[i].count - j):0);
		cellItem.virtualCount = j==0 ? periodWithCounts[i].countFFamily : ((periodWithCounts[i].countFFamily - j)>0?(periodWithCounts[i].countFFamily - j):0 );
		// 
		resArray[i].push(cellItem);
	};
};
cl(resArray);
cl(data);
for (var i = 0; i < maxFreq; i++) {
	for (var j = 0; j < periodWithCounts.length; j++) {
		var cellItem = resArray[j][i];
		cellItem.n = (cellItem.actualCount==0 && cellItem.virtualCount==0);
		cellItem.aOv = !((cellItem.actualCount==0 && cellItem.virtualCount > 0) || cellItem.virtualCount ==0);
		
		if(cellItem.aOv && !cellItem.periodLabel){
			var classItem = getClassItemForStartingPeriodAndNotAssigned(cellItem.col + 1);
			for (var k = 0; k < classItem.periods.length; k++) {
				resArray[classItem.periods[k]-1][i].periodLabel = classItem.uid;
			};
		}
		// cl(cellItem);
	};
};
printMat(resArray, 'aOv');
cl()
printMat(resArray, 'periodLabel');

console.timeEnd('ttDrawTime');

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

function printMat (data, key) {
	for (var i = 0; i < data.length; i++) {
		var str = '';
		for (var j = 0; j < data[i].length; j++) {
			str += ',' + data[i][j][key];
		};
		console.log(str);
	};
}

function getUID () {
	return UIDlist[UIDcount++];
}

