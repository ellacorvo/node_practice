// var express = require('express');

// var app = express();
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');

// app.get('/', function(req, res) {
// 	res.render('index');
// });

// var server = app.listen(8903, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });

var fs = require('fs');

var csv = './input.csv';

var CSVtoJSON = function(csv){
	var splitByLine=csv.split("\n");

  	var result = [];

  	var headers = splitByLine[0].split(",");

  	for(var i=1;i<splitByLine.length;i++){

	  	var obj = {};
	  	var currentline = splitByLine[i].split(",");

	  	for(var j=0;j<headers.length;j++){
		  	obj[headers[j]] = currentline[j];
	  	}
	  	result.push(obj);
  	}
  	return JSON.stringify(result);
}

console.log(CSVtoJSON(csv));



