// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/zoo');

// var Animals = mongoose.model('animals', {name : {type : String},
// diet : {type : String}});

// var fox = new Animals({
// 	name : "Fox",
// 	diet : "coconuts"
// });

// fox.save();

// Animals.find({name: 'Fox'}, function(err, animals){
// 	console.log("Error: ", err);
// 	console.log("Animals: ", animals);
// })


var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

//add db connection

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/characters');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

//create hero route
app.post('/create-hero', indexController.createHero)

var server = app.listen(9800, function() {
	console.log('Express server listening on port ' + server.address().port);
});
