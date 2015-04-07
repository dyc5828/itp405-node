// requires
var express = require('express');
var ejs = require('ejs');
var Dvd = require('./models/Dvd');
var helper = require('./helper');

// app
var app = express();
app.set('view engine', 'ejs');

// routes
app.get('/home', function(req, res) {
	console.log('view- home rendered');
	res.render('home');
});

app.get('/', function(req, res) {
	// console.log(req.protocol+req.get('host')+req.originalUrl);


	console.log('view- home rendered');
	res.render('search', {
		navUrl: helper.urlBase(req.originalUrl),
	});
});

app.get('/dvds', function(req, res) {
	var title = req.query.title;
	var award = req.query.award;
	// console.log(title,award);

	Dvd.findAll({
		where: {
			title: {
				like: '%'+title+'%',
			},
			award: award,
		},
	}).then(function(results) {
		console.log('view- results rendered');
		res.render('results', {
			dvds: results,
			navUrl: helper.urlBase(req.originalUrl),
		});
	});
});

// listen
app.listen(3000, function() {
	console.log('Listening on localhost:3000');
});