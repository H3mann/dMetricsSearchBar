var fs = require("fs");
var levenshtein = require('fast-levenshtein');
var express = require("express");
var app = express();

//reading from files on my local computer
fs.readFile("/Users/Prabhteg/Downloads/input.txt", function (error,data){
	var res = data.toString('utf8')
	var inputArr = res.split('\n')

	fs.readFile("/Users/Prabhteg/Downloads/patterns.txt", function (error, data2) {
		 var res = data2.toString('utf8')
		 var patternArr = res.split('\n')

		 var mode1 = inputArr.filter(function(item){
		 	for (var i = 0; i < inputArr.length; i++) {
		 		if (item === patternArr[i]) {
		 			return true;
		 		}
		 	}
		 	return false;
		 })
		 console.log(mode1.join('\n'),'MODE1!!')

			var mode2 = inputArr.filter(function(item){
		 	for (var j = 0; j < inputArr.length; j++) {
		 		if (item.includes(patternArr[j])) {
		 			return true;
		 		}
		 	}
		 })
		console.log(mode2.join('\n'),'MODE2!!')

		var mode3 = inputArr.filter(function(item){
			for (var n = 0; n < inputArr.length; n++) {
				var distance = levenshtein.get(item, patternArr[n]);
				if (distance <= 1) {
					return true;
				}
			}
		})
		console.log(mode3.join('\n'),'MODE3!!!')
	})
})

var port = process.env.PORT || 3001; 
app.listen(port);
console.log('app started on port: ' + port);

