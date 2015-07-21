var express = require('express');
var bodyParser = require('body-parser');
// var indexController = require('./controllers/index.js');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', indexController.index);
// var fileContents = fs.readFileSync('data.txt');//for first exercise



// app.get('/', function(req,res){
// 	fs.readFile('data.txt', function(err, data){
//     	res.header('Content-Type', 'text/html')
// 		res.send(data)
// 	})
// })

app.get('/:public', function(req, res){
    	fs.readFile('data.txt', function(err, data){
    	res.header('Content-Type', 'text/html')
		res.send(data)
	})
})

// 	res.header('Content-Type', 'text/html')//for second exercise
// 	// res.render('index')//for first exercise
// 	res.send(fileContents)
// })

var server = app.listen(6021, function() {
	console.log('Express server listening on port ' + server.address().port);
});
